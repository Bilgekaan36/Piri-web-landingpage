import styles from "./Benefitspage.module.css";

import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import { Paper, Typography, Button } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import lottieJson from "../../public/bar-chart.json";
import astronaut from "../../public/astronaut-in-tea-break.json";
import developer from "../../public/hacker-thinking-about-code.json";

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
          // style={{ height: "600px", width: "700px" }}
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
          <Button
            size='small'
            // onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          ></Button>
        }
        backButton={
          <Button
            size='small'
            // onClick={handleBack}
            disabled={activeStep === 0}
          ></Button>
        }
      />
    </Box>
  );
};

export default BenefitsStepper;

const steps = [
  {
    label: "CONVERSION RATE",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    lottieFile: lottieJson,
  },
  {
    label: "QUALITY IN DESIGN",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    lottieFile: astronaut,
  },
  {
    label: "PROFESSIONAL CODING",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    lottieFile: developer,
  },
  {
    label: "THE DIFFERENCE",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    lottieFile: astronaut,
  },
  {
    label: "YOUR VISION",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    lottieFile: lottieJson,
  },
  {
    label: "FAST & SAFE",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    lottieFile: astronaut,
  },
];
