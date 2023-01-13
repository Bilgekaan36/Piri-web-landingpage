import React, { useEffect, useRef, useState } from "react";

import { Box, Container, styled } from "@mui/material";
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
  const ref = useRef();
  const timerRef = useRef(null);

  const handleStep = (data) => {
    setActiveStep(data);
  };

  useEffect(() => {
    scroll.scrollToTop();
    // return () => clearTimeout(timerRef);
  }, []);

  // useEffect(() => {
  //   // document.body.style.overflow = "hidden";
  //   console.log("body: ", document.body.style.overflow);
  // }, [activeStep]);

  const next = () => {
    if (document !== undefined) {
      document.body.style.overflow = "hidden";
    }
    timerRef.current = setTimeout(() => {
      document.body.style.overflow = "auto";
      clearTimeout(timerRef.current);
    }, 1000);

    // return () => {
    //   console.log("clearTimer1");
    //   clearTimeout(timerRef);
    // };
  };

  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        position: "relative",
        height: "150vh",
      }}
      ref={ref}
    >
      <Parallax
        style={{
          height: "10vh",
          width: "100px",
          backgroundColor: "purple",
          position: "absolute",
          top: "2px",
          left: 0,
          zIndex: 10,
        }}
        onEnter={() => {
          handleStep(1);
          next();
        }}
        onExit={() => {
          if (activeStep === 1) {
            handleStep(2);
            next();
          }
        }}
      />
      <Parallax
        style={{
          height: "10vh",
          width: "100px",
          backgroundColor: "red",
          position: "absolute",
          top: "10vh",
          left: 0,
          zIndex: 10,
        }}
        onEnter={() => {
          if (activeStep === 3) {
            handleStep(2);
            next();
          }
        }}
        onExit={() => {
          if (activeStep === 2) {
            handleStep(3);
            next();
          }
        }}
      />
      <Parallax
        style={{
          height: "10vh",
          width: "100px",
          backgroundColor: "blue",
          position: "absolute",
          top: "20vh",
          left: 0,
          zIndex: 10,
        }}
        onEnter={() => {
          if (activeStep === 4) {
            handleStep(3);
            next();
          }
        }}
        onExit={() => {
          if (activeStep === 3) {
            handleStep(4);
            next();
          }
        }}
      />
      <Parallax
        style={{
          height: "10vh",
          width: "100px",
          backgroundColor: "green",
          position: "absolute",
          top: "30vh",
          left: 0,
          zIndex: 10,
        }}
        onEnter={() => {
          next();
        }}
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
        <LandingStepper t={t} activeStep={activeStep} />
      </Box>
    </StyledContainer>
  );
};

export default Landingpage;
