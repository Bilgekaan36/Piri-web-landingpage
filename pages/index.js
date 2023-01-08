import { useRouter } from "next/router";
import { Container } from "@mui/material";

import Benefitspage from "../components/benefitspage/Benefitspage";
import Landingpage from "../components/landingpage/Landingpage";
import Personalpage from "../components/personalpage/Personalpage";
import Processpage from "../components/processpage/Processpage";
import Workspage from "../components/workspage/Workspage";
import Toolspage from "../components/toolspage/Toolspage";
import Launchpage from "../components/launchpage/Launchpage";

import en from "../locales/en";
import de from "../locales/de";
import tr from "../locales/tr";
import Footerpage from "../components/layout/Footerpage";

export default function Main() {
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
    <Container
      disableGutters
      maxWidth='false'
      sx={{
        transition: "all 1s ease-in-out",
      }}
    >
      <Landingpage t={t} />
      <Benefitspage t={t} />
      <Workspage t={t} />
      <Toolspage t={t} />
      <Processpage t={t} />
      <Launchpage t={t} />
      <Personalpage t={t} />
      <Footerpage />
    </Container>
  );
}
