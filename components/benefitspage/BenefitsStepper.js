import styles from "./BenefitsStepper.module.css";

import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import { Paper, Typography, Button } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Translation } from "react-i18next";

import lottieJson from "../../public/benefitspage_assets/barChart.json";
import astronaut from "../../public/benefitspage_assets/astronaut.json";
import developer from "../../public/benefitspage_assets/hacker.json";

const BenefitsStepper = ({ activeStep }) => {
  const maxSteps = steps.length;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          pl: 2,
          color: "white",
          bgcolor: "transparent",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "1.5rem", md: "5rem" }, fontWeight: "700" }}
        >
          {steps[activeStep].label}
        </Typography>
      </Paper>
      <Box
        sx={{
          minHeight: { xs: "none", md: 700 },
          maxWidth: { xs: "100%", md: "100%" },
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: { xs: "column-reverse", md: "row" },
          p: 2,
          color: "white",
          bgcolor: "transparent",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "0.75rem", md: "1.75rem" }, fontWeight: "200" }}
        >
          {steps[activeStep].description}
        </Typography>

        <Player
          autoplay
          loop={false}
          src={steps[activeStep].lottieFile}
          keepLastFrame={true}
          className={styles.lottiePlayer}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </Box>
      <MobileStepper
        variant='progress'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        sx={{ bgcolor: "transparent" }}
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
    lottieFile: lottieJson,
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
    lottieFile: astronaut,
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
    lottieFile: developer,
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
    lottieFile: astronaut,
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
    lottieFile: lottieJson,
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
    lottieFile: astronaut,
  },
];
