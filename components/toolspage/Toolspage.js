import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Grid from "@mui/material/Grid";
import { Box, Container, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import ToolStepper from "./ToolStepper";

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  // height: "30vh",
  overflow: "hidden",
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
  color: "white",
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
  fontWeight: "700",
  textShadow: "0px 0px 3px white",
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

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1E1F26",
  position: "relative",
  height: "100vh",
  [theme.breakpoints.down("xxl")]: {
    height: "100vh",
  },
  [theme.breakpoints.down("xl")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("lg")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("mm")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("md")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("sm")]: {
    height: "inherit",
  },
  [theme.breakpoints.down("xs")]: {
    height: "inherit",
  },
}));

const Toolspage = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const { t, i18n } = useTranslation();

  const handleStep = (data) => {
    setActiveStep(data);
  };

  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        position: "relative",
      }}
    >
      <StyledHeader>
        <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
          <StyledTitleText>{t("toolspage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>{t("toolspage.title2")}</StyledTitleTextSecond>
          <StyledTitleText>{t("toolspage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>{t("toolspage.title2")}</StyledTitleTextSecond>
          <StyledTitleText>{t("toolspage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>{t("toolspage.title2")}</StyledTitleTextSecond>
          <StyledTitleText>{t("toolspage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>{t("toolspage.title2")}</StyledTitleTextSecond>
        </Parallax>
      </StyledHeader>
      <Container
        disableGutters
        maxWidth='xxl'
        sx={{ paddingBottom: "132px", marginTop: "200px" }}
      >
        <ToolStepper activeStep={activeStep} />
      </Container>
    </StyledContainer>
  );
};

export default Toolspage;
