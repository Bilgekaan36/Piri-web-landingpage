import "../styles/globals.css";

import "@fontsource/sora/200.css";
import "@fontsource/sora/300.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";

import Layout from "../components/layout/Layout";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import "../components/internationalization/i18n";

const theme = createTheme({
  palette: {
    background: {
      custom: "#1E1F26",
    },
  },
  typography: {
    fontFamily: "Sora",

    logo: {
      fontFamily: "Sora",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.334,
      letterSpacing: "-0.1em",
    },
    header: {
      fontFamily: "Sora",
      fontWeight: 800,
      fontSize: "1.3rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    mainHeader: {
      fontFamily: "Sora",
      fontWeight: 700,
      fontSize: "12rem",
      lineHeight: 0.8,
      letterSpacing: "-0.5rem",
    },
    secondHeader: {
      fontFamily: "Sora",
      fontWeight: 200,
      fontSize: "6rem",
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
      fontSize: "10rem",
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
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
