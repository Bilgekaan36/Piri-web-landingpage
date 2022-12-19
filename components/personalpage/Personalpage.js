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
    padding: "0 80px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0 18px",
  },
}));

const StyledHeadTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "900",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
  },
}));

const Personalpage = ({ isShowWorkspage }) => {
  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        display: isShowWorkspage ? "flex" : "none",
        marginTop: { xs: "120px", md: "240px" },
      }}
    >
      <Grid container spacing={0}>
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
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledHeadTitle>
            Deine Web-Applikation, deine Signifikanz!
          </StyledHeadTitle>
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
