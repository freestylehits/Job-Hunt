import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div
        className="container "
        style={{
          marginTop: "42px",
          marginBottom: "50px",
        }}
      >
        <div className="row homerow">
          <div className="col text-center">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner mt-5 mb-5">
                <div className="carousel-item active">
                  <img
                    style={{ borderRadius: "50px" }}
                    src="https://media.istockphoto.com/photos/an-africanamerican-guy-using-laptop-in-the-office-picture-id1254062265?k=20&m=1254062265&s=612x612&w=0&h=gJpSIvRWpASEs4yXoX96yo2ebxU0hCyxkr-AlEYXAKs="
                    className="d-block w-100"
                    alt="..."
                    height="400px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ borderRadius: "50px" }}
                    src="https://img.freepik.com/premium-photo/man-working-laptop-office-emotions-internet-professional-high-quality-photo_163305-139309.jpg?w=2000"
                    className="d-block w-100"
                    alt="..."
                    height="400px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ borderRadius: "50px" }}
                    src="https://freerangestock.com/sample/120407/man-working-at-a-laptop-and-phone-in-an-open-office.jpg"
                    className="d-block w-100"
                    alt="..."
                    height="400px"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            className="col text-center"
            style={{
              padding: "120px 0 0 0",
            }}
          >
            <h2 classNameName="text-center mt-5">"Your Job-Hunt is Over”</h2>
            <p classNameName="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              accusamus debitis dolor? Minus voluptatum, at nulla voluptas
              deserunt animi numquam. Recusandae animi temporibus molestiae
              placeat cumque aperiam nemo veritatis quia, saepe dolore
              dignissimos iste ipsam, eum similique alias possimus tempora?
            </p>
            <Link to="/Services">
              <button type="button" className="btn btn-outline-danger mt-4">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
