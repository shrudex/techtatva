import React from "react";

const ContactCard = ({ name, reg, photo, linkedin, number }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow h-fit flex items-center justify-center">
      <div className="flex flex-col items-center py-8">
        <img
          className="w-28 h-28 mb-3 rounded-full shadow-lg"
          src={photo}
          alt="Bonnie image"
        />
        <h5 className="work text-2xl font-medium text-black">{name}</h5>
        <span className="text-md font-normal monts text-purple-500">{reg}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href={linkedin}
            className="inline-flex items-center px-4 py-1 text-base font-medium text-center cardo text-white bg-purple-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            LinkedIn
          </a>
          <a
            href={number}
            className="inline-flex items-center px-4 py-1 text-base font-medium text-center cardo text-black bg-white border border-black rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
