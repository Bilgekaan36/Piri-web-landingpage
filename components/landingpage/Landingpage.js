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

  const scrollToBottom = () => {
    props.scrollToBottom();
  };

  return (
    <>
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
          if (activeStep === 1) {
            handleStep(0);
            props.changeHandler();
          }
        }}
        onExit={() => {
          if (activeStep === 0) {
            handleStep(1);
            props.changeHandler();
          }
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
          if (activeStep === 2) {
            handleStep(1);
            props.changeHandler();
          }
        }}
        onExit={() => {
          if (activeStep === 1) {
            handleStep(2);
            props.changeHandler();
          }
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
          if (activeStep === 3) {
            handleStep(2);
            props.changeHandler();
          }
        }}
        onExit={() => {
          if (activeStep === 2) {
            handleStep(3);
            props.changeHandler();
          }
        }}
      />
      <StyledContainer
        maxWidth='false'
        sx={{
          position: "relative",
          height: "220vh",
        }}
      >
        <Navbar t={t} scrollToBottom={scrollToBottom}></Navbar>
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
    </>
  );
};

export default Landingpage;
