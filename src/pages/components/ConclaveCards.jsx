import React from "react";
import { Card } from "flowbite-react";

const ConclaveCards = ({ name, img, info, desc }) => {
  return (
    <div className="w-1/5 max-h-2/3 h-2/3  bg-white border border-gray-200 rounded-lg shadow transform duration-300 ease-out box transition-transform  hover:scale-110 ">
      <a >
        <img
          className="rounded-t-lg w-full bg-cover h-auto"
          src={img}
          alt={name}
        />
      </a>
      <div className="px-3">
        <a href="#">
          <h3 className="mb-4 mt-3 text-2xl text-center uppercase raleway font-bold tracking-tight text-[#915EFF]  ">
            {name}
          </h3>
        </a>
        <p className="font-semibold text-2xl cardo text-center text-black  ">
          {info}
        </p>
        <hr className="w-40 h-1 mx-auto my-2 bg-gray-300 border-0 rounded  " />

        <p className="mb-3 mt-3 font-normal text-center monts text-black  ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ConclaveCards;
