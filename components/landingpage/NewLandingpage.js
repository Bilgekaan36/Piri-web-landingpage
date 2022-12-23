import { Container, styled } from "@mui/material";
import React from "react";

import styles from "./NewLandingpage.module.css";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  height: "100vh",
  position: "relative",
}));

const NewLandingpage = () => {
  return (
    <StyledContainer disableGutters maxWidth='false' className='nav'>
      <h3 className='sub loader'>
        <span className='m'>M</span>
        <span className='m'>O</span>
        <span className='m'>D</span>
        <span className='m'>E</span>
        <span className='m'>R</span>
        <span className='m'>N</span>
        {/* <span className='m'>T</span>
        <span className='m'>S</span> */}
        <span className='m'>&nbsp;</span>
        <span className='m'>&</span>
        {/* <span className='m'>f</span> */}
        <span className='m'>&nbsp;</span>
        <span className='m'>I</span>
        <span className='m'>N</span>
        <span className='m'>N</span>
        <span className='m'>O</span>
        <span className='m'>V</span>
        <span className='m'>A</span>
        <span className='m'>T</span>
        <span className='m'>I</span>
        <span className='m'>V</span>
        {/* <span className='m'>I</span>
        <span className='m'>E</span>
        <span className='m'>S</span> */}
      </h3>
    </StyledContainer>
  );
};

export default NewLandingpage;
