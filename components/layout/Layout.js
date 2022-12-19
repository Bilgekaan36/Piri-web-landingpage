import ProgressBar from "./ProgressBar";
import Footerpage from "./Footerpage";
import { Box, Container } from "@mui/material";

const Layout = (props) => {
  return (
    <Box>
      <ProgressBar />
      {props.children}
      <Footerpage />
    </Box>
  );
};

export default Layout;
