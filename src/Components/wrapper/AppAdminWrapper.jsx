import React from "react";
import { useState } from "react";
import CategoryModal from "../admin/CategoryModal";

const AppAdminWrapper = ({ children, title }) => {
  const [isCatOpen, setCatOpen] = useState(false);
  const [isProdOpen, setProdOpen] = useState(false);
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-9 fs-4 fs-semibold my-2">{title}</div>
        <div className="col-3 my-2">
          <button
            className="btn btn-primary me-2"
            onClick={(e) => {
              e.preventDefault();
              setCatOpen(true);
            }}
          >
            Add Category
          </button>
          <button className="btn btn-primary">Add Product</button>
        </div>
      </div>
      <div className="row">{children}</div>
      <CategoryModal open={isCatOpen} setOpen={setCatOpen} />
    </div>
  );
};

export default AppAdminWrapper;
