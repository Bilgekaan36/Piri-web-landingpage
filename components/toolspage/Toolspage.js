import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Box, Container, styled, useMediaQuery, useTheme } from "@mui/material";

import ToolStepper from "./ToolStepper";
import ParallaxHeader from "../ParallaxHeader";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1E1F26",
  position: "relative",
  height: "inherit%",
  [theme.breakpoints.down("xxl")]: {
    height: "inherit",
  },
}));

const Toolspage = ({ t }) => {
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
      }}
    >
      <ParallaxHeader
        firstTitle={t.toolspage.title1}
        secondTitle={t.toolspage.title2}
        activeBackground='white'
      />
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
