import styled from "@emotion/styled";
import { Button, Container, Fab, Grid, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useWidth } from "../../hooks";
import { useMemo } from "react";
import Title from "../../components/Title";
import SectionTitle from "../../components/SectionTitle";

const ContactButton = styled(Fab)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    marginRight: 10,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  };
});

const MoreButton = styled(Button)(({ theme }) => ({
  maxWidth: "300px",
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

const ContactItem = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  marginTop: 24,
});

const ContactInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: 12,
  gap: 4,
});

const socialMediaItems = [
  {
    Icon: FacebookOutlinedIcon,
    url: "https://www.facebook.com/phin.tk12.clc/",
  },
  {
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/hieubt280299/",
  },
];

const contactItems = [
  {
    title: "ADDRESS",
    description: "Ton Duc Thang Street, Dong Da, Hanoi, Vietnam",
    Icon: LocationOnIcon,
  },
  {
    title: "EMAIL",
    description: "hieubt280299@gmail.com",
    Icon: EmailIcon,
  },
  {
    title: "MOBILE PHONE",
    description: "+84343241728",
    Icon: PhoneIphoneIcon,
  },
];

const Contact = () => {
  const width = useWidth();
  const upSm = useMemo(() => ["xs", "sm"].includes(width), [width]);
  const xs = useMemo(() => ["xs"].includes(width), [width]);
  return (
    <Container maxWidth="lg" sx={{ py: "8px" }}>
      <Title>
        <span>GET IN </span>
        <span>TOUCH</span>
      </Title>
      <Grid container justifyContent="space-around">
        <Grid item display="flex" flexDirection="column" mb={upSm ? 3 : 0} xs={12} md={6} justifyContent="space-between">
          <div>
            <SectionTitle>DON'T BE SHY</SectionTitle>
            <Typography variant="subtitle1" sx={{ marginTop: "24px" }}>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: xs ? "column" : "row",
              alignItems: xs ? "flex-start" : "center",
              justifyContent: "space-between",
              gap: 12,
              marginTop: 12,
            }}
          >
            <div>
              {socialMediaItems.map(({ Icon, url }) => (
                <ContactButton key={url} size="small" target="_blank" href={url}>
                  <Icon />
                </ContactButton>
              ))}
            </div>
            <MoreButton variant="outlined" target="_blank" href="https://drive.google.com/file/d/1-3QGUV1HnQ8DCXiC70As8ha-UOPWXYb1/view?usp=sharing">
              <MoreButtonText>DOWNLOAD MY CV</MoreButtonText>
              <IconContainer>
                <ArrowForwardIcon />
              </IconContainer>
            </MoreButton>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <SectionTitle variant={upSm ? "h5" : "h4"}>CONTACT ME</SectionTitle>
          {contactItems.map(({ Icon, title, description }) => (
            <ContactItem key={title}>
              <Icon color="primary" sx={{ marginTop: "4px" }} />
              <ContactInfo>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
                  {description}
                </Typography>
              </ContactInfo>
            </ContactItem>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
