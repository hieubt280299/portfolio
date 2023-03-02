import { Fab, Grow } from "@mui/material";
import { styled } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import { ColorModeContext } from "../../App";
import { useWidth } from "../../hooks";

const NavContainer = styled("div")(({ theme, upSm }) => {
  if (upSm) {
    return {
      position: "fixed",
      bottom: 0,
      backgroundColor: theme.palette.secondary.main,
      borderTop: `1px solid ${theme.palette.border.main}`,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-end",
    };
  }
  return {
    position: "fixed",
    right: 30,
    top: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  };
});

const NavButtonGroup = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row-reverse",
}));

const NavButton = styled(Fab)(({ theme, active: _active }) => {
  const active = _active === "true";
  return {
    backgroundColor: active ? theme.palette.primary.main : theme.palette.secondary.light,
    color: active ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText,
    margin: "5px 0",
    "&:hover": {
      backgroundColor: active ? theme.palette.primary.dark : theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  };
});

const ExtendedFab = styled(NavButton)(({ theme }) => ({
  marginRight: 8,
  pointerEvents: "none",
}));

const navItems = [
  {
    Icon: HomeIcon,
    route: "/",
    title: "Home",
  },
  {
    Icon: PersonIcon,
    route: "/about",
    title: "About",
  },
  {
    Icon: AlternateEmailIcon,
    route: "/contact",
    title: "Contact",
  },
];

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [hoveringItem, setHoveringItem] = useState(undefined);
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

  const width = useWidth();
  const upSm = useMemo(() => ["xs", "sm"].includes(width), [width]);

  return (
    <NavContainer upSm={upSm}>
      {navItems.map(({ Icon, route, title }) => (
        <NavButtonGroup key={route}>
          <NavButton
            onClick={() => {
              if (route === pathname) {
                return;
              }
              navigate(route);
            }}
            onMouseLeave={() => setHoveringItem(undefined)}
            onMouseEnter={() => setHoveringItem(route)}
            active={String(route === pathname)}
          >
            <Icon />
          </NavButton>
          {!upSm && (
            <Grow in={hoveringItem === route}>
              <ExtendedFab variant="extended" active="true">
                {title}
              </ExtendedFab>
            </Grow>
          )}
        </NavButtonGroup>
      ))}
      <NavButton onClick={toggleColorMode}>{colorMode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}</NavButton>
    </NavContainer>
  );
};

export default Nav;
