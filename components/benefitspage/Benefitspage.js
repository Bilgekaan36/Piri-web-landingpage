import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Grid from "@mui/material/Grid";
import { Box, Container, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import BenefitsStepper from "./BenefitsStepper";

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
  [theme.breakpoints.down("lg")]: {
    // padding: "18px",
  },
}));

const Benefitspage = (props) => {
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
        height: isLocked ? "240vh" : "100vh",
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
          height: "10%",
          width: "100px",
          // backgroundColor: "purple",
          position: "absolute",
          top: "2px",
          left: 0,
        }}
        onEnter={() => {
          handleStep(0);
        }}
        onExit={() => {
          handleStep(1);
        }}
      />
      <Parallax
        style={{
          height: "10%",
          width: "100px",
          // backgroundColor: "yellow",
          position: "absolute",
          top: "10%",
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
          height: "10%",
          width: "100px",
          // backgroundColor: "orange",
          position: "absolute",
          top: "20%",
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
          height: "10%",
          width: "100px",
          // backgroundColor: "darkred",
          position: "absolute",
          top: "30%",
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
          height: "10%",
          width: "100px",
          // backgroundColor: "gray",
          position: "absolute",
          top: "40%",
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
          height: "100px",
          width: "100px",
          // backgroundColor: "red",
          position: "absolute",
          bottom: isLocked ? 0 : "-120px",
          left: 0,
        }}
        onEnter={() => {
          props.setNextWorkspage(true);
        }}
        onExit={() => {}}
      />
      <StyledHeaderGrid container spacing={0}>
        <StyledLeftTitleGrid item xs={8} sm={9}>
          <StyledLeftTitleText
            variant='smallTitle'
            sx={{ color: "common.white" }}
          >
            {t("benefitspage.leftTitle1")}
          </StyledLeftTitleText>
          <StyledLeftTitleText
            variant='smallTitle'
            sx={{ paddingLeft: "12px", color: "common.white" }}
          >
            {t("benefitspage.leftTitle2")}
          </StyledLeftTitleText>
        </StyledLeftTitleGrid>
        <StyledRightTitleGrid item xs={4} sm={3}>
          <StyledRightTitleText
            variant='bigTitle'
            sx={{ color: "common.white" }}
          >
            {t("benefitspage.rightTitle1")}
          </StyledRightTitleText>
          <StyledRightTitleText
            variant='bigTitle'
            sx={{
              color: "common.white",
              paddingLeft: {
                xs: "1.75vw",
                sm: "1.5vw",
                lg: "1.5vw",
                xl: "1.5vw",
                xxl: "1.5vw",
              },
            }}
          >
            {t("benefitspage.rightTitle2")}
          </StyledRightTitleText>
          <StyledRightTitleText
            variant='bigTitle'
            sx={{ color: "common.white" }}
          >
            {t("benefitspage.rightTitle3")}
          </StyledRightTitleText>
        </StyledRightTitleGrid>
      </StyledHeaderGrid>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BenefitsStepper activeStep={activeStep} />
      </Box>
    </StyledContainer>
  );
};

export default Benefitspage;
