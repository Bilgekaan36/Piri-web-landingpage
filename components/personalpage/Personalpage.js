import React, { useState } from "react";
import styles from "./Personalpage.module.css";
import Image from "next/image";
import profil from "../../public/profil.png";
import { Parallax } from "react-scroll-parallax";

import { Container, styled, Grid, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

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

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  [theme.breakpoints.down("xxl")]: {
    minHeight: "90vh",
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: "60vh",
  },
  [theme.breakpoints.down("mm")]: {
    minHeight: "70vh",
  },
}));

const StyledHeadTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "900",
  color: "#1e1f26",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.5rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#1e1f26",
  marginTop: "32px",

  [theme.breakpoints.down("lg")]: {
    fontSize: "0.75rem",
    marginTop: "24px",
  },
}));

const Personalpage = ({ isShowWorkspage }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeBackground, setActiveBackground] = useState("white");
  const { t, i18n } = useTranslation();

  const handleBackground = (data) => {
    setActiveBackground(data);
  };

  return (
    <>
      <StyledContainer
        maxWidth='false'
        sx={{ backgroundColor: activeBackground }}
      >
        <Parallax
          style={{
            height: "50px",
            width: "100px",
            backgroundColor: "transparent",
            position: "absolute",
            bottom: "65%",
            left: 0,
            zIndex: 10,
          }}
          onProgressChange={(progressData) => {
            if (progressData >= 1) {
              handleBackground("#1e1f26");
            }
            if (progressData < 1) {
              handleBackground("white");
            }
          }}
          onEnter={() => {}}
          onExit={() => {}}
        />
        <StyledHeader>
          <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
            <StyledTitleText>{t("personalpage.title1")}</StyledTitleText>
            <StyledTitleTextSecond>
              {t("personalpage.title2")}
            </StyledTitleTextSecond>
            <StyledTitleText>{t("personalpage.title1")}</StyledTitleText>
            <StyledTitleTextSecond>
              {t("personalpage.title2")}
            </StyledTitleTextSecond>
            <StyledTitleText>{t("personalpage.title1")}</StyledTitleText>
            <StyledTitleTextSecond>
              {t("personalpage.title2")}
            </StyledTitleTextSecond>
            <StyledTitleText>{t("personalpage.title1")}</StyledTitleText>
            <StyledTitleTextSecond>
              {t("personalpage.title2")}
            </StyledTitleTextSecond>
          </Parallax>
        </StyledHeader>
        <Container
          disableGutters
          maxWidth='xxl'
          sx={{ display: "flex", paddingBottom: { xs: "0px", mm: "0px" } }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              mm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <StyledHeadTitle
                sx={{
                  color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t("personalpage.personalTitle1")}
              </StyledHeadTitle>
              <StyledHeadContent
                sx={{
                  color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t("personalpage.personalContent")}
              </StyledHeadContent>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4.5}
              mm={3.5}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <Image
                src={profil}
                alt='profile'
                className={styles.profileImage}
              />
            </Grid>
          </Grid>
        </Container>
      </StyledContainer>
      <StyledHeader
        sx={{
          backgroundColor: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
        }}
      >
        <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t("footerpage.title1")}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t("footerpage.title1")}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t("footerpage.title1")}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t("footerpage.title1")}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t("footerpage.title1")}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t("footerpage.title1")}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t("footerpage.title1")}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t("footerpage.title1")}
          </StyledTitleTextSecond>
        </Parallax>
      </StyledHeader>
    </>
  );
};

export default Personalpage;
