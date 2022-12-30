import React from "react";
import styles from "./Personalpage.module.css";

import { Container, styled, Grid, Typography } from "@mui/material";
import Image from "next/image";
import profil from "../../public/profil.png";

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  height: "30vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "12vh",
  },
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
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

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  height: "100vh",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    padding: "0px 80px 0px 80px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0px 18px 0px 18px",
    height: "inherit",
  },
}));

const StyledHeadTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "900",
  color: "#1e1f26",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#1e1f26",
  marginTop: "100px",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
    paddingBottom: "52px",
    marginTop: "50px",
  },
}));

const Personalpage = ({ isShowWorkspage }) => {
  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        display: isShowWorkspage ? "flex" : "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <StyledHeaderGrid container spacing={0}>
        <StyledLeftTitleGrid item xs={3} md={5}>
          <StyledLeftTitleText variant='smallTitle' sx={{ color: "#1e1f26" }}>
            ABOUT
          </StyledLeftTitleText>
          <StyledLeftTitleText
            variant='smallTitle'
            sx={{ paddingLeft: "12px", color: "#1e1f26" }}
          >
            MYSELF
          </StyledLeftTitleText>
        </StyledLeftTitleGrid>
        <StyledRightTitleGrid item xs={9} md={7}>
          <StyledRightTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            INTERN
          </StyledRightTitleText>
          <StyledRightTitleText
            variant='bigTitle'
            sx={{
              color: "#1e1f26",
              paddingLeft: { xl: "64px", xs: "12px" },
            }}
          >
            PERSONALITY
          </StyledRightTitleText>
        </StyledRightTitleGrid>
      </StyledHeaderGrid>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={profil} alt='profile' className={styles.profileImage} />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <StyledHeadTitle>Deine Web-Applikation,</StyledHeadTitle>
          <StyledHeadTitle>deine Signifikanz!</StyledHeadTitle>
          <StyledHeadContent>
            In einem persönlichen Webflow Workshop zeige ich Dir wie Du schnell
            und problemlos Änderungen auf Deiner neuen Webseite vornehmen
            kannst. Zusätzlich bekommst Du personalisierte Webflow Video
            Tutorials, die Du jederzeit abrufen kannst. Editiere Deine Webflow
            Webseite ohne kompliziertes Backend oder gar zusätzlichem
            Programmierer. So einfach ist das. In einem persönlichen Webflow
            Workshop zeige ich Dir wie Du schnell und problemlos Änderungen auf
            Deiner neuen Webseite vornehmen kannst. Zusätzlich bekommst Du
            personalisierte Webflow Video Tutorials, die Du jederzeit abrufen
            kannst. Editiere Deine Webflow Webseite ohne kompliziertes Backend
            oder gar zusätzlichem Programmierer. So einfach ist das.
          </StyledHeadContent>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Personalpage;
