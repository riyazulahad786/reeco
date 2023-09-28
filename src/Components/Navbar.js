import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand main-tag text-white " href="/">
            Reeco
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white mx-2" aria-current="page" href="#">
                  store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white mx-2" href="#">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white mx-2" href="#">
                  Analytics
                </a>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <i className="ri-shopping-cart-2-fill mt-1 mx-4 text-white"></i>
              <div className="btn-group">
                <div
                  className="btn text-white btn-sm dropdown-toggle mx-3"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hello,James
                </div>
                <div className="dropdown-menu mb-3">...</div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
