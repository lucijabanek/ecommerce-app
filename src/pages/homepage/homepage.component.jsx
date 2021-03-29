import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

//it will be functional component because we don't really need any
//lifecycle method at this point or store any state
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
