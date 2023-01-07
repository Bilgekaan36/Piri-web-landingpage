import styles from "./Launchpage.module.css";

import React, { useState, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { Box, Container, styled, Typography } from "@mui/material";

import rocket from "../../public/launchpage_assets/rocket.json";
import confetti from "../../public/launchpage_assets/confetti.json";
import Lottie from "lottie-react";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1E1F26",
  position: "relative",
  [theme.breakpoints.up("xl")]: {
    padding: "0px 80px 80px 80px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "18px",
  },
}));

const rocketStyle = {
  //styles transfered to css file
};

const rocketInteractivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.1],
      type: "stop",
      frames: [1],
    },
    {
      visibility: [0.2, 1],
      type: "seek",
      frames: [1, 90],
    },
    // {
    //   visibility: [0.7, 1.0],
    //   type: "loop",
    //   frames: [45, 60],
    // },
  ],
};

const confettiStyle = {
  //styles transfered to css file
};

const confettiInteractivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.1],
      type: "stop",
      frames: [1],
    },
    {
      visibility: [0.2, 1],
      type: "seek",
      frames: [1, 90],
    },
    // {
    //   visibility: [0.7, 1.0],
    //   type: "loop",
    //   frames: [45, 60],
    // },
  ],
};

const Launchpage = ({ t }) => {
  const [progress, setProgress] = useState(100);

  const handleProgress = (data) => {
    setProgress(data);
  };

  return (
    <StyledContainer
      disableGutters
      maxWidth='false'
      sx={{
        position: "relative",
        height: "240vh",
        backgroundColor: "#1E1F26",
        backgroundImage: `linear-gradient(to top, white ${progress}%, #1E1F26 ${progress}%)`,
        transition: "400ms all ease-in-out",
      }}
    >
      <Parallax
        style={{
          height: "100px",
          width: "100px",
          // backgroundColor: "green",
          position: "absolute",
          top: "-110px",
          left: 0,
        }}
        onEnter={() => {}}
        onExit={() => {}}
      />

      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant='bigTitle'
          sx={{ color: "white", fontSize: { xs: "8vw", sm: "6vw", md: "5vw" } }}
        >
          {t.launchpage.launchTitle}
        </Typography>
        <Typography
          variant='smallTitle'
          sx={{
            color: "white",
            fontSize: { xs: "4.5vw", sm: "3vw", md: "2vw", fontWeight: "500" },
            paddingTop: { xs: "32px", md: "64px", mm: "100px" },
          }}
        >
          {t.launchpage.launchsubTitle1}
        </Typography>
        <Typography
          variant='smallTitle'
          sx={{
            color: "white",
            fontSize: { xs: "4.5vw", sm: "3vw", md: "2vw", fontWeight: "500" },
          }}
        >
          {t.launchpage.launchsubTitle2}
        </Typography>
      </Box>
      <Lottie
        animationData={rocket}
        style={rocketStyle}
        interactivity={rocketInteractivity}
        className={styles.rocket}
      />
      <Lottie
        animationData={confetti}
        style={confettiStyle}
        interactivity={confettiInteractivity}
        className={styles.confetti}
      />
      <Parallax
        onProgressChange={(progressData) => {
          const result = 100 - progressData * 100;
          handleProgress(result);
        }}
        style={{
          position: "absolute",
          top: "100vh",
          left: "50%",
        }}
      ></Parallax>
    </StyledContainer>
  );
};

export default Launchpage;
