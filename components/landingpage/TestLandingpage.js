import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import PiriwebSvg from "./PiriwebSvg";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  minHeight: "100vh",
}));

const StyledHeaderModular = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  padding: "12px",
  transition: "all 1s ease-in-out",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "200",
  color: "#a0a0a0",
  transition: "all 400ms ease-in-out",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const TestLandingpage = (props) => {
  const { t } = props;
  return (
    <StyledContainer
      maxWidth='xxl'
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar t={t}></Navbar>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <StyledHeaderModular variant='mainHeader' component='div'>
              Deine Webentwicklung
            </StyledHeaderModular>
            <StyledHeaderModular variant='mainHeader' component='div'>
              für deine Vision
            </StyledHeaderModular>
          </Box>
          <Box sx={{ width: "70%" }}>
            <StyledSubtitle variant='body2' component='div'>
              Ich entwickle custom code solutions – digitale Lösungen, die
              begeistern. Meine individuellen Applikationen helfen deinem
              Unternehmen, eigene Prozesse zu vereinfachen oder deine
              Internetpräsenz erlebbar zu machen.
            </StyledSubtitle>
          </Box>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Grid
              item
              xs={12}
              sx={{
                height: "706px",
                margin: "6px",
              }}
            >
              <Card sx={{ height: "100%" }}>
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PiriwebSvg />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='div'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "3rem",
                        letterSpacing: "0.3em",
                      }}
                    >
                      PIRI WEB
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#a0a0a0",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      Ihr Partner wenn es um Web Entwicklung geht. Full-Stack
                      Web Lösungen in verschiedensten Bereichen. Du hast eine
                      Idee? hier hast du eine Lösung.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item xs={12} sx={{ height: "400px", margin: "6px" }}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PiriwebSvg />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='body'
                      component='div'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "2rem",
                        letterSpacing: "0.3em",
                      }}
                    >
                      YOUR WEBSITE
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#a0a0a0",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.description1Website}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#a0a0a0",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.descriptionWebsite}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sx={{ height: "300px", margin: "6px" }}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PiriwebSvg />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='body'
                      component='div'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "2rem",
                        letterSpacing: "0.3em",
                      }}
                    >
                      YOUR APPLICATION
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#a0a0a0",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      Ihr Partner wenn es um Web Entwicklung geht. Full-Stack
                      Web Lösungen in verschiedensten Bereichen. Du hast eine
                      Idee? hier hast du eine Lösung.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item xs={12} sx={{ height: "300px", margin: "6px" }}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PiriwebSvg />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='body'
                      component='div'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "2rem",
                        letterSpacing: "0.3em",
                      }}
                    >
                      YOUR MOBILEAPP
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#a0a0a0",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      Ihr Partner wenn es um Web Entwicklung geht. Full-Stack
                      Web Lösungen in verschiedensten Bereichen. Du hast eine
                      Idee? hier hast du eine Lösung.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sx={{ height: "400px", margin: "6px" }}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PiriwebSvg />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='body'
                      component='div'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "2rem",
                        letterSpacing: "0.3em",
                      }}
                    >
                      YOUR ONLINESHOP
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#a0a0a0",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      Ihr Partner wenn es um Web Entwicklung geht. Full-Stack
                      Web Lösungen in verschiedensten Bereichen. Du hast eine
                      Idee? hier hast du eine Lösung.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </StyledContainer>
  );
};

export default TestLandingpage;
