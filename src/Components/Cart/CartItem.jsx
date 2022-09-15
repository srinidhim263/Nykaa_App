import React from "react";
import { useState } from "react";

const CartItem = ({ cartItem, updateCartItem , deleteCartItem }) => {
  const [cartItemError, setCartItemError] = useState("");

  return (
    <tr className="align-middle alert border-bottom" role="alert">
      <td className="text-center">
        <img className="pic" src={cartItem.img} alt="" />
      </td>
      <td>
        <div>
          <p className="m-0 fw-bold">{cartItem.name}</p>
          <p className="m-0 text-muted">{cartItem.author}</p>
        </div>
      </td>
      <td>
        <div className="fw-600">₹ {cartItem.price}</div>
      </td>
      <td className="pe-5">
        <input
          className="form-control form-control-sm"
          type="number"
          placeholder="Number of Items"
          value={cartItem.numberOfItems}
          onChange={(e) => {
            let itemCount = e.target.value;
            if (itemCount <= 0) {
              setCartItemError("Can not be less than zero");
            } else {
              updateCartItem({ ...cartItem, numberOfItems: itemCount });
              setCartItemError("");
            }
          }}
        />
        <div className="form-text text-danger">{cartItemError}</div>
      </td>
      <td>₹ {cartItem.price * cartItem.numberOfItems}</td>
      <td>
        <div
          className="btn btn-danger"
          onClick={(event) => deleteCartItem(event, cartItem)}
        >
          <span className="fas fa-times"></span>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
