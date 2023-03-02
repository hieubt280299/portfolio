import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useWidth } from "../../hooks";
import { useMemo } from "react";

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginTop: 50,
  marginBottom: 50,
  textAlign: "center",
  "& span:nth-of-type(2)": {
    color: theme.palette.primary.main,
  },
}));

const Title = ({ children }) => {
  const width = useWidth();
  const upSm = useMemo(() => ["xs", "sm"].includes(width), [width]);
  return <StyledTitle variant={upSm ? "h3" : "h1"}>{children}</StyledTitle>;
};

export default Title;
