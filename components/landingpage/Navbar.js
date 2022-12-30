import React from "react";
import i18n from "../internationalization/i18n";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  Container,
} from "@mui/material";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
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
                {t("navbar.work")}
              </Typography>
            </Button>
            <StyledButton onClick={() => changeLanguage("fr")}>
              <Typography
                variant='header'
                sx={{ color: "primary.contrastText" }}
              >
                {t("navbar.contact")}
              </Typography>
            </StyledButton>
          </Toolbar>
        </StyledAppBar>
      </Box>
    </Container>
  );
};

export default Navbar;
