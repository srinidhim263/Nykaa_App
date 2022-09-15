import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import carouselOne from "../assests/images/image1.jpg";
import carouselTwo from "../assests/images/image2.webp";


const Carousels = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-50  "
        src={carouselOne}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-50"
        src={carouselTwo}
        alt="Second slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
);
}


export default Carousels;