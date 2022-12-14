import styles from "./ProgressBar.module.css";

import React from "react";

import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className={styles["progress-bar"]}
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  );
};

export default ProgressBar;
