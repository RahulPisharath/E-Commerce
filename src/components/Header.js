import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-area header-fixed">
     
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container-xl">
          <Link className="navbar-brand nav-link text-white" to="/">
              <img src="logo.png" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link className="nav-link" to="/">
                  <li>Home</li>
                </Link>
                <Link className="nav-link" to="/about">
                  <li>About</li>
                </Link>

                <Link className="nav-link" to="/shopping">
                  <li>Shopping</li>
                </Link>
                <Link className="nav-link" to="/cart">
                  <li>Cart</li>
                </Link>

                <Link className="nav-link" to="/userprofile">
                  <li> My Profile</li>
                </Link>
              </ul>
              
            </div>
          </div>
        </nav>
      
    </div>
  );
};

export default Header;
