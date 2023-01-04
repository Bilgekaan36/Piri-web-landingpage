import React, { useEffect, useState } from "react";
import {
  Container,
  styled,
  Grid,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";
import { Translation } from "react-i18next";
import { Parallax } from "react-scroll-parallax";

import discoveryCall from "../../public/processpage_assets/discovery-call.json";
import strategy from "../../public/processpage_assets/strategy.json";
import design from "../../public/processpage_assets/design.json";
import development from "../../public/processpage_assets/development.json";
import onboarding from "../../public/processpage_assets/onboarding.json";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  // height: "30vh",
  overflow: "hidden",
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  fontWeight: "700",
  paddingRight: "12px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledTitleTextSecond = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  color: "white",
  fontWeight: "700",
  textShadow: "0px 0px 3px #1e1f26",
  paddingRight: "64px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20vw",
    paddingRight: "24px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledStepperTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "400",
  color: "#a0a0a0",
  transition: "all 1s ease-in-out",
  [theme.breakpoints.down("xxl")]: {
    // fontSize: "1.8vw",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "0.85rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.85rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledStepperSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "500",
  marginBottom: "12px",
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  [theme.breakpoints.down("xxl")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledStepperSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "500",
  marginBottom: "12px",
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  [theme.breakpoints.down("xxl")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledStepperContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "200",
  color: "#a0a0a0",
  transition: "all 1s ease-in-out",
  [theme.breakpoints.down("xxl")]: {
    // fontSize: "1.8vw",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "0.85rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.85rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledStepperGrid = styled(Grid)(({ theme }) => ({
  color: "white",
  bgcolor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 1s ease-in-out",
  marginTop: "100px",
  width: "1000px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("mm")]: {},
  [theme.breakpoints.down("md")]: {
    marginTop: "80px",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 1s ease-in-out",
  // border: "1px solid red",
  height: "450px",
  [theme.breakpoints.down("xxl")]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    height: "450px",
  },
  [theme.breakpoints.down("mm")]: {
    height: "400px",
  },
  [theme.breakpoints.down("md")]: {
    height: "450px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "450px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Process = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const { t, i18n } = useTranslation();

  const handleStep = (data) => {
    setActiveStep(data);
  };

  useEffect(() => {
    handleStep(0);
  }, []);

  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        position: "relative",
        height: "320vh",
      }}
    >
      <Parallax
        style={{
          height: "10%",
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
          height: "10%",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: "10%",
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
          height: "10%",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          top: "20%",
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
          height: "10%",
          width: "100px",
          backgroundColor: "purple",
          position: "absolute",
          top: "30%",
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
          height: "10%",
          width: "100px",
          backgroundColor: "green",
          position: "absolute",
          top: "40%",
          left: 0,
          zIndex: 10,
        }}
        onEnter={() => {
          if (activeStep === 5) {
            handleStep(4);
          }
        }}
        onExit={() => {
          if (activeStep === 4) {
            handleStep(5);
          }
        }}
      />
      <StyledHeader>
        <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
          <StyledTitleText>{t("benefitspage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>
            {t("benefitspage.title2")}
          </StyledTitleTextSecond>
          <StyledTitleText>{t("benefitspage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>
            {t("benefitspage.title2")}
          </StyledTitleTextSecond>
          <StyledTitleText>{t("benefitspage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>
            {t("benefitspage.title2")}
          </StyledTitleTextSecond>
          <StyledTitleText>{t("benefitspage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>
            {t("benefitspage.title2")}
          </StyledTitleTextSecond>
        </Parallax>
      </StyledHeader>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stepper activeStep={activeStep} orientation='vertical'>
          {textData.map((text, index) => (
            <Step key={text.title}>
              <StepLabel>{text.title}</StepLabel>
              <StepContent>
                <StyledStepperGrid container spacing={0} key={text.id}>
                  <StyledGrid item xs={10} sm={6} mm={6} md={6} lg={5}>
                    <StyledStepperTitle> {text.title}</StyledStepperTitle>
                    <StyledStepperSubTitle> {text.title}</StyledStepperSubTitle>
                    <StyledStepperContent>{text.content}</StyledStepperContent>
                    {text.subtitles.map((subtitle) => (
                      <StyledStepperSubText key={subtitle.textId}>
                        {subtitle.text}
                      </StyledStepperSubText>
                    ))}
                  </StyledGrid>
                </StyledStepperGrid>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
      {/* {textData.map((text) => (
        <StyledStepperGrid container spacing={0} key={text.id}>
          <StyledGrid item xs={10} sm={6} mm={6} md={6} lg={5}>
            <StyledStepperTitle> {text.title}</StyledStepperTitle>
            <StyledStepperSubTitle> {text.title}</StyledStepperSubTitle>
            <StyledStepperContent>{text.content}</StyledStepperContent>
            {text.subtitles.map((subtitle) => (
              <StyledStepperSubText key={subtitle.textId}>
                {subtitle.text}
              </StyledStepperSubText>
            ))}
          </StyledGrid>
        </StyledStepperGrid>
      ))} */}
    </StyledContainer>
  );
};

const textData = [
  {
    id: 0,
    title: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.titleDiscovery")}</>}
      </Translation>
    ),
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.contentDiscovery")}</>}
      </Translation>
    ),
    subtitles: [
      {
        textId: "subtitleDiscovery1",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDiscovery1")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleDiscovery2",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDiscovery2")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleDiscovery3",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDiscovery3")}</>}
          </Translation>
        ),
      },
    ],
    lottieFile: discoveryCall,
  },
  {
    id: 1,
    title: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.titleStrategy")}</>}
      </Translation>
    ),
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.contentStrategy")}</>}
      </Translation>
    ),
    subtitles: [
      {
        textId: "subtitleStrategy1",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleStrategy1")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleStrategy2",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleStrategy2")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleStrategy3",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleStrategy3")}</>}
          </Translation>
        ),
      },
    ],
    lottieFile: strategy,
  },
  {
    id: 2,
    title: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.titleDesign")}</>}
      </Translation>
    ),
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.contentDesign")}</>}
      </Translation>
    ),
    subtitles: [
      {
        textId: "subtitleDesign1",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDesign1")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleDesign2",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDesign2")}</>}
          </Translation>
        ),
      },
    ],
    lottieFile: design,
  },
  {
    id: 3,
    title: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.titleDevelopment")}</>}
      </Translation>
    ),
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.contentDevelopment")}</>}
      </Translation>
    ),
    subtitles: [
      {
        textId: "subtitleDevelopment1",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDevelopment1")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleDevelopment2",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDevelopment2")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleDevelopment3",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDevelopment3")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleDevelopment4",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleDevelopment4")}</>}
          </Translation>
        ),
      },
    ],
    lottieFile: development,
  },
  {
    id: 4,
    title: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.titleOnboarding")}</>}
      </Translation>
    ),
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("processpage.contentOnboarding")}</>}
      </Translation>
    ),
    subtitles: [
      {
        textId: "subtitleOnboarding1",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleOnboarding1")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleOnboarding2",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleOnboarding2")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleOnboarding3",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleOnboarding3")}</>}
          </Translation>
        ),
      },
      {
        textId: "subtitleOnboarding4",
        text: (
          <Translation>
            {(t, { i18n }) => <>{t("processpage.subtitleOnboarding4")}</>}
          </Translation>
        ),
      },
    ],
    lottieFile: onboarding,
  },
];

export default Process;
