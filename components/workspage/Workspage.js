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

const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  height: "30vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "12vh",
  },
}));

const StyledLeftTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "148px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    paddingTop: "18px",
  },
}));

const StyledLeftTitleText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
  },
}));

const StyledRightTitleText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1.4rem",
  },
}));

const StyledRightTitleGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  paddingTop: "148px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    paddingTop: "18px",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    padding: "0 80px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0 18px",
  },
}));

const StyledFooterBox = styled(Box)(({ theme }) => ({
  padding: "132px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {},
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
  lineHeight: "1.2em",
  fontWeight: "700",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const StyledFooterAuthor = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const Workspage = ({ isShowWorkspage }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledContainer
      disableGutters
      maxWidth='false'
      sx={{ display: isShowWorkspage ? "block" : "none" }}
    >
      <StyledHeaderGrid
        container
        spacing={0}
        sx={{ padding: { xs: "0 10px" } }}
      >
        <StyledLeftTitleGrid item xs={5}>
          <StyledLeftTitleText variant='smallTitle' sx={{ color: "#1e1f26" }}>
            MY
          </StyledLeftTitleText>
          <StyledLeftTitleText
            variant='smallTitle'
            sx={{ paddingLeft: "12px", color: "#1e1f26" }}
          >
            WORK
          </StyledLeftTitleText>
        </StyledLeftTitleGrid>
        <StyledRightTitleGrid item xs={7}>
          <StyledRightTitleText variant='bigTitle' sx={{ color: "#1e1f26" }}>
            SELECTED WORK
          </StyledRightTitleText>
        </StyledRightTitleGrid>
      </StyledHeaderGrid>
      <ImageList cols={matchDownMd ? 1 : 2} rowHeight={matchDownMd ? 120 : 400}>
        {itemData.map((item) => (
          <ImageListItem rows={4} key={item.id} sx={{ overflow: "hidden" }}>
            {/* <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading='lazy'
            /> */}
            <video
              src={item.video}
              type='video/mp4'
              muted
              height='100%'
              width='100%'
              style={{ scale: "1.25" }}
              autoPlay={"autoplay"}
              loop
            />
            <ImageListItemBar
              title={item.title}
              sx={{
                background: "rgba(0, 0, 0, 0)",
                margin: { xs: "25px 50px", md: "100px 200px" },
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <StyledFooterBox>
        <StyledFooterText variant='bigTitle' sx={{ color: "#1e1f26" }}>
          "MAKE IT SIMPLE,
        </StyledFooterText>
        <StyledFooterText variant='bigTitle' sx={{ color: "#1e1f26" }}>
          BUT SIGINIFICANT."
        </StyledFooterText>
        <StyledFooterAuthor variant='h4'>Dieter Rams</StyledFooterAuthor>
      </StyledFooterBox>
    </StyledContainer>
  );
};

export default Workspage;

const itemData = [
  {
    // img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    id: 0,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
  {
    // img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    id: 1,
    title: "bilgekaanyilmaz.com",
    author: "@rollelflex_graphy726",
    video: portfolio,
  },
  {
    // img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    id: 2,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
  {
    // img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    id: 3,
    title: "bilgekaanyilmaz.com",
    author: "@rollelflex_graphy726",
    video: portfolio,
  },
  {
    // img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    id: 4,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
  {
    // img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    id: 5,
    title: "bilgekaanyilmaz.com",
    author: "@rollelflex_graphy726",
    video: portfolio,
  },
  {
    // img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    id: 6,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
  {
    // img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    id: 7,
    title: "bilgekaanyilmaz.com",
    author: "@rollelflex_graphy726",
    video: portfolio,
  },
  {
    // img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    id: 8,
    title: "Next.js",
    author: "@bkristastucchio",
    video: nextjs,
  },
  {
    // img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    id: 9,
    title: "bilgekaanyilmaz.com",
    author: "@rollelflex_graphy726",
    video: portfolio,
  },
];
