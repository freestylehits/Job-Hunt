import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            padding: "0 0 0 20px",
            display: "flex",
            width: "23%",
          }}
        >
          <img
            className="img1 rounded-pill"
            src="/logo.png"
            alt=""
            width="50"
            height="50"
          ></img>
          <span style={{ margin: "0 0 0 15px", color: "white" }}>
            Job<span style={{ color: "red" }}>Hunt</span>
          </span>
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
          <span
            className="navbar-toggler-icon "
            style={{
              color: "white",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          ></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav fs-4" style={{ color: "white" }}>
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link"
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link"
                to="/review"
              >
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link"
                to="/services"
                tabindex="-1"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
