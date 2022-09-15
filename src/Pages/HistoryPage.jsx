import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "../assests/style/history.css"

import AppBar from "../Components/AppBar";
import Footer from "../Components/FooterComp";
import HistoryComponent from "../Components/HistoryComponent";

const HistoryPage = () => {
  return (
    <div>
      <AppBar />
      {/* <div className="hcontainer-fluid my-5  d-flex  justify-content-center">
        <div className="card ">
          <div className="card-header bg-white">
            <div className="media flex-sm-row flex-column-reverse justify-content-between  ">
              <div className="col-auto text-center  my-auto pl-0 pt-sm-4">
                <img
                  className="img-fluid my-auto align-items-center mb-0 pt-3"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpjIpR_Zm_yi_VLy4pnwTNBaU9oKI760RHklKvPub4e0cx7FzPllA0YdtvrUxRczm8KA&usqp=CAU"
                  width="115"
                  height="115"
                />
                <p className="mb-4 pt-0 Glasses">Order history</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="card card-2">
                  <div className="card-body">
                    <div className="media">
                      <div className="sq align-self-center ">
                        <img
                          className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                          src="https://cdn.shopify.com/s/files/1/1454/5188/products/card-1_340dd7ab-c7f7-4683-b52c-5aa9d45a89df_530x@2x.jpg?v=1657680785"
                          width="135"
                          height="135"
                        />
                      </div>
                      <div className="media-body my-auto text-right">
                        <div className="row  my-auto flex-column flex-md-row">
                          <div className="col my-auto">
                            <h6 className="mb-0">mCaffine Body scrub</h6>
                          </div>
                          
                          <div className="col my-auto">
                            <small>Qty : 1</small>
                          </div>
                          <div className="col my-auto">
                            <h6 className="mb-0">&#8377;750</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-3 " />
                    <div className="row">
                      <div className="col mt-auto">
                        <ProgressBar now={100} />
                        <div className="media row justify-content-between ">
                          <div className="col-auto text-right">
                            <span>
                              <small className="text-right mr-sm-2"></small>
                              <i className="fa fa-circle active"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>*/}
  <HistoryComponent/>
      <Footer />
    </div> 
  );
};

export default HistoryPage;
