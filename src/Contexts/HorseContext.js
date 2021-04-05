import React, { createContext, useState } from "react";
import duci from "../img/Duci.jpg";
import arber from "../img/Arber.png";

export const HorseContext = createContext();
const HorseContextProvider = (props) => {
  const [horseProfiles, setHorseProfiles] = useState([
    {
      name: "Black Beauty",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae adipisci officiis quod laboriosam odio aliquam officia repellendus dolore. Neque.",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "Arber",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae adipisci officiis quod laboriosam odio aliquam officia repellendus dolore. Neque.",
      image: arber,
    },
    {
      name: "Duci",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae adipisci officiis quod laboriosam odio aliquam officia repellendus dolore. Neque.",
      image: duci,
    },
  ]);
  return (
    <>
      <HorseContext.Provider value={{ horseProfiles }}>
        {props.children}
      </HorseContext.Provider>
    </>
  );
};

export default HorseContextProvider;
