import styles from "./BenefitsStepper.module.css";

import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import { Typography, Button, styled, Grid } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Translation } from "react-i18next";

import conversion from "../../public/benefitspage_assets/conversion.json";
import webdesign from "../../public/benefitspage_assets/web-design.json";
import webdevelopment from "../../public/benefitspage_assets/web-development.json";
import responsivedesign from "../../public/benefitspage_assets/responsive-design.json";
import brandingdesign from "../../public/benefitspage_assets/branding-design.json";
import mission from "../../public/benefitspage_assets/mission.json";

const BenefitsStepper = ({ activeStep }) => {
  const maxSteps = steps.length;

  const StyledStepperTitle = styled(Typography)(({ theme }) => ({
    fontSize: "3vw",
    fontWeight: "700",
    color: "white",
    marginBottom: "32px",
    textAlign: "center",
    transition: "all 1s ease-in-out",

    [theme.breakpoints.down("xxl")]: {
      fontSize: "3.5vw",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("mm")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "5vw",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  const StyledStepperContent = styled(Typography)(({ theme }) => ({
    fontSize: "1.25vw",
    fontWeight: "200",
    transition: "all 1s ease-in-out",
    paddingRight: "1vw",
    [theme.breakpoints.down("xxl")]: {
      fontSize: "1.8vw",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "2vw",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "2vw",
    },
    [theme.breakpoints.down("mm")]: {
      fontSize: "1.7vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.75vw",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  const StyledStepperGrid = styled(Grid)(({ theme }) => ({
    color: "white",
    bgcolor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 1s ease-in-out",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const StyledGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 1s ease-in-out",
    // border: "1px solid red",
    height: "50vh",
    [theme.breakpoints.down("xxl")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("xl")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("lg")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("mm")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "30vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30vh",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        transition: "all 1s ease-in-out",
      }}
    >
      <StyledStepperTitle>{steps[activeStep].label}</StyledStepperTitle>
      <StyledStepperGrid container spacing={0}>
        <StyledGrid item xs={12} sm={12} md={6} lg={6}>
          <Player
            autoplay
            loop={true}
            src={steps[activeStep].lottieFile}
            // keepLastFrame={true}
            className={styles.lottiePlayer}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </StyledGrid>
        <StyledGrid item xs={12} sm={12} md={6} lg={6}>
          <StyledStepperContent>
            {steps[activeStep].description}
          </StyledStepperContent>
        </StyledGrid>
      </StyledStepperGrid>
      <MobileStepper
        variant='progress'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        sx={{
          bgcolor: "transparent",
        }}
        nextButton={
          <Button size='small' disabled={activeStep === maxSteps - 1}></Button>
        }
        backButton={<Button size='small' disabled={activeStep === 0}></Button>}
      />
    </Box>
  );
};

export default BenefitsStepper;

const steps = [
  {
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label1")}</>}
      </Translation>
    ),
    description: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.description1")}</>}
      </Translation>
    ),
    lottieFile: conversion,
  },
  {
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label2")}</>}
      </Translation>
    ),
    description: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.description2")}</>}
      </Translation>
    ),
    lottieFile: webdesign,
  },
  {
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label3")}</>}
      </Translation>
    ),
    description: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.description3")}</>}
      </Translation>
    ),
    lottieFile: webdevelopment,
  },
  {
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label4")}</>}
      </Translation>
    ),
    description: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.description4")}</>}
      </Translation>
    ),
    lottieFile: responsivedesign,
  },
  {
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label5")}</>}
      </Translation>
    ),
    description: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.description5")}</>}
      </Translation>
    ),
    lottieFile: brandingdesign,
  },
  {
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label6")}</>}
      </Translation>
    ),
    description: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.description6")}</>}
      </Translation>
    ),
    lottieFile: mission,
  },
];
