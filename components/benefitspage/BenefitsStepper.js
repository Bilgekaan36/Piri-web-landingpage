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
    fontSize: "1.2rem",
    fontWeight: "400",
    color: "#a0a0a0",
    transition: "all 1s ease-in-out",
    [theme.breakpoints.down("xxl")]: {
      // fontSize: "1.8vw",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("mm")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  const StyledStepperSubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: "500",
    color: "white",
    marginBottom: "12px",
    transition: "all 1s ease-in-out",

    [theme.breakpoints.down("xxl")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("mm")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  const StyledStepperContent = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem",
    fontWeight: "200",
    color: "#a0a0a0",
    transition: "all 1s ease-in-out",
    [theme.breakpoints.down("xxl")]: {
      // fontSize: "1.8vw",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("mm")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
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
    marginBottom: "100px",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("mm")]: {},
    [theme.breakpoints.down("md")]: {
      marginBottom: "80px",
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
    height: "350px",
    [theme.breakpoints.down("xxl")]: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      height: "300px",
    },
    [theme.breakpoints.down("mm")]: {
      height: "250px",
    },
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  return (
    <>
      {steps.map((step, index) => (
        <StyledStepperGrid
          container
          spacing={0}
          sx={{ flexDirection: step.flexDirection }}
          key={index}
        >
          <StyledGrid item xs={10} sm={4} mm={4} md={4} lg={3}>
            <Player
              autoplay
              loop={true}
              src={step.lottieFile}
              // keepLastFrame={true}
              className={styles.lottiePlayer}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </StyledGrid>
          <StyledGrid item xs={10} sm={6} mm={6} md={6} lg={5}>
            <StyledStepperTitle>{step.label}</StyledStepperTitle>
            <StyledStepperSubTitle>{step.sublabel}</StyledStepperSubTitle>
            <StyledStepperContent>{step.description}</StyledStepperContent>
          </StyledGrid>
        </StyledStepperGrid>
      ))}
    </>
  );
};

export default BenefitsStepper;

const steps = [
  {
    flexDirection: "row",
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label1")}</>}
      </Translation>
    ),
    sublabel: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.sublabel1")}</>}
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
    flexDirection: "row-reverse",
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label2")}</>}
      </Translation>
    ),
    sublabel: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.sublabel2")}</>}
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
    flexDirection: "row",
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label3")}</>}
      </Translation>
    ),
    sublabel: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.sublabel3")}</>}
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
    flexDirection: "row-reverse",
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label4")}</>}
      </Translation>
    ),
    sublabel: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.sublabel4")}</>}
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
    flexDirection: "row",
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label5")}</>}
      </Translation>
    ),
    sublabel: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.sublabel5")}</>}
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
    flexDirection: "row-reverse",
    label: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.label6")}</>}
      </Translation>
    ),
    sublabel: (
      <Translation>
        {(t, { i18n }) => <>{t("benefitsStepper.sublabel6")}</>}
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
