import React from "react";

const Home = () => {
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
          className="w-1/2 h-auto border border-gray-100 rounded-lg "
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
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#915EFF] bg-white w-fit text-center mx-auto rounded px-1 md:text-5xl lg:text-6xl canopee">
              ✨TechTatva 2023✨
            </h1>
            <p className="mb-8 text-lg font-normal text-white lg:text-2xl sm:px-16 lg:px-24 py-4 raleway">
              TechTatva is the annual Technical festival of the <b>Manipal
              Institute of Technology</b>. This technical extravaganza stands out as
              one of the most anticipated technical festivals all across the
              country, spanning four days, and is widely recognized as
              Karnataka’s largest technical festival for students. TechTatva
              2023 hosts an array of technical competitions catering to all
              technical domains such as Computer Science, Mechanical, Civil,
              Electronics, Chemical.
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
    </div>
  );
};

export default Home;
