import React from "react";
import { Link } from "react-router-dom";

const HorsePreview = ({ odd, image, name, description }) => {
  return (
    <div className={`horsePreview ${odd ? "left-side" : "right-side"}`}>
      <Link to={`/${name}`}>
        <img
          className=""
          src={image}
          height="100px"
          className={`horseProfilePic `}
          alt={name}
        />
        <h2 className="nameTag">{name}, 21</h2>
        <p className="horseDesc">{description}</p>
      </Link>
    </div>
  );
};

export default HorsePreview;
