import React from "react";
import TopbarStyles from "./TopbarStyles.js";
import Logo from "../Logo/Logo";
import Heading from "../Heading/Heading";
import Time from "../Time/Time.js";

const Topbar = () => {
  return (
    <TopbarStyles>
      <Logo />
      <Heading />
      <Time />
    </TopbarStyles>
  );
};

export default Topbar;
