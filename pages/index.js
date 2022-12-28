import { Container } from "@mui/material";
import { useEffect, useState } from "react";

import Benefitspage from "../components/benefitspage/Benefitspage";
import Landingpage from "../components/landingpage/Landingpage";
import Personalpage from "../components/personalpage/Personalpage";
import Processpage from "../components/processpage/Processpage";
import Workspage from "../components/workspage/Workspage";
import Toolspage from "../components/toolspage/Toolspage";
import TestToolspage from "../components/toolspage/TestToolspage";

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
      <Landingpage />
      <Benefitspage setNextWorkspage={setNextWorkspage} />
      <Workspage isShowWorkspage={isShowWorkspage} />
      {/* <Toolspage /> */}
      <TestToolspage />
      <Processpage isShowWorkspage={isShowWorkspage} />
      <Personalpage isShowWorkspage={isShowWorkspage} />
    </Container>
  );
}
