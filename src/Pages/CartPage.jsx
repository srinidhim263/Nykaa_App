import React from 'react'
import AppBar from '../Components/AppBar';


import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
import Footer from '../Components/FooterComp';
import CartComponent from '../Components/Cart/CartComponent';

const CartPage = () => {
  return (
    <>
    <AppBar/>
   
<CartComponent/>
<Footer/>
</>
  );
};

export default CartPage;