import React from "react";

const AppMainWrapper = ({ children, title }) => {
  return (
    <div className="container">
      <div className="fs-4 fs-semibold my-2">{title}</div>
      <div className="d-flex flex-row">
        <div className="text-muted m-2" id="res"></div>
      </div>
      <div className="row">{children}</div>
    </div>
  );
};

export default AppMainWrapper;
