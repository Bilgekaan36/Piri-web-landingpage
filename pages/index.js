import { Container } from "@mui/material";
import { useEffect, useState } from "react";

import Benefitspage from "../components/benefitspage/Benefitspage";
import Landingpage from "../components/landingpage/Landingpage";
import Personalpage from "../components/personalpage/Personalpage";
import Processpage from "../components/processpage/Processpage";
import Workspage from "../components/workspage/Workspage";

import NewLandingpage from "../components/landingpage/NewLandingpage";

export default function Main() {
  const [isShowWorkspage, setWorkspage] = useState(false);

  const setNextWorkspage = (data) => {
    setWorkspage(data);
  };

  return (
    <Container
      disableGutters
      maxWidth='false'
      sx={{
        transition: "all 1s ease-in-out",
      }}
    >
      {/* <Landingpage /> */}
      <NewLandingpage />
      <Benefitspage setNextWorkspage={setNextWorkspage} />
      <Workspage isShowWorkspage={isShowWorkspage} />
      <Processpage isShowWorkspage={isShowWorkspage} />
      <Personalpage isShowWorkspage={isShowWorkspage} />
    </Container>
  );
}
