import React, { useState } from "react";
import EventsCard from "./components/EventsCard";
import Pagination from "./components/Pagination";

const Events4 = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const onPageChange = (page) => setCurrentPage(page);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", inputValue);
  };

  const events = [
    {
      event: "MEDTECH MAYHEM",
      org: "EPSILON",
      desc: "AB5 201 19 Oct 2023 Think you’re a Bio wiz? Come join us in MedTech Mayhem: The all-in-one event to test your mettle against the best. This team-based event requires both knowledge and debating skills, so choose your teammates wisely and sign up for the chance to prove yourself.",
      mode: "OFFLINE",
    },
    {
      event: "ESCAPE ROOM",
      org: "COSMICON",
      desc: "AB5 (201-205,401-405,504-508) 21 Oct 2023 This is an engaging and immersive escape room-based event where the participating teams are tasked with navigating a multi-floor building. The teams, armed with their wits and collaborative spirit, will find themselves confronted with an array of intricately designed scenarios on each floor.",
      mode: "OFFLINE",
    },
    {
      event: "ASTROPHOTOGRAPHY AND POSTER MAKING",
      org: "COSMICON",
      desc: "AB3 404,405 19 Oct 2023 An astrophotography and poster making competition where participants have to capture images of the night sky and using their samples make an innovative and informative poster.",
      mode: "OFFLINE",
    },
    {
      event: "INNOFRAME",
      org: "MECHANIZE",
      desc: "Ab3 -302 19 Oct 2023 INNOFRAME is a thrilling competition that invites talented designers and engineers to revolutionize the world of roll cage and chassis design.",
      mode: "OFFLINE",
    },
    {
      event: "OPEN-SOURCE CRYPTIC HUNT",
      org: "FOSSIFY",
      desc: "20 Oct 2023 Cryptic Hunt is envisioned as an open source treasure hunt game in which players must understand clues to proceed to higher level. Hints will be based on open-source projects, tools and programs utilized in the technological field.",
      mode: "ONLINE",
    },
    {
      event: "CODE FUSION",
      org: "CODE RED",
      desc: "19 Oct 2023 An online coding challenge structured in ICPC fashion but with a twist, where teams of three members collaborate to find innovative solutions to real-world problems. This competition promotes teamwork, creativity, innovation, and the ability to thrive in high-pressure situations.",
      mode: "ONLINE",
    },
    {
      event: "MONOPOLY",
      org: "BIZZCOM",
      desc: "19 Oct 2023 A trading-based competition where teams will represent companies and organizations with certain assets and set objectives. A problem statement shall be provided where the teams will have to create strategies and form alliances with other teams to achieve their goals.",
      mode: "ONLINE",
    },
    {
      event: "CIPHER",
      org: "MIT-GPT",
      desc: "AB3 18 Oct 2023 Cipher is an intensive 24-hour Data Science Hackathon where participants will have to showcase their analytics and Machine Learning expertise. The individual will be given an opportunity to demonstrate their proficiency in data handling and exhibit their analytical skills in an intense and competitive environment.",
      mode: "ONLINE",
    },
  ];
  return (
    <div className="w-full h-full ">
      <h1 className="cardo text-6xl text-center mb-2">Events</h1>
      <div className="events-header flex w-[96%] px-4 my-4 mx-auto items-center justify-between rounded-xl bg-[#915EFF]">
        <h3 className="raleway text-2xl">
          TechTatva 2023 : <span className="font-semibold ">Schedule</span>
        </h3>
        <button className="cardo text-3xl font-bold">Events TimeTable</button>
        <div className="search raleway text-2xl w-1/4 py-1">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only  "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#915EFF]  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm font-semibold text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-transparent"
                placeholder="Search Events..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                onClick={handleSubmit}
                type="button"
                className="text-white absolute right-2.5 bottom-2.5 bg-[#915EFF] hover:bg-[#613dae] focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="events-grid px-8 py-2 grid grid-cols-4 gap-5">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col">
            <EventsCard
              event={event.event}
              org={event.org}
              desc={event.desc}
              mode={event.mode}
            />
          </div>
        ))}
      </div>
      <div className="page-4 flex justify-center items-center p-8 ">
        <Pagination />
      </div>
    </div>
  );
};

export default Events4;
