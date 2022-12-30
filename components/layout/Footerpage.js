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
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#6691c3",
  height: "100vh",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    padding: "0px 80px 0px 80px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 18px",
  },
}));

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {},
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "148px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "18px",
  },
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "10rem",
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

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  fontWeight: "300",
  marginBottom: "32px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
    marginBottom: "12px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    marginBottom: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.75rem",
    marginBottom: "12px",
  },
}));

const StyledFooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  fontWeight: "700",
  paddingTop: "16px",
  paddingBottom: "16px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "16px",
    paddingBottom: "16px",
    fontSize: "1.5rem",
    lineHeight: "1",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  borderTop: "3px solid black",
  borderBottom: "3px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "400ms all ease-in-out",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
  },
}));

const Footerpage = () => {
  const { t, i18n } = useTranslation();
  return (
    <StyledContainer maxWidth='false'>
      <Grid container spacing={0} height='100%'>
        <Grid
          item
          xs={12}
          height='40vh'
          sx={{ display: "flex", alignItems: "center" }}
        >
          <StyledHeaderGrid container spacing={0}>
            <StyledLeftTitleGrid
              item
              xs={6}
              sx={{
                display: "flex",
              }}
            >
              <StyledLeftTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
                {t("footerpage.leftTitle1")}
              </StyledLeftTitleText>
              <StyledLeftTitleText
                variant='bigTitle'
                sx={{
                  paddingLeft: { xs: "20px", md: "100px" },
                  color: "#1e1f26",
                }}
              >
                {t("footerpage.leftTitle2")}
              </StyledLeftTitleText>
              <StyledLeftTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
                {t("footerpage.leftTitle3")}
              </StyledLeftTitleText>
            </StyledLeftTitleGrid>
            <StyledRightTitleGrid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start-flex",
              }}
            >
              <Box sx={{ width: { sx: "100%", md: "50%" } }}>
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
        </Grid>
        <Grid
          item
          xs={12}
          height='10vh'
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Link href='https://github.com/Kaan36'>
            <GitHub
              sx={{
                fontSize: { xs: "24px", md: "42px" },
                marginRight: "6px",
              }}
            />
          </Link>
          <Link href='https://www.linkedin.com/in/bilgekaan-yilmaz-107888228/'>
            <LinkedIn
              sx={{
                fontSize: { xs: "24px", md: "42px" },
                marginRight: "6px",
              }}
            />
          </Link>
          <Link href=''>
            <Twitter
              sx={{
                fontSize: { xs: "24px", md: "42px" },
                marginRight: "6px",
              }}
            />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          height='50vh'
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <StyledBox
            className={styles.meeting}
            sx={{
              "&:hover": {
                paddingLeft: { xs: "25px", md: "80px" },
              },
            }}
          >
            <StyledFooterTitle>
              {" "}
              {t("footerpage.meetingTitle")}
            </StyledFooterTitle>
            <Box className={styles.iconArrow} />
          </StyledBox>
          <StyledBox
            className={styles.email}
            sx={{
              borderTop: { xs: "0px", md: "0px" },
              "&:hover": {
                paddingLeft: { xs: "25px", md: "80px" },
              },
            }}
          >
            <StyledFooterTitle> {t("footerpage.emailTitle")}</StyledFooterTitle>
            <Box className={styles.iconArrow} />
          </StyledBox>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            left: 0,
            right: 0,
            width: "100%",
            display: "flex",
            padding: "0px 80px 0px 80px",
            justifyContent: { xs: "center", md: "" },
            alignItems: { xs: "center", md: "" },
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Typography
            variant='h7'
            flexGrow={1}
            sx={{ fontSize: { xs: "0.75rem" } }}
          >
            © 2022 by bilgekaan yilmaz
          </Typography>
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
                color='common.black'
                sx={{ fontSize: { xs: "0.7rem" } }}
              >
                {t("footerpage.imprint")}
              </Typography>
            </Button>
            <Button variant='text'>
              <Typography
                variant='h7'
                color='common.black'
                sx={{ fontSize: { xs: "0.7rem" } }}
              >
                {t("footerpage.privacyPolicy")}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
    </StyledContainer>
  );
};

export default Footerpage;
