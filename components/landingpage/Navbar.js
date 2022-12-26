import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  Container,
} from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  position: "static",
  paddingTop: "32px",
  boxShadow: "none",
  [theme.breakpoints.down("md")]: {
    paddingTop: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "32px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.custom,
  "&:hover": {
    backgroundColor: "#6691C3",
  },
}));

const Navbar = (props) => {
  return (
    <Container disableGutters maxWidth='xl'>
      <Box>
        <StyledAppBar>
          <Toolbar>
            <Typography
              variant='logo'
              component='div'
              sx={{ flexGrow: 1, color: "#1E1F26" }}
            >
              by.
            </Typography>
            <Button sx={{ width: { xs: 100, sm: 300 } }}>
              <Typography variant='header' sx={{ color: "#1E1F26" }}>
                work
              </Typography>
            </Button>
            <StyledButton>
              <Typography
                variant='header'
                sx={{ color: "primary.contrastText" }}
              >
                contact
              </Typography>
            </StyledButton>
          </Toolbar>
        </StyledAppBar>
      </Box>
    </Container>
  );
};

export default Navbar;
