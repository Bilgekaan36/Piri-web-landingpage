import React, { useEffect, useState } from "react";
import styles from "./Landingpage.module.css";

import { Box, Container, styled, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { Parallax } from "react-scroll-parallax";
import useBodyScrollLock from "../useBodyScrollLock";
import ParticlesBackground from "../ParticlesBackground";
import LandingStepper from "./LandingStepper";

const StyledHeader = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    letterSpacing: "-0.1rem",
  },
}));

const StyledHeaderSubTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",

  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    letterSpacing: "-0.1rem",
  },
}));

const StyledHeaderModular = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  padding: "24px",
  minWidth: 2000,
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    letterSpacing: "-0.1em",
    minWidth: 300,
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  color: "#1e1f26",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    fontWeight: 200,
    letterSpacing: "0rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    fontWeight: 200,
    letterSpacing: "0rem",
  },
}));

const StyledHeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: "332px",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  height: "100vh",
  position: "relative",
}));

const Landingpage = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLocked, setIsLocked] = useState(true);

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
        disableGutters
        maxWidth='false'
        sx={{
          position: "relative",
          height: isLocked ? "220vh" : "220vh",
        }}
      >
        <Navbar></Navbar>

        <Box
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <LandingStepper activeStep={activeStep} />
        </Box>
      </StyledContainer>
    </div>
  );
};

export default Landingpage;
