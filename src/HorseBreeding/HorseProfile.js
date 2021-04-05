import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HorseContext } from "../Contexts/HorseContext";

export const HorseProfile = () => {
  const { horseProfiles } = useContext(HorseContext);
  let { name } = useParams();
  const horse = horseProfiles.find((horse) => {
    return horse.name === name;
  });

  return horse ? <>{horse.name + horse.description}</> : "404";
};
