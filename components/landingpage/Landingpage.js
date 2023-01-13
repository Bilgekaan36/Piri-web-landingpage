import React, { useEffect, useRef, useState } from "react";

import { Box, Container, styled, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "./Navbar";
import { Parallax } from "react-scroll-parallax";
import LandingStepper from "./LandingStepper";
import { animateScroll as scroll } from "react-scroll";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  height: "100vh",
  position: "relative",
}));

const Landingpage = (props) => {
  const { t } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  const handleStep = (data) => {
    setActiveStep(data);
  };

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Parallax
      onProgressChange={(progressData) => {
        setProgress(progressData * 100);
      }}
    >
      <StyledContainer
        maxWidth='false'
        sx={{
          position: "relative",
          height: matchDownLg ? "2000vh" : "1000vh",
        }}
      >
        <Parallax
          style={{
            height: "25%",
            width: "100px",
            backgroundColor: "purple",
            position: "absolute",
            top: "2px",
            left: 0,
            zIndex: 10,
          }}
          onEnter={() => {
            handleStep(1);
          }}
          onExit={() => {
            if (activeStep === 1) {
              handleStep(2);
            }
          }}
        />
        <Parallax
          style={{
            height: "25%",
            width: "100px",
            backgroundColor: "red",
            position: "absolute",
            top: "25%",
            left: 0,
            zIndex: 10,
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
            height: "25%",
            width: "100px",
            backgroundColor: "blue",
            position: "absolute",
            top: "50%",
            left: 0,
            zIndex: 10,
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
            height: "25%",
            width: "100px",
            backgroundColor: "green",
            position: "absolute",
            top: "75%",
            left: 0,
            zIndex: 10,
          }}
          onEnter={() => {}}
          onExit={() => {
            // props.handlePages();
          }}
        />

        <Navbar t={t}></Navbar>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <LandingStepper t={t} activeStep={activeStep} progress={progress} />
        </Box>
      </StyledContainer>
    </Parallax>
  );
};

export default Landingpage;
