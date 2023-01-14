import {
  Box,
  Button,
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
import * as Scroll from "react-scroll";

import Navbar from "./Navbar";
import PiriwebSvg from "./landingpage_svg/PiriwebSvg";
import WebsiteSvg from "./landingpage_svg/WebsiteSvg";
import MobileSvg from "./landingpage_svg/MobileSvg";
import OnlineshopSvg from "./landingpage_svg/OnlineshopSvg";
import ApplicationSvg from "./landingpage_svg/ApplicationSvg";
import StartSvg from "./landingpage_svg/StartSvg";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  minHeight: "100vh",
}));

const StyledHeaderModular = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  padding: "12px",
  transition: "all 1s ease-in-out",
  [theme.breakpoints.down("xxl")]: {
    fontSize: "8rem",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "7rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "6rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "200",
  color: "#848484",
  marginTop: "32px",
  transition: "all 400ms ease-in-out",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

const TestLandingpage = (props) => {
  const { t } = props;
  let ScrollLink = Scroll.Link;
  return (
    <StyledContainer
      disableGutters
      maxWidth='xxl'
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth='xxl'>
        <Navbar t={t}></Navbar>
      </Container>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            // height: { xs: "100vh", sm: "60vh", xl: "45vh" },
            height: { xs: "650px", md: "600px", mm: "600px", lg: "800px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <StyledHeaderModular variant='mainHeader' component='h1'>
              {t.landingpage.mainHeader1}
            </StyledHeaderModular>
            <StyledHeaderModular variant='mainHeader' component='h2'>
              {t.landingpage.mainHeader2}
            </StyledHeaderModular>
          </Box>
          <Box sx={{ width: { xs: "90%", sm: "80%" } }}>
            <StyledSubtitle variant='body2' component='h2'>
              {t.landingpage.secondHeader}
            </StyledSubtitle>
          </Box>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={12} xl={4}>
            <Grid
              item
              xs={12}
              sx={{
                height: "756px",
                margin: "6px",
              }}
            >
              <ScrollLink
                to='footer'
                spy={true}
                smooth={true}
                offset={0}
                duration={3000}
              >
                <Card
                  sx={{
                    height: "100%",
                    border: "1px solid #E9E9E9",
                    boxShadow: "1px 1px 24px #E9E9E9",
                  }}
                >
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
                    <CardContent
                      sx={{
                        flexGrow: 0.25,
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        width: "80%",
                      }}
                    >
                      <Typography
                        variant='body2'
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "200",
                          color: "#848484",
                          transition: "all 400ms ease-in-out",
                        }}
                      >
                        {t.landingpage.companyContent}
                      </Typography>
                    </CardContent>
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#0170F3",
                          padding: " 6px 8px",
                          borderRadius: "4px",
                          boxShadow: "1px 1px 12px #77adea",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant='body2'
                          sx={{
                            color: "white",
                            fontSize: {
                              xxl: "1.3rem",
                              xl: "1rem",
                              sm: "0.9rem",
                              xs: "0.9rem",
                            },
                            fontWeight: "200",
                            transition: "all 400ms ease-in-out",
                            backgroundColor: "1E1F26",
                            lineHeight: 1.75,
                            marginRight: "6px",
                          }}
                        >
                          {t.landingpage.companyButton}
                        </Typography>
                        <StartSvg />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ScrollLink>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Grid
              item
              xs={12}
              sx={{ height: { xs: "600px", lg: "400px" }, margin: "6px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid #E9E9E9",
                  boxShadow: "1px 1px 24px #E9E9E9",
                }}
              >
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
                      marginTop: "16px",
                    }}
                  >
                    <WebsiteSvg />
                  </Box>
                  <CardContent sx={{ paddingBottom: "0px" }}>
                    <Typography
                      gutterBottom
                      variant='body'
                      component='h3'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "2rem",
                        margin: "0px",
                      }}
                    >
                      {t.landingpage.labelWebsite}
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ width: "70%" }}>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#848484",
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
                        color: "#848484",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.description2Website}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ height: { xs: "550px", lg: "350px" }, margin: "6px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid #E9E9E9",
                  boxShadow: "1px 1px 24px #E9E9E9",
                }}
              >
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
                      marginTop: "16px",
                    }}
                  >
                    <ApplicationSvg />
                  </Box>
                  <CardContent sx={{ paddingBottom: "0px" }}>
                    <Typography
                      gutterBottom
                      variant='body'
                      component='h3'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "2rem",
                        margin: "0px",
                        paddingBottom: "0px",
                      }}
                    >
                      {t.landingpage.labelApplication}
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ width: "70%" }}>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#848484",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.description1Application}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#848484",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.description2Application}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Grid
              item
              xs={12}
              sx={{ height: { xs: "550px", lg: "350px" }, margin: "6px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid #E9E9E9",
                  boxShadow: "1px 1px 24px #E9E9E9",
                }}
              >
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
                      marginTop: "16px",
                    }}
                  >
                    <MobileSvg />
                  </Box>
                  <CardContent sx={{ paddingBottom: "0px" }}>
                    <Typography
                      gutterBottom
                      variant='body'
                      component='h3'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "2rem",
                        margin: "0px",
                      }}
                    >
                      {t.landingpage.labelMobileapp}
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ width: "70%" }}>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#848484",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.description1Mobileapp}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#848484",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.description2Mobileapp}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ height: { xs: "600px", lg: "400px" }, margin: "6px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid #E9E9E9",
                  boxShadow: "1px 1px 24px #E9E9E9",
                }}
              >
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
                      marginTop: "16px",
                    }}
                  >
                    <OnlineshopSvg />
                  </Box>
                  <CardContent sx={{ paddingBottom: "0px" }}>
                    <Typography
                      gutterBottom
                      variant='body'
                      component='h3'
                      sx={{
                        textAlign: "center",
                        fontFamily: "Sora",
                        fontWeight: 100,
                        color: "#1E1F26",
                        fontSize: "2rem",
                      }}
                    >
                      {t.landingpage.labelOnlineshop}
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ width: "70%" }}>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#848484",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.description1Onlineshop}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "200",
                        color: "#848484",
                        transition: "all 400ms ease-in-out",
                      }}
                    >
                      {t.landingpage.description2Onlineshop}
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
