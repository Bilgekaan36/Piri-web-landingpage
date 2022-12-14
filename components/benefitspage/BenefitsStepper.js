import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

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
          maxWidth: { xs: "100%", md: "70%" },
          width: "100%",
          p: 2,
          color: "white",
          bgcolor: "transparent",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "1rem", md: "1.75rem" }, fontWeight: "200" }}
        >
          {steps[activeStep].description}
        </Typography>
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
  },
];
