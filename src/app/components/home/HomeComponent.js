import React from "react";
import Image from "next/image";
import storeLogo from "../../../../public/images/WHITE MINIMALIST SPA & MASSAGE.png";
const HomeComponent = () => {
  return (
    <div className="home-box">
      <div className="row mt-5">
        <div className="col-md-6">
          <Image
            src={storeLogo}
            width={500}
            height={500}
            className="sotre-logo-img"
          ></Image>
        </div>
        <div className="col-md-6">
          <h1>Welcome to my website!</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
