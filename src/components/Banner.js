import React from "react";

const Banner = () => {
  return (
    <div className="banner-bg py-1 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white py-4 heading_banner text-center">
              All Your Needs In
              <br />
              One Place
            </h2>
          </div>

          <div className="col-8 mx-auto head_option_bg mb-5">
         
            <div className="input-group transparent">
            <input
                type="text"
                className="form-control"
                aria-label="Text input with 2 dropdown buttons"
                placeholder="What are you Looking for?"
              />
              <button
                className="btn btn-outline-secondary dropdown-select"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Where to Look?
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action before
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action before
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
              
              <button
                className="btn btn-outline-secondary btn_themed"
                type="button"
              >
                Search
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
