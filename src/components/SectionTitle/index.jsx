import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useMemo } from "react";
import { useWidth } from "../../hooks";

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: 50,
  fontWeight: "bold",
  width: "fit-content",

  "& span:nth-of-type(2)": {
    color: theme.palette.primary.main,
  },
}));

const SectionTitle = ({ children, ...rest }) => {
  const width = useWidth();
  const upSm = useMemo(() => ["xs", "sm"].includes(width), [width]);
  return (
    <StyledSectionTitle variant={upSm ? "h5" : "h4"} {...rest}>
      {children}
    </StyledSectionTitle>
  );
};

export default SectionTitle;
