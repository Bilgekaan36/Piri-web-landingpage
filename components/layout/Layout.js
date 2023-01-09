import ProgressBar from "./ProgressBar";
import { Box, Typography } from "@mui/material";

const Layout = (props) => {
  return (
    <Box>
      <ProgressBar />
      {props.children}
    </Box>
  );
};

export default Layout;
