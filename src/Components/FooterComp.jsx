import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light p-3" fixed="bottom">
    <Row>
      <Col> Copyrights @NykaaFashions</Col>
    </Row>
  </Container>
  );
};

export default Footer;