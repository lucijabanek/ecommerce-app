import React, { Profiler } from "react";

import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

//it will be functional component because we don't really need any
//lifecycle method at this point or store any state
const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration) =>
        console.log({
          id,
          phase,
          actualDuration,
        })
      }
    >
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
