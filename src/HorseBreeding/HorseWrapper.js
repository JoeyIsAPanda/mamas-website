import React, { useContext } from "react";
import HorsePreview from "./HorsePreview";
import { HorseContext } from "../Contexts/HorseContext";

const HorseWrapper = () => {
  const { horseProfiles } = useContext(HorseContext);
  return (
    <div className="horseWrapper">
      {horseProfiles.map(({ name, image, description }, index) => {
        return (
          <HorsePreview
            odd={index % 2}
            image={image}
            name={name}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default HorseWrapper;
