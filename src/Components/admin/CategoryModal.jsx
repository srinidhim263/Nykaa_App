import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import bookartApi from "../../api/api";

const CategoryModal = ({ open, setOpen }) => {
  const [cat, setCat] = useState({ categoryName: "" });
  const handleClose = () => {
    setOpen(false);
  };

  const categoryApi = (event) => {
    event.preventDefault();
    bookartApi
      .post("/category", cat)
      .then(
        (response) => {
          let data = response.data;
          if (data.data) {
            handleClose();
          } else if (data.error) {
            console.log(data.error.message);
          }
        },
        (error) => {
          console.log(`Axios -> ${error.message}`);
        }
      )
      .catch((error) => {
        console.log("Something went wrong");
      });
  };

  return (
    <div>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3">
            <label class="form-label">Category</label>
            <input
              type="text"
              class="form-control"
              value={cat.categoryName}
              onChange={(e) => {
                console.log(e.target.value);
                setCat({ categoryName: e.target.value });
              }}
            />
          </div>
        </Modal.Body>
        <div className="m-3">
          <Button variant="secondary" className="me-2" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              categoryApi(e);
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryModal;
