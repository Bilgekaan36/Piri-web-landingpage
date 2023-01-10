import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Box, Container, styled, Typography } from "@mui/material";

import ToolStepper from "./ToolStepper";

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "10vw",
  fontWeight: "700",
  paddingRight: "12px",
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
    fontSize: "20vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledTitleTextSecond = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  fontWeight: "700",
  color: "#1e1f26",
  textShadow: "0px 0px 3px white",
  paddingRight: "64px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20vw",
    paddingRight: "24px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1E1F26",
  position: "relative",
  height: "inherit%",
  [theme.breakpoints.down("xxl")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("xl")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("lg")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("mm")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("md")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("sm")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("xs")]: {
    height: "inherit",
  },
}));

const Toolspage = ({ t }) => {
  const [activeBackground, setActiveBackground] = useState("#1e1f26");

  const handleBackground = (data) => {
    setActiveBackground(data);
  };

  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        position: "relative",
        backgroundColor: activeBackground,
      }}
    >
      <Parallax
        style={{
          height: "50px",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: "50%",
          left: 0,
          zIndex: 10,
        }}
        onProgressChange={(progressData) => {
          if (progressData >= 1) {
            handleBackground("white");
          }
          if (progressData < 1) {
            handleBackground("#1e1f26");
          }
        }}
        onEnter={() => {}}
        onExit={() => {}}
      />
      <StyledHeader>
        <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
          <StyledTitleText>{t.toolspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.toolspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.toolspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.toolspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.toolspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.toolspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.toolspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.toolspage.title2}</StyledTitleTextSecond>
        </Parallax>
      </StyledHeader>
      <Container
        disableGutters
        maxWidth='xxl'
        sx={{ paddingBottom: "132px", marginTop: "200px" }}
      >
        <ToolStepper t={t} activeBackground={activeBackground} />
      </Container>
    </StyledContainer>
  );
};

export default Toolspage;
