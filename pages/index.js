import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";

import PageTransition from "../components/PageTransition";
import Landingpage from "../components/landingpage/Landingpage";
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

export default function Main() {
  const [activeBackground, setActiveBackground] = useState("white");
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

  const exportActiveBackground = (data) => {
    setActiveBackground(data);
  };

  return (
    <Container disableGutters maxWidth='false'>
      <PageTransition />
      <Landingpage t={t} />
      <Benefitspage t={t} />
      <Workspage t={t} />
      <Toolspage t={t} />
      <Processpage t={t} />
      <Launchpage t={t} />
      <Personalpage exportActiveBackground={exportActiveBackground} t={t} />
      <Footerpage activeBackground={activeBackground} ref={ref} />
    </Container>
  );
}
