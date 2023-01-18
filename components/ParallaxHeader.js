import React from "react";

import { Parallax } from "react-scroll-parallax";
import { styled, Typography, Box } from "@mui/material";

const StyledTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  fontWeight: "400",
  padding: "0px 32px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledTitleTextSecond = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  fontWeight: "400",
  color: "#1e1f26",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const ParallaxHeader = ({ firstTitle, secondTitle, activeBackground }) => {
  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
        <StyledTitleText
          sx={{ color: activeBackground === "white" ? "white" : "#1e1f26" }}
        >
          {firstTitle}
        </StyledTitleText>
        <StyledTitleTextSecond
          sx={{
            textShadow: `0px 0px 3px ${
              activeBackground === "white" ? "white" : "#1e1f26"
            }`,
            color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
          }}
        >
          {secondTitle}
        </StyledTitleTextSecond>
        <StyledTitleText
          sx={{ color: activeBackground === "white" ? "white" : "#1e1f26" }}
        >
          {firstTitle}
        </StyledTitleText>
        <StyledTitleTextSecond
          sx={{
            textShadow: `0px 0px 3px ${
              activeBackground === "white" ? "white" : "#1e1f26"
            }`,
            color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
          }}
        >
          {secondTitle}
        </StyledTitleTextSecond>
        <StyledTitleText
          sx={{ color: activeBackground === "white" ? "white" : "#1e1f26" }}
        >
          {firstTitle}
        </StyledTitleText>
        <StyledTitleTextSecond
          sx={{
            textShadow: `0px 0px 3px ${
              activeBackground === "white" ? "white" : "#1e1f26"
            }`,
            color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
          }}
        >
          {secondTitle}
        </StyledTitleTextSecond>
        <StyledTitleText
          sx={{ color: activeBackground === "white" ? "white" : "#1e1f26" }}
        >
          {firstTitle}
        </StyledTitleText>
        <StyledTitleTextSecond
          sx={{
            textShadow: `0px 0px 3px ${
              activeBackground === "white" ? "white" : "#1e1f26"
            }`,
            color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
          }}
        >
          {secondTitle}
        </StyledTitleTextSecond>
      </Parallax>
    </Box>
  );
};

export default ParallaxHeader;
