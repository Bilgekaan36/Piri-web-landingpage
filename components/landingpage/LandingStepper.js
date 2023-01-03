import styles from "./Landingpage.module.css";

import MobileStepper from "@mui/material/MobileStepper";
import { Box, styled, Typography, Button } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import letterW from "../../public/landingpage_assets/letter-W.json";
import letterA from "../../public/landingpage_assets/letter-A.json";
import letterM from "../../public/landingpage_assets/letter-M.json";
import letterO from "../../public/landingpage_assets/letter-O.json";
import { useTranslation } from "react-i18next";
import { Translation } from "react-i18next";

const StyledHeader = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
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
  zIndex: 10,
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
  fontWeight: 200,

  transition: "all 1s ease-in-out",
  [theme.breakpoints.down("lg")]: {
    // fontSize: "1rem",
    // fontWeight: 200,
    // letterSpacing: "0rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const LandingStepper = ({ activeStep }) => {
  const maxSteps = steps.length;
  const { t, i18n } = useTranslation();

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
            mb: { xs: 2, md: { xs: 1, md: 10 } },
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

const steps = [
  {
    firstLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.firstLabelWebsite")}</>}
      </Translation>
    ),
    secondLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.secondLabelWebsite")}</>}
      </Translation>
    ),
    thirdLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.thirdLabelWebsite")}</>}
      </Translation>
    ),
    description1: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description1Website")}</>}
      </Translation>
    ),
    description2: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description2Website")}</>}
      </Translation>
    ),
    description3: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description3Website")}</>}
      </Translation>
    ),
    lottieFile: letterW,
    color: "#6691c3",
  },
  {
    firstLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.firstLabelApplication")}</>}
      </Translation>
    ),
    secondLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.secondLabelApplication")}</>}
      </Translation>
    ),
    thirdLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.thirdLabelApplication")}</>}
      </Translation>
    ),
    description1: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description1Application")}</>}
      </Translation>
    ),
    description2: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description2Application")}</>}
      </Translation>
    ),
    description3: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description3Application")}</>}
      </Translation>
    ),
    lottieFile: letterA,
    color: "#F76B6C",
  },
  {
    firstLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.firstLabelMobileapp")}</>}
      </Translation>
    ),
    secondLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.secondLabelMobileapp")}</>}
      </Translation>
    ),
    thirdLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.thirdLabelMobileapp")}</>}
      </Translation>
    ),
    description1: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description1Mobileapp")}</>}
      </Translation>
    ),
    description2: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description2Mobileapp")}</>}
      </Translation>
    ),
    description3: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description3Mobileapp")}</>}
      </Translation>
    ),
    lottieFile: letterM,
    color: "#79C4C8",
  },
  {
    firstLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.firstLabelOnlineshop")}</>}
      </Translation>
    ),
    secondLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.secondLabelOnlineshop")}</>}
      </Translation>
    ),
    thirdLabel: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.thirdLabelOnlineshop")}</>}
      </Translation>
    ),
    description1: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description1Onlineshop")}</>}
      </Translation>
    ),
    description2: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description2Onlineshop")}</>}
      </Translation>
    ),
    description3: (
      <Translation>
        {(t, { i18n }) => <>{t("landingpage.description3Onlineshop")}</>}
      </Translation>
    ),
    lottieFile: letterO,
    color: "#f7be02",
  },
];
