import React from "react";

const Review = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center">Review</h1>
      <div className="container w-50 mb-5 mt-4 ">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className=" carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls="
                className="d-block"
                alt="error"
                style={{
                  width: "100%",
                  height: "30%",
                  borderRadius: "20px",
                  objectFit: "contain",
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    fontWeight: "bolder",
                    color: "white",
                    fontSize: "50px",
                  }}
                >
                  Prateek
                </h5>
                <p>⭐⭐⭐⭐⭐</p>
                <p style={{ fontSize: "25px" }}>"At last,my wish came true"</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://media.istockphoto.com/photos/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses-picture-id1144287292?k=20&m=1144287292&s=170667a&w=0&h=VlSY9uYuHuB5ZS71pbJwlZFfdp3ElOoFxOhVNO6ZDIg="
                className="d-block "
                alt="error"
                style={{ width: "100%", height: "30%", borderRadius: "20px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    fontWeight: "bolder",
                    color: "white",
                    fontSize: "50px",
                  }}
                >
                  sonia
                </h5>
                <p>⭐⭐⭐⭐</p>
                <p style={{ fontSize: "25px" }}>
                  "I got my Dream job,I am very happy"
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://sharonpederson.com/wp-content/uploads/2021/05/Woman-Wearing-Blue-Zip-up-Jacket.png"
                className="d-block "
                alt="error"
                style={{ width: "100%", height: "30%", borderRadius: "20px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    fontWeight: "bolder",
                    color: "white",
                    fontSize: "50px",
                  }}
                >
                  Kareena
                </h5>
                <p>⭐⭐⭐⭐⭐</p>
                <p style={{ color: "white", fontSize: "25px" }}>
                  "Best job website i have ever visited"
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
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
            data-bs-target="#carouselExampleCaptions"
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
    </div>
  );
};

export default Review;
