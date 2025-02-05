import React from "react";
import LogoImageYellowIcon from "../../assets/LogoIcons/logoYellow.svg";
import LogoImageBlackIcon from "../../assets/LogoIcons/logoBlack.svg";
import "./Logo.css";

function LogoImageFunction() {
  return (
    <>
      <img src={LogoImageYellowIcon} className="logo logo-yellow" alt="" />
      <img src={LogoImageBlackIcon} className="logo logo-black" alt="" />
    </>
  );
}

export default LogoImageFunction;
