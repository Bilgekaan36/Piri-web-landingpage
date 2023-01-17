import styles from "./BenefitsStepper.module.css";

import React from "react";
import { Typography, styled, Grid } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useInView, animated } from "@react-spring/web";

import conversion from "../../public/benefitspage_assets/conversion.json";
import webdesign from "../../public/benefitspage_assets/web-design.json";
import webdevelopment from "../../public/benefitspage_assets/web-development.json";
import responsivedesign from "../../public/benefitspage_assets/responsive-design.json";
import brandingdesign from "../../public/benefitspage_assets/branding-design.json";
import mission from "../../public/benefitspage_assets/mission.json";

const StyledStepperTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "400",
  color: "#848484",
  transition: "all 400ms ease-in-out",
  [theme.breakpoints.down("xxl")]: {},
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
}));

const StyledStepperSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "500",
  color: "white",
  marginBottom: "12px",
  transition: "all 400ms ease-in-out",

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
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
}));

const StyledStepperContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "200",
  color: "#848484",
  transition: "all 400ms ease-in-out",
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
  marginBottom: "240px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "120px",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 400ms ease-in-out",
  height: "350px",

  [theme.breakpoints.down("lg")]: {
    height: "300px",
  },
  [theme.breakpoints.down("mm")]: {
    height: "250px",
  },
  [theme.breakpoints.down("md")]: {
    height: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "300px",
  },
}));

const BenefitsStepper = ({ activeBackground, t }) => {
  const [ref1, springs1] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-25% 0%",
    }
  );

  const [ref2, springs2] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-25% 0%",
    }
  );

  const [ref3, springs3] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-25% 0%",
    }
  );

  const [ref4, springs4] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-25% 0%",
    }
  );

  const [ref5, springs5] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-25% 0%",
    }
  );

  const [ref6, springs6] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-25% 0%",
    }
  );

  return (
    <>
      <animated.div ref={ref1} style={springs1}>
        <StyledStepperGrid container spacing={0} sx={{ flexDirection: "row" }}>
          <StyledGrid item xs={12} sm={4} mm={4} md={4} lg={3}>
            <Player
              autoplay
              loop={true}
              src={conversion}
              className={styles.lottiePlayer}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </StyledGrid>
          <StyledGrid item xs={12} sm={6} mm={6} md={6} lg={5}>
            <StyledStepperTitle>{t.benefitsStepper.label1}</StyledStepperTitle>
            <StyledStepperSubTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.benefitsStepper.sublabel1}
            </StyledStepperSubTitle>
            <StyledStepperContent>
              {t.benefitsStepper.description1}
            </StyledStepperContent>
          </StyledGrid>
        </StyledStepperGrid>
      </animated.div>
      <animated.div ref={ref2} style={springs2}>
        <StyledStepperGrid
          container
          spacing={0}
          sx={{ flexDirection: "row-reverse" }}
        >
          <StyledGrid item xs={12} sm={4} mm={4} md={4} lg={3}>
            <Player
              autoplay
              loop={true}
              src={webdesign}
              className={styles.lottiePlayer}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </StyledGrid>
          <StyledGrid item xs={12} sm={6} mm={6} md={6} lg={5}>
            <StyledStepperTitle>{t.benefitsStepper.label2}</StyledStepperTitle>
            <StyledStepperSubTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.benefitsStepper.sublabel2}
            </StyledStepperSubTitle>
            <StyledStepperContent>
              {t.benefitsStepper.description2}
            </StyledStepperContent>
          </StyledGrid>
        </StyledStepperGrid>
      </animated.div>
      <animated.div ref={ref3} style={springs3}>
        <StyledStepperGrid container spacing={0} sx={{ flexDirection: "row" }}>
          <StyledGrid item xs={12} sm={4} mm={4} md={4} lg={3}>
            <Player
              autoplay
              loop={true}
              src={webdevelopment}
              className={styles.lottiePlayer}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </StyledGrid>
          <StyledGrid item xs={12} sm={6} mm={6} md={6} lg={5}>
            <StyledStepperTitle>{t.benefitsStepper.label3}</StyledStepperTitle>
            <StyledStepperSubTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.benefitsStepper.sublabel3}
            </StyledStepperSubTitle>
            <StyledStepperContent>
              {t.benefitsStepper.description3}
            </StyledStepperContent>
          </StyledGrid>
        </StyledStepperGrid>
      </animated.div>
      <animated.div ref={ref4} style={springs4}>
        <StyledStepperGrid
          container
          spacing={0}
          sx={{ flexDirection: "row-reverse" }}
        >
          <StyledGrid item xs={12} sm={4} mm={4} md={4} lg={3}>
            <Player
              autoplay
              loop={true}
              src={responsivedesign}
              className={styles.lottiePlayer}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </StyledGrid>
          <StyledGrid item xs={12} sm={6} mm={6} md={6} lg={5}>
            <StyledStepperTitle>{t.benefitsStepper.label4}</StyledStepperTitle>
            <StyledStepperSubTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.benefitsStepper.sublabel4}
            </StyledStepperSubTitle>
            <StyledStepperContent>
              {t.benefitsStepper.description4}
            </StyledStepperContent>
          </StyledGrid>
        </StyledStepperGrid>
      </animated.div>
      <animated.div ref={ref5} style={springs5}>
        <StyledStepperGrid container spacing={0} sx={{ flexDirection: "row" }}>
          <StyledGrid item xs={12} sm={4} mm={4} md={4} lg={3}>
            <Player
              autoplay
              loop={true}
              src={brandingdesign}
              className={styles.lottiePlayer}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </StyledGrid>
          <StyledGrid item xs={12} sm={6} mm={6} md={6} lg={5}>
            <StyledStepperTitle>{t.benefitsStepper.label5}</StyledStepperTitle>
            <StyledStepperSubTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.benefitsStepper.sublabel5}
            </StyledStepperSubTitle>
            <StyledStepperContent>
              {t.benefitsStepper.description5}
            </StyledStepperContent>
          </StyledGrid>
        </StyledStepperGrid>
      </animated.div>
      <animated.div ref={ref6} style={springs6}>
        <StyledStepperGrid
          container
          spacing={0}
          sx={{ flexDirection: "row-reverse" }}
        >
          <StyledGrid item xs={12} sm={4} mm={4} md={4} lg={3}>
            <Player
              autoplay
              loop={true}
              src={mission}
              className={styles.lottiePlayer}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </StyledGrid>
          <StyledGrid item xs={12} sm={6} mm={6} md={6} lg={5}>
            <StyledStepperTitle>{t.benefitsStepper.label6}</StyledStepperTitle>
            <StyledStepperSubTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.benefitsStepper.sublabel6}
            </StyledStepperSubTitle>
            <StyledStepperContent>
              {t.benefitsStepper.description6}
            </StyledStepperContent>
          </StyledGrid>
        </StyledStepperGrid>
      </animated.div>
    </>
  );
};

export default BenefitsStepper;
