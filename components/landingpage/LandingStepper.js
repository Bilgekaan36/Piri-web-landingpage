import styles from "./Landingpage.module.css";

import { useRef } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { Box, styled, Typography, Button } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import letterW from "../../public/letter-W.json";
import letterA from "../../public/letter-A.json";
import letterM from "../../public/letter-M.json";
import letterO from "../../public/letter-O.json";

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
  zIndex: 10,
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
  zIndex: 10,
  transition: "all 1s ease-in-out",
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
  zIndex: 10,
  transition: "all 1s ease-in-out",
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

const LandingStepper = ({ activeStep }) => {
  const maxSteps = steps.length;

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Player
        autoplay
        loop={false}
        src={steps[activeStep].lottieFile}
        keepLastFrame={true}
        height
        style={{
          height: "100%",
          width: "100%",
          opacity: "0.4",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.lottiePlayer}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mb: { xs: 2, md: 10 },
          }}
        >
          <StyledHeader variant='secondHeader' component='div'>
            {steps[activeStep].firstLabel}
          </StyledHeader>
          <StyledHeaderModular
            variant='mainHeader'
            component='div'
            sx={{ color: steps[activeStep].color }}
          >
            {steps[activeStep].secondLabel}
          </StyledHeaderModular>
          <StyledHeaderSubTitle variant='bigTitle' component='div'>
            {steps[activeStep].thirdLabel}
          </StyledHeaderSubTitle>
        </Box>
        <Box>
          <StyledSubtitle variant='h5' component='div'>
            {steps[activeStep].description1}
          </StyledSubtitle>
          <StyledSubtitle variant='h5' component='div'>
            {steps[activeStep].description2}
          </StyledSubtitle>
          <StyledSubtitle variant='h5' component='div'>
            {steps[activeStep].description3}
          </StyledSubtitle>
        </Box>
        <MobileStepper
          variant='text'
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
    </Box>
  );
};

export default LandingStepper;

const steps = [
  {
    firstLabel: "DEINE",
    secondLabel: "WEBSITE",
    thirdLabel: `modern & innovativ`,
    description1: "Bringe deine Vison ins Web!",
    description2: "Ob Frontend- oder Backend du bekommst hier alles",
    description3: "aus einer Hand",
    lottieFile: letterW,
    color: "#6691c3",
  },
  {
    firstLabel: "DEINE",
    secondLabel: "APPLIKATION",
    thirdLabel: `custom & hightec`,
    description1: "Deine personalisierte Applikation!",
    description2: "Mit modernsten Technologien für das beste Kundenerlebnis",
    description3: "Professionalität zalht sich aus",
    lottieFile: letterA,
    color: "#F76B6C",
  },
  {
    firstLabel: "DEINE",
    secondLabel: "MOBILEAPP",
    thirdLabel: `fast & beautiful`,
    description1: "Erlange den entscheidenden Vorteil!",
    description2: "Durch ansprechendes Design, entstehen bessere Ergebnisse",
    description3: "weil Design verbindet",
    lottieFile: letterM,
    color: "#79C4C8",
  },
  {
    firstLabel: "DEIN",
    secondLabel: "ONLINESHOP",
    thirdLabel: `efficient & rentable`,
    description1: "Deine Ware professionell Vertreiben!",
    description2: "Die höchste Conversion durch richtige Positionierung",
    description3: "Mache aus Besuchern bares Geld",
    lottieFile: letterO,
    color: "#f7be02",
  },
];
