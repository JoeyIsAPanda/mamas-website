import React from "react";
import { Link } from "react-router-dom";

const HorsePreview = ({ side, image, name, description }) => {
  return (
    <div className="horsePreview">
      <Link to={`/${name}`}>
        <img
          src={image}
          height="100px"
          className={side ? "left-side" : "right-side"}
          alt={name}
        />
        Name: {name}
        <br />
        {description}
      </Link>
    </div>
  );
};

export default HorsePreview;
