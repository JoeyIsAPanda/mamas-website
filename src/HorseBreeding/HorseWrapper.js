import React, { useContext } from "react";
import HorsePreview from "./HorsePreview";
import { HorseContext } from "../Contexts/HorseContext";

const HorseWrapper = () => {
  const { horseProfiles } = useContext(HorseContext);
  return (
    <div className="horseWrapper">
      {horseProfiles.map(
        (
          { name, image, description, birthDate, mother, father, MV },
          index
        ) => {
          return (
            <HorsePreview
              odd={index % 2}
              image={image}
              name={name}
              description={description}
              birthDate={birthDate}
              mother={mother}
              father={father}
              MV={MV}
            />
          );
        }
      )}
    </div>
  );
};

export default HorseWrapper;
