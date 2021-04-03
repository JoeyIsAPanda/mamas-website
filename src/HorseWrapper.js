import React from "react";
import HorsePreview from "./HorsePreview";
import duci from "./img/Duci.jpg";
import arber from "./img/Arber.png";

const HorseWrapper = () => {
  const horseProfiles = [
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
  ];
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
