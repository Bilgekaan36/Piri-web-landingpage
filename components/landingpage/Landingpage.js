import styles from "./Landingpage.module.css";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import * as Scroll from "react-scroll";
import { useTrail, useSpring, animated } from "@react-spring/web";
import { useParallax } from "react-scroll-parallax";

import Navbar from "./Navbar";
import PiriwebSvg from "./landingpage_svg/PiriwebSvg";
import WebsiteSvg from "./landingpage_svg/WebsiteSvg";
import MobileSvg from "./landingpage_svg/MobileSvg";
import OnlineshopSvg from "./landingpage_svg/OnlineshopSvg";
import ApplicationSvg from "./landingpage_svg/ApplicationSvg";
import StartSvg from "./landingpage_svg/StartSvg";
import { useState } from "react";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  minHeight: "100vh",
  paddingBottom: "100px",
}));

const StyledHeaderModular = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  padding: "3px",
  transition: "all 1s ease-in-out",
  lineHeight: 1,
  [theme.breakpoints.down("xxl")]: {
    fontSize: "8rem",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "7rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "5.5rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "4rem",
    lineHeight: 1.2,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "9vw",
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.7rem",
  fontWeight: "200",
  color: "#848484",
  marginTop: "32px",
  transition: "all 400ms ease-in-out",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
}));

const Landingpage = (props) => {
  const { t } = props;
  let ScrollLink = Scroll.Link;

  const [springs, api] = useSpring(
    () => ({
      from: { opacity: 0, translateY: 50 },
      to: { opacity: 1, translateY: 0 },
      delay: 1700,
      config: {
        duration: 400,
      },
    }),
    []
  );

  const [card1, api1] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
      delay: 1500,
      config: {
        duration: 400,
      },
    }),
    []
  );

  const [card2, api2] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
      delay: 1750,
      config: {
        duration: 400,
      },
    }),
    []
  );
  const [card3, api3] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
      delay: 2000,
      config: {
        duration: 400,
      },
    }),
    []
  );
  const [card4, api4] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
      delay: 2250,
      config: {
        duration: 400,
      },
    }),
    []
  );

  const [card5, api5] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
      delay: 2500,
      config: {
        duration: 400,
      },
    }),
    []
  );

  const [firstAnimation, setFirstAnimation] = useState(false);
  const [secondAnimation, setSecondAnimation] = useState(false);
  const [thirdAnimation, setThirdAnimation] = useState(false);
  const [fourthAnimation, setFourthAnimation] = useState(false);
  const [fifthAnimation, setFifthAnimation] = useState(false);
  // const [sixtAnimation, setSixtAnimation] = useState(false);

  const { ref: firstCard } = useParallax({
    // onEnter: () => setFirstAnimation(true),
    // onExit: () => setFirstAnimation(false),
    onProgressChange: (progress) => {
      const prog = progress * 2.5;
      if (prog >= 1) {
        setFirstAnimation(true);
      } else {
        setFirstAnimation(false);
      }
    },
  });

  const { ref: secondCard } = useParallax({
    // onEnter: () => setSecondAnimation(true),
    // onExit: () => setSecondAnimation(false),
    onProgressChange: (progress) => {
      const prog = progress * 2.5;
      if (prog >= 1) {
        setSecondAnimation(true);
      } else {
        setSecondAnimation(false);
      }
    },
  });

  const { ref: thirdCard } = useParallax({
    // onEnter: () => setThirdAnimation(true),
    // onExit: () => setThirdAnimation(false),
    onProgressChange: (progress) => {
      const prog = progress * 2.5;
      if (prog >= 1) {
        setThirdAnimation(true);
      } else {
        setThirdAnimation(false);
      }
    },
  });

  const { ref: fourthCard } = useParallax({
    // onEnter: () => setFourthAnimation(true),
    // onExit: () => setFourthAnimation(false),
    onProgressChange: (progress) => {
      const prog = progress * 2.5;
      if (prog >= 1) {
        setFourthAnimation(true);
      } else {
        setFourthAnimation(false);
      }
    },
  });

  const { ref: fifthCard } = useParallax({
    // onEnter: () => setFifthAnimation(true),
    // onExit: () => setFifthAnimation(false),
    onProgressChange: (progress) => {
      const prog = progress * 2.5;
      if (prog >= 1) {
        setFifthAnimation(true);
      } else {
        setFifthAnimation(false);
      }
    },
  });

  // const { ref: sixtCard } = useParallax({
  //   onEnter: () => setSixtAnimation(true),
  //   onExit: () => setSixtAnimation(false),
  // });

  // const startView = () => {
  //   setAnimation(true);
  // };

  // const closeView = () => {
  //   setAnimation(false);
  // };

  const headers = [t.landingpage.mainHeader1, t.landingpage.mainHeader2];

  const trails = useTrail(2, {
    from: { opacity: 0, translateY: 50 },
    to: { opacity: 1, translateY: 0 },
    delay: 1700,
    config: {
      duration: 600,
    },
  });

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
      <Container disableGutters maxWidth='xxl'>
        <Navbar t={t}></Navbar>
      </Container>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            height: { xs: "650px", md: "600px", mm: "600px", lg: "800px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            {trails.map((props, index) => (
              <animated.div style={props} key={index}>
                <StyledHeaderModular variant='mainHeader' component='h1'>
                  {headers[index]}
                </StyledHeaderModular>
              </animated.div>
            ))}
          </Box>
          <Box sx={{ width: { xs: "90%", sm: "80%" } }}>
            <animated.div style={springs}>
              <StyledSubtitle variant='body2' component='h2'>
                {t.landingpage.secondHeader}
              </StyledSubtitle>
            </animated.div>
          </Box>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={12} xl={4}>
            <animated.div style={card1}>
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
                    ref={firstCard}
                    sx={{
                      height: "100%",
                      border: "1px solid #E9E9E9",
                      boxShadow: "1px 1px 24px #E9E9E9",
                    }}
                    className={`${styles.shine} ${
                      firstAnimation ? styles.slide : ""
                    }`}
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
                          width: { xs: "100%", sm: "80%" },
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
            </animated.div>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <animated.div style={card2}>
              <Grid
                item
                xs={12}
                sx={{ height: { xs: "600px", lg: "400px" }, margin: "6px" }}
              >
                <Card
                  ref={secondCard}
                  sx={{
                    height: "100%",
                    border: "1px solid #E9E9E9",
                    boxShadow: "1px 1px 24px #E9E9E9",
                  }}
                  className={`${styles.shine} ${
                    secondAnimation ? styles.slide : ""
                  }`}
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
                          fontWeight: 400,
                          color: "#6691c3",
                          fontSize: "2rem",
                          margin: "0px",
                        }}
                      >
                        {t.landingpage.labelWebsite}
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ width: { xs: "100%", mm: "70%" } }}>
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
            </animated.div>
            <animated.div style={card3}>
              <Grid
                item
                xs={12}
                sx={{ height: { xs: "550px", lg: "350px" }, margin: "6px" }}
              >
                <Card
                  ref={thirdCard}
                  sx={{
                    height: "100%",
                    border: "1px solid #E9E9E9",
                    boxShadow: "1px 1px 24px #E9E9E9",
                  }}
                  className={`${styles.shine} ${
                    thirdAnimation ? styles.slide : ""
                  }`}
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
                          fontWeight: 400,
                          color: "#F76B6C",
                          fontSize: "2rem",
                          margin: "0px",
                          paddingBottom: "0px",
                        }}
                      >
                        {t.landingpage.labelApplication}
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ width: { xs: "100%", mm: "70%" } }}>
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
            </animated.div>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <animated.div style={card4}>
              <Grid
                item
                xs={12}
                sx={{ height: { xs: "550px", lg: "350px" }, margin: "6px" }}
              >
                <Card
                  ref={fourthCard}
                  sx={{
                    height: "100%",
                    border: "1px solid #E9E9E9",
                    boxShadow: "1px 1px 24px #E9E9E9",
                  }}
                  className={`${styles.shine} ${
                    fourthAnimation ? styles.slide : ""
                  }`}
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
                          fontWeight: 400,
                          color: "#79C4C8",
                          fontSize: "2rem",
                          margin: "0px",
                        }}
                      >
                        {t.landingpage.labelMobileapp}
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ width: { xs: "100%", mm: "70%" } }}>
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
            </animated.div>
            <animated.div style={card5}>
              <Grid
                item
                xs={12}
                sx={{ height: { xs: "600px", lg: "400px" }, margin: "6px" }}
              >
                <Card
                  ref={fifthCard}
                  sx={{
                    height: "100%",
                    border: "1px solid #E9E9E9",
                    boxShadow: "1px 1px 24px #E9E9E9",
                  }}
                  className={`${styles.shine} ${
                    fifthAnimation ? styles.slide : ""
                  }`}
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
                          fontWeight: 400,
                          color: "#f7be02",
                          fontSize: "2rem",
                        }}
                      >
                        {t.landingpage.labelOnlineshop}
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ width: { xs: "100%", mm: "70%" } }}>
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
            </animated.div>
          </Grid>
        </Grid>
      </Box>
    </StyledContainer>
  );
};

export default Landingpage;
