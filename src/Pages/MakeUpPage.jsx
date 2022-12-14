import React from 'react'
import AppBar from "../Components/AppBar";
import AppBody from "../Components/AppBody";
import { Container } from "react-bootstrap";

import FooterComp from "../Components/FooterComp";
import ProductComponent from "../Components/products/ProductComponent";

const MakeUpPage = () => {
  return (
    <>
    <AppBody>
      <AppBar />
      <Container>
      {/* <section>
      <div class="container py-5">
        <h2 class="text-center">MakeUp Products</h2>
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img src="skin1.jpg" class="w-100 img-fluid" />
                      <a href="#!">
                        <div class="hover-overlay">
                          <div class="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>Nykaa face oil</h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">
                      <span>100% natural</span>
                      <span class="text-primary"> • </span>
                      <span>Light weight</span>
                      <span class="text-primary"> • </span>
                      <span>Skin friendly<br /></span>
                    </div>
                    <div class="mb-2 text-muted small">
                      <span>fragrance </span>
                      <span class="text-primary"> • </span>
                      <span>For all skin type</span>
                      <span class="text-primary"> • </span>
                      <span>100% skin protection<br /></span>
                    </div>
                    <p class="text-truncate mb-4 mb-md-0">
                      Nykaa’s new face oil range is set to redefine skincare. Each bottle in the Skin Potion range is 
                      lovingly created with 100% herb concentrates, drenched in rich antioxidants and nutrients to tackle
                       all your skin concerns
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">₹13.99</h4>
                      <span class="text-danger"><s>₹20.99</s></span>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                  
                      <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img src="skin3.jpg"
                        class="w-100" />
                      <a href="#!">
                        <div class="hover-overlay">
                          <div class="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>Nykaa face wash</h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    
                     </div>
                    <div class="mt-1 mb-0 text-muted small">
                      <span>100% natural</span>
                      <span class="text-primary"> • </span>
                      <span>Light weight</span>
                      <span class="text-primary"> • </span>
                      <span>Skin friendly<br /></span>
                    </div>
                    <div class="mb-2 text-muted small">
                      <span>fragrance </span>
                      <span class="text-primary"> • </span>
                      <span>For all skin type</span>
                      <span class="text-primary"> • </span>
                      <span>100% skin protection<br /></span>
                    </div>
                    <p class="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable.
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">₹14.99</h4>
                      <span class="text-danger"><s>₹21.99</s></span>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                      
                      <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      <img src="skin4.jpg"
                        class="w-100" />
                      <a href="#!">
                        <div class="hover-overlay">
                          <div class="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>Nykaa face mask</h5>
                    <div class="d-flex flex-row">
                      <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <span>145</span>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">
                      <span>100% natural</span>
                      <span class="text-primary"> • </span>
                      <span>Light weight</span>
                      <span class="text-primary"> • </span>
                      <span>Skin friendly<br /></span>
                    </div>
                    <div class="mb-2 text-muted small">
                      <span>fragrance </span>
                      <span class="text-primary"> • </span>
                      <span>For all skin type</span>
                      <span class="text-primary"> • </span>
                      <span>100% skin protection<br /></span>
                    </div>
                    <p class="text-truncate mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable.
                    </p>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">₹17.99</h4>
                      <span class="text-danger"><s>₹25.99</s></span>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                      
                      <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
          <ProductComponent title = {"products"}/>
      </Container>
    </AppBody>
    <FooterComp />
  </>
  );
};

export default MakeUpPage;