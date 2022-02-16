import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/img/logo.svg";
import { ScLogoWrapper, ScHeader, ScLink, ScLogInButton } from "./ScHeader";

const Header = () => {
  return (
    <ScHeader>
      <ScLogoWrapper>
        <img src={logo} alt="Şikayetvar Logo" />
      </ScLogoWrapper>
      <ScLink>
        <Link to="/">Posts</Link>
      </ScLink>
      <ScLogInButton>
        Login
      </ScLogInButton>
    </ScHeader>
  )
};

export default Header;