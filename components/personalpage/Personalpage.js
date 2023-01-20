import React, { useState } from "react";
import styles from "./Personalpage.module.css";
import Image from "next/image";
import profil from "../../public/profil.png";
import { Parallax } from "react-scroll-parallax";
import { useInView, animated } from "@react-spring/web";

import { Container, styled, Grid, Typography, Box } from "@mui/material";
import ParallaxHeader from "../ParallaxHeader";

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
  fontSize: "3.2rem",
  fontWeight: "900",
  lineHeight: 1.2,
  color: "#1e1f26",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.9rem",
    marginTop: "80px",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#1e1f26",
  marginTop: "32px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.1rem",
    marginTop: "24px",
  },
}));

const Personalpage = (props) => {
  const t = props.t;
  const [activeBackground, setActiveBackground] = useState("white");

  const handleBackground = (data) => {
    setActiveBackground(data);
    props.exportActiveBackground(data);
  };

  const [ref1, springs1] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref2, springs2] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref3, springs3] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref4, springs4] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
        position: "relative",
      }}
    >
      <StyledContainer
        disableGutters
        maxWidth='false'
        sx={{
          position: "relative",
          backgroundColor: activeBackground === "white" ? "white" : "#1e1f26",
        }}
      >
        <Parallax
          style={{
            height: "50px",
            width: "100px",
            backgroundColor: "transparent",
            position: "absolute",
            bottom: "40%",
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

        <ParallaxHeader
          firstTitle={t.personalpage.title1}
          secondTitle={t.personalpage.title2}
          activeBackground='#1e1f26'
        />
        <Container maxWidth='xxl' sx={{ display: "flex" }}>
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
              sm={6}
              md={6}
              mm={6}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <animated.div ref={ref1} style={springs1}>
                <StyledHeadTitle
                  sx={{
                    color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                  }}
                >
                  {t.personalpage.personalTitle1}
                </StyledHeadTitle>
              </animated.div>
              <animated.div ref={ref2} style={springs2}>
                <StyledHeadContent
                  sx={{
                    color: activeBackground === "#1e1f26" ? "white" : "#848484",
                  }}
                >
                  {t.personalpage.personalContent1}
                </StyledHeadContent>
              </animated.div>
              <animated.div ref={ref3} style={springs3}>
                <StyledHeadContent
                  sx={{
                    color: activeBackground === "#1e1f26" ? "white" : "#848484",
                  }}
                >
                  {t.personalpage.personalContent2}
                </StyledHeadContent>
              </animated.div>
              <animated.div ref={ref4} style={springs4}>
                <StyledHeadContent
                  sx={{
                    color: activeBackground === "#1e1f26" ? "white" : "#848484",
                  }}
                >
                  {t.personalpage.personalContent3}
                </StyledHeadContent>
              </animated.div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              mm={6}
              lg={6}
              xl={6}
              xxl={6}
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
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
      <ParallaxHeader
        firstTitle={t.footerpage.title1}
        secondTitle={t.footerpage.title1}
        activeBackground={activeBackground}
      />
    </Box>
  );
};

export default Personalpage;
