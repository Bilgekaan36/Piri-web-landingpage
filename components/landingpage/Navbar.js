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
  [theme.breakpoints.down("xxl")]: {
    paddingTop: "9px",
  },
  [theme.breakpoints.down("xl")]: {
    paddingTop: "9px",
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
    <Container disableGutters sx={{ width: { xxl: 1536, xl: 900, md: 700 } }}>
      <Box>
        <StyledAppBar>
          <Toolbar>
            <Typography
              variant='logo'
              component='div'
              sx={{
                flexGrow: 1,
                color: "#1E1F26",
                fontSize: {
                  xxl: "2.5rem",
                  xl: "2rem",
                  sm: "1.75rem",
                  xs: "1.75rem",
                },
              }}
            >
              by.
            </Typography>
            <Button sx={{ width: { xs: 100, sm: 300 } }}>
              <Typography
                variant='header'
                sx={{
                  color: "#1E1F26",
                  fontSize: {
                    xxl: "1.3rem",
                    xl: "1rem",
                    sm: "0.9rem",
                    xs: "0.9rem",
                  },
                }}
              >
                {t("navbar.work")}
              </Typography>
            </Button>
            <StyledButton onClick={() => changeLanguage("en")}>
              <Typography
                variant='header'
                sx={{
                  color: "primary.contrastText",
                  fontSize: {
                    xxl: "1.3rem",
                    xl: "1rem",
                    sm: "0.9rem",
                    xs: "0.9rem",
                  },
                }}
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
