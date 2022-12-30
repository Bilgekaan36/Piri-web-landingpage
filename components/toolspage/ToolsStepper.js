import Box from "@mui/material/Box";
import { Paper, Typography, Grid, CircularProgress } from "@mui/material";
import { Translation } from "react-i18next";

import ReactSvg from "../technologies/ReactSvg.js";
import AdobeSvg from "../technologies/AdobeSvg.js";
import CssSvg from "../technologies/CssSvg.js";
import FirebaseSvg from "../technologies/FirebaseSvg.js";
import HtmlSvg from "../technologies/HtmlSvg.js";
import JavascriptSvg from "../technologies/JavascriptSvg.js";
import MaterialuiSvg from "../technologies/MaterialuiSvg.js";
import NextjsSvg from "../technologies/NextjsSvg.js";
import NodejsSvg from "../technologies/NodejsSvg.js";
import VercelSvg from "../technologies/VercelSvg.js";
import VscodeSvg from "../technologies/VscodeSvg.js";
import VueSvg from "../technologies/VueSvg.js";

const ToolsStepper = ({ activeStep }) => {
  const maxSteps = technologies.length;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              bgcolor: "transparent",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "3rem", md: "7rem" }, fontWeight: "700" }}
            >
              {technologies[activeStep].title}
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={10}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              left: "15%",
              height: "50%",
            }}
          >
            {technologies[activeStep].logo}
          </Box>
          <CircularProgress
            size='100'
            thickness={0.5}
            variant='determinate'
            value={activeStep * 9.09}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.75rem", md: "1.75rem" },
              fontWeight: "200",
              color: "white",
            }}
          >
            {technologies[activeStep].content}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ToolsStepper;

const technologies = [
  {
    logo: <ReactSvg />,
    title: "REACT",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentReact")}</>}
      </Translation>
    ),
  },
  {
    logo: <MaterialuiSvg />,
    title: "Material UI",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentMaterialUi")}</>}
      </Translation>
    ),
  },
  {
    logo: <NodejsSvg />,
    title: "NODE.JS",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentNodejs")}</>}
      </Translation>
    ),
  },
  {
    logo: <VercelSvg />,
    title: "VERCEL",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentVercel")}</>}
      </Translation>
    ),
  },
  {
    logo: <NextjsSvg />,
    title: "NEXT.JS",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentNextjs")}</>}
      </Translation>
    ),
  },
  {
    logo: <VueSvg />,
    title: "VUE",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentVue")}</>}
      </Translation>
    ),
  },
  {
    logo: <FirebaseSvg />,
    title: "FIREBASE",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentFirebase")}</>}
      </Translation>
    ),
  },

  {
    logo: <HtmlSvg />,
    title: "HTML",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentHtml")}</>}
      </Translation>
    ),
  },
  {
    logo: <CssSvg />,
    title: "CSS",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentCss")}</>}
      </Translation>
    ),
  },
  {
    logo: <JavascriptSvg />,
    title: "JAVASCRIPT",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentJavascript")}</>}
      </Translation>
    ),
  },
  {
    logo: <AdobeSvg />,
    title: "ADOBE",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentAdobe")}</>}
      </Translation>
    ),
  },
  {
    logo: <VscodeSvg />,
    title: "VSCODE",
    content: (
      <Translation>
        {(t, { i18n }) => <>{t("toolsStepper.contentVscode")}</>}
      </Translation>
    ),
  },
];
