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
} from "@mui/material";
import { Parallax } from "react-scroll-parallax";

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
  [theme.breakpoints.up("xl")]: {
    padding: "0 80px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 18px",
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
      <StyledHeaderGrid container spacing={0}>
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
      {/* Here starts the Imagelist */}
      <ImageList cols={matchDownMd ? 1 : 2} rowHeight={matchDownMd ? 120 : 400}>
        {itemData.map((item) => (
          <ImageListItem rows={4} key={item.img}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar sx={{ background: "rgba(0, 0, 0, 0)" }}>
              <h1>dedefef</h1>
            </ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    </StyledContainer>
  );
};

export default Workspage;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",

    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
