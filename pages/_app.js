import "../styles/globals.css";

import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "@next/font/google";

const inter = Inter({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
    fontFamily: [
      inter.style.fontFamily,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    logo: {
      fontWeight: 100,
      color: "#1E1F26",
      fontSize: "1.5rem",
      letterSpacing: "-0.1em",
    },
    header: {
      fontWeight: 100,
      color: "#1E1F26",
      fontSize: "1.5rem",
      letterSpacing: "-0.1em",
    },
    mainHeader: {
      fontWeight: 800,
      fontSize: "9rem",
      lineHeight: 0.8,
      letterSpacing: "-0.1rem",
    },
    secondHeader: {
      fontWeight: 200,
      fontSize: "4vw",
      lineHeight: 0.8,
      letterSpacing: "-0.5rem",
    },
    smallTitle: {
      fontWeight: 800,
      fontSize: "1.3rem",
      lineHeight: 0.8,
      letterSpacing: "0em",
    },
    bigTitle: {
      fontWeight: 800,
      fontSize: "6vw",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    buttonTitle: {
      fontWeight: 400,
      fontSize: "2.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    buttonContent: {
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
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
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
