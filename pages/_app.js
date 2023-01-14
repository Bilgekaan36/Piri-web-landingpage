import "../styles/globals.css";

import "@fontsource/sora/200.css";
import "@fontsource/sora/300.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";

import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import { Analytics } from "@vercel/analytics/react";

import Layout from "../components/layout/Layout";

const theme = createTheme({
  palette: {
    background: {
      custom: "#1E1F26",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 830,
      mm: 1000,
      lg: 1200,
      xl: 1536,
      xxl: 1950,
    },
  },
  typography: {
    fontFamily: "Sora",
    logo: {
      fontFamily: "Sora",
      fontWeight: 100,
      color: "#1E1F26",
      fontSize: "1.5rem",
      letterSpacing: "-0.1em",
    },
    header: {
      fontFamily: "Sora",
      fontWeight: 100,
      color: "#1E1F26",
      fontSize: "1.5rem",
      letterSpacing: "-0.1em",
    },
    mainHeader: {
      fontFamily: "Sora",
      fontWeight: 700,
      fontSize: "9rem",
      lineHeight: 0.8,
      letterSpacing: "-0.1rem",
    },
    secondHeader: {
      fontFamily: "Sora",
      fontWeight: 200,
      fontSize: "4vw",
      lineHeight: 0.8,
      letterSpacing: "-0.5rem",
    },
    smallTitle: {
      fontFamily: "Sora",
      fontWeight: 800,
      fontSize: "1.3rem",
      lineHeight: 0.8,
      letterSpacing: "0em",
    },
    bigTitle: {
      fontFamily: "Sora",
      fontWeight: 800,
      fontSize: "6vw",
      lineHeight: 0.8,
      letterSpacing: "0em",
    },
    buttonTitle: {
      fontFamily: "Sora",
      fontWeight: 400,
      fontSize: "2.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    buttonContent: {
      fontFamily: "Sora",
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Head>
              <title>PIRI WEB | Web Development & Web Design</title>
              <link rel='shortcut icon' href='/favicon//favicon.ico' />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ParallaxProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
