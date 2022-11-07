import React, { useState } from "react";
import data from "../gallery.js";

const Gallery = () => {
  const [value, setvalue] = useState(data);
  //   console.log(value);

  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="text-center ">Gallery</h1>
        {value.map((item) => {
          return (
            <div className="col text-center mb-5 ">
              <img
                className="rounded  mt-5  "
                src={item.image}
                alt="..."
                height="200px"
                width="300px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
