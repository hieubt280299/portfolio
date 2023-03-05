import styled from "@emotion/styled";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Grid, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../../images/Image";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { useWidth } from "../../hooks";
import { useMemo } from "react";
import Title from "../../components/Title";
import SectionTitle from "../../components/SectionTitle";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
}));

const ContentWrapper = styled(Grid)(({ theme }) => ({
  width: "80%",
}));

const Section = styled("div")(({ theme, sx }) => ({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  margin: "0 auto",
  ...sx,
}));

const ExperienceSection = styled(Section)({
  alignItems: "center",
});

const Hr = styled("hr")(({ theme }) => ({
  border: 0,
  borderTop: `1px solid ${theme.palette.border.main}`,
  margin: "70px auto 55px",
  width: "50vw",
}));

const InfoItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: 20,
  width: "fit-content",

  "& .MuiTypography-root.info-title": {
    opacity: 0.8,
    marginRight: "4px",
  },

  "& .MuiTypography-root": {
    lineHeight: "24px",
    fontSize: "1rem",
  },
}));

const SkillContainer = styled(Grid)(({ theme }) => ({
  marginTop: 20,
  maxWidth: 400,
}));

const SkillItem = styled("div")(({ theme }) => ({
  height: 96,
  width: 96,
  margin: "20px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.light,
  cursor: "pointer",
  boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",

  "&:hover": {
    opacity: 0.8,
  },
  "& img": {
    width: "64px",
    height: "64px",
  },
}));

const TimeSpan = styled("span")(({ theme }) => ({
  borderRadius: 20,
  backgroundColor: theme.palette.secondary.light,
  padding: "2px 10px",
  textTransform: "uppercase",
}));

const info = [
  { title: "First Name", value: "Hieu" },
  { title: "Last Name", value: "Bui" },
  { title: "Age", value: new Date().getFullYear() - 1999 },
  { title: "Nationality", value: "Vietnamese" },
  { title: "Phone", value: "+84343241728" },
  { title: "Email", value: "hieubt280299@gmail.com" },
  { title: "Languages", value: "Vietnamese, English" },
];

const techLogo = [
  { title: "HTML", src: Image.htmlLogo },
  { title: "CSS", src: Image.cssLogo },
  { title: "Sass", src: Image.sassLogo },
  { title: "JavaScript", src: Image.jsLogo },
  { title: "TypeScript", src: Image.tsLogo },
  { title: "React", src: Image.reactLogo },
];

const timelineItems = [
  {
    type: "work",
    title: "Software Developer",
    subtitle: "AvePoint Vietnam",
    time: "Aug 2021 - present",
  },
  {
    type: "work",
    title: "Frontend Developer",
    subtitle: "SmartOSC Corp.",
    time: "Jan 2021 - Aug 2021",
  },
  {
    type: "work",
    title: "Intern Software Engineer",
    subtitle: "FPT Software",
    time: "Sep 2019 - Dec 2019",
  },
  {
    type: "study",
    title: "Software Engineering Bachelor's Degree",
    subtitle: "FPT University",
    time: "Sep 2017 - Jan 2021",
  },
  {
    type: "study",
    title: "Major: Mathematics",
    subtitle: "Lao Cai High School for Gifted Students",
    time: "Jul 2014 - Jul 2017",
  },
];

const About = () => {
  const width = useWidth();
  const upSm = useMemo(() => ["xs", "sm"].includes(width), [width]);
  return (
    <Container>
      <Title>
        <span>ABOUT </span>
        <span>ME</span>
      </Title>
      <ContentWrapper container>
        <Grid item xs={12} md={6}>
          <Section>
            <SectionTitle>
              <span>PERSONAL </span>
              <span>INFOS</span>
            </SectionTitle>
            {info.map(({ title, value }) => (
              <InfoItem key={title}>
                <Typography variant="body1" className="info-title">
                  {title}:
                </Typography>
                <Typography variant="subtitle2">{value}</Typography>
              </InfoItem>
            ))}
          </Section>
        </Grid>
        <Grid item xs={12} md={6}>
          <Section sx={{ alignItems: "flex-start" }}>
            <SectionTitle>
              <span>MY </span>
              <span>SKILLS</span>
            </SectionTitle>
            <SkillContainer container columnSpacing={{ xs: 1, lg: 0 }}>
              {techLogo.map(({ title, src }) => (
                <Grid sx={{ display: "flex", justifyContent: upSm ? "center" : "flex-start" }} key={src} item xs={6} sm={4} md={4} lg={4}>
                  <SkillItem>
                    <LazyLoadImage src={src} alt={title} effect="blur" />
                  </SkillItem>
                </Grid>
              ))}
            </SkillContainer>
          </Section>
        </Grid>
        {!upSm && <Hr />}
        <Grid item xs={12}>
          <ExperienceSection>
            <SectionTitle textAlign={upSm ? "left" : "center"}>
              <span>EXPERIENCE & </span>
              <span>EDUCATION</span>
            </SectionTitle>
            {upSm ? (
              <Timeline sx={{ px: 0 }}>
                {timelineItems.map(({ type, title, subtitle, time }, index) => (
                  <TimelineItem
                    key={time}
                    sx={{
                      [`&:before`]: {
                        flex: 0,
                      },
                    }}
                  >
                    <TimelineSeparator>
                      <TimelineDot color="primary">{type === "work" ? <WorkIcon /> : <SchoolIcon />}</TimelineDot>
                      {index < timelineItems.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        <TimeSpan>{time}</TimeSpan>
                      </Typography>
                      <Typography variant="h5" component="span" color="primary" sx={width === "xs" ? { fontSize: "inherit" } : undefined}>
                        {title}
                      </Typography>
                      <Typography variant="subtitle1">{subtitle}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            ) : (
              <Timeline position="alternate" sx={{ marginLeft: 0 }}>
                {timelineItems.map(({ type, title, subtitle, time }, index) => (
                  <TimelineItem key={time}>
                    <TimelineOppositeContent sx={{ m: "15px 0" }} align="right" variant="body2" color="text.secondary">
                      <TimeSpan>{time}</TimeSpan>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary">{type === "work" ? <WorkIcon /> : <SchoolIcon />}</TimelineDot>
                      {index < timelineItems.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant="h5" component="span" color="primary" sx={width === "xs" ? { fontSize: "inherit" } : undefined}>
                        {title}
                      </Typography>
                      <Typography variant="subtitle1">{subtitle}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            )}
          </ExperienceSection>
        </Grid>
      </ContentWrapper>
    </Container>
  );
};

export default About;
