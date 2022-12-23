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
import Link from "next/link";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#6691c3",
  minHeight: "101vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  [theme.breakpoints.up("md")]: {
    padding: "80px",
  },
  [theme.breakpoints.down("md")]: {
    // padding: "0 18px",
  },
}));

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  // height: "50vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {},
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // paddingTop: "348px",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    paddingTop: "18px",
  },
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}));

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  // paddingTop: "348px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    paddingTop: "18px",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  fontWeight: "300",
  marginBottom: "32px",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.7rem",
    marginBottom: "12px",
  },
}));

const StyledFooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  fontWeight: "700",
  [theme.breakpoints.down("md")]: {
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
  return (
    <StyledContainer maxWidth='false'>
      <StyledHeaderGrid container spacing={0}>
        <StyledLeftTitleGrid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "start-flex",
            justifyContent: "start-flex",
          }}
        >
          <StyledLeftTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            LET'S
          </StyledLeftTitleText>
          <StyledLeftTitleText
            variant='bigTitle'
            sx={{ paddingLeft: { xs: "20px", md: "100px" }, color: "#1e1f26" }}
          >
            TALK
          </StyledLeftTitleText>
          <StyledLeftTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            ABOUT
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
              Lass uns mit einem unverbindlichem Erstgespräch starten. Wir
              schauen gemeinsam über Deine aktuelle Website, Deine Ziele und
              Herausforderungen und wie wir diese lösen können.
            </StyledHeadContent>
            <StyledHeadContent>
              Außerdem erhältst Du in diesem Erstgespräch praktische Tipps für
              Deine Website, die Du direkt selbst umsetzen kannst.
            </StyledHeadContent>
            <StyledHeadContent>
              Ich freue mich Dich kennenzulernen.
            </StyledHeadContent>
          </Box>
        </StyledRightTitleGrid>
      </StyledHeaderGrid>
      <Box
        sx={{
          padding: { sx: "32px 0", md: "100px 0" },
          display: "flex",
          alignItems: "center",
        }}
        flexGrow={{ xs: 0.25, md: 0.5 }}
      >
        <Link href='https://github.com/Kaan36'>
          <GitHub sx={{ fontSize: { xs: "24px", md: "42px" } }} />
        </Link>
        <Link href='https://www.linkedin.com/in/bilgekaan-yilmaz-107888228/'>
          <LinkedIn sx={{ fontSize: { xs: "24px", md: "42px" } }} />
        </Link>
        <Link href=''>
          <Twitter sx={{ fontSize: { xs: "24px", md: "42px" } }} />
        </Link>
      </Box>
      <StyledBox
        className={styles.meeting}
        flexGrow={0.15}
        sx={{
          "&:hover": {
            paddingLeft: { xs: "25px", md: "100px" },
          },
        }}
      >
        <StyledFooterTitle>Arrange a meeting</StyledFooterTitle>
        <Box className={styles.iconArrow} />
      </StyledBox>
      <StyledBox
        className={styles.email}
        sx={{
          marginBottom: "100px",
          borderTop: { xs: "0px", md: "0px" },
          "&:hover": {
            paddingLeft: { xs: "25px", md: "100px" },
          },
        }}
        flexGrow={0.15}
      >
        <StyledFooterTitle>Write e-mail</StyledFooterTitle>
        <Box className={styles.iconArrow} />
      </StyledBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "" },
          alignItems: { xs: "center", md: "" },
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Typography
          variant='h7'
          flexGrow={1}
          sx={{ padding: { xs: "12px", md: "" } }}
        >
          © 2022 by bilgekaan yilmaz
        </Typography>
        <Box>
          <Button variant='text'>
            <Typography
              variant='h7'
              sx={{ padding: "0 24px" }}
              color='common.black'
            >
              IMPRESSUM
            </Typography>
          </Button>
          <Button variant='text'>
            <Typography variant='h7' color='common.black'>
              DATENSCHUTZ
            </Typography>
          </Button>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default Footerpage;
