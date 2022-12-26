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

// const StyledWrapper = styled(Box)(({ theme }) => ({
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
// }));

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
          height: "20%",
          width: "100px",
          backgroundColor: "purple",
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
          height: "20%",
          width: "100px",
          backgroundColor: "yellow",
          position: "absolute",
          top: "20%",
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
          height: "20%",
          width: "100px",
          backgroundColor: "green",
          position: "absolute",
          top: "40%",
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
        {/* <ParticlesBackground /> */}
        {/* <StyledWrapper> */}
        {/* <StyledHeaderBox>
            <Box
              sx={{
                mb: { xs: 2, md: 10 },
              }}
            > */}
        {/* <StyledHeader variant='secondHeader' component='div'>
                DEINE
              </StyledHeader>
              <StyledHeaderModular variant='mainHeader' component='div'>
                WEBAPPLIKATION
              </StyledHeaderModular> */}
        {/* <StyledHeader variant='bigTitle' component='div'>
                modern & innovativ
              </StyledHeader> */}
        {/* <div className='loader'>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  m
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  o
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  d
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  e
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  r
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  n
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                  sx={{ margin: "0 32px" }}
                >
                  &
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  i
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  n
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  n
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  o
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  v
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  a
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  t
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  i
                </StyledHeaderSubTitle>
                <StyledHeaderSubTitle
                  variant='bigTitle'
                  component='div'
                  className='m'
                >
                  v
                </StyledHeaderSubTitle>
              </div> */}
        {/* </Box> */}
        {/* <Box>
              <StyledSubtitle variant='h5' component='div'>
                Bringe deine Vison ins Web!
              </StyledSubtitle>
              <StyledSubtitle variant='h5' component='div'>
                Ob Frontend- oder Backend du bekommst hier alles
              </StyledSubtitle>
              <StyledSubtitle variant='h5' component='div'>
                aus einer Hand
              </StyledSubtitle>
            </Box> */}

        {/* <section className={styles.section}>
            <video
              className={styles.video}
              src='/video.mp4'
              muted
              autoPlay={"autoplay"}
              poster='/background.jpg'
              loop
            >
              video tag is not supported by your browser
            </video>
            <h2>
              DEINE <br /> WEBSITE
              <span> modern & innovativ</span>
            </h2>
          </section> */}
        {/* </StyledHeaderBox> */}

        <Box
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            height: "100vh",
          }}
        >
          <LandingStepper activeStep={activeStep} />
        </Box>
        {/* <Box className={styles.iconArrow} /> */}
        {/* </StyledWrapper> */}
      </StyledContainer>
    </div>
  );
};

export default Landingpage;
