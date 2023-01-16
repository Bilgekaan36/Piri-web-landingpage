import styles from "./Layout.module.css";

import React from "react";

import { useScroll, animated } from "@react-spring/web";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <animated.div
        className={styles["progress-bar"]}
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  );
};

export default ProgressBar;
