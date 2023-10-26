import React, { useState } from "react";
import EventsCard from "./components/EventsCard";

const Events = () => {
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
      event: "PIXELVISION",
      org: "MIT-GPT-WORKSHOP",
      desc: "AB3 18 Oct 2023 Embark on a captivating voyage into the realm of computer vision with PixelVision, an OpenCV Workshop. Learn the technique of image processing through a series of hand-on activities and captivating demonstrations in an insightful session.",
      mode: "OFFLINE",
    },
    {
      event: "GITCRAFT",
      org: "FOSSIFY-WORKSHOP",
      desc: "AB3 104 16 Oct 2023 Building Together in Open Source: Want to learn Git, Github , and build your first open-source webpage? This workshop is for you!",
      mode: "OFFLINE",
    },
    {
      event: "ORK WORKSHOP & VIRTUAL ROCKET BUILDING COMPETION",
      org: "ESCAPE VELOCITY-WORKSHOP",
      desc: "Ab3-103 15 Oct 2023 The focus of the event is centered on utilizing the open-source software named open rocket, enabling participants to construct their model rockets from the ground up and subsequently simulate their behavior.",
      mode: "OFFLINE",
    },
    {
      event: "MICROSOFT FLIGHT SIMULATOR",
      org: "AEROVERSE-WORKSHOP",
      desc: "AB3-403 16 Oct 2023 Experience the beauty of aviation firsthand with our flight simulator and take to the skies. Calling all aviation enthusiasts.",
      mode: "OFFLINE",
    },
    {
      event: "FLIGHT MECHANICS WORKSHOP",
      org: "AEROVERSE-WORKSHOP",
      desc: "AB3-102 17 Oct 2023 Have you ever wondered how planes actually fly? This workshop offers you the opportunity to dive deep into the wonderful world of air-flight machines. Covering the basics of flight mechanics and aerodynamics, this informative seminar allows you to visualize flight characteristics and essentially understand the science behind flight.",
      mode: "OFFLINE",
    },
    {
      event: "NOVA - UI/UX WORKSHOP",
      org: "CODE RED- WORKSHOP",
      desc: "AB3 18 Oct 2023 Whether you're a designer or a developer, this workshop will enhance your understanding of user needs and help you master the art of designing intuitive, user-friendly interfaces.",
      mode: "OFFLINE",
    },
    {
      event: "(M.A.D) MOBILE APP DEVELOPMENT WORKSHOP",
      org: "CODE RED- WORKSHOP",
      desc: "AB3 18 Oct 2023 Unlock the world of app development in our immersive workshop, designed for students eager to create, innovate and code. Join us to delve into the art of turning ideas into functional mobile applications. Guided by seasoned developers, you'll learn hands-on coding, UI design, and app deployment.",
      mode: "OFFLINE",
    },
    {
      event: "EVERYTHING OFF-ROAD",
      org: "KRAFTWAGEN (WORKSHOP)",
      desc: "Behind MIT Football ground 15 Oct 2023 An interesting workshop demonstrating various domains involved in the manufacturing of automobiles and industry level skill sets. By using preliminary design(CAD) , analysis (CAE), manufacturing process and finally testing of components.",
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
    </div>
  );
};

export default Events;
