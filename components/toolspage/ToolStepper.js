import Box from "@mui/material/Box";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useInView, animated } from "@react-spring/web";

import ReactSvg from "../technologies/ReactSvg.js";
import AdobeSvg from "../technologies/AdobeSvg.js";
// import CssSvg from "../technologies/CssSvg.js";
import FirebaseSvg from "../technologies/FirebaseSvg.js";
// import HtmlSvg from "../technologies/HtmlSvg.js";
import JavascriptSvg from "../technologies/JavascriptSvg.js";
import MaterialuiSvg from "../technologies/MaterialuiSvg.js";
import NextjsSvg from "../technologies/NextjsSvg.js";
import NodejsSvg from "../technologies/NodejsSvg.js";
import VercelSvg from "../technologies/VercelSvg.js";
import VscodeSvg from "../technologies/VscodeSvg.js";
import VueSvg from "../technologies/VueSvg.js";

const ToolsStepper = ({ t }) => {
  const [ref1, card1] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref2, card2] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref3, card3] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref4, card4] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref5, card5] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref6, card6] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));
  const [ref7, card7] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));
  const [ref8, card8] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));
  const [ref9, card9] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

  const [ref10, card10] = useInView(() => ({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 400,
    },
  }));

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
      >
        <animated.div ref={ref1} style={card1}>
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
              boxShadow: "none",
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
                <ReactSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                REACT
              </Typography>
              <CardContent>
                <Typography variant='body2' color='#848484'>
                  {t.toolsStepper.contentReact}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref2} style={card2}>
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
              boxShadow: "none",
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
                <MaterialuiSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                Material UI
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentMaterialUi}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref3} style={card3}>
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
              boxShadow: "none",
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
                <NodejsSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                NODE.JS
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentNodejs}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref4} style={card4}>
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
              boxShadow: "none",
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
                <VercelSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                VERCEL
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentVercel}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref5} style={card5}>
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
              boxShadow: "none",
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
                <NextjsSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                Next.js
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentNextjs}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref6} style={card6}>
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
              boxShadow: "none",
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
                <VueSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                VUE
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentVue}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref7} style={card7}>
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
              boxShadow: "none",
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
                <FirebaseSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                FIREBASE
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentFirebase}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref8} style={card8}>
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
              boxShadow: "none",
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
                <JavascriptSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                JAVASCRIPT
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentJavascript}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref9} style={card9}>
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
              boxShadow: "none",
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
                <AdobeSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                ADOBE
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentAdobe}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
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
      >
        <animated.div ref={ref10} style={card10}>
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
              boxShadow: "none",
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
                <VscodeSvg />
              </Box>
              <Typography gutterBottom variant='h5' component='div'>
                VSCODE
              </Typography>
              <CardContent>
                <Typography variant='body1' color='#848484'>
                  {t.toolsStepper.contentVscode}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </animated.div>
      </Grid>
    </Grid>
  );
};

export default ToolsStepper;
