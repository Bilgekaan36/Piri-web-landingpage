import { Container } from "@mui/material";
import { useEffect, useState } from "react";

import Benefitspage from "../components/benefitspage/Benefitspage";
import Landingpage from "../components/landingpage/Landingpage";
import Process from "../components/process/Process";
import Workspage from "../components/workspage/Workspage";

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
      <Process isShowWorkspage={isShowWorkspage} />
    </Container>
  );
}
