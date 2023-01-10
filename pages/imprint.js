import styles from "../components/layout/Layout.module.css";

import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Container, styled, Grid, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import Navbar from "../components/landingpage/Navbar";
import Footerpage from "../components/layout/Footerpage";
import Link from "next/link";
import { motion } from "framer-motion";

import en from "../locales/en";
import de from "../locales/de";
import tr from "../locales/tr";

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  fontWeight: "700",
  paddingRight: "12px",
  color: "#1e1f26",
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
  position: "relative",
  [theme.breakpoints.down("xxl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("mm")]: {},
}));

const StyledHeadTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "900",
  lineHeight: 1.2,
  color: "#1e1f26",
  margin: "32px 0",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.5rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#1e1f26",
  fontWeight: "200",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.75rem",
    // marginTop: "24px",
  },
}));

const Imprint = () => {
  const [activeBackground, setActiveBackground] = useState("white");
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  // const t = locale === "en" ? en : de;
  let t;
  switch (locale) {
    case "en":
      t = en;
      break;
    case "de":
      t = de;
      break;
    case "tr":
      t = tr;
      break;
  }

  const handleBackground = (data) => {
    setActiveBackground(data);
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <motion.div
        className={styles.transitionPage}
        initial={{ opacity: 1, translateY: 0 }}
        animate={{ opacity: 1, translateY: "-100%" }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          className={styles.transitionLogo}
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Typography
            variant='logo'
            component='div'
            sx={{
              letterSpacing: { xs: "0.5em", sm: "1.5em" },
              color: "white",
            }}
          >
            PIRI WEB
          </Typography>
        </motion.div>
      </motion.div>
      <Navbar t={t} />
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

        <Grid
          container
          spacing={0}
          sx={{
            dispaly: "flex",
            justifyContent: "center",
            paddingTop: "10vh",
            paddingBottom: "10vh",
          }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            mm={4}
            sx={{ dispaly: "flex", justifyContent: "center" }}
          >
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.title}
            </StyledHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentName}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentStreet}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentCity}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentCode}
            </StyledHeadContent>
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.subtitle}
            </StyledHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.subContentPhone}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.subContentMail}
            </StyledHeadContent>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StyledHeadContent
                sx={{
                  color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t.imprint.subContentSource}
              </StyledHeadContent>
              <Link
                href='https://www.e-recht24.de'
                style={{
                  color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                https://www.e-recht24.de
              </Link>
            </Box>
          </Grid>
        </Grid>
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
            {t.footerpage.title1}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleTextSecond>
        </Parallax>
      </StyledHeader>
      <Footerpage />
    </Box>
  );
};

export default Imprint;
