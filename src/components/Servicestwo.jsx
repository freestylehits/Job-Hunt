import React from "react";
import { useState } from "react";

const Servicestwo = (props) => {
  const { id, image, info, name, price } = props.value;
  const [smsl, setsmsl] = useState(false);
  function update() {
    setsmsl(!smsl);
  }
  return (
    <div className=" col-4  text-center ">
      <div className="card mb-4 ">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-evenly">
            <h5>{name}</h5>
            <h5>{price}</h5>
          </div>
          <p className="card-text">
            {info.slice(0, 100)}
            {smsl ? info.slice(101) : ""}
            <button onClick={update}>{smsl ? "Seeless" : "Seemore"}</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicestwo;
