import React from "react";
import BackTop from "./components/BackTop";
import FooterPart from "./components/FooterPart";
import HeaderPart from "./components/HeaderPart";
import PreloaderPart from "./components/PreloaderPart";

export default function index({ children }) {
  return (
    <>
      {/*<PreloaderPart />*/}
      <HeaderPart />
      {children}
      <FooterPart />
      <BackTop />
    </>
  );
}
