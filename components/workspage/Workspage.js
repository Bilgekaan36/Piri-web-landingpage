import {
  Container,
  styled,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";

import nextjs from "../../public/videos/nextjs.mp4";
import portfolio from "../../public/videos/portfolio.mp4";
import { useTranslation } from "react-i18next";

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  height: "30vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down("mm")]: {
    height: "50vh",
  },
  [theme.breakpoints.down("md")]: {
    height: "15vh",
  },
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "18px",
  height: "100%",
  [theme.breakpoints.down("md")]: {},
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "0.75vw",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.6rem",
  },
}));

const StyledRightTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "4vw",
  // [theme.breakpoints.down("xxl")]: {
  //   fontSize: "3.5vw",
  // },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("mm")]: {
    fontSize: "4vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "4vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "4vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  paddingTop: "18px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
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
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
}));

const StyledFooterAuthor = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const Workspage = ({ isShowWorkspage }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"));
  const { t, i18n } = useTranslation();

  return (
    <StyledContainer
      maxWidth='false'
      sx={{ display: isShowWorkspage ? "block" : "none" }}
    >
      <StyledHeaderGrid container spacing={0}>
        <StyledLeftTitleGrid item xs={7} sm={7} md={8}>
          <StyledLeftTitleText variant='smallTitle' sx={{ color: "#1e1f26" }}>
            {t("workspage.leftTitle1")}
          </StyledLeftTitleText>
          <StyledLeftTitleText
            variant='smallTitle'
            sx={{ paddingLeft: "12px", color: "#1e1f26" }}
          >
            {t("workspage.leftTitle2")}
          </StyledLeftTitleText>
        </StyledLeftTitleGrid>
        <StyledRightTitleGrid item xs={4} sm={4} md={4}>
          <StyledRightTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            {t("workspage.rightTitle1")}
          </StyledRightTitleText>
        </StyledRightTitleGrid>
      </StyledHeaderGrid>
      <ImageList cols={matchDownMd ? 1 : 1} rowHeight={matchDownMd ? 120 : 380}>
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
              autoPlay={"autoplay"}
              loop
            />
            {/* <ImageListItemBar
              title={item.title}
              sx={{
                background: "rgba(0, 0, 0, 0)",
                margin: { xs: "10vw 10vw", md: "10vw 10vw" },
              }}
            /> */}
          </ImageListItem>
        ))}
      </ImageList>
      <StyledFooterBox>
        <StyledFooterText variant='bigTitle' sx={{ color: "#1e1f26" }}>
          {t("workspage.quote1")}
        </StyledFooterText>
        <StyledFooterText variant='bigTitle' sx={{ color: "#1e1f26" }}>
          {t("workspage.quote2")}
        </StyledFooterText>
        <StyledFooterAuthor variant='h4'>Don Draper</StyledFooterAuthor>
      </StyledFooterBox>
    </StyledContainer>
  );
};

export default Workspage;

const itemData = [
  {
    id: 0,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
  {
    id: 1,
    title: "bilgekaanyilmaz.com",
    author: "@rollelflex_graphy726",
    video: portfolio,
  },
  {
    id: 2,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
  {
    id: 3,
    title: "bilgekaanyilmaz.com",
    author: "@rollelflex_graphy726",
    video: portfolio,
  },
  {
    id: 4,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
  {
    id: 5,
    title: "bilgekaanyilmaz.com",
    author: "@rollelflex_graphy726",
    video: portfolio,
  },
  {
    id: 6,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
];
