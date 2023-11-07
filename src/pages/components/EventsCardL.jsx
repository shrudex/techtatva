import React from "react";

const EventsCardL = ({ event, org, desc, done }) => {
  return (
    <div className="m-w-sm p-3 h-[27rem] bg-white border border-gray-200 rounded-lg shadow flex flex-col transform duration-300 ease-out box2 transition-transform  hover:scale-[1.02]">
      <div className="flex h-24 justify-center items-center">
        <h5 className="text-center cardo mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {event}
        </h5>
      </div>

      <h5 className="mb-2 text-center raleway bg-purple-300 rounded-lg text-base font-bold tracking-tight text-gray-900 ">
        {org}
      </h5>
      <div className="flex h-56 my-4 justify-center items-center">
        <p className="mb-3 font-normal text-purple-600 text-center work">
          {desc}
        </p>
      </div>

      <button
        className={`items-center w-2/6 mx-auto px-3 py-1 rounded-lg raleway text-sm font-medium text-white text-center  focus:ring-4 focus:outline-none cursor-default ${
          done === true
            ? "bg-[#915EFF]  hover:bg-purple-600"
            : "bg-[#3762ff] hover:bg-blue-700"
        }`}
      >
        {done===true? "REGISTERED" : "REGISTER"}
      </button>
    </div>
  );
};

export default EventsCardL;
