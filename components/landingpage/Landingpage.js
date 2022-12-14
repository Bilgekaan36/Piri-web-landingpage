import React, { useEffect } from "react";
import styles from "./Landingpage.module.css";

import { Box, Container, styled, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { Parallax } from "react-scroll-parallax";
import useBodyScrollLock from "../useBodyScrollLock";

const StyledHeader = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    letterSpacing: "-0.1rem",
  },
}));

const StyledHeaderModular = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  padding: "24px",
  minWidth: 2000,
  transition: "all 1s ease-in-out",
  color: "#1e1f26",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    letterSpacing: "-0.1em",
    minWidth: 300,
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  color: "#1e1f26",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    fontWeight: 200,
    letterSpacing: "0rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    fontWeight: 200,
    letterSpacing: "0rem",
  },
}));

const StyledHeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: "332px",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  height: "100vh",
  position: "relative",
}));

const StyledWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Landingpage = (props) => {
  const [isLocked, toggle] = useBodyScrollLock();

  const setIsLocked = (data) => {
    props.setIsLocked(data);
  };
  return (
    <div>
      <StyledContainer disableGutters maxWidth='false'>
        <Navbar></Navbar>
        <StyledWrapper>
          <StyledHeaderBox>
            <Box
              sx={{
                mb: { xs: 2, md: 10 },
              }}
            >
              <StyledHeader variant='secondHeader' component='div'>
                DEINE
              </StyledHeader>
              <StyledHeaderModular variant='mainHeader' component='div'>
                WEBAPPLIKATION
              </StyledHeaderModular>
              <StyledHeader variant='bigTitle' component='div'>
                modern & innovativ
              </StyledHeader>
            </Box>
            <Box>
              <StyledSubtitle variant='h5' component='div'>
                Bringe deine Vison ins Web!
              </StyledSubtitle>
              <StyledSubtitle variant='h5' component='div'>
                Ob Frontend- oder Backend du bekommst hier alles
              </StyledSubtitle>
              <StyledSubtitle variant='h5' component='div'>
                aus einer Hand
              </StyledSubtitle>
            </Box>
            {/* <section className={styles.section}>
            <video
              className={styles.video}
              src='/video.mp4'
              muted
              autoPlay={"autoplay"}
              poster='/background.jpg'
              loop
            >
              video tag is not supported by your browser
            </video>
            <h2>
              DEINE <br /> WEBSITE
              <span> modern & innovativ</span>
            </h2>
          </section> */}
          </StyledHeaderBox>
          <Box className={styles.iconArrow} />
        </StyledWrapper>
      </StyledContainer>
    </div>
  );
};

export default Landingpage;
