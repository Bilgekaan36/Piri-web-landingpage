import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#1E1F26",
  maxWidth: "80%",
  margin: "0px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: 12,
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: 0,
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "1px",
  width: "100%",
  background: "gray",
  marginTop: "18px",
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    content: "''",
    height: "1px",
    width: "0%",
    background: "#f7be02",
    transition: "800ms",
  },
}));

const CustomAccordion = (props) => {
  return (
    <>
      <StyledAccordion
        expanded={props.entered === "panel1"}
        // onChange={handleChange("panel1")}
      >
        <StyledAccordionSummary>
          <Typography
            variant='caption'
            color='common.white'
            sx={{
              marginRight: { xs: "100px", md: "300px" },
              fontSize: { xs: "0.4rem", md: "0.75rem" },
            }}
          >
            01
          </Typography>
          <Box flexGrow={1}>
            <Typography
              variant='buttonTitle'
              color='common.white'
              sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}
            >
              Conversion Rate
            </Typography>
            <StyledBox
              sx={{
                "&::before": {
                  width: props.entered === "panel1" ? "100%" : "0%",
                },
              }}
            />
          </Box>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography
            variant='buttonContent'
            color='common.white'
            sx={{ fontSize: { xs: "0.75rem", md: "1.5rem" } }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={props.entered === "panel2"}
        // onChange={handleChange("panel2")}
      >
        <StyledAccordionSummary>
          <Typography
            variant='caption'
            color='common.white'
            sx={{
              marginRight: { xs: "100px", md: "300px" },
              fontSize: { xs: "0.4rem", md: "0.75rem" },
            }}
          >
            02
          </Typography>
          <Box flexGrow={1}>
            <Typography
              variant='buttonTitle'
              color='common.white'
              sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}
            >
              Quality in Design
            </Typography>
            <StyledBox
              sx={{
                "&::before": {
                  width: props.entered === "panel2" ? "100%" : "0%",
                },
              }}
            />
          </Box>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography
            variant='buttonContent'
            color='common.white'
            sx={{ fontSize: { xs: "0.75rem", md: "1.5rem" } }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={props.entered === "panel3"}
        // onChange={handleChange("panel3")}
      >
        <StyledAccordionSummary>
          <Typography
            variant='caption'
            color='common.white'
            sx={{
              marginRight: { xs: "100px", md: "300px" },
              fontSize: { xs: "0.4rem", md: "0.75rem" },
            }}
          >
            03
          </Typography>
          <Box flexGrow={1}>
            <Typography
              variant='buttonTitle'
              color='common.white'
              sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}
            >
              Professional Coding
            </Typography>
            <StyledBox
              sx={{
                "&::before": {
                  width: props.entered === "panel3" ? "100%" : "0%",
                },
              }}
            />
          </Box>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography
            variant='buttonContent'
            color='common.white'
            sx={{ fontSize: { xs: "0.75rem", md: "1.5rem" } }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={props.entered === "panel4"}
        // onChange={handleChange("panel4")}
      >
        <StyledAccordionSummary>
          <Typography
            variant='caption'
            color='common.white'
            sx={{
              marginRight: { xs: "100px", md: "300px" },
              fontSize: { xs: "0.4rem", md: "0.75rem" },
            }}
          >
            04
          </Typography>
          <Box flexGrow={1}>
            <Typography
              variant='buttonTitle'
              color='common.white'
              sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}
            >
              The Difference
            </Typography>
            <StyledBox
              sx={{
                "&::before": {
                  width: props.entered === "panel4" ? "100%" : "0%",
                },
              }}
            />
          </Box>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography
            variant='buttonContent'
            color='common.white'
            sx={{ fontSize: { xs: "0.75rem", md: "1.5rem" } }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={props.entered === "panel5"}
        // onChange={handleChange("panel5")}
      >
        <StyledAccordionSummary>
          <Typography
            variant='caption'
            color='common.white'
            sx={{
              marginRight: { xs: "100px", md: "300px" },
              fontSize: { xs: "0.4rem", md: "0.75rem" },
            }}
          >
            05
          </Typography>
          <Box flexGrow={1}>
            <Typography
              variant='buttonTitle'
              color='common.white'
              sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}
            >
              Your Vision
            </Typography>
            <StyledBox
              sx={{
                "&::before": {
                  width: props.entered === "panel5" ? "100%" : "0%",
                },
              }}
            />
          </Box>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography
            variant='buttonContent'
            color='common.white'
            sx={{ fontSize: { xs: "0.75rem", md: "1.5rem" } }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={props.entered === "panel6"}
        // onChange={handleChange("panel6")}
      >
        <StyledAccordionSummary>
          <Typography
            variant='caption'
            color='common.white'
            sx={{
              marginRight: { xs: "100px", md: "300px" },
              fontSize: { xs: "0.4rem", md: "0.75rem" },
            }}
          >
            06
          </Typography>
          <Box flexGrow={1}>
            <Typography
              variant='buttonTitle'
              color='common.white'
              sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}
            >
              Fast & Safe
            </Typography>
            <StyledBox
              sx={{
                "&::before": {
                  width: props.entered === "panel6" ? "100%" : "0%",
                },
              }}
            />
          </Box>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography
            variant='buttonContent'
            color='common.white'
            sx={{ fontSize: { xs: "0.75rem", md: "1.5rem" } }}
          >
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default CustomAccordion;
