import React from "react";

const Sponsors = () => {
  return (
    <div className="sponsors-image-component relative">
        <div className="main-sponsor h-80 max-h-80 w-full mb-3 mt-0">
            <img className="bg-cover object-cover w-full h-80 rounded-md box2 hover:-translate-y-1 duration-300 ease-out transition-transform" src="./images/sponsors/1.png" alt="" />
        </div>
        <div className="side-sponsors flex items-center justify-center gap-3">
            <img className=" object-cover w-1/5 h-32 rounded box2 hover:-translate-y-1 duration-300 ease-out transition-transform" src="./images/sponsors/3.png" alt="" />
            <img className=" object-cover w-1/5 h-32 rounded box2 hover:-translate-y-1 duration-300 ease-out transition-transform" src="./images/sponsors/4.webp" alt="" />
            <img className=" object-cover w-1/5 h-32 rounded box2 hover:-translate-y-1 duration-300 ease-out transition-transform" src="./images/sponsors/6.jpg" alt="" />
            <img className=" object-cover w-1/5 h-32 rounded box2 hover:-translate-y-1 duration-300 ease-out transition-transform" src="./images/sponsors/2.jpg" alt="" />
            <img className=" object-cover w-1/5 h-32 rounded box2 hover:-translate-y-1 duration-300 ease-out transition-transform" src="./images/sponsors/7.png" alt="" />
        </div>
        
    </div>
  );
};

export default Sponsors;
