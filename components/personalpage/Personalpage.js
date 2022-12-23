import React from "react";
import styles from "./Personalpage.module.css";

import { Container, styled, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import profil from "../../public/profil.png";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  //   height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {
    padding: "80px 80px 0px 80px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "18px",
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
        display: isShowWorkspage ? "flex" : "none",
        paddingTop: { xs: "42px", md: "160px" },
      }}
    >
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
