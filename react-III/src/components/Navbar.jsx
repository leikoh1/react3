import React from "react";
import { contador } from "../utils/contador";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mia
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Register
                    </a>
                  </li>
                </>
              )}
            </ul>
            <span className="navbar-text ms-auto">
              Total: ${contador(total)}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;