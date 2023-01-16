import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Grid from "@mui/material/Grid";
import { Box, Container, styled, Typography } from "@mui/material";

import BenefitsStepper from "./BenefitsStepper";
import ParallaxHeader from "../ParallaxHeader";

const StyledMainTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "4.5rem",
  fontWeight: "700",
  lineHeight: 1,
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const StyledStepperGrid = styled(Grid)(({ theme }) => ({
  color: "white",
  bgcolor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 1s ease-in-out",
  marginBottom: "200px",
  marginTop: "120px",

  [theme.breakpoints.down("lg")]: {
    marginTop: "120px",
    marginBottom: "120px",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "120px",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 1s ease-in-out",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1E1F26",
  position: "relative",

  [theme.breakpoints.down("xl")]: {
    height: "inherit",
  },
}));

const Benefitspage = ({ t }) => {
  const [activeBackground, setActiveBackground] = useState("#1e1f26");
  const handleBackground = (data) => {
    setActiveBackground(data);
  };

  return (
    <Box
      sx={{
        backgroundColor: activeBackground,
      }}
    >
      <ParallaxHeader
        firstTitle={t.benefitspage.title1}
        secondTitle={t.benefitspage.title2}
        activeBackground='white'
      />
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
            bottom: "40%",
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
        <Container
          disableGutters
          maxWidth='xxl'
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledStepperGrid container spacing={0}>
            <StyledGrid item xs={12} sm={8} mm={8} md={8} lg={6}>
              <StyledMainTitle
                sx={{
                  color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t.benefitspage.headTitle}
              </StyledMainTitle>
            </StyledGrid>
          </StyledStepperGrid>
          <BenefitsStepper t={t} activeBackground={activeBackground} />
        </Container>
      </StyledContainer>
    </Box>
  );
};

export default Benefitspage;
