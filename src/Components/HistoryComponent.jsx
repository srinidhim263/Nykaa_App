import React, { useEffect, useState } from "react";
import nykaaAppApi from "../api/nykaaApp";

const HistoryComponent = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    nykaaAppApi
      .get(`/history/all`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          setHistories(res.data.data);
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
  return (
    <div className="m-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default HistoryComponent;
