import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  Container,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

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
  height: "55px",
  marginLeft: "12px",
  "&:hover": {
    backgroundColor: "#6691C3",
  },
}));

const Navbar = (props) => {
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname, asPath } = router;

  const changeLanguage = (event) => {
    const locale = event.target.value;
    router.push(pathname, pathname, { locale });
  };

  return (
    <Container disableGutters sx={{ width: { xxl: 1536, xl: 900, md: 700 } }}>
      <Box>
        <StyledAppBar>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link href='/'>
                <Typography
                  variant='logo'
                  component='div'
                  sx={{
                    letterSpacing: "0.5em",
                  }}
                >
                  PIRI WEB
                </Typography>
              </Link>
            </Box>
            <FormControl sx={{ width: 100 }}>
              {/* <InputLabel variant='standard' htmlFor='uncontrolled-native'>
                language
              </InputLabel> */}
              <NativeSelect
                defaultValue={locale}
                inputProps={{
                  name: "language",
                  id: "uncontrolled-native",
                }}
                onChange={changeLanguage}
              >
                {locales.map((locale) => (
                  <option value={locale} key={locale}>
                    {locale.toUpperCase()}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
            <StyledButton onClick={props.scrollToBottom}>
              <Typography
                variant='header'
                sx={{
                  color: "white",
                  fontSize: {
                    xxl: "1.3rem",
                    xl: "1rem",
                    sm: "0.9rem",
                    xs: "0.9rem",
                  },
                }}
              >
                {props.t.navbar.contact}
              </Typography>
            </StyledButton>
          </Toolbar>
        </StyledAppBar>
      </Box>
    </Container>
  );
};

export default Navbar;
