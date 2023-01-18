import React, { useEffect, useState } from "react";
import { Container, styled, Grid, Typography, Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

import ParallaxHeader from "../ParallaxHeader";

const StyledContainer = styled(Container)(({ theme }) => ({
  position: "relative",
}));

const StyledStepperTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: "400",
  color: "#848484",

  [theme.breakpoints.down("xl")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const StyledStepperSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.2rem",
  fontWeight: "500",
  marginBottom: "12px",
  color: "#1e1f26",
  [theme.breakpoints.down("xxl")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45rem",
  },
}));

const StyledStepperSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1.7rem",
  fontWeight: "500",
  marginBottom: "12px",
  color: "#1e1f26",
  [theme.breakpoints.down("xxl")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
}));

const StyledStepperContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "200",
  color: "#848484",
  marginBottom: "12px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
}));

const StyledMainTitle = styled(Typography)(({ theme }) => ({
  color: "#1e1f26",
  fontSize: "4.5rem",
  fontWeight: "700",
  lineHeight: 1,
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledSubTitle = styled(Typography)(({ theme }) => ({
  color: "#848484",
  fontSize: "2.2rem",
  fontWeight: "400",
  lineHeight: 1,
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
}));

const StyledStepperGrid = styled(Grid)(({ theme }) => ({
  color: "white",
  bgcolor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "150px",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    marginBottom: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "80px",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  transition: "all 1s ease-in-out",
  position: "relative",
  // height: "400px",
}));

const StyledStepperNumbers = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "-70px",
  color: "#1e1f26",
  width: "100px",

  fontWeight: 900,
  fontSize: "3vw",
  textAlign: "center",
  [theme.breakpoints.down("xxl")]: {
    left: "-50px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "6vw",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "6vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "6vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "6vw",
  },
}));

const Process = ({ t }) => {
  const [progress, setProgress] = useState(100);

  const [activeBackground, setActiveBackground] = useState("white");

  const handleStep = (data) => {
    setActiveBackground(data);
  };

  const handleProgress = (data) => {
    setProgress(data);
  };

  useEffect(() => {
    handleStep("white");
  }, []);

  const textData = [
    {
      subtitles: [
        {
          textId: "subtitleDiscovery1",
          text: t.processpage.subtitleDiscovery1,
        },
        {
          textId: "subtitleDiscovery2",
          text: t.processpage.subtitleDiscovery2,
        },
        {
          textId: "subtitleDiscovery3",
          text: t.processpage.subtitleDiscovery3,
        },
      ],
    },
    {
      subtitles: [
        {
          textId: "subtitleStrategy1",
          text: t.processpage.subtitleStrategy1,
        },
        {
          textId: "subtitleStrategy2",
          text: t.processpage.subtitleStrategy2,
        },
        {
          textId: "subtitleStrategy3",
          text: t.processpage.subtitleStrategy3,
        },
      ],
    },
    {
      subtitles: [
        {
          textId: "subtitleDesign1",
          text: t.processpage.subtitleDesign1,
        },
        {
          textId: "subtitleDesign2",
          text: t.processpage.subtitleDesign2,
        },
      ],
    },
    {
      subtitles: [
        {
          textId: "subtitleDevelopment1",
          text: t.processpage.subtitleDevelopment1,
        },
        {
          textId: "subtitleDevelopment2",
          text: t.processpage.subtitleDevelopment2,
        },
        {
          textId: "subtitleDevelopment3",
          text: t.processpage.subtitleDevelopment3,
        },
        {
          textId: "subtitleDevelopment4",
          text: t.processpage.subtitleDevelopment4,
        },
      ],
    },
    {
      id: 4,
      number: "05",
      title: t.processpage.titleOnboarding,
      content: t.processpage.contentOnboarding,
      subtitles: [
        {
          textId: "subtitleOnboarding1",
          text: t.processpage.subtitleOnboarding1,
        },
        {
          textId: "subtitleOnboarding2",
          text: t.processpage.subtitleOnboarding2,
        },
        {
          textId: "subtitleOnboarding3",
          text: t.processpage.subtitleOnboarding3,
        },
        {
          textId: "subtitleOnboarding4",
          text: t.processpage.subtitleOnboarding4,
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: activeBackground,
      }}
    >
      <ParallaxHeader
        firstTitle={t.processpage.title1}
        secondTitle={t.processpage.title2}
        activeBackground='#1e1f26'
      />
      <StyledContainer
        maxWidth='false'
        sx={{ backgroundColor: activeBackground }}
      >
        <StyledStepperGrid
          container
          spacing={0}
          sx={{ marginBottom: { xs: "0px" } }}
        >
          <StyledGrid
            item
            xs={10}
            sm={8}
            mm={8}
            md={8}
            lg={6}
            sx={{ margin: "160px 0px" }}
          >
            <StyledMainTitle>{t.processpage.mainTitle1}</StyledMainTitle>
            <StyledMainTitle>{t.processpage.mainTitle2}</StyledMainTitle>
            <StyledSubTitle>{t.processpage.mainTitle3}</StyledSubTitle>
            <StyledSubTitle>{t.processpage.mainTitle4}</StyledSubTitle>
          </StyledGrid>
        </StyledStepperGrid>
        <Parallax
          onProgressChange={(progressData) => {
            const result = progressData;
            handleProgress(result);
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sm={8}
              mm={8}
              md={8}
              lg={6}
              sx={{ position: "relative" }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "#1e1f26",
                  width: { xs: "2px", sm: "3px" },
                  height: {
                    xs: `${progress * 3700}px`,
                    sm: `${progress * 2900}px`,
                    lg: `${progress * 3000}px`,
                  },
                }}
              />
              <StyledStepperGrid container spacing={0}>
                <StyledStepperNumbers
                  sx={{
                    backgroundColor: activeBackground,
                    color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                  }}
                >
                  01
                </StyledStepperNumbers>
                <StyledGrid item xs={10} sm={10} mm={10} md={10} lg={10}>
                  <StyledStepperTitle>
                    {t.processpage.titleDiscovery}
                  </StyledStepperTitle>
                  <StyledStepperSubTitle
                    sx={{
                      color:
                        activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                    }}
                  >
                    {t.processpage.titleDiscovery}
                  </StyledStepperSubTitle>
                  <StyledStepperContent>
                    {t.processpage.contentDiscovery}
                  </StyledStepperContent>
                  {textData[0].subtitles.map((subtitle) => (
                    <StyledStepperSubText
                      key={subtitle.textId}
                      sx={{
                        color:
                          activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                      }}
                    >
                      {subtitle.text}
                    </StyledStepperSubText>
                  ))}
                </StyledGrid>
              </StyledStepperGrid>
              <StyledStepperGrid container spacing={0}>
                <StyledStepperNumbers
                  sx={{
                    backgroundColor: activeBackground,
                    color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                  }}
                >
                  02
                </StyledStepperNumbers>
                <StyledGrid item xs={10} sm={10} mm={10} md={10} lg={10}>
                  <StyledStepperTitle>
                    {t.processpage.titleStrategy}
                  </StyledStepperTitle>
                  <StyledStepperSubTitle
                    sx={{
                      color:
                        activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                    }}
                  >
                    {t.processpage.titleStrategy}
                  </StyledStepperSubTitle>
                  <StyledStepperContent>
                    {t.processpage.contentStrategy}
                  </StyledStepperContent>
                  {textData[1].subtitles.map((subtitle) => (
                    <StyledStepperSubText
                      key={subtitle.textId}
                      sx={{
                        color:
                          activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                      }}
                    >
                      {subtitle.text}
                    </StyledStepperSubText>
                  ))}
                </StyledGrid>
              </StyledStepperGrid>
              <StyledStepperGrid container spacing={0}>
                <StyledStepperNumbers
                  sx={{
                    backgroundColor: activeBackground,
                    color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                  }}
                >
                  03
                </StyledStepperNumbers>
                <StyledGrid item xs={10} sm={10} mm={10} md={10} lg={10}>
                  <StyledStepperTitle>
                    {t.processpage.titleDesign}
                  </StyledStepperTitle>
                  <StyledStepperSubTitle
                    sx={{
                      color:
                        activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                    }}
                  >
                    {t.processpage.titleDesign}
                  </StyledStepperSubTitle>
                  <StyledStepperContent>
                    {t.processpage.contentDesign}
                  </StyledStepperContent>
                  {textData[2].subtitles.map((subtitle) => (
                    <StyledStepperSubText
                      key={subtitle.textId}
                      sx={{
                        color:
                          activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                      }}
                    >
                      {subtitle.text}
                    </StyledStepperSubText>
                  ))}
                </StyledGrid>
              </StyledStepperGrid>

              <StyledStepperGrid container spacing={0}>
                <StyledStepperNumbers
                  sx={{
                    backgroundColor: activeBackground,
                    color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                  }}
                >
                  04
                </StyledStepperNumbers>
                <StyledGrid item xs={10} sm={10} mm={10} md={10} lg={10}>
                  <StyledStepperTitle>
                    {t.processpage.titleDevelopment}
                  </StyledStepperTitle>
                  <StyledStepperSubTitle
                    sx={{
                      color:
                        activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                    }}
                  >
                    {t.processpage.titleDevelopment}
                  </StyledStepperSubTitle>
                  <StyledStepperContent>
                    {t.processpage.contentDevelopment}
                  </StyledStepperContent>
                  {textData[2].subtitles.map((subtitle) => (
                    <StyledStepperSubText
                      key={subtitle.textId}
                      sx={{
                        color:
                          activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                      }}
                    >
                      {subtitle.text}
                    </StyledStepperSubText>
                  ))}
                </StyledGrid>
              </StyledStepperGrid>

              <StyledStepperGrid container spacing={0}>
                <StyledStepperNumbers
                  sx={{
                    backgroundColor: activeBackground,
                    color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                  }}
                >
                  05
                </StyledStepperNumbers>
                <StyledGrid item xs={10} sm={10} mm={10} md={10} lg={10}>
                  <StyledStepperTitle>
                    {t.processpage.titleOnboarding}
                  </StyledStepperTitle>
                  <StyledStepperSubTitle
                    sx={{
                      color:
                        activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                    }}
                  >
                    {t.processpage.titleOnboarding}
                  </StyledStepperSubTitle>
                  <StyledStepperContent>
                    {t.processpage.contentOnboarding}
                  </StyledStepperContent>
                  {textData[2].subtitles.map((subtitle) => (
                    <StyledStepperSubText
                      key={subtitle.textId}
                      sx={{
                        color:
                          activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                      }}
                    >
                      {subtitle.text}
                    </StyledStepperSubText>
                  ))}
                </StyledGrid>
              </StyledStepperGrid>
              {/* {textData.map((text, index) => (
                <StyledStepperGrid container spacing={0} key={index}>
                  <StyledStepperNumbers
                    sx={{
                      backgroundColor: activeBackground,
                      color:
                        activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                    }}
                  >
                    {text.number}
                  </StyledStepperNumbers>
                  <StyledGrid item xs={10} sm={10} mm={10} md={10} lg={10}>
                    <StyledStepperTitle> {text.title}</StyledStepperTitle>
                    <StyledStepperSubTitle
                      sx={{
                        color:
                          activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                      }}
                    >
                      {text.title}
                    </StyledStepperSubTitle>
                    <StyledStepperContent>{text.content}</StyledStepperContent>
                    {text.subtitles.map((subtitle) => (
                      <StyledStepperSubText
                        key={subtitle.textId}
                        sx={{
                          color:
                            activeBackground === "#1e1f26"
                              ? "white"
                              : "#1e1f26",
                        }}
                      >
                        {subtitle.text}
                      </StyledStepperSubText>
                    ))}
                  </StyledGrid>
                </StyledStepperGrid>
              ))} */}
            </Grid>
          </Grid>
        </Parallax>
      </StyledContainer>
    </Box>
  );
};

export default Process;
