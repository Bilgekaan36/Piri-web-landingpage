import Box from "@mui/material/Box";
import {
  Paper,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
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
    <Grid
      container
      spacing={4}
      columns={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "0 32px", lg: "0 132px" },
      }}
    >
      {technologies.map((data, index) => (
        <Grid
          item
          xs={10}
          sm={4}
          md={4}
          mm={3}
          lg={3}
          xl={2}
          xxl={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={index}
        >
          <Card
            sx={{
              height: 400,
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                mm: "100%",
                lg: "100%",
              },
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <CardMedia
                component='img'
                height='300'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
              /> */}
              <Box
                sx={{
                  width: "150px",
                  height: "100px",
                  margin: "32px",
                }}
              >
                {data.logo}
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                {data.title}
              </Typography>
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {data.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
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

  // {
  //   logo: <HtmlSvg />,
  //   title: "HTML",
  //   content: (
  //     <Translation>
  //       {(t, { i18n }) => <>{t("toolsStepper.contentHtml")}</>}
  //     </Translation>
  //   ),
  // },
  // {
  //   logo: <CssSvg />,
  //   title: "CSS",
  //   content: (
  //     <Translation>
  //       {(t, { i18n }) => <>{t("toolsStepper.contentCss")}</>}
  //     </Translation>
  //   ),
  // },
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
