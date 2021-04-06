import React from "react";
import { Link } from "react-router-dom";

const HorsePreview = ({
  odd,
  image,
  name,
  description,
  birthDate,
  mother,
  father,
  MV,
}) => {
  const oddLayout = (
    <>
      <img
        src={image}
        height="100px"
        className={`horseProfilePic `}
        alt={name}
      />
      <h2 className="nameTag">
        {name},<br /> {birthDate}
        <br />
      </h2>
      <p className="heritage">
        Mutter: {mother}
        <br />
        Vater: {father}
        <br />
        MV: {MV}
      </p>
      <p className="horseDesc">{description}</p>
    </>
  );
  const evenLayout = (
    <>
      <h2 className="nameTag">
        {name},<br /> {birthDate}
        <br />
      </h2>
      <img
        src={image}
        height="100px"
        className={`horseProfilePic `}
        alt={name}
      />
      <p className="horseDesc">{description}</p>
      <p className="heritage">
        Mutter: {mother}
        <br />
        Vater: {father}
        <br />
        MV: {MV}
      </p>
    </>
  );
  return odd ? (
    <div className={`horsePreview`}>
      <Link to={`/Pferde/${name}`}>{oddLayout}</Link>
    </div>
  ) : (
    <div className={`horsePreview`}>
      <Link to={`/pferde/${name}`}>{evenLayout}</Link>
    </div>
  );
};

export default HorsePreview;
