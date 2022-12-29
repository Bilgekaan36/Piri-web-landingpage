import { useEffect } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import {
  Paper,
  Typography,
  Button,
  Grid,
  CircularProgress,
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

const ToolsStepper = ({ activeStep }) => {
  const maxSteps = technologies.length;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          pl: 2,
          color: "white",
          bgcolor: "transparent",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "1.5rem", md: "5rem" }, fontWeight: "700" }}
        >
          {technologies[activeStep].title}
        </Typography>
      </Paper>
      <Box
        sx={{
          minHeight: { xs: "none", md: 700 },
          maxWidth: { xs: "100%", md: "100%" },
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: { xs: "column-reverse", md: "row" },
          p: 2,
          color: "white",
          bgcolor: "transparent",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "0.75rem", md: "1.75rem" }, fontWeight: "200" }}
        >
          {technologies[activeStep].content}
        </Typography>
        {technologies[activeStep].logo}
      </Box> */}
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
      {/* <MobileStepper
        variant='progress'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        sx={{ bgcolor: "transparent" }}
        nextButton={
          <Button
            size='small'
            // onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          ></Button>
        }
        backButton={
          <Button
            size='small'
            // onClick={handleBack}
            disabled={activeStep === 0}
          ></Button>
        }
      /> */}
    </Box>
  );
};

export default ToolsStepper;

const technologies = [
  {
    logo: <ReactSvg />,
    title: "REACT",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <MaterialuiSvg />,
    title: "Material UI",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <NodejsSvg />,
    title: "NODE.JS",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <VercelSvg />,
    title: "VERCEL",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <NextjsSvg />,
    title: "NEXT.JS",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <VueSvg />,
    title: "VUE",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <FirebaseSvg />,
    title: "FIREBASE",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },

  {
    logo: <HtmlSvg />,
    title: "HTML",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <CssSvg />,
    title: "CSS",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <JavascriptSvg />,
    title: "JAVASCRIPT",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <AdobeSvg />,
    title: "ADOBE",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
  {
    logo: <VscodeSvg />,
    title: "VSCODE",
    content:
      "prefetch - Prefetch the page in the background. Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. When prefetch is set to false, prefetching will still occur on hover. Pages using Static Generation will preload JSON files with the data for faster page transitions. Prefetching is only enabled in production.",
  },
];
