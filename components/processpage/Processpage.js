import React from "react";
import { Container, styled, Grid, Typography, Box } from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    padding: "80px",
  },
  [theme.breakpoints.down("md")]: {
    // padding: "18px",
  },
}));

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  height: "45vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "20vh",
  },
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
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

const StyledSmallTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
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

const StyledHeadTitle = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  fontWeight: "900",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "700",
  borderBottom: "1px solid black",
  marginBottom: "32px",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
    fontWeight: "700",
    borderBottom: "1px solid black",
    marginBottom: "16px",
  },
}));

const Process = ({ isShowWorkspage }) => {
  return (
    <StyledContainer
      maxWidth='false'
      sx={{ display: isShowWorkspage ? "block" : "none" }}
    >
      <StyledHeaderGrid container spacing={0}>
        <StyledRightTitleGrid item xs={7}>
          <StyledRightTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            YOUR
          </StyledRightTitleText>
          <StyledRightTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            APPLICATION
          </StyledRightTitleText>
          <StyledSmallTitle variant='h4' sx={{ color: "#1e1f26" }}>
            Alles aus einer Hand wie aus einem Guss.
          </StyledSmallTitle>
          <StyledSmallTitle variant='h4' sx={{ color: "#1e1f26" }}>
            Ein Prozess. Ein Preis.
          </StyledSmallTitle>
        </StyledRightTitleGrid>
        <StyledLeftTitleGrid item xs={5}>
          <StyledLeftTitleText variant='smallTitle' sx={{ color: "#1e1f26" }}>
            THE PROCESS
          </StyledLeftTitleText>
        </StyledLeftTitleGrid>
      </StyledHeaderGrid>
      <Grid container spacing={0}>
        {textData.map((text) => (
          <Box
            key={text.title}
            sx={{ marginBottom: { xs: "32px", md: "200px" } }}
          >
            <Grid item xs={12} md={6}>
              <StyledHeadTitle>{text.title}</StyledHeadTitle>
              <StyledHeadContent>{text.content}</StyledHeadContent>
            </Grid>
            {text.subtitles.map((subtitle) => (
              <Grid item xs={12} md={6.5} key={subtitle}>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
              </Grid>
            ))}
          </Box>
        ))}
      </Grid>
    </StyledContainer>
  );
};

const textData = [
  {
    title: "DISCOVERY CALL",
    content:
      " Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.Bevor es allerdings losgeht, finden wir heraus wie und obich Dir überhaupt helfen kann. Welche Anforderungen hast du an deine neue Webseite? Wieso brauchst du überhaupt eine neue Webseite? Welche Ziele hast du und welche Probleme können wir mit einer neuen Webseite lösen?",
    subtitles: [
      "Wir lernen uns besser kennen",
      "Wie kann ich dir am besten helfen?",
      "Verstehen welche Ziele Du mit der Webseite hast",
    ],
  },
  {
    title: "CONCEPT & STRATEGY",
    content:
      " Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.Bevor es allerdings losgeht, finden wir heraus wie und obich Dir überhaupt helfen kann. Welche Anforderungen hast du an deine neue Webseite? Wieso brauchst du überhaupt eine neue Webseite? Welche Ziele hast du und welche Probleme können wir mit einer neuen Webseite lösen?",
    subtitles: [
      "UX Design",
      "Wireframes",
      "Interaktiver Prototyp der Wireframes",
    ],
  },
  {
    title: "DESIGN",
    content:
      " Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.Bevor es allerdings losgeht, finden wir heraus wie und obich Dir überhaupt helfen kann. Welche Anforderungen hast du an deine neue Webseite? Wieso brauchst du überhaupt eine neue Webseite? Welche Ziele hast du und welche Probleme können wir mit einer neuen Webseite lösen?",
    subtitles: ["High-End Webdesign", "Interaktiver Prototyp des Designs"],
  },
  {
    title: "DEVELOPMENT",
    content:
      " Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.Bevor es allerdings losgeht, finden wir heraus wie und obich Dir überhaupt helfen kann. Welche Anforderungen hast du an deine neue Webseite? Wieso brauchst du überhaupt eine neue Webseite? Welche Ziele hast du und welche Probleme können wir mit einer neuen Webseite lösen?",
    subtitles: [
      "Custom React Website",
      "Modulares Webdesign System",
      "Server Side Rendering",
      "React Javascript",
    ],
  },
  {
    title: "ONBOARDING",
    content:
      " Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.Bevor es allerdings losgeht, finden wir heraus wie und obich Dir überhaupt helfen kann. Welche Anforderungen hast du an deine neue Webseite? Wieso brauchst du überhaupt eine neue Webseite? Welche Ziele hast du und welche Probleme können wir mit einer neuen Webseite lösen?",
    subtitles: [
      "Hosting der Applikation",
      "Übergabe der Benutzerdaten und Lizenzen",
      "Hosting der Website",
      "Übergabe der Benutzerdaten und Formularen",
    ],
  },
  {
    title: "LAUNCHING",
    content:
      " Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.Bevor es allerdings losgeht, finden wir heraus wie und obich Dir überhaupt helfen kann. Welche Anforderungen hast du an deine neue Webseite? Wieso brauchst du überhaupt eine neue Webseite? Welche Ziele hast du und welche Probleme können wir mit einer neuen Webseite lösen?",
    subtitles: [
      "Service Anfragen und Betreuung",
      "technische Informationen zur Wartung",
      "Service Anfragen und Produkte",
      "technische Informationen zur Umsetzung",
    ],
  },
];

export default Process;
