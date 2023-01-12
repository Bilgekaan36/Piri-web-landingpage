import {
  Container,
  styled,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";

import { Parallax } from "react-scroll-parallax";
import { useState } from "react";

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
  color: "#1e1f26",
  fontSize: "10vw",
  fontWeight: "700",
  paddingRight: "12px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledTitleTextSecond = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  color: "white",
  fontWeight: "700",
  textShadow: "0px 0px 3px #1e1f26",
  paddingRight: "64px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20vw",
    paddingRight: "24px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
  marginTop: "200px",
  [theme.breakpoints.down("md")]: {},
}));

const StyledFooterBox = styled(Box)(({ theme }) => ({
  padding: "12vw 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "14vw 0",
  },
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
  lineHeight: "1.2",
  fontWeight: "700",
  textAlign: "center",
  fontSize: "4vw",
  [theme.breakpoints.down("lg")]: {
    fontSize: "5vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "6vw",
  },
}));

const StyledFooterAuthor = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const Workspage = ({ t }) => {
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down("lg"));
  const [activeBackground, setActiveBackground] = useState("white");
  const handleStep = (data) => {
    setActiveBackground(data);
  };

  return (
    <Container
      maxWidth='false'
      sx={{ backgroundColor: activeBackground, position: "relative" }}
    >
      <StyledHeader>
        <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
          <StyledTitleText>{t.workspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.workspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.workspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.workspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.workspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.workspage.title2}</StyledTitleTextSecond>
          <StyledTitleText>{t.workspage.title1}</StyledTitleText>
          <StyledTitleTextSecond>{t.workspage.title2}</StyledTitleTextSecond>
        </Parallax>
      </StyledHeader>
      <StyledContainer disableGutters maxWidth='xxl'>
        <ImageList
          cols={matchDownLg ? 1 : 2}
          rowHeight={matchDownLg ? 120 : 280}
        >
          {itemData.map((item) => (
            <ImageListItem
              rows={4}
              key={item.id}
              sx={{ overflow: "hidden", position: "relative" }}
            >
              <video
                src={item.video}
                type='video/mp4'
                muted
                height='100%'
                width='100%'
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                autoPlay={true}
                loop
              />
            </ImageListItem>
          ))}
        </ImageList>
        <StyledFooterBox sx={{ backgroundColor: activeBackground }}>
          <StyledFooterText
            variant='bigTitle'
            sx={{
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.workspage.quote1}
          </StyledFooterText>
          <StyledFooterText
            variant='bigTitle'
            sx={{
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.workspage.quote2}
          </StyledFooterText>
          <StyledFooterAuthor
            variant='h4'
            sx={{
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            Don Draper
          </StyledFooterAuthor>
        </StyledFooterBox>
      </StyledContainer>
      <Parallax
        style={{
          height: "50px",
          width: "100px",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: "25%",
          left: 0,
          zIndex: 10,
        }}
        onProgressChange={(progressData) => {
          if (progressData >= 1) {
            handleStep("#1e1f26");
          }
          if (progressData < 1) {
            handleStep("white");
          }
        }}
        onEnter={() => {}}
        onExit={() => {}}
      />
    </Container>
  );
};

export default Workspage;

const itemData = [
  {
    id: 0,
    title: "Next.js",
    author: "bilgekaan",
    video: "./videos/example.mp4",
  },
  {
    id: 1,
    title: "bilgekaanyilmaz.com",
    author: "bilgekaan",
    video: "./videos/admin.mp4",
  },
  {
    id: 2,
    title: "Next.js",
    author: "bilgekaan",
    video: "./videos/bitcoin.mp4",
  },
  {
    id: 3,
    title: "bilgekaanyilmaz.com",
    author: "bilgekaan",
    video: "./videos/todo.mp4",
  },
  {
    id: 4,
    title: "Next.js",
    author: "bilgekaan",
    video: "./videos/admin.mp4",
  },
  {
    id: 5,
    title: "bilgekaanyilmaz.com",
    author: "bilgekaan",
    video: "./videos/example.mp4",
  },
];
