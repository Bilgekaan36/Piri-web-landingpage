import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Grid from "@mui/material/Grid";
import { Box, Container, styled, Typography } from "@mui/material";

import BenefitsStepper from "./BenefitsStepper";

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  // height: "30vh",
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

const StyledMainTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "4.5rem",
  fontWeight: "700",
  lineHeight: 1,
  // textShadow: "0px 0px 3px white",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
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

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    marginTop: "120px",
    marginBottom: "120px",
  },
  [theme.breakpoints.down("mm")]: {},
  [theme.breakpoints.down("md")]: {
    marginBottom: "120px",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 1s ease-in-out",
  // border: "1px solid red",
  // height: "350px",
  [theme.breakpoints.down("xxl")]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    // height: "300px",
  },
  [theme.breakpoints.down("mm")]: {
    // height: "250px",
  },
  [theme.breakpoints.down("md")]: {
    // height: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    // height: "300px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1E1F26",
  position: "relative",
  // height: "100vh",
  [theme.breakpoints.down("xxl")]: {
    // height: "100vh",
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

const Benefitspage = ({ t, showPage }) => {
  const [activeBackground, setActiveBackground] = useState("#1e1f26");
  const handleBackground = (data) => {
    setActiveBackground(data);
  };

  return (
    <Box
      sx={{
        backgroundColor: activeBackground,
        display: showPage ? "block" : "none",
      }}
    >
      <StyledHeader>
        <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
          <StyledTitleText>{t.benefitspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.benefitspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.benefitspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.benefitspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.benefitspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.benefitspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.benefitspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.benefitspage.title2}</StyledTitleTextSecond>
        </Parallax>
      </StyledHeader>
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
