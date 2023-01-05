import React from "react";

import styles from "./Footerpage.module.css";

import {
  Container,
  styled,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  // height: "30vh",
  overflow: "hidden",
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "10vw",
  fontWeight: "700",
  paddingRight: "12px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledTitleTextSecond = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  fontWeight: "700",
  color: "#1e1f26",
  textShadow: "0px 0px 3px white",
  paddingRight: "64px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20vw",
    paddingRight: "24px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1e1f26",
  color: "white",

  height: "100vh",
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    height: "inherit",
  },
}));

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "12rem 0",
  [theme.breakpoints.down("md")]: {},
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",

  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "64px",
  },
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  color: "white",

  [theme.breakpoints.down("mm")]: {
    fontSize: "1rem",
  },
}));

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: "white",

  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: "200",
  color: "white",

  [theme.breakpoints.down("xxl")]: {
    // fontSize: "1.8vw",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "0.85rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.85rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledFooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "700",
  color: "white",

  paddingTop: "4rem",
  paddingBottom: "4rem",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
    fontSize: "1.75rem",
    lineHeight: "1",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  borderTop: "1px solid white",
  borderBottom: "1px solid white",
  transition: "400ms all ease-in-out",
  color: "white",

  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
  },
}));

const Footerpage = () => {
  const { t, i18n } = useTranslation();
  return (
    <StyledContainer maxWidth='false'>
      {/* <StyledHeader>
        <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
          <StyledTitleText>{t("footerpage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>
            {t("footerpage.title1")}
          </StyledTitleTextSecond>
          <StyledTitleText>{t("footerpage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>
            {t("footerpage.title1")}
          </StyledTitleTextSecond>
          <StyledTitleText>{t("footerpage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>
            {t("footerpage.title1")}
          </StyledTitleTextSecond>
          <StyledTitleText>{t("footerpage.title1")}</StyledTitleText>
          <StyledTitleTextSecond>
            {t("footerpage.title1")}
          </StyledTitleTextSecond>
        </Parallax>
      </StyledHeader> */}
      <Container disableGutters maxWidth='xxl' sx={{ paddingBottom: "10rem" }}>
        <StyledHeaderGrid container spacing={0}>
          <StyledLeftTitleGrid item xs={10} sm={5} lg={4}>
            <StyledLeftTitleText variant='bigTitle' sx={{ color: "white" }}>
              {t("footerpage.leftTitle1")}
            </StyledLeftTitleText>
            <StyledLeftTitleText
              variant='bigTitle'
              sx={{
                color: "white",
              }}
            >
              {t("footerpage.leftTitle2")}
            </StyledLeftTitleText>
            <StyledLeftTitleText variant='bigTitle' sx={{ color: "white" }}>
              {t("footerpage.leftTitle3")}
            </StyledLeftTitleText>
          </StyledLeftTitleGrid>
          <StyledRightTitleGrid item xs={10} sm={5} lg={4}>
            <Box>
              <StyledHeadContent>
                {t("footerpage.footerContent1")}
              </StyledHeadContent>
              <StyledHeadContent>
                {t("footerpage.footerContent2")}
              </StyledHeadContent>
              <StyledHeadContent>
                {t("footerpage.footerContent3")}
              </StyledHeadContent>
            </Box>
          </StyledRightTitleGrid>
        </StyledHeaderGrid>
        <Grid
          container
          spacing={0}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <StyledGrid
            item
            xs={10}
            lg={8}
            className={styles.meeting}
            sx={{
              "&:hover": {
                paddingLeft: { xs: "25px", md: "40px" },
              },
            }}
          >
            <StyledFooterTitle>
              {t("footerpage.meetingTitle")}
            </StyledFooterTitle>
            <Box className={styles.iconArrow} />
          </StyledGrid>
          <StyledGrid
            item
            xs={10}
            lg={8}
            className={styles.email}
            sx={{
              borderTop: { xs: "0px", md: "0px" },
              "&:hover": {
                paddingLeft: { xs: "25px", md: "40px" },
              },
            }}
          >
            <StyledFooterTitle> {t("footerpage.emailTitle")}</StyledFooterTitle>
            <Box className={styles.iconArrow} />
          </StyledGrid>
        </Grid>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 12,
          left: "18px",
          right: "18px",
          display: "flex",
          justifyContent: { xs: "center", md: "" },
          alignItems: { xs: "center", md: "" },
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Typography variant='h7' sx={{ fontSize: { xs: "0.75rem" } }}>
          © 2022 by bilgekaan yilmaz
        </Typography>
        <Box
          flexGrow={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href='https://github.com/Kaan36'>
            <GitHub
              sx={{
                fontSize: "24px",
                margin: "0 15px",
              }}
            />
          </Link>
          <Link href='https://www.linkedin.com/in/bilgekaan-yilmaz-107888228/'>
            <LinkedIn
              sx={{
                fontSize: "24px",
                margin: "0 15px",
              }}
            />
          </Link>
          <Link href=''>
            <Twitter
              sx={{
                fontSize: "24px",
                margin: "0 15px",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant='text'>
            <Typography
              variant='h7'
              color='white'
              sx={{ fontSize: { xs: "0.7rem" } }}
            >
              {t("footerpage.imprint")}
            </Typography>
          </Button>
          <Button variant='text'>
            <Typography
              variant='h7'
              color='white'
              sx={{ fontSize: { xs: "0.7rem" } }}
            >
              {t("footerpage.privacyPolicy")}
            </Typography>
          </Button>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default Footerpage;
