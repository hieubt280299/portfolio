import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import { styled } from "@mui/system";
import About from "../pages/About";
import { useEffect, useMemo, useState } from "react";
import Contact from "../pages/Contact";
import Nav from "../components/Nav";
import { useWidth } from "../hooks";

const SwitchRoutes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  const width = useWidth();
  const upSm = useMemo(() => ["xs", "sm"].includes(width), [width]);

  const Background = styled("div")(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    minHeight: "100%",
    paddingBottom: upSm ? 66 : 0,
    paddingInline: upSm ? 20 : 0,
    display: "flex",
  }));

  const withLayout = (Component) => (
    <Background>
      <Component />
    </Background>
  );
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div
        className={`fade ${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route exact path="/" element={withLayout(Homepage)} />
          <Route exact path="/about" element={withLayout(About)} />
          <Route exact path="/contact" element={withLayout(Contact)} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Nav />
    </>
  );
};

export default SwitchRoutes;
