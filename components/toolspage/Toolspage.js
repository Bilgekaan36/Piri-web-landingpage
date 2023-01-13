import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  Box,
  Container,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

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

const Toolspage = ({ t, showPage }) => {
  const [activeBackground, setActiveBackground] = useState("#1e1f26");
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  const handleBackground = (data) => {
    setActiveBackground(data);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: activeBackground,
        display: showPage ? "block" : "none",
      }}
    >
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
      <Parallax
        style={{
          height: "50px",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: matchDownLg ? "50%" : "20%",
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
      <StyledContainer
        maxWidth='false'
        sx={{
          backgroundColor: activeBackground,
        }}
      >
        <Container
          disableGutters
          maxWidth='xxl'
          sx={{ paddingBottom: "132px", marginTop: "200px" }}
        >
          <ToolStepper t={t} activeBackground={activeBackground} />
        </Container>
      </StyledContainer>
    </Box>
  );
};

export default Toolspage;
