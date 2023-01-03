import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Grid from "@mui/material/Grid";
import { Box, Container, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import ToolsStepper from "./ToolsStepper";
const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  // height: "30%",
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "18px",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    // paddingTop: "18px",
  },
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "0.75vw",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.6rem",
  },
}));

const StyledRightTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "3vw",
  // [theme.breakpoints.down("xxl")]: {
  //   fontSize: "3.5vw",
  // },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("mm")]: {
    fontSize: "3vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "4.5vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  paddingTop: "18px",
  [theme.breakpoints.down("lg")]: {
    // paddingTop: "18px",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1E1F26",
  position: "relative",
  [theme.breakpoints.up("xl")]: {
    padding: "0px 80px 80px 80px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "18px",
  },
}));

const Toolspage = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const { t, i18n } = useTranslation();

  const handleStep = (data) => {
    setActiveStep(data);
  };

  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        position: "relative",
        height: isLocked ? "300vh" : "220vh",
      }}
    >
      <Parallax
        style={{
          height: "100px",
          width: "100px",
          // backgroundColor: "green",
          position: "absolute",
          top: "-110px",
          left: 0,
        }}
        onEnter={() => {
          setIsLocked(false);
          handleStep(0);
        }}
        onExit={() => {
          setIsLocked(true);
          handleStep(0);
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "purple",
          position: "absolute",
          top: "2px",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 1) {
            handleStep(0);
          }
        }}
        onExit={() => {
          if (activeStep === 0) {
            handleStep(1);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "yellow",
          position: "absolute",
          top: "5%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 2) {
            handleStep(1);
          }
        }}
        onExit={() => {
          if (activeStep === 1) {
            handleStep(2);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "orange",
          position: "absolute",
          top: "10%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 3) {
            handleStep(2);
          }
        }}
        onExit={() => {
          if (activeStep === 2) {
            handleStep(3);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "darkred",
          position: "absolute",
          top: "15%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 4) {
            handleStep(3);
          }
        }}
        onExit={() => {
          if (activeStep === 3) {
            handleStep(4);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "gray",
          position: "absolute",
          top: "20%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 5) {
            handleStep(4);
          }
        }}
        onExit={() => {
          if (activeStep === 4) {
            handleStep(5);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "yellow",
          position: "absolute",
          top: "25%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 6) {
            handleStep(5);
          }
        }}
        onExit={() => {
          if (activeStep === 5) {
            handleStep(6);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "blue",
          position: "absolute",
          top: "30%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 7) {
            handleStep(6);
          }
        }}
        onExit={() => {
          if (activeStep === 6) {
            handleStep(7);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "white",
          position: "absolute",
          top: "35%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 8) {
            handleStep(7);
          }
        }}
        onExit={() => {
          if (activeStep === 7) {
            handleStep(8);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "black",
          position: "absolute",
          top: "40%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 9) {
            handleStep(8);
          }
        }}
        onExit={() => {
          if (activeStep === 8) {
            handleStep(9);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "yellow",
          position: "absolute",
          top: "45%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 10) {
            handleStep(9);
          }
        }}
        onExit={() => {
          if (activeStep === 9) {
            handleStep(10);
          }
        }}
      />
      <Parallax
        style={{
          height: "5%",
          width: "100px",
          // backgroundColor: "purple",
          position: "absolute",
          top: "50%",
          left: 0,
        }}
        onEnter={() => {
          if (activeStep === 11) {
            handleStep(10);
          }
        }}
        onExit={() => {
          if (activeStep === 10) {
            handleStep(11);
          }
        }}
      />

      <Parallax
        style={{
          height: "100px",
          width: "100px",
          // backgroundColor: "red",
          position: "absolute",
          bottom: isLocked ? 0 : "-120px",
          left: 0,
        }}
        onEnter={() => {}}
        onExit={() => {}}
      />
      <StyledHeaderGrid container spacing={0}>
        <StyledLeftTitleGrid item xs={8} sm={8}>
          <StyledLeftTitleText
            variant='smallTitle'
            sx={{ color: "common.white" }}
          >
            {t("toolspage.leftTitle1")}
          </StyledLeftTitleText>
          <StyledLeftTitleText
            variant='smallTitle'
            sx={{ paddingLeft: "12px", color: "common.white" }}
          >
            {t("toolspage.leftTitle2")}
          </StyledLeftTitleText>
        </StyledLeftTitleGrid>
        <StyledRightTitleGrid item xs={4} md={4}>
          <StyledRightTitleText
            variant='bigTitle'
            sx={{ color: "common.white" }}
          >
            {t("toolspage.rightTitle1")}
          </StyledRightTitleText>
          <StyledRightTitleText
            variant='bigTitle'
            sx={{
              color: "common.white",
              paddingLeft: {
                // xs: "1.75vw",
                // sm: "1.5vw",
                // lg: "1.5vw",
                // xl: "1.5vw",
                // xxl: "1.5vw",
              },
            }}
          >
            {t("toolspage.rightTitle2")}
          </StyledRightTitleText>
        </StyledRightTitleGrid>
      </StyledHeaderGrid>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "100vh",
        }}
      >
        <Box sx={{ padding: "64px 0", marginTop: { xs: 0, md: 30 } }}>
          <ToolsStepper activeStep={activeStep} />
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default Toolspage;
