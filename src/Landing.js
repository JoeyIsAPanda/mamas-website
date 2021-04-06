import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Katja Strerath</h1>
      <div className="background">
        <div className="overlay">
          <p className="landing-descriptions">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non
            dolor, harum tempore autem impedit atque? A, laborum quisquam quia
            natus soluta at ducimus repudiandae. Vitae corporis explicabo,
            obcaecati ratione error, suscipit, cum rerum ea dolorum ex
            doloremque numquam enim dolore eos eius odio? Minus doloremque magni
            maiores similique dolores, quas ipsam asperiores corporis eos quo
            ipsa, aut odit aperiam voluptate autem quibusdam quidem quos tempore
            eum ad ab voluptates harum! Nostrum vel, sequi possimus iure ab
            ratione dolore hic excepturi consequatur nam esse quaerat debitis
            perspiciatis voluptates eos minus at alias natus sed fuga!
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-col">
          <Link to="/Hundezucht">
            <h1>Jack Russel Terrier Zucht</h1>
          </Link>
          <img
            src="https://mamas-website.s3.us-west-000.backblazeb2.com/Hundezucht.jpg"
            alt=""
            width="80%"
          />
          <p className="landing-descriptions">
            1980 zog der erste Jack Russel bei uns zuhause ein und veränderte
            mein Leben! Die Hündin Daisy kam noch aus Irland zu uns. Im Januar
            1982 bekam sie Ihren ersten Wurf. Eine Hündin „Dolly“ wurde mir von
            meinen Eltern geschenkt und es begann eine Hobbyzucht! Leider
            existiert aus dieser Linie kein Nachkommen mehr. Jedoch zog 1994 die
            Tri- Color farbende Hündin Sara bei mir ein, und aus dieser Hündin
            gibt es heute noch eine Hündin in meiner Zucht. Der letzte Wurf kam
            am 06.01.2021 zur Welt. Der nächste Wurf ist für Herbst 2022
            geplant. Auf dem Foto der Wurf von 2019 der elf gesunde Welpen
            hatte.
          </p>
        </div>

        <div className="grid-col">
          <Link to="/Reitbetrieb">
            <h1>Reiten</h1>
          </Link>
          <img
            src="https://mamas-website.s3.us-west-000.backblazeb2.com/Logo.jpg"
            height="150px"
            alt=""
          />
        </div>
        <div className="grid-col">
          <Link to="/Pferdezucht">
            <h1>Pferdezucht</h1>
          </Link>
          <img
            src="https://mamas-website.s3.us-west-000.backblazeb2.com/Pferdezucht.jpg"
            width="80%"
            alt=""
          />
          <p className="landing-descriptions">
            Seit 1978 züchtete mein Vater Warmblüter. Angesteckt von diesem
            „Virus“ hab ich mir 1992 mein erstes Stutfohlen für die Zucht
            gekauft. 1996 kam mein erstes selbstgezüchtetes Fohlen auf die Welt!
            Die Zucht lief bis zum tot meines Pferdes gemeinsam als
            Zuchtgemeinschaft. Seit 2019 läuft die Zucht auf meinen Namen! Ich
            züchte Warmblüter und XXL Reitponys. Wichtig ist mir dabei, brave
            gesunde Reitpferde/Ponys für den normalen Reiter zu züchten! Die
            Stuten werden/wurden alle geritten. Foto: Casablanca S aus eigener
            Zucht in 3.Generation mit HF von Arpeggio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
