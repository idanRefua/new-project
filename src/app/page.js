"use client";
import HomeComponent from "./components/home/HomeComponent";
import AboutUs from "./components/aboutus/AboutUs";
import OurArts from "./components/OurArts/OurArts";
import LeftDiv from "./components/LeftDiv/LeftDiv";
import RightDivAnimation from "./components/RightDivAnimation/RightDivAnimation";
import AboutRefs from "./components/aboutrefs/AboutRefs";
import ContactUsComponent from "./components/contact/ContactUsComponent";
import AnotherAboutComponent from "./components/anotherabout/AnotherAboutComponent";
export default function Home() {
  return (
    <>
      <div className="container">
        <br></br>
        <div id="home">
          <LeftDiv>
            <HomeComponent />
          </LeftDiv>
        </div>
        <div id="about-refs">
          <RightDivAnimation>
            <AboutRefs />
          </RightDivAnimation>
        </div>
        <div id="another-about">
          <LeftDiv>
            <AnotherAboutComponent />
          </LeftDiv>
        </div>
        <div id="our-arts">
          <LeftDiv>
            <OurArts />
          </LeftDiv>
        </div>
        <div id="about-us">
          <LeftDiv>
            <AboutUs />
          </LeftDiv>
        </div>
      </div>
    </>
  );
}
