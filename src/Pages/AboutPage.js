import React from "react";
import About from '../Components/About';
import PageBanner from "../Components/PageBanner";
function AboutPage() {
  return (
    <>
    <PageBanner value={"About Me"}/>
      <About/>
    </>
  );
}

export default AboutPage;
