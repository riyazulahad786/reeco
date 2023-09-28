import React, { useState } from "react";

function Home() {
  const [showButton, setShowButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [missing,setMissing]=useState(false)
  const toggleButton = () => {
    setShowButton(!showButton);
  };
  const Missing = ()=> {
   setMissing(!missing)
  }
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setMissing(!missing)
  };
  return (
    <div className="">
      <div className="container">
        <div className=" ">
          <div className="d-flex justify-content-start mt-3">
            <h6>
              Orders &gt; <span className="order-tag">Orders 32457ABC</span>
            </h6>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <h4>Orders 32457ABC</h4>
            </div>
            <div className="">
              <button className="back mx-2">Back</button>
              <button className="approve mx-2">Approve order</button>
            </div>
          </div>
        </div>
       
        {/* ------------------------------ */}

        <div className="d-flex mt-3 top-content border">
          <div className="mx-2 mt-1">
            <p className="mt-3">supplier</p>
            <h6>East coast fruits & vegetables</h6>
          </div>

          <div className="mx-2 ship-date">
            <p>shipping date</p>
            <h6>Thu, Feb 10</h6>
          </div>

          <div className="mx-2 total">
            <p>Total</p>
            <h6>$ 15,028.3</h6>
          </div>

          <div className="mx-2">
            <p className="mt-3">category</p>
            <div className="d-flex justify-content-between">
            <i class="ri-building-3-fill"></i>
            <i class="ri-store-2-fill"></i>
            <i class="ri-government-fill"></i>
            <i class="ri-school-line"></i>
            
            </div>
            <div className="d-flex justify-content-between">
            <i class="ri-building-2-fill"></i>
            <i class="ri-hotel-fill"></i>
            <i class="ri-mail-open-line"></i>
            <i class="ri-mail-fill"></i>
            
            </div>
          </div>

          <div className="mx-2 department">
            <p>Department</p>
            <h6>300-444-678</h6>
          </div>

          <div className="mx-2">
            <p className="mt-3">status</p>
            <h6>Awaiting your approval</h6>
          </div>
        </div>

        {/* ------------------------------------ */}
        <div className="mt-4 border px-4 py-4">
          <div className="d-flex justify-content-between">
            <div className="">
              <input
                type="search"
                className="form-control input-file"
                placeholder="Search..."
                aria-label="Search"
              />
              <div className="input-group-append">
                <i className="fa fa-search"></i>{" "}
                {/* Assuming you're using Font Awesome */}
              </div>
            </div>
            <div>
              <button className="back mx-5">Add Item</button>
              <i className="ri-printer-line print "></i>
            </div>
          </div>
          <table className="table table-hover mt-3">
            <thead className="border">
              <tr className="">
                <th scope="col">Product name</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col" className="">
                  Total
                </th>
                <th scope="col" className="status-header">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img src="/Avocado Hass.jpg" width="40px" />
                </th>
                <td className="mt-3">Chicken Breast Fillet, boneless</td>
                <td>Hormel Black</td>
                <td>$ 60.67</td>
                <td>0*6</td>

                <td className="status">
                  <div className="d-flex justify-content-around">
                    {showButton ? (
                      <button className="approve">Approved</button>
                    ) : null}
                     {missing ? (
                      <button className="missing">Missing</button>
                    ) : null}
                    <div onClick={toggleButton}>&#10004;</div>

                    {isOpen && (
                      <div className="popup">
                        <div className="popup-content ">
                          <button
                            className="close"
                            onClick={togglePopup}
                          >
                            &times;
                          </button>
                          <h2>Missing product</h2>
                          <p>is chicken Breast Fillet,boneless .....urgent?</p>
                        </div>
                      </div>
                    )}
                    <div onClick={togglePopup}>&#10060;</div>
                    <div>Edit</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img src="/Apple Green Smith.png" width="40px" />
                </th>
                <td className="mt-3">Chicken Breast Fillet, boneless</td>
                <td>Hormel Black</td>
                <td>$ 60.67</td>
                <td>0*6</td>

                <td className="status">
                  <div className="d-flex justify-content-around">
                    {/* {showButton ? (
                      <button className="approve">Approved</button>
                    ) : null}
                    {missing ? (
                      <button className="missing">Missing</button>
                    ) : null} */}
                    <div >&#10004;</div>
                    <div>&#10060;</div>
                    <div>Edit</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img src="/Avocado Hass.jpg" width="40px" />
                </th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <div>&#10004;</div>
                    <div>&#10060;</div>
                    <div>Edit</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img src="/Apple Green Smith.png" width="40px" />
                </th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <div>&#10004;</div>
                    <div>&#10060;</div>
                    <div>Edit</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
