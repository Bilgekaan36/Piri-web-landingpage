import styles from "./Landingpage.module.css";

import MobileStepper from "@mui/material/MobileStepper";
import { Box, styled, Typography, Button } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import letterW from "../../public/landingpage_assets/letter-W.json";
import letterA from "../../public/landingpage_assets/letter-A.json";
import letterM from "../../public/landingpage_assets/letter-M.json";
import letterO from "../../public/landingpage_assets/letter-O.json";
import letterU from "../../public/landingpage_assets/letter-U.json";

const StyledHeader = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  zIndex: 100,
  [theme.breakpoints.down("lg")]: {
    fontSize: "5vw",
    letterSpacing: "-0.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8vw",
    letterSpacing: "-0.1rem",
  },
}));

const StyledHeaderSubTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  zIndex: 10,
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  [theme.breakpoints.down("lg")]: {
    fontSize: "7vw",
    letterSpacing: "-0.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8.5vw",
  },
}));

const StyledHeaderModular = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  padding: "24px",
  transition: "all 1s ease-in-out",
  [theme.breakpoints.down("lg")]: {
    fontSize: "11vw",
    letterSpacing: "-0.1em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "13vw",
    letterSpacing: "-0.1em",
    minWidth: 300,
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  color: "#1e1f26",
  zIndex: 10,
  fontWeight: 400,

  transition: "all 1s ease-in-out",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const LandingStepper = ({ activeStep, t }) => {
  const steps = [
    {
      firstLabel: t.landingpage.firstLabelWebsite,
      secondLabel: t.landingpage.secondLabelWebsite,
      thirdLabel: t.landingpage.thirdLabelWebsite,
      description1: t.landingpage.description1Website,
      description2: t.landingpage.description2Website,
      description3: t.landingpage.description3Website,
      lottieFile: letterW,
      color: "#6691c3",
    },
    {
      firstLabel: t.landingpage.firstLabelApplication,
      secondLabel: t.landingpage.secondLabelApplication,
      thirdLabel: t.landingpage.thirdLabelApplication,
      description1: t.landingpage.description1Application,
      description2: t.landingpage.description2Application,
      description3: t.landingpage.description3Application,
      lottieFile: letterA,
      color: "#F76B6C",
    },
    {
      firstLabel: t.landingpage.firstLabelMobileapp,
      secondLabel: t.landingpage.secondLabelMobileapp,
      thirdLabel: t.landingpage.thirdLabelMobileapp,
      description1: t.landingpage.description1Mobileapp,
      description2: t.landingpage.description2Mobileapp,
      description3: t.landingpage.description3Mobileapp,
      lottieFile: letterM,
      color: "#79C4C8",
    },
    {
      firstLabel: t.landingpage.firstLabelOnlineshop,
      secondLabel: t.landingpage.secondLabelOnlineshop,
      thirdLabel: t.landingpage.thirdLabelOnlineshop,
      description1: t.landingpage.description1Onlineshop,
      description2: t.landingpage.description2Onlineshop,
      description3: t.landingpage.description3Onlineshop,
      lottieFile: letterO,
      color: "#f7be02",
    },
  ];
  if (t.landingpage.secondLabelApplication === "UYGULAMANIZ") {
    steps[1].lottieFile = letterU;
  }

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
          // position: "absolute",
          // top: 0,
          // bottom: 0,
          // left: 0,
          // right: 0,
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
            mb: { xs: 2, md: { xs: 1, md: 10 } },
          }}
        >
          <StyledHeader
            variant='secondHeader'
            component='div'
            sx={{
              fontSize: {
                sm:
                  t.landingpage.secondLabelWebsite === "WEB SİTENİZ"
                    ? "3.5vw"
                    : "4vw",
                mm: "4vw",
              },
            }}
          >
            {steps[activeStep].firstLabel}
          </StyledHeader>
          <StyledHeaderModular
            variant='mainHeader'
            component='div'
            sx={{
              color: steps[activeStep].color,
              mt: {
                xxl: t.landingpage.secondLabelWebsite === "WEB SİTENİZ" ? 4 : 0,
              },
              fontSize: {
                sm:
                  t.landingpage.secondLabelWebsite === "WEB SİTENİZ"
                    ? "7vw"
                    : "8vw",
                mm: "8vw",
              },
            }}
          >
            {steps[activeStep].secondLabel}
          </StyledHeaderModular>
          <StyledHeaderSubTitle
            variant='bigTitle'
            component='div'
            sx={{
              fontSize: {
                sm:
                  t.landingpage.secondLabelWebsite === "WEB SİTENİZ"
                    ? "5vw"
                    : "6vw",
                mm: "6vw",
              },
            }}
          >
            {steps[activeStep].thirdLabel}
          </StyledHeaderSubTitle>
        </Box>
        <Box sx={{ marginTop: { xs: "", lg: "100px" } }}>
          <StyledSubtitle
            variant='h5'
            component='div'
            sx={{
              fontSize: {
                sm:
                  t.landingpage.secondLabelWebsite === "WEB SİTENİZ"
                    ? "1.25rem"
                    : "1.25rem",
                mm: "1.25rem",
              },
            }}
          >
            {steps[activeStep].description1}
          </StyledSubtitle>
          <StyledSubtitle
            variant='h5'
            component='div'
            sx={{
              fontSize: {
                sm:
                  t.landingpage.secondLabelWebsite === "WEB SİTENİZ"
                    ? "1.25rem"
                    : "1.25rem",
                mm: "1.25rem",
              },
            }}
          >
            {steps[activeStep].description2}
          </StyledSubtitle>
          <StyledSubtitle
            variant='h5'
            component='div'
            sx={{
              fontSize: {
                sm:
                  t.landingpage.secondLabelWebsite === "WEB SİTENİZ"
                    ? "1.25rem"
                    : "1.25rem",
                mm: "1.25rem",
              },
            }}
          >
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
              disabled={activeStep === maxSteps - 1}
            ></Button>
          }
          backButton={
            <Button size='small' disabled={activeStep === 0}></Button>
          }
        />
      </Box>
    </Box>
  );
};

export default LandingStepper;
