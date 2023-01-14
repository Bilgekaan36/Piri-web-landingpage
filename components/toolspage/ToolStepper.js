import Box from "@mui/material/Box";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";

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

const ToolsStepper = ({ activeBackground, t }) => {
  const technologies = [
    {
      logo: <ReactSvg />,
      title: "REACT",
      content: t.toolsStepper.contentReact,
    },
    {
      logo: <MaterialuiSvg />,
      title: "Material UI",
      content: t.toolsStepper.contentMaterialUi,
    },
    {
      logo: <NodejsSvg />,
      title: "NODE.JS",
      content: t.toolsStepper.contentNodejs,
    },
    {
      logo: <VercelSvg />,
      title: "VERCEL",
      content: t.toolsStepper.contentVercel,
    },
    {
      logo: <NextjsSvg />,
      title: "NEXT.JS",
      content: t.toolsStepper.contentNextjs,
    },
    {
      logo: <VueSvg />,
      title: "VUE",
      content: t.toolsStepper.contentVue,
    },
    {
      logo: <FirebaseSvg />,
      title: "FIREBASE",
      content: t.toolsStepper.contentFirebase,
    },

    // {
    //   logo: <HtmlSvg />,
    //   title: "HTML",
    //   content: toolsStepper.contentHtml,
    // },
    // {
    //   logo: <CssSvg />,
    //   title: "CSS",
    //   content: toolsStepper.contentCss,
    // },
    {
      logo: <JavascriptSvg />,
      title: "JAVASCRIPT",
      content: t.toolsStepper.contentJavascript,
    },
    {
      logo: <AdobeSvg />,
      title: "ADOBE",
      content: t.toolsStepper.contentAdobe,
    },
    {
      logo: <VscodeSvg />,
      title: "VSCODE",
      content: t.toolsStepper.contentVscode,
    },
  ];

  return (
    <Grid
      container
      spacing={4}
      columns={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relativ",
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
              height: 370,
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                mm: "100%",
                lg: "100%",
              },
              boxShadow: "none",
              // boxShadow: `1px 1px 0px ${
              //   activeBackground === "#1e1f26" ? "white" : "#1e1f26"
              // }`,
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
                <Typography variant='body2' color='#848484'>
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
