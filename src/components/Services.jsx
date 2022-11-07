import React, { useState } from "react";
import data from "../services.js";
import Servicestwo from "./Servicestwo.jsx";

const Services = () => {
  const [value, setvalue] = useState(data);
  return (
    <div className="container ">
      <h1 className="text-center">Services</h1>
      <div className="row mt-5 servicesrow">
        {value.map((item) => {
          return <Servicestwo value={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Services;
