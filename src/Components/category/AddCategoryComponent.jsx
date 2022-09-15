import React, { useEffect, useState } from "react";
import nykaaAppApi from "../../api/nykaaApp";
import CategoryComponent from "./CategoryComponent";
const AddCategoryComponent = () => {
  const [category, setCategory] = useState([]);
  const [showAddForm, setshowAddForm] = useState(false);

  useEffect(() => {
    nykaaAppApi
      .get(`/category/all`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setCategory(res.data.data);
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

  const deleteAPI = (event, id) => {
    event.preventDefault();
    nykaaAppApi
      .delete(`/category/${id}`)
      .then((res) => {
        if (res.data.data) {
          setCategory(res.data.data);
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
      <h1>Category</h1>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setshowAddForm(true);
        }}
      >
        Add
      </button>
      {showAddForm && <CategoryComponent />}
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>

            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {category.map((category, index) => (
            <tr key={index}>
              <td>{category.categoryId}</td>
              <td>{category.categoryName}</td>

              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button
                className="btn btn-secondary"
                onClick={(event) => deleteAPI(event, category.categoryId)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddCategoryComponent;
