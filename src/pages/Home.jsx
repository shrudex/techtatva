import CarouselComp from "./components/CarouselComp";
import React from "react";
import Typewriter from "typewriter-effect";
import ConclaveCards from "./components/ConclaveCards";

const Home = () => {
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
    <div className="home w-full h-full">
      <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-white text-center poppins md:text-5xl lg:text-6xl">
        Tech Tatva{" "}
        <span className="underline underline-offset-3 text-[#915EFF] decoration-8 decoration-white ">
          2023.
        </span>
      </h1>
      <p className="text-lg font-normal italic text-white text-center lg:text-xl raleway lowercase">
        the annual Technical festival of the{" "}
        <span className="bg-[#915EFF] rounded px-1">
          Manipal Institute of Technology
        </span>{" "}
        .
      </p>
      <div className="video1 flex items-center justify-center py-10 mb-12">
        <video
          className="md:w-1/2 w-3/4 h-auto border border-gray-100 rounded-lg "
          autoPlay
          controls
          muted
          loop
        >
          <source src="./videos/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="jumbotron">
        <section className="bg-center bg-no-repeat bg-[url('./images/1.jpg')] bg-cover bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#915EFF] bg-[#ffffff0b] w-fit text-center mx-auto rounded px-0 md:text-5xl lg:text-6xl raleway">
              ✨TechTatva 2023✨
            </h1>
            <p className="mb-8 text-lg font-normal text-white lg:text-2xl sm:px-16 lg:px-24 py-4 raleway">
              TechTatva is the annual Technical festival of the{" "}
              <b>Manipal Institute of Technology</b>. This technical
              extravaganza stands out as one of the most anticipated technical
              festivals all across the country, spanning four days, and is
              widely recognized as Karnataka’s largest technical festival for
              students. TechTatva 2023 hosts an array of technical competitions
              catering to all technical domains such as Computer Science,
              Mechanical, Civil, Electronics, Chemical.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 domaine">
              <a
                href="#"
                className="inline-flex justify-center items-center py-2 px-6 text-lg font-medium text-center text-white rounded-lg bg-[#915EFF] hover:bg-[#6e44ca] focus:ring-4 focus:ring-blue-300"
              >
                Events
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center hover:text-gray-900 items-center text-lg py-2 px-6 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Rulebook
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="carousel w-full h-screen flex items-center justify-center flex-col gap-3">
        <div className="cardo text-xl sm:text-3xl md:text-5xl text-[#915EFF]">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              delay: 200,
              deleteSpeed: 5,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Tech Tatva")
                .pauseFor(500)
                .deleteAll()
                .typeString("2023")
                .pauseFor(100)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <h1 className="work text-xl sm:text-3xl md:text-5xl">
          Catalyzing Evolution
        </h1>

        <div className="carousel-component  mx-auto w-2/4 h-3/5 bg-cover">
          <CarouselComp />
        </div>
      </section>
      <div className="conclave-show w-full h-screen flex flex-col gap-4 justify-center">
        <h1 className="py-2 px-12 domaine text-4xl sm:text-5xl md:text-7xl text-left">
          Conclave
        </h1>
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
    </div>
  );
};

export default Home;
