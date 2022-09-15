import React from "react";
import AppBar from "../Components/AppBar";
import AppBody from "../Components/AppBody";
import { Container } from "react-bootstrap";

import FooterComp from "../Components/FooterComp";
import ProductComponent from "../Components/products/ProductComponent";

const ProductPage = () => {
  return (
    <>
      <AppBody>
        <AppBar />
        <Container>
          <ProductComponent title = {"products"}/>
        </Container>
      </AppBody>
      <FooterComp />
    </>
  );
};

export default ProductPage;
