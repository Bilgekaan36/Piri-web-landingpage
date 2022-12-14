import ProgressBar from "./ProgressBar";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

const Layout = (props) => {
  return (
    <Box>
      <ProgressBar />
      {props.children}
      {/* <Footer></Footer> */}
    </Box>
  );
};

export default Layout;
