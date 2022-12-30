import React from "react";
import { Container, styled, Grid, Typography, Box } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import discoveryCall from "../../public/processpage_assets/discovery-call.json";
import strategy from "../../public/processpage_assets/strategy.json";
import design from "../../public/processpage_assets/design.json";
import development from "../../public/processpage_assets/development.json";
import onboarding from "../../public/processpage_assets/onboarding.json";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    padding: "80px",
  },
  [theme.breakpoints.down("md")]: {},
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
  width: "100%",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
    fontWeight: "700",
    borderBottom: "1px solid black",
    marginBottom: "16px",
  },
}));

const Process = (props) => {
  return (
    <StyledContainer
      maxWidth='false'
      sx={{
        display: props.isShowWorkspage ? "block" : "none",
      }}
    >
      <Box>
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
        <Box>
          {textData.map((text) => (
            <div key={text.title}>
              <StyledHeadTitle sx={{ display: { xs: "inherit", md: "none" } }}>
                {text.title}
              </StyledHeadTitle>

              <Grid
                container
                spacing={0}
                key={text.title}
                sx={{
                  paddingBottom: { xs: "64px", md: "128px" },
                  display: "flex",
                  flexDirection: { xs: "column-reverse", md: "row" },
                  height: { xs: "", md: "" },
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                  }}
                >
                  <StyledHeadTitle
                    sx={{ display: { xs: "none", md: "inherit" } }}
                  >
                    {text.title}
                  </StyledHeadTitle>
                  <StyledHeadContent>{text.content}</StyledHeadContent>
                  {text.subtitles.map((subtitle) => (
                    <StyledSubtitle key={subtitle}>{subtitle}</StyledSubtitle>
                  ))}
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: "800px" },
                      overflow: "hidden",
                    }}
                  >
                    <Player
                      autoplay
                      loop={true}
                      src={text.lottieFile}
                      // keepLastFrame={true}
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Controls
                        visible={false}
                        buttons={["play", "repeat", "frame", "debug"]}
                      />
                    </Player>
                  </Box>
                </Grid>
              </Grid>
            </div>
          ))}
        </Box>
      </Box>
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
    lottieFile: discoveryCall,
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
    lottieFile: strategy,
  },
  {
    title: "DESIGN",
    content:
      " Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.Bevor es allerdings losgeht, finden wir heraus wie und obich Dir überhaupt helfen kann. Welche Anforderungen hast du an deine neue Webseite? Wieso brauchst du überhaupt eine neue Webseite? Welche Ziele hast du und welche Probleme können wir mit einer neuen Webseite lösen?",
    subtitles: ["High-End Webdesign", "Interaktiver Prototyp des Designs"],
    lottieFile: design,
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
    lottieFile: development,
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
    lottieFile: onboarding,
  },
];

export default Process;
