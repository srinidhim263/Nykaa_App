import React from "react";

const CartWrapper = ({ children, total }) => {
  return (
    <div className="card p-3">
      <table className="table table-responsive table-borderless">
        <thead>
          <th>&nbsp;</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </thead>
        <tbody> {children} </tbody>
      </table>
      <div className="fs-3 d-flex justify-content-end m-2">
        Total: ₹ {total}
      </div>
    </div>
  );
};

export default CartWrapper;
