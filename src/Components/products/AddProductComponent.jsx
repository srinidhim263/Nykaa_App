import React, { useEffect, useState ,useContext} from "react";
import nykaaAppApi from "../../api/nykaaApp";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import AppBar from "../AppBar";

let INITIAL_VALUE = {
  productId: "",
  productName: " ",
};
const AddProductComponent = () => {
  const [product, setProducts] = useState(INITIAL_VALUE);
  const { loggedInUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    setProducts({ ...product, id: loggedInUser.id });
  }, [loggedInUser]);

  const addproductAPI = (event, id) => {
    event.preventDefault();
    nykaaAppApi
      .post(`/product`, product)
      .then((res) => {
        if (res.data.data) {
          navigate("/product");
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

  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(event.target.files[0]);
    formData.append("file", event.target.files[0]);
    axios
      .post("http://localhost:8080/api/uploadFile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(
        (response) => {
          let data = response.data;
          if (data.data) {
            setProducts({ ...product, fileId: data.data.id });
          } else if (data.error) {
            console.log(data.error.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <div>
        <AppBar />
        <form className="m-5">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="product name"
              onChange={(event) => {
                setProducts({ ...product, productName: event.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="product price"
              onChange={(event) => {
                setProducts({ ...product, productPrice: event.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              onChange={(event) => {
                setProducts({
                  ...product,
                  productDescription: event.target.value,
                });
              }}
            ></textarea>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="category Id"
              onChange={(event) => {
                setProducts({ ...product, categoryId: event.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <input className="form-control" type="file" id="formFile" />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onChange={(event) => {
              // addproductAPI(event);
            }}
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};
export default AddProductComponent;
