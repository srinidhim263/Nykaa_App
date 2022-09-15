import React from "react";
import AppBar from "../Components/AppBar";
import AppBody from "../Components/AppBody";
import { Col, Container, Row, Stack } from "react-bootstrap";

import { products } from "../assests/data/Productdata";
import Title from "../Components/Title";
import ProductItem from "../Components/products/ProductItem";
import Footer from "../Components/FooterComp";

const CategoryPage = () => {
  return (
    <>
      <AppBody>
        <AppBar />
        <Container>
          <Row>
            <Col>
              <Stack gap={3} className="mt-5">
                <Title title="Products" />
                <Container>
                  <Row>
                    {products.map((product, index) => {
                      return (
                        <Col md={4}>
                          <ProductItem
                            image={product.image}
                            name={product.name}
                            price={product.price}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Stack>
            </Col>
          </Row>
        </Container>
      </AppBody>
      <Footer/>
    </>
  );
};

export default CategoryPage;
