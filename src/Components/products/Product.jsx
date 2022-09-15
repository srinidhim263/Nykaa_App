import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import nykaaAppApi from "../../api/nykaaApp";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    nykaaAppApi
      .get(`/product/all`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          setProducts(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  }, []);
  return (
    <div>
      <Card className="text-dark rounded my-2">
        {/* <Card.Img variant="top" src={image} className="fitToContent" /> */}
        {products.map((product) => (
          <Card.Body>
            <Card.Title className="fs-5 text-center mb-3">
              {product.productName}
            </Card.Title>
            <Card.Text>{product.productDescription}</Card.Text>
            <Card.Text>{product.productPrice}</Card.Text>
            <Link to="/cart">
              <Button variant="secondary" className="w-100">
                Buy Now
              </Button>
            </Link>
          </Card.Body>
        ))}
      </Card>
    </div>
  );
};
export default Product;
