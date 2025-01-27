import React from 'react'
import LogoImageYellow from "../../assets/LogoIcons/logoYellow.svg"
import LogoImageBlack from "../../assets/LogoIcons/logoBlack.svg"
import "./Logo.css"

function LogoImageFunction() {
  return (
    <>
      <img src={LogoImageYellow} className="logo logo-yellow" alt="" />
      <img src={LogoImageBlack} className="logo logo-black" alt="" />
    </>
  )
}

export default LogoImageFunction;
