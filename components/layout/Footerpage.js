import styles from "./Footerpage.module.css";

import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, styled, Grid, Typography, Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

import en from "../../locales/en";
import de from "../../locales/de";
import tr from "../../locales/tr";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1e1f26",
  color: "white",
  position: "relative",
  [theme.breakpoints.down("lg")]: {},
}));

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "12rem 0",
  [theme.breakpoints.down("sm")]: {
    padding: "6rem 0",
  },
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "64px",
  },
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "2.2rem",
  color: "white",
  fontWeight: 600,
  [theme.breakpoints.down("mm")]: {
    fontSize: "1.2rem",
  },
}));

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: "white",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: "200",
  color: "white",
  marginBottom: "12px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
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
    fontSize: "1.95rem",
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

const Footerpage = (props, ref) => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  // const t = locale === "en" ? en : de;
  let t;
  switch (locale) {
    case "en":
      t = en;
      break;
    case "de":
      t = de;
      break;
    case "tr":
      t = tr;
      break;
  }
  return (
    <StyledContainer
      maxWidth='false'
      sx={{ backgroundColor: props.activeBackground }}
    >
      <Container
        disableGutters
        maxWidth='xxl'
        sx={{ position: "relative", height: "100%" }}
        id='test2'
      >
        <StyledHeaderGrid container spacing={0}>
          <StyledLeftTitleGrid item xs={10} sm={5} lg={4}>
            <StyledLeftTitleText
              variant='bigTitle'
              sx={{
                color:
                  props.activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.footerpage.leftTitle1}
            </StyledLeftTitleText>
            <StyledLeftTitleText
              variant='bigTitle'
              sx={{
                color: "white",
              }}
            >
              {t.footerpage.leftTitle2}
            </StyledLeftTitleText>
            <StyledLeftTitleText
              variant='bigTitle'
              sx={{
                color:
                  props.activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.footerpage.leftTitle3}
            </StyledLeftTitleText>
          </StyledLeftTitleGrid>
          <StyledRightTitleGrid item xs={10} sm={5} lg={4}>
            <Box>
              <StyledHeadContent
                sx={{
                  color:
                    props.activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t.footerpage.footerContent1}
              </StyledHeadContent>
              <StyledHeadContent
                sx={{
                  color:
                    props.activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t.footerpage.footerContent2}
              </StyledHeadContent>
              <StyledHeadContent
                sx={{
                  color:
                    props.activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t.footerpage.footerContent3}
              </StyledHeadContent>
            </Box>
          </StyledRightTitleGrid>
        </StyledHeaderGrid>
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "126px",
          }}
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
            <Link href='https://calendly.com/piri-web/30min' legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                <StyledFooterTitle
                  sx={{
                    color:
                      props.activeBackground === "#1e1f26"
                        ? "white"
                        : "#1e1f26",
                  }}
                >
                  {t.footerpage.meetingTitle}
                </StyledFooterTitle>
              </a>
            </Link>
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
            <a
              href={`mailto:bilgekaan.yilmaz36@gmail.com?subject=${""}&body=${""}`}
            >
              <StyledFooterTitle
                sx={{
                  color:
                    props.activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t.footerpage.emailTitle}
              </StyledFooterTitle>
            </a>
            <Box className={styles.iconArrow} />
          </StyledGrid>
        </Grid>
        <Grid
          ref={ref}
          container
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={10} lg={8}>
            <Box
              sx={{
                padding: "32px 0",
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
                      margin: "15px",
                    }}
                  />
                </Link>
                <Link href='https://www.linkedin.com/in/bilgekaan-yilmaz-107888228/'>
                  <LinkedIn
                    sx={{
                      fontSize: "24px",
                      margin: "15px",
                    }}
                  />
                </Link>
                <Link href=''>
                  <Twitter
                    sx={{
                      fontSize: "24px",
                      margin: "15px",
                    }}
                  />
                </Link>
              </Box>
              <Box
                className='footer'
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href='/imprint'>
                  <Typography
                    variant='h7'
                    color='white'
                    sx={{ fontSize: { xs: "0.7rem" } }}
                  >
                    {t.footerpage.imprint}
                  </Typography>
                </Link>
                <Link href='/datapolicy' style={{ marginLeft: "12px" }}>
                  <Typography
                    variant='h7'
                    color='white'
                    sx={{ fontSize: { xs: "0.7rem" } }}
                  >
                    {t.footerpage.privacyPolicy}
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default forwardRef(Footerpage);
