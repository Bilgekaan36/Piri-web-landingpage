import styles from "../components/layout/Layout.module.css";

import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

import Benefitspage from "../components/benefitspage/Benefitspage";
import Personalpage from "../components/personalpage/Personalpage";
import Processpage from "../components/processpage/Processpage";
import Workspage from "../components/workspage/Workspage";
import Toolspage from "../components/toolspage/Toolspage";
import Launchpage from "../components/launchpage/Launchpage";
import Footerpage from "../components/layout/Footerpage";

import en from "../locales/en";
import de from "../locales/de";
import tr from "../locales/tr";
import Landingpage from "../components/landingpage/Landingpage";

export default function Main() {
  const ref = useRef();
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
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

  useEffect(() => {
    scroll.scrollToTop();
  });

  return (
    <Container disableGutters maxWidth='false'>
      <motion.div
        className={styles.transitionPage}
        initial={{ opacity: 1, translateY: 0 }}
        animate={{ opacity: 1, translateY: "-100%" }}
        transition={{
          duration: 1,
          delay: 0.75,
        }}
      >
        <motion.div
          initial={{ opacity: 0, translateX: "-100px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
        >
          <Typography
            variant='logo'
            component='div'
            sx={{
              letterSpacing: { xs: "0.5em", sm: "1.5em" },
              color: "white",
            }}
          >
            PIRI WEB
          </Typography>
        </motion.div>
      </motion.div>
      <Landingpage t={t} />
      <Benefitspage t={t} />
      <Workspage t={t} />
      <Toolspage t={t} />
      <Processpage t={t} />
      <Launchpage t={t} />
      <Personalpage t={t} />
      <Footerpage ref={ref} />
    </Container>
  );
}
