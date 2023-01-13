import styles from "../components/layout/Layout.module.css";

import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import Benefitspage from "../components/benefitspage/Benefitspage";
import Landingpage from "../components/landingpage/Landingpage";
import Personalpage from "../components/personalpage/Personalpage";
import Processpage from "../components/processpage/Processpage";
import Workspage from "../components/workspage/Workspage";
import Toolspage from "../components/toolspage/Toolspage";
import Launchpage from "../components/launchpage/Launchpage";
import Footerpage from "../components/layout/Footerpage";

import en from "../locales/en";
import de from "../locales/de";
import tr from "../locales/tr";

export default function Main() {
  const ref = useRef();
  const refBody = useRef();
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const [showPage, setShowPage] = useState(false);
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

  const handlePages = () => {
    console.log("handlePages: ", showPage);
    setShowPage(true);
  };

  return (
    <Container disableGutters maxWidth='false' ref={refBody}>
      <motion.div
        className={styles.transitionPage}
        initial={{ opacity: 1, translateY: 0 }}
        animate={{ opacity: 1, translateY: "-100%" }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
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
      <Landingpage t={t} handlePages={handlePages} />
      <Benefitspage t={t} showPage={showPage} />
      <Workspage t={t} showPage={showPage} />
      <Toolspage t={t} showPage={showPage} />
      <Processpage t={t} showPage={showPage} />
      <Launchpage t={t} showPage={showPage} />
      <Personalpage t={t} showPage={showPage} />
      <Footerpage ref={ref} showPage={showPage} />
    </Container>
  );
}
