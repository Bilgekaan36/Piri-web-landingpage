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

const Landingpage = ({ t }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (data) => {
    setActiveStep(data);
  };

  useEffect(() => {
    handleStep(0);
  }, []);

  return (
    <div>
      <Parallax
        style={{
          height: "30%",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: "2px",
          left: 0,
          zIndex: 10,
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
          height: "30%",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: "30%",
          left: 0,
          zIndex: 10,
        }}
        onEnter={() => {
          handleStep(1);
        }}
        onExit={() => {
          handleStep(2);
        }}
      />
      <Parallax
        style={{
          height: "30%",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: "60%",
          left: 0,
          zIndex: 10,
        }}
        onEnter={() => {
          handleStep(2);
        }}
        onExit={() => {
          handleStep(3);
        }}
      />
      <StyledContainer
        maxWidth='false'
        sx={{
          position: "relative",
          height: "220vh",
        }}
      >
        <Navbar t={t}></Navbar>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <LandingStepper t={t} activeStep={activeStep} />
        </Box>
      </StyledContainer>
    </div>
  );
};

export default Landingpage;
