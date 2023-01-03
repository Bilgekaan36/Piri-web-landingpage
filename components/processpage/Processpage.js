import React from "react";
import { Container, styled, Grid, Typography, Box } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";
import { Translation } from "react-i18next";

import discoveryCall from "../../public/processpage_assets/discovery-call.json";
import strategy from "../../public/processpage_assets/strategy.json";
import design from "../../public/processpage_assets/design.json";
import development from "../../public/processpage_assets/development.json";
import onboarding from "../../public/processpage_assets/onboarding.json";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    padding: "80px",
  },
  [theme.breakpoints.down("md")]: {},
}));

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  height: "45vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "20vh",
  },
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  paddingTop: "148px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    paddingTop: "18px",
  },
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
  },
}));

const StyledRightTitleText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const StyledSmallTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
  },
}));

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  paddingTop: "148px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    paddingTop: "18px",
  },
}));

const StyledHeadTitle = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  fontWeight: "900",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "700",
  borderBottom: "1px solid black",
  marginBottom: "32px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
    fontWeight: "700",
    borderBottom: "1px solid black",
    marginBottom: "16px",
  },
}));

const Process = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        display: props.isShowWorkspage ? "block" : "none",
      }}
    >
      <Box>
        <StyledHeaderGrid container spacing={0}>
          <StyledRightTitleGrid item xs={7}>
            <StyledRightTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
              {t("processpage.leftTitle1")}
            </StyledRightTitleText>
            <StyledRightTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
              {t("processpage.leftTitle2")}
            </StyledRightTitleText>
            <StyledSmallTitle variant='h4' sx={{ color: "#1e1f26" }}>
              {t("processpage.leftTitle3")}
            </StyledSmallTitle>
            <StyledSmallTitle variant='h4' sx={{ color: "#1e1f26" }}>
              {t("processpage.leftTitle4")}
            </StyledSmallTitle>
          </StyledRightTitleGrid>
          <StyledLeftTitleGrid item xs={5}>
            <StyledLeftTitleText variant='smallTitle' sx={{ color: "#1e1f26" }}>
              {t("processpage.rightTitle1")}
            </StyledLeftTitleText>
          </StyledLeftTitleGrid>
        </StyledHeaderGrid>
        <Box>
          {textData.map((text) => (
            <div key={text.id}>
              <StyledHeadTitle sx={{ display: { xs: "inherit", md: "none" } }}>
                {text.title}
              </StyledHeadTitle>

              <Grid
                container
                spacing={0}
                key={text.title}
                sx={{
                  paddingBottom: { xs: "64px", md: "128px" },
                  display: "flex",
                  flexDirection: { xs: "column-reverse", md: "row" },
                  height: { xs: "", md: "" },
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                  }}
                >
                  <StyledHeadTitle
                    sx={{ display: { xs: "none", md: "inherit" } }}
                  >
                    {text.title}
                  </StyledHeadTitle>
                  <StyledHeadContent>{text.content}</StyledHeadContent>
                  {text.subtitles.map((subtitle) => (
                    <StyledSubtitle key={subtitle.textId}>
                      {subtitle.text}
                    </StyledSubtitle>
                  ))}
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: "800px" },
                      overflow: "hidden",
                    }}
                  >
                    <Player
                      autoplay
                      loop={true}
                      src={text.lottieFile}
                      // keepLastFrame={true}
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Controls
                        visible={false}
                        buttons={["play", "repeat", "frame", "debug"]}
                      />
                    </Player>
                  </Box>
                </Grid>
              </Grid>
            </div>
          ))}
        </Box>
      </Box>
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
