import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Grid from "@mui/material/Grid";
import { Box, Container, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import BenefitsStepper from "./BenefitsStepper";

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  height: "30vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "12vh",
  },
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "148px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    paddingTop: "18px",
  },
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
  },
}));

const StyledRightTitleText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  paddingTop: "148px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    paddingTop: "18px",
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

const Benefitspage = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const { t, i18n } = useTranslation();

  const handleStep = (data) => {
    setActiveStep(data);
  };

  return (
    <StyledContainer
      disableGutters
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

      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "100vh",
        }}
      >
        <StyledHeaderGrid container spacing={0}>
          <StyledLeftTitleGrid item xs={4} md={6}>
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
          <StyledRightTitleGrid item xs={8} md={6}>
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
                paddingLeft: { xl: "96px", xs: "12px" },
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
        <Box sx={{ padding: "64px 0", marginTop: { xs: 0, md: 30 } }}>
          <BenefitsStepper activeStep={activeStep} />
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default Benefitspage;
