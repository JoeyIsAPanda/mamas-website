import React, { createContext, useState } from "react";

export const HorseContext = createContext();
const HorseContextProvider = (props) => {
  const [horseProfiles, setHorseProfiles] = useState([
    {
      name: "St. Pr. St. My fair Lady S",
      birthDate: "21.03.2021",
      father: "Medici",
      mother: "Eskina",
      MV: "Ehrentusch",
      description:
        "Aus eigener Zucht ist diese tolle Stute ein absolutes Traumpferd das immer Gefallen möchte. Tolle Grundgangarten und super rittig, jedoch wenig Talent am Sprung.",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "St. Pr. St. Finia",
      birthDate: "21.03.2021",
      father: "Fidermark",
      mother: "Verb. Pr. St. Beka",
      MV: "Brentano II",
      description:
        "Erst seit Herbst 2020 in meinem Besitz. Sie ist bereits Hengstmutter und hat tolle Stuten als Nachzucht vorzuweisen. Ich hoffe, noch ein Stutfohlen von Ihr geschenkt zu bekommen.",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "Melbourne",
      birthDate: "05.04.2005",
      father: "Cancoon",
      mother: "G-Lemon Tree",
      MV: "Chirac",
      description:
        "Seit Januar 2013 in unserem Besitz. Ihr erstes Fohlen „Canterbury S“ von 2013 ist im Springen bis M erfolgreich.",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "Casablanca S",
      birthDate: "29.02.2012",
      father: "Contini",
      mother: "Curly Sue S",
      MV: "Co-Pilot",
      description:
        "In dritter Generation von meinem Dad gezüchtet, ist Sie ein Stück von Ihm! Beide Eltern haben am BC Springen teilgenommen. Sie selber hat nicht das Talent Ihrer Eltern geerbt, dafür macht Sie 365 Tage im Jahr Spass als Reitpferd für den gehobenen Freizeitsport. ",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "Verb. Pr. St. Adavigna",
      birthDate: "10.02.2003",
      father: "Davignon I",
      mother: "Aida",
      MV: "Royal Angelo I",
      description:
        "Seit 2013 in unseren Besitz. Ihre Halbschwester „Aida Luna“ läuft erfolgreich im Dressursport. Bei uns wurde sie überwiegend in der XXL Ponyzucht eingesetzt. ",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "Verb. Pr. St. Liebe Lara",
      birthDate: "28.03.2012",
      father: "Fürst Romancier",
      mother: "St. Pr. St. Liebe Laura",
      MV: "Lauries Crusador xx",
      description:
        "Seit Juli 2020 in meinem Besitz ist sie ein besonderes Pferd. Toller Typ mit guten Grundgangarten. ",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "Brentessa",
      birthDate: "16.05.2007",
      father: "Brentano II",
      mother: "Werthessa",
      MV: "Werther",
      description:
        "Seit März 2019 in meinem Besitz. Sie wurde vorher im Dressursport bis zur Kl. M eingesetzt.",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "Miss Moneypenny",
      birthDate: "04.06.2013",
      father: "The Breas My Mobility (Wel.B)",
      mother: "Ma Petite (Warmblut - Westf)",
      MV: "Montmartre",
      description:
        "Seit April 2020 in meinem Besitz ist Sie ein Endmasspony das unterm Reiter sowohl in der Dressur als auch im Springen zu gefallen weiß.",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
    },
    {
      name: "Verb. Pr. St. Dakoise Siglavy Elfes",
      birthDate: "07.03.2013",
      father: "Siglavy Fabiola",
      mother: "Volvic Favory Prica",
      MV: "Favory Favorit",
      description:
        "Seit Herbst 2016 in unseren Besitz hatte sie 2017 ein reinrassiges Hengstfohlen. Sie wird überwiegend als Reitpferd genutzt.",
      image:
        "https://mamas-website.s3.us-west-000.backblazeb2.com/placeholder-horse.jpeg",
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
