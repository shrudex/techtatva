import React from "react";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";
const Contact = () => {
  const people = [
    {
      name: "Ashrut Arora",
      reg: "210968206",
      photo: "./images/people/ashrut.jpg",
      linkedin: "https://www.linkedin.com/in/ashrut-arora-418880227/",
      number: "https://wa.me/+919923238850",
    },
    {
      name: "Sathwika Ravikanti",
      reg: "210968152",
      photo: "https://i.pravatar.cc/150?u=5",
      linkedin: "https://www.linkedin.com/in/sathwika-ravikanti-3b768254/",
      number: "https://wa.me/+919324789579",
    },
    {
      name: "Ansh Kankani",
      reg: "210968126",
      photo: "./images/people/ansh.jpg",
      linkedin: "https://www.linkedin.com/in/ansh-kankani-b99ba1269/",
      number: "https://wa.me/+918778808771",
    },
  ];
  return (
    <div className="w-full h-full">
      <h1 className="cardo text-6xl text-center mb-2">Contact Us</h1>
      <h3 className="text-center work text-3xl mt-10 mb-1">
        🤳🏻Social Media Hubs
      </h3>
      <div className="social w-fit px-12 py-1 border border-purple-500 rounded-md mx-auto h-fit flex justify-center items-center gap-8 bg-white ">
        <img
          className="bg-cover object-cover h-12 w-auto hover:scale-105  flex flex-col transform duration-300 ease-out box transition-transform"
          src="./images/socials/fb.svg"
          alt=""
        />
        <img
          className="bg-cover object-cover h-12 w-auto hover:scale-105  flex flex-col transform duration-300 ease-out box transition-transform"
          src="./images/socials/insta.svg"
          alt=""
        />
        <img
          className="bg-cover object-cover h-12 w-auto hover:scale-105  flex flex-col transform duration-300 ease-out box transition-transform"
          src="./images/socials/linkedin.svg"
          alt=""
        />
        <img
          className="bg-cover object-cover h-12 w-auto hover:scale-105  flex flex-col transform duration-300 ease-out box transition-transform"
          src="./images/socials/twitter.svg"
          alt=""
        />
        <img
          className="bg-cover object-cover h-12 w-auto hover:scale-105  flex flex-col transform duration-300 ease-out box transition-transform"
          src="./images/socials/whatsapp.svg"
          alt=""
        />
      </div>
      <div className="form-tech-cards w-full h-1/2 mt-8 flex gap-4">
        <div className="card1 w-[30%] flex items-center justify-center">
          <ContactCard
            name="Shubh Sinha"
            reg="210968172"
            photo="./images/people/shubh.jpg"
            linkedin="https://www.linkedin.com/in/codeshubh/"
            number="https://wa.me/+919265585050"
          />
        </div>
        <div className="contact-form w-[40%] flex items-center justify-center">
          <ContactForm />
        </div>
        <div className="card2 w-[30%] flex items-center justify-center">
          <ContactCard
            name="Dev Thakkar"
            reg="210968148"
            photo="./images/people/dev.jpg"
            linkedin="https://www.linkedin.com/in/dev-thakkar-0854891b0/"
            number="https://wa.me/+917304898486"
          />
        </div>
      </div>
      <div className="tech-cards flex justify-center items-center mt-12 gap-16 pb-12">
        {people.map((indi, index) => (
          <ContactCard
            key={index}
            name={indi.name}
            reg={indi.reg}
            photo={indi.photo}
            linkedin={indi.linkedin}
            number={indi.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
