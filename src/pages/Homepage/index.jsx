import { Button, Dialog, DialogContent, Grow, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/system";
import { useState, useMemo } from "react";
import About from "../About";
import { useWidth } from "../../hooks";
import CloseIcon from "@mui/icons-material/Close";
import Image from "../../images/Image";
import { useNavigate } from "react-router-dom";

const ColorBlock = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  flex: `0 0 33%`,
  clipPath: "polygon(0 0, 50% 0%, 100% 100%, 0% 100%)",
}));

const MainTextBlock = styled("div")(({ theme, upSm }) => ({
  marginLeft: upSm ? 0 : 80,
  minWidth: upSm ? 0 : "500px",
  maxWidth: upSm ? "unset" : "750px",
  paddingRight: upSm ? 0 : 96,
  textAlign: upSm ? "justify" : "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: upSm ? "center" : "flex-start",
  paddingBlock: 16,
}));

const Title = styled(Typography)(({ theme, upSm }) => ({
  color: theme.palette.primary.main,
  fontSize: upSm ? 40 : 51,
  lineHeight: "62px",
  fontWeight: "700",
  margin: "18px 0 10px",
  position: "relative",
  textTransform: "uppercase",
}));

const Subtitle = styled(Title)(({ theme, upSm }) => ({
  color: theme.palette.secondary.contrastText,
  fontSize: upSm ? 28 : 51,
}));

const Details = styled(Typography)(({ theme }) => ({
  margin: "15px 0 28px",
  fontSize: "16px",
  lineHeight: "35px",
}));

const MoreButton = styled(Button)(({ theme }) => ({
  height: "55px",
  borderRadius: "35px",
  transition: "all .3s ease-out",
  color: theme.palette.secondary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const MoreButtonText = styled("span")(({ theme }) => ({
  marginRight: 55,
  padding: "0 10px",
  fontWeight: "bold",
}));

const IconContainer = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: 55,
  height: 55,
  borderRadius: "50%",
  position: "absolute",
  right: "-1px",
  top: "-1px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const AvatarUpSm = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  width: 270,
  height: 270,
  border: `4px solid ${theme.palette.border.main}`,
}));

const Avatar = styled(AvatarUpSm)({
  position: "fixed",
  left: `calc(25% - 135px)`,
  top: "calc(50% - 135px)",
});

const Homepage = () => {
  const [openAbout, setOpenAbout] = useState(false);

  const width = useWidth();
  const upSm = useMemo(() => ["xs", "sm"].includes(width), [width]);

  const navigate = useNavigate();

  return (
    <>
      {!upSm && <ColorBlock />}
      <MainTextBlock upSm={upSm}>
        {upSm ? <AvatarUpSm src={Image.avatar} /> : <Avatar src={Image.avatar} />}
        <Title variant="h1" upSm={upSm}>
          Bui Trung Hieu
        </Title>
        <Subtitle variant="h1" upSm={upSm}>
          Frontend Developer
        </Subtitle>
        <Details variant="body1">
          2+ years experienced Software Engineer skilled in developing frontend websites utilizing React and Redux. Passionate about learning new technologies,
          bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user's needs.
        </Details>
        <MoreButton variant="outlined">
          <MoreButtonText
            onClick={() => {
              if (upSm) {
                navigate("/about");
              } else {
                setOpenAbout(true);
              }
            }}
          >
            MORE ABOUT ME
          </MoreButtonText>
          <IconContainer>
            <ArrowForwardIcon />
          </IconContainer>
        </MoreButton>
      </MainTextBlock>
      <Dialog onClose={() => setOpenAbout(false)} open={openAbout} maxWidth="lg" TransitionComponent={Grow}>
        <IconButton
          aria-label="close"
          onClick={() => setOpenAbout(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <About />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Homepage;
