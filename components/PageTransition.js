import React from "react";
import { Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const PageTransition = () => {
  // const springs = useSpring({
  //   from: { y: "0" },
  //   to: { y: "-100%" },
  //   delay: 1000,
  //   duration: 5000,
  // });

  const [springs, api] = useSpring(
    () => ({
      from: { y: "0" },
      to: { y: "-100%" },
      delay: 1200,
      config: {
        duration: 400,
      },
    }),
    []
  );

  const logo = useSpring({
    from: { opacity: 0, x: "-100%" },
    to: { opacity: 1, x: "0" },
    delay: 0,
  });

  return (
    <animated.div
      style={{
        position: "fixed",
        top: 0,
        height: "100vh",
        width: "100%",
        backgroundColor: "#1e1f26",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        ...springs,
      }}
    >
      <animated.div style={logo}>
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
      </animated.div>
    </animated.div>
  );
};

export default PageTransition;
