import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import nykaaAppApi from "../../api/nykaaApp";
import AddProductComponent from "./AddProductComponent";

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [showAddForm, setshowAddForm] = useState(false);

  const deleteAPI = (event, id) => {
    event.preventDefault();
    nykaaAppApi
      .delete(`/product/${id}`)
      .then((res) => {
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
  };

  return (
    <div className="m-5">
      <h1>Product</h1>
      <Link to="/addproduct">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setshowAddForm(true);
          }}
        >
          Add Product
        </button>
      </Link>
      {showAddForm && <AddProductComponent />}
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>Rs. {product.productPrice}</td>
                  <td>{product.productDescription}</td>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={(event) => deleteAPI(event, product.productId)}
                  >
                    Delete
                  </button>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductAdmin;
