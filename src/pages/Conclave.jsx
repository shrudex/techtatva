import React from "react";
import ConclaveCards from "./components/ConclaveCards";
const Conclave = () => {
  const speakers = [
    {
      name: "Rahul Dua",
      img: "./images/speakers/1.JPG",
      info: "Day 01",
      desc: "Rahul Dua is a popular Indian standup comedian and actor.",
    },

    {
      name: "Chetan Bhagat",
      img: "./images/speakers/2.JPG",
      info: "Day 02",
      desc: "Chetan Bhagat is an Indian author, columnist and YouTuber. ",
    },
    {
      name: "Vedika Bhaia",
      img: "./images/speakers/4.JPG",
      info: "Day 03",
      desc: "Vedika is an entrepreneur, content creator, and educator.",
    },
    {
      name: "J. Senthil Rengarajan",
      img: "./images/speakers/3.jpg",
      info: "Day 04",
      desc: "Senior Scientist at Electronics and Radar Development Estt., DRDO. ",
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start gap-12">
      <h1 className="cardo text-6xl text-center mb-2">Conclave</h1>
        <div className="conclave-section  ">
          <div className="conclave-cards flex justify-center gap-8 items-center">
            {speakers.map((speaker, index) => (
              <ConclaveCards
                key={index}
                name={speaker.name}
                img={speaker.img}
                info={speaker.info}
                desc={speaker.desc}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Conclave;
