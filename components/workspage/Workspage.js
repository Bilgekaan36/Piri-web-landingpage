import { Container, styled, Typography, Box, Grid } from "@mui/material";
import { useInView, animated } from "@react-spring/web";

import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import ParallaxHeader from "../ParallaxHeader";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
  marginTop: "200px",
}));

const StyledFooterBox = styled(Box)(({ theme }) => ({
  padding: "12vw 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "14vw 0",
  },
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
  lineHeight: "1.2",
  fontWeight: "700",
  textAlign: "center",
  fontSize: "6.5vw",
  [theme.breakpoints.down("lg")]: {
    fontSize: "7.5vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "8.5vw",
  },
}));

const StyledFooterAuthor = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const Workspage = ({ t }) => {
  const [activeBackground, setActiveBackground] = useState("white");
  const handleStep = (data) => {
    setActiveBackground(data);
  };

  const [ref1, springs1] = useInView(
    () => ({
      from: {
        x: "-100%",
      },
      to: {
        x: "0",
      },
      config: {
        duration: 400,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  const [ref2, springs2] = useInView(
    () => ({
      from: {
        x: "100%",
      },
      to: {
        x: "0",
      },
      config: {
        duration: 400,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  const [ref3, springs3] = useInView(
    () => ({
      from: {
        x: "-100%",
      },
      to: {
        x: "0",
      },
      config: {
        duration: 400,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  const [ref4, springs4] = useInView(
    () => ({
      from: {
        x: "100%",
      },
      to: {
        x: "0",
      },
      config: {
        duration: 400,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  const [ref5, springs5] = useInView(
    () => ({
      from: {
        x: "-100%",
      },
      to: {
        x: "0",
      },
      config: {
        duration: 400,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  const [ref6, springs6] = useInView(
    () => ({
      from: {
        x: "100%",
      },
      to: {
        x: "0",
      },
      config: {
        duration: 400,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  return (
    <Box
      sx={{
        backgroundColor: activeBackground,
      }}
    >
      <ParallaxHeader
        firstTitle={t.workspage.title1}
        secondTitle={t.workspage.title2}
        activeBackground='#1e1f26'
      />
      <Container
        maxWidth='false'
        sx={{
          backgroundColor: activeBackground,
          position: "relative",
          padding: { xs: "0px", sm: "0px 16px" },
        }}
      >
        <StyledContainer
          disableGutters
          maxWidth='xxl'
          sx={{ backgroundColor: activeBackground }}
        >
          <Grid container spacing={0} sx={{ overflow: "hidden" }}>
            <animated.div ref={ref1} style={springs1}>
              <Grid item xs={12} sx={{ overflow: "hidden" }}>
                <video
                  src={require("../../public/videos/example.mp4")}
                  type='video/mp4'
                  muted
                  playsInline
                  height='100%'
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  autoPlay={true}
                  loop
                />
              </Grid>
            </animated.div>
            <animated.div ref={ref2} style={springs2}>
              <Grid item xs={12} sx={{ overflow: "hidden" }}>
                <video
                  src={require("../../public/videos/admin.mp4")}
                  type='video/mp4'
                  muted
                  playsInline
                  height='100%'
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  autoPlay={true}
                  loop
                />
              </Grid>
            </animated.div>
            <animated.div ref={ref3} style={springs3}>
              <Grid item xs={12} sx={{ overflow: "hidden" }}>
                <video
                  src={require("../../public/videos/bitcoin.mp4")}
                  type='video/mp4'
                  muted
                  playsInline
                  height='100%'
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  autoPlay={true}
                  loop
                />
              </Grid>
            </animated.div>
            <animated.div ref={ref4} style={springs4}>
              <Grid item xs={12} sx={{ overflow: "hidden" }}>
                <video
                  src={require("../../public/videos/todo.mp4")}
                  type='video/mp4'
                  muted
                  playsInline
                  height='100%'
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  autoPlay={true}
                  loop
                />
              </Grid>
            </animated.div>
            <animated.div ref={ref5} style={springs5}>
              <Grid item xs={12} sx={{ overflow: "hidden" }}>
                <video
                  src={require("../../public/videos/example.mp4")}
                  type='video/mp4'
                  muted
                  playsInline
                  height='100%'
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  autoPlay={true}
                  loop
                />
              </Grid>
            </animated.div>
            <animated.div ref={ref6} style={springs6}>
              <Grid item xs={12} sx={{ overflow: "hidden" }}>
                <video
                  src={require("../../public/videos/admin.mp4")}
                  type='video/mp4'
                  muted
                  playsInline
                  height='100%'
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  autoPlay={true}
                  loop
                />
              </Grid>
            </animated.div>
          </Grid>
          <StyledFooterBox sx={{ backgroundColor: activeBackground }}>
            <StyledFooterText
              variant='bigTitle'
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.workspage.quote1}
            </StyledFooterText>
            <StyledFooterText
              variant='bigTitle'
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.workspage.quote2}
            </StyledFooterText>
            <StyledFooterAuthor
              variant='h4'
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              Don Draper
            </StyledFooterAuthor>
          </StyledFooterBox>
        </StyledContainer>
        <Parallax
          style={{
            height: "50px",
            width: "100px",
            backgroundColor: "transparent",
            position: "absolute",
            bottom: "12%",
            left: 0,
            zIndex: 10,
          }}
          onProgressChange={(progressData) => {
            if (progressData >= 1) {
              handleStep("#1e1f26");
            }
            if (progressData < 1) {
              handleStep("white");
            }
          }}
        />
      </Container>
    </Box>
  );
};

export default Workspage;
