import React, { useState } from "react";
import EventsCard from "./components/EventsCard";
import Pagination from "./components/Pagination";

const Events3 = () => {
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
      event: "VEDANTH 13.0",
      org: "VEDANTH-FLAGSHIP",
      desc: "AB4 GROUND FLOOR COMMON AREA 18 Oct 2023 Vedanth is a technical exhibition at MIT's technical fest, Tech Tatva. It serves as a platform for innovators across esteemed institutions to showcase their skills in the fields of IoT, ML, medical innovation, robotics and automation, technology for social betterment, innovative learning, and frugal innovation.",
      mode: "OFFLINE",
    },
    {
      event: "ROBOWARS 30KG",
      org: "ROBOWARS-FLAGSHIP",
      desc: "Cage beside FC1 18 Oct 2023 A heavyweight battle between bots shall surely promise an adrenaline rush to our spectators and the best team will win the ultimate prize of a lac. Prize pool : Rs.120000",
      mode: "OFFLINE",
    },
    {
      event: "ROBOWARS – 15KG",
      org: "ROBOWARS-FLAGSHIP",
      desc: "Cage beside FC1 18 Oct 2023 The 15kg Battle Bot Category brings you the ultimate clash of engineering prowess and strategic brilliance. Prepare to witness an electrifying spectacle as powerful robots, weighing upto 15 kilograms, go head-to-head in a no-holds-barred combat extravaganza.",
      mode: "OFFLINE",
    },
    {
      event: "OFFROAD MAYHEM",
      org: "KRAFTWAGEN-FLAGSHIP",
      desc: "Road in front of Block 13 19 Oct 2023 Join us for a thrilling journey of robotics as participants craft their ingenious robots from scratch. Witness the fusion of innovation and competition as these mechanical marvel sprint towards victory.",
      mode: "OFFLINE",
    },
    {
      event: "INTELLECTCONNECT: A RESEARCH PAPER PRESENTATION",
      org: "INVESTIGAR-FLAGSHIP",
      desc: "MV Seminar Hall 19 Oct 2023 This event aims to provide a platform to present a research paper on a topic of the individual’s interest in front of an esteemed panel of adjudicators. Participants need to submit their selected research paper.",
      mode: "OFFLINE",
    },
    {
      event: "SKYRUSH",
      org: "AEROVERSE- FLAGSHIP",
      desc: "MIT Football Ground 19 Oct 2023 Get your teams ready to compete in a festival of flight. Skyrush gives you the opportunity to compete with your RC Aircrafts and Drones and win exciting rewards in this fast paced, problem-statement based competition.",
      mode: "OFFLINE",
    },
    {
      event: "ECHO",
      org: "SYNAPSE",
      desc: "AB3 18 Oct 2023 Unleash your creative genius and dive into the realm of intelligent conversational agents. Join us in crafting captivating chatbots using cutting-edge technologies. But that’s not all – to ensure everyone is familiar with dialogue flow for creating remarkable chatbots, we’re thrilled to announce an accompanying workshop.",
      mode: "OFFLINE",
    },
    {
      event: "ICARUS",
      org: "AEROVERSE",
      desc: "Annapoorna Mess, Top Floor, Boxing Ring 21 Oct 2023 Conquer the skies by creating your own flying balsa gliders from the materials provided stand a chance to win amazing prizes.",
      mode: "OFFLINE",
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
      <div className="page-3 flex justify-center items-center p-8 ">
        <Pagination />
      </div>
    </div>
  );
};

export default Events3;
