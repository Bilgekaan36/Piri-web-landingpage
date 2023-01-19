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
  NativeSelect,
} from "@mui/material";
import * as Scroll from "react-scroll";

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
  backgroundColor: "#0170F3",
  height: "55px",
  marginLeft: "12px",
  "&:hover": {
    backgroundColor: "#0170F3",
  },
}));

const Navbar = (props) => {
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname } = router;

  const changeLanguage = (event) => {
    const locale = event.target.value;
    router.push(pathname, pathname, { locale });
  };

  let ScrollLink = Scroll.Link;

  return (
    <Container sx={{ width: { xxl: 1536, xl: 900, md: 700 } }}>
      <Box>
        <StyledAppBar>
          <Toolbar sx={{ padding: "0px" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Link href='/'>
                <Typography
                  variant='logo'
                  component='h2'
                  sx={{
                    letterSpacing: "0.3em",
                    fontSize: { xs: "1rem", sm: "1.5rem" },
                  }}
                >
                  PIRI WEB
                </Typography>
              </Link>
            </Box>
            <FormControl sx={{ width: 100 }}>
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
            <StyledButton>
              <ScrollLink
                to='footer'
                spy={false}
                smooth={true}
                offset={0}
                duration={3000}
              >
                <Typography
                  variant='header'
                  sx={{
                    color: "white",
                    fontSize: {
                      xxl: "1.3rem",
                      xl: "1.1rem",
                      sm: "1.1rem",
                      xs: "1.1rem",
                    },
                  }}
                >
                  {props.t.navbar.contact}
                </Typography>
              </ScrollLink>
            </StyledButton>
          </Toolbar>
        </StyledAppBar>
      </Box>
    </Container>
  );
};

export default Navbar;
