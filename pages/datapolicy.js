import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

import { Container, styled, Grid, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";

import en from "../locales/en";
import de from "../locales/de";
import tr from "../locales/tr";
import Navbar from "../components/landingpage/Navbar";
import Footerpage from "../components/layout/Footerpage";
import Link from "next/link";

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

const StyledSubHeadTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  fontWeight: "900",
  lineHeight: 1.2,
  color: "#1e1f26",
  margin: "32px 0",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.15rem",
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
    <>
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
            bottom: "17%",
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
            mm={5}
            sx={{ dispaly: "flex", justifyContent: "center" }}
          >
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataHeader}
            </StyledHeadTitle>
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataTitle}
            </StyledHeadTitle>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataSecondTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataSecondContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataThirdTitle}
            </StyledSubHeadTitle>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataThirdSubTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataThirdContent}
            </StyledHeadContent>

            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataFourthTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataFourthContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataFifthTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataFifthContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataSixtTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataSixtContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataSevenTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.dataSevenContent}
            </StyledHeadContent>
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostTitle}
            </StyledHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostSecondTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostSecondContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostThirdTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostThirdContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostFourthTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostFourthContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostFifthTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostFifthContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostSixtTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostSixtContent}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hostSixSubContent}
            </StyledHeadContent>
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintTitle}
            </StyledHeadTitle>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintSubTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintSecondTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintSecondContent}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintName}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintStreet}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintCity}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintCode}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintPhone}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintMail}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintSecondSubContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintThirdTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintThirdContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintFourthTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintFourthContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintSixtTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintSixtContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintSevenTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintSevenContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintEightTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintEightContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintNineTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintNineContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintTenTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintTenContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintElevenTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintElevenContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintTwelveTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintTwelveContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintThirteenTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.hintThirteenContent}
            </StyledHeadContent>
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webTitle}
            </StyledHeadTitle>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webSecondTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webSecondContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webSubTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webSubContent}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webFirst}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webSecond}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webThird}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webFourth}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webFifth}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webSixt}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webSubSecondContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webThirdTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webThirdContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webFourthTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.webFourthContent}
            </StyledHeadContent>
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.mediaTitle}
            </StyledHeadTitle>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.mediaSubTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.mediaContent}
            </StyledHeadContent>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.mediaThirdTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.mediaThirdContent}
            </StyledHeadContent>
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.pluginTitle}
            </StyledHeadTitle>
            <StyledSubHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.pluginSubTitle}
            </StyledSubHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.pluginContent}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.datapolicy.pluginSubContent}
            </StyledHeadContent>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "32px" }}
            >
              <StyledHeadContent
                sx={{
                  color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                  paddingRight: "12px",
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
    </>
  );
};

export default Imprint;
