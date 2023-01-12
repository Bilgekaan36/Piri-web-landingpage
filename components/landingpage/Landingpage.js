import React, { useEffect, useState } from "react";

import { Box, Container, styled } from "@mui/material";
import Navbar from "./Navbar";
import { Parallax } from "react-scroll-parallax";
import LandingStepper from "./LandingStepper";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  height: "100vh",
  position: "relative",
}));

const Landingpage = (props) => {
  const { t } = props;
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (data) => {
    setActiveStep(data);
  };

  useEffect(() => {
    handleStep(0);
  }, []);

  return (
    <>
      <Parallax
        style={{
          height: "100vh",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: "2px",
          left: 0,
          zIndex: 10,
        }}
        onEnter={() => {
          if (activeStep === 1) {
            handleStep(0);
          }
        }}
        onExit={() => {
          handleStep(1);
        }}
      />
      <Parallax
        style={{
          height: "100vh",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: "100vh",
          left: 0,
          zIndex: 10,
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
          height: "100vh",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: "200vh",
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
      <StyledContainer
        maxWidth='false'
        sx={{
          position: "relative",
          height: "500vh",
        }}
      >
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
          <LandingStepper t={t} activeStep={activeStep} />
        </Box>
      </StyledContainer>
    </>
  );
};

export default Landingpage;
