import React from "react";


function Home() {
  return (
    <>
      {/* Start Product Section */}
      <div className="product-section mb-5">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <a href="shop.html" className="btn">
                  Explore
                </a>
              </p>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="images/G-1.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Classic Black Shirt Jacket</h3>
                <strong className="product-price">$299.00</strong>
                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}
            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="images/g-2.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Vision Patterned Long Sleeve</h3>
                <strong className="product-price">$99.00</strong>
                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-1 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="images/g-3.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Classic Hooded Regular Long Sleeve</h3>
                <strong className="product-price">$239.00</strong>
                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}
            {/* Start Column 5 */}
            <div className="col-12 col-md-4 col-lg-3 mb-1 mt-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="images/g-4.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Aesthetic Seam Sneakers</h3>
                <strong className="product-price">$139.00</strong>
                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 5 */}
            {/* Start Column 6 */}
            <div className="col-12 col-md-4 col-lg-3 mb-1 mt-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="images/g-5.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Classic Shoulder bag</h3>
                <strong className="product-price">$239.00</strong>
                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 6 */}
            {/* Start Column 7 */}
            <div className="col-12 col-md-4 col-lg-3 mb-1 mt-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="images/g-6.jpg"
                  className="img-fluid h-75 product-thumbnail"
                />
                <h3 className="product-title">Cool sunglasses</h3>
                <strong className="product-price">$79.00</strong>
                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 7 */}
            {/* Start Column 8 */}
            <div className="col-12 col-md-4 col-lg-3 mb-1 mt-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="images/g-8.jpg"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Raffia Earrings</h3>
                <strong className="product-price">$69.99</strong>
                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 8 */}
          </div>
        </div>
      </div>
      {/* End Product Section */}
    </>
  );
}

export default Home;