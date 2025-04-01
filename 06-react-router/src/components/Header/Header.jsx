import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          React Router
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item btn btn-outline-primary mt-sm-3 me-lg-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item btn btn-outline-primary  mt-sm-3 me-lg-2">
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>
            <li className="nav-item btn btn-outline-primary  mt-sm-3 me-lg-2">
              <Link className="nav-link" to="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header