import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../../Components/Cart/Cart.css";
import AppMainWrapper from "../../Components/wrapper/AppMainWrapper";
import CartItem from "../../Components/Cart/CartItem";
import CartWrapper from "../../Components/wrapper/CartWrapper";
import { UserContext } from "../../context/UserContext";

const CartComponent = () => {
  // const { userCart, setUserCart } = useContext(UserContext);
  // const [total, setTotal] = useState(0);

  // const calculateTotal = () =>
  //   setTotal(
  //     userCart.reduce((acc, curr) => {
  //       acc = acc + curr.price * curr.numberOfItems;
  //       return acc;
  //     }, 0)
  //   );

  // const updateCartItem = (item) => {
  //   const updatedCartItem = userCart.filter((cart) => {
  //     if (cart.id === item.id) {
  //       cart.numberOfItems = item.numberOfItems;
  //     }
  //     return cart;
  //   });

  //   setUserCart(updatedCartItem);
  // };

  // const deleteCartItem = (event, item) => {
  //   event.preventDefault();
  //   setUserCart(userCart.filter((cart) => cart.id !== item.id));
  // };

  // useEffect(() => {
  //   calculateTotal();
  // }, [userCart]);

  // return (
  //   <>
  //     <AppMainWrapper title={"Cart"}>
  //       {userCart.length > 0 ? (
  //         <CartWrapper total={total}>
  //           {userCart.map((cart) => (
  //             <CartItem
  //               key={cart.id}
  //               cartItem={cart}
  //               updateCartItem={updateCartItem}
  //               deleteCartItem={deleteCartItem}
  //             />
  //           ))}
  //         </CartWrapper>
  //       ) : (
  //         <div className="fs-6">
  //           <p>No Items in the cart</p>
  //           <Link to={"/cart"}>
  //             <button className="btn btn-primary">Add Products</button>
  //           </Link>
  //         </div>
  //       )}
  //     </AppMainWrapper>
  //   </>
  // );
  return(
    <div className="text-center">
    <Container>
       <Card body>
    <Row>
      <Col><h1>Thank  you for your purchase!!</h1>
      </Col>
    </Row>
    </Card>
  </Container>
  </div>
  )
};

export default CartComponent;
