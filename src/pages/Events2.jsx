import React, { useState } from "react";
import EventsCard from "./components/EventsCard";
import Pagination from "./components/Pagination";

const Events2 = () => {
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
      event: "TESSERACT",
      org: "ACUMEN",
      desc: "Entire campus (centre at GSH) 19 Oct 2023 Have you watched Student of the Year? Does the thought of solving riddles and hunting for a treasure excite you? Tesseract is the perfect event for you as it embodies the spirit of competition and the pursuit of something valuable. It is a captivating event where participants embark on a thrilling adventure to uncover hidden treasures.",
      mode: "OFFLINE",
    },
    {
      event: "AIB",
      org: "ACUMEN",
      desc: "AB3- 402,403 20 Oct 2023 Are you drawn to the allure of an Auction, or do you crave the exhilarating pulse of Jeopardy-style trivia? Look no more, for we have the ultimate fusion tailored just for you. AIB presents an electrifying medley of buzzer rounds, Jeopardy trivia, and auction, seamlessly intertwined across three gripping rounds.",
      mode: "OFFLINE",
    },
    {
      event: "SUSTAIN-A-BUILD",
      org: "ARCUS",
      desc: "AB3-304,305 20 Oct 2023 This offline event is based on testing an individual’s potential in management of real estate and budget analysis.",
      mode: "OFFLINE",
    },
    {
      event: "FOXHUNT",
      org: "ALACRITY",
      desc: "AB5-207 19 Oct 2023 In this thrilling competition, participants will have to construct their own receiver antennas and using these, embark on a quest to locate multiple hidden transmitting antennas placed throughout the campus. The event will take place over two days.",
      mode: "OFFLINE",
    },
    {
      event: "CIPHER",
      org: "MIT-GPT",
      desc: "AB3 18 Oct 2023 Cipher is an intensive 24-hour Data Science Hackathon where participants will have to showcase their analytics and Machine Learning expertise. The individual will be given an opportunity to demonstrate their proficiency in data handling and exhibit their analytical skills in an intense and competitive environment.",
      mode: "ONLINE",
    },
    {
      event: "CHAKRAVYUH 4.0",
      org: "MECHATRON",
      desc: "AB3 204,205 18 Oct 2023 Join us on a thrilling two-day journey inspired by the ancient Chakravyuh tactic from the Mahabharata. Dive into a world of intellectual conquests, where your abilities will be challenged through diverse, fun, and strategically demanding challenges. These challenges are designed to engage and test your cognitive prowess.",
      mode: "OFFLINE",
    },
    {
      event: "QUANDARY",
      org: "BIZZCOM",
      desc: "AB3 203 19 Oct 2023 Quandary is bespoken for those who think promptly and bring out-of-the-box directives for challenging problems. The participants will be bombarded with problem statements based on the nature of their committee and they are expected to defend, debate, and think of solutions for the same.",
      mode: "OFFLINE",
    },
    {
      event: "KICK-OFF",
      org: "MECHATRON",
      desc: "FC1 18 Oct 2023 Immerse yourself in the future of football with our thrilling Miniature Bot Football Matches! Command your pint-sized football bot using the convenience of your phone and Bluetooth technology. Experience the excitement as you skillfully manoeuvre your bot to score spectacular goals while fiercely defending your goal post from the opponents.",
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
      <div className="page-2 flex justify-center items-center p-8 ">
        <Pagination />
      </div>
    </div>
  );
};

export default Events2;
