import React from "react";

import { Container, styled, Grid, Typography, Box } from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#6691c3",
  height: "100vh",
  display: "flex",
  [theme.breakpoints.up("md")]: {
    padding: "0 80px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0 18px",
  },
}));

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  height: "30vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "12vh",
  },
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "348px",
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

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  paddingTop: "348px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    paddingTop: "18px",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.65rem",
  marginBottom: "32px",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
  },
}));

const Footerpage = () => {
  return (
    <StyledContainer maxWidth='false' sx={{}}>
      <StyledHeaderGrid
        container
        spacing={0}
        sx={{ padding: { xs: "0 10px" } }}
      >
        <StyledLeftTitleGrid item xs={5}>
          <StyledLeftTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            LET'S
          </StyledLeftTitleText>
          <StyledLeftTitleText
            variant='bigTitle'
            sx={{ paddingLeft: "100px", color: "#1e1f26" }}
          >
            TALK
          </StyledLeftTitleText>
          <StyledLeftTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            ABOUT
          </StyledLeftTitleText>
        </StyledLeftTitleGrid>
        <StyledRightTitleGrid item xs={4}>
          <StyledHeadContent>
            Lass uns mit einem unverbindlichem Erstgespräch starten. Wir schauen
            gemeinsam über Deine aktuelle Website, Deine Ziele und
            Herausforderungen und wie wir diese lösen können.
          </StyledHeadContent>
          <StyledHeadContent>
            Außerdem erhältst Du in diesem Erstgespräch praktische Tipps für
            Deine Website, die Du direkt selbst umsetzen kannst.
          </StyledHeadContent>
          <StyledHeadContent>
            Ich freue mich Dich kennenzulernen.
          </StyledHeadContent>
        </StyledRightTitleGrid>
      </StyledHeaderGrid>
    </StyledContainer>
  );
};

export default Footerpage;
