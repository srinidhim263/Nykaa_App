import React from "react";
import AppBar from "../Components/AppBar";
import Carousels from "../Components/Carousels";
import Footer from "../Components/FooterComp";

import skinCare from "../assests/images/image4.jpg";
import haircare from "../assests/images/image5.jpg";
import makeup from "../assests/images/image6.jpg";

const HomePage = () => {
  return (
    <div>
      <AppBar />
      <Carousels />
      <div class="container text-center">
        <h3>Try it out!!</h3>
        <br />
        <div class="row">
          <div class="col-sm-4">
            <img
              src={skinCare}
              class="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
            <p>Skin care products</p>
          </div>
          <div class="col-sm-4">
            <img
              src={haircare}
              class="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
            <p>Eye make over</p>
          </div>
          <div class="col-sm-4">
            <img
              src={makeup}
              class="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
            <p>Hair care prodcuts</p>
          </div>
        </div>
      </div>
      <br />

      <Footer />
    </div>
  );
};
export default HomePage;
