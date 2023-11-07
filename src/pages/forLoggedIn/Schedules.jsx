import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import EventsCardL from "../components/EventsCardL";

const Schedules = () => {
  const eventsList = [
    {
      event: "PIXELVISION",
      org: "MIT-GPT-WORKSHOP",
      desc: "AB3 18 Oct 2023 Embark on a captivating voyage into the realm of computer vision with PixelVision, an OpenCV Workshop. Learn the technique of image processing through a series of hand-on activities and captivating demonstrations in an insightful session.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "GITCRAFT",
      org: "FOSSIFY-WORKSHOP",
      desc: "AB3 104 16 Oct 2023 Building Together in Open Source: Want to learn Git, Github , and build your first open-source webpage? This workshop is for you!",
      mode: "OFFLINE",
      done: true,
    },
    {
      event: "ORK WORKSHOP & VIRTUAL ROCKET BUILDING COMPETION",
      org: "ESCAPE VELOCITY-WORKSHOP",
      desc: "Ab3-103 15 Oct 2023 The focus of the event is centered on utilizing the open-source software named open rocket, enabling participants to construct their model rockets from the ground up and subsequently simulate their behavior.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "MICROSOFT FLIGHT SIMULATOR",
      org: "AEROVERSE-WORKSHOP",
      desc: "AB3-403 16 Oct 2023 Experience the beauty of aviation firsthand with our flight simulator and take to the skies. Calling all aviation enthusiasts.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "FLIGHT MECHANICS WORKSHOP",
      org: "AEROVERSE-WORKSHOP",
      desc: "AB3-102 17 Oct 2023 Have you ever wondered how planes actually fly? This workshop offers you the opportunity to dive deep into the wonderful world of air-flight machines. Covering the basics of flight mechanics and aerodynamics, this informative seminar allows you to visualize flight characteristics and essentially understand the science behind flight.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "NOVA - UI/UX WORKSHOP",
      org: "CODE RED- WORKSHOP",
      desc: "AB3 18 Oct 2023 Whether you're a designer or a developer, this workshop will enhance your understanding of user needs and help you master the art of designing intuitive, user-friendly interfaces.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "(M.A.D) MOBILE APP DEVELOPMENT WORKSHOP",
      org: "CODE RED- WORKSHOP",
      desc: "AB3 18 Oct 2023 Unlock the world of app development in our immersive workshop, designed for students eager to create, innovate and code. Join us to delve into the art of turning ideas into functional mobile applications. Guided by seasoned developers, you'll learn hands-on coding, UI design, and app deployment.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "EVERYTHING OFF-ROAD",
      org: "KRAFTWAGEN (WORKSHOP)",
      desc: "Behind MIT Football ground 15 Oct 2023 An interesting workshop demonstrating various domains involved in the manufacturing of automobiles and industry level skill sets. By using preliminary design(CAD) , analysis (CAE), manufacturing process and finally testing of components.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "TESSERACT",
      org: "ACUMEN",
      desc: "Entire campus (centre at GSH) 19 Oct 2023 Have you watched Student of the Year? Does the thought of solving riddles and hunting for a treasure excite you? Tesseract is the perfect event for you as it embodies the spirit of competition and the pursuit of something valuable. It is a captivating event where participants embark on a thrilling adventure to uncover hidden treasures.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "AIB",
      org: "ACUMEN",
      desc: "AB3- 402,403 20 Oct 2023 Are you drawn to the allure of an Auction, or do you crave the exhilarating pulse of Jeopardy-style trivia? Look no more, for we have the ultimate fusion tailored just for you. AIB presents an electrifying medley of buzzer rounds, Jeopardy trivia, and auction, seamlessly intertwined across three gripping rounds.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "SUSTAIN-A-BUILD",
      org: "ARCUS",
      desc: "AB3-304,305 20 Oct 2023 This offline event is based on testing an individual’s potential in management of real estate and budget analysis.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "FOXHUNT",
      org: "ALACRITY",
      desc: "AB5-207 19 Oct 2023 In this thrilling competition, participants will have to construct their own receiver antennas and using these, embark on a quest to locate multiple hidden transmitting antennas placed throughout the campus. The event will take place over two days.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "CIPHER",
      org: "MIT-GPT",
      desc: "AB3 18 Oct 2023 Cipher is an intensive 24-hour Data Science Hackathon where participants will have to showcase their analytics and Machine Learning expertise. The individual will be given an opportunity to demonstrate their proficiency in data handling and exhibit their analytical skills in an intense and competitive environment.",
      mode: "ONLINE",
      done: false,
    },
    {
      event: "CHAKRAVYUH 4.0",
      org: "MECHATRON",
      desc: "AB3 204,205 18 Oct 2023 Join us on a thrilling two-day journey inspired by the ancient Chakravyuh tactic from the Mahabharata. Dive into a world of intellectual conquests, where your abilities will be challenged through diverse, fun, and strategically demanding challenges. These challenges are designed to engage and test your cognitive prowess.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "QUANDARY",
      org: "BIZZCOM",
      desc: "AB3 203 19 Oct 2023 Quandary is bespoken for those who think promptly and bring out-of-the-box directives for challenging problems. The participants will be bombarded with problem statements based on the nature of their committee and they are expected to defend, debate, and think of solutions for the same.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "KICK-OFF",
      org: "MECHATRON",
      desc: "FC1 18 Oct 2023 Immerse yourself in the future of football with our thrilling Miniature Bot Football Matches! Command your pint-sized football bot using the convenience of your phone and Bluetooth technology. Experience the excitement as you skillfully manoeuvre your bot to score spectacular goals while fiercely defending your goal post from the opponents.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "VEDANTH 13.0",
      org: "VEDANTH-FLAGSHIP",
      desc: "AB4 GROUND FLOOR COMMON AREA 18 Oct 2023 Vedanth is a technical exhibition at MIT's technical fest, Tech Tatva. It serves as a platform for innovators across esteemed institutions to showcase their skills in the fields of IoT, ML, medical innovation, robotics and automation, technology for social betterment, innovative learning, and frugal innovation.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "ROBOWARS 30KG",
      org: "ROBOWARS-FLAGSHIP",
      desc: "Cage beside FC1 18 Oct 2023 A heavyweight battle between bots shall surely promise an adrenaline rush to our spectators and the best team will win the ultimate prize of a lac. Prize pool : Rs.120000",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "ROBOWARS – 15KG",
      org: "ROBOWARS-FLAGSHIP",
      desc: "Cage beside FC1 18 Oct 2023 The 15kg Battle Bot Category brings you the ultimate clash of engineering prowess and strategic brilliance. Prepare to witness an electrifying spectacle as powerful robots, weighing upto 15 kilograms, go head-to-head in a no-holds-barred combat extravaganza.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "OFFROAD MAYHEM",
      org: "KRAFTWAGEN-FLAGSHIP",
      desc: "Road in front of Block 13 19 Oct 2023 Join us for a thrilling journey of robotics as participants craft their ingenious robots from scratch. Witness the fusion of innovation and competition as these mechanical marvel sprint towards victory.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "INTELLECTCONNECT: A RESEARCH PAPER PRESENTATION",
      org: "INVESTIGAR-FLAGSHIP",
      desc: "MV Seminar Hall 19 Oct 2023 This event aims to provide a platform to present a research paper on a topic of the individual’s interest in front of an esteemed panel of adjudicators. Participants need to submit their selected research paper.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "SKYRUSH",
      org: "AEROVERSE- FLAGSHIP",
      desc: "MIT Football Ground 19 Oct 2023 Get your teams ready to compete in a festival of flight. Skyrush gives you the opportunity to compete with your RC Aircrafts and Drones and win exciting rewards in this fast paced, problem-statement based competition.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "ECHO",
      org: "SYNAPSE",
      desc: "AB3 18 Oct 2023 Unleash your creative genius and dive into the realm of intelligent conversational agents. Join us in crafting captivating chatbots using cutting-edge technologies. But that’s not all – to ensure everyone is familiar with dialogue flow for creating remarkable chatbots, we’re thrilled to announce an accompanying workshop.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "ICARUS",
      org: "AEROVERSE",
      desc: "Annapoorna Mess, Top Floor, Boxing Ring 21 Oct 2023 Conquer the skies by creating your own flying balsa gliders from the materials provided stand a chance to win amazing prizes.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "MEDTECH MAYHEM",
      org: "EPSILON",
      desc: "AB5 201 19 Oct 2023 Think you’re a Bio wiz? Come join us in MedTech Mayhem: The all-in-one event to test your mettle against the best. This team-based event requires both knowledge and debating skills, so choose your teammates wisely and sign up for the chance to prove yourself.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "ESCAPE ROOM",
      org: "COSMICON",
      desc: "AB5 (201-205,401-405,504-508) 21 Oct 2023 This is an engaging and immersive escape room-based event where the participating teams are tasked with navigating a multi-floor building. The teams, armed with their wits and collaborative spirit, will find themselves confronted with an array of intricately designed scenarios on each floor.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "ASTROPHOTOGRAPHY AND POSTER MAKING",
      org: "COSMICON",
      desc: "AB3 404,405 19 Oct 2023 An astrophotography and poster making competition where participants have to capture images of the night sky and using their samples make an innovative and informative poster.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "INNOFRAME",
      org: "MECHANIZE",
      desc: "Ab3 -302 19 Oct 2023 INNOFRAME is a thrilling competition that invites talented designers and engineers to revolutionize the world of roll cage and chassis design.",
      mode: "OFFLINE",
      done: false,
    },
    {
      event: "OPEN-SOURCE CRYPTIC HUNT",
      org: "FOSSIFY",
      desc: "20 Oct 2023 Cryptic Hunt is envisioned as an open source treasure hunt game in which players must understand clues to proceed to higher level. Hints will be based on open-source projects, tools and programs utilized in the technological field.",
      mode: "ONLINE",
      done: false,
    },
    {
      event: "CODE FUSION",
      org: "CODE RED",
      desc: "19 Oct 2023 An online coding challenge structured in ICPC fashion but with a twist, where teams of three members collaborate to find innovative solutions to real-world problems. This competition promotes teamwork, creativity, innovation, and the ability to thrive in high-pressure situations.",
      mode: "ONLINE",
      done: false,
    },
    {
      event: "MONOPOLY",
      org: "BIZZCOM",
      desc: "19 Oct 2023 A trading-based competition where teams will represent companies and organizations with certain assets and set objectives. A problem statement shall be provided where the teams will have to create strategies and form alliances with other teams to achieve their goals.",
      mode: "ONLINE",
      done: false,
    },
    {
      event: "CIPHER",
      org: "MIT-GPT",
      desc: "AB3 18 Oct 2023 Cipher is an intensive 24-hour Data Science Hackathon where participants will have to showcase their analytics and Machine Learning expertise. The individual will be given an opportunity to demonstrate their proficiency in data handling and exhibit their analytical skills in an intense and competitive environment.",
      mode: "ONLINE",
      done: false,
    },
  ];
  const { isSignedIn, user, isLoaded } = useUser();
  const [logger, setLogger] = useState(null);
  const [events, setEvents] = useState([]);
  var phone = user?.phoneNumbers?.[0]?.phoneNumber;
  phone = phone?.slice(3, 13);

  const username = user.username;
  const email = user.emailAddresses[0].emailAddress;
  const img = user.imageUrl;
  const id = user.id;
  const delegate = id.slice(5);

  

  
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-12">
      <h1 className="cardo text-6xl text-center mb-2">Events & Schedules</h1>
      {/* {logger && logger[0].events && (
        <div className="cardo text-3xl text-center mb-2">
          {/* <p>Property 1: {logger[0].events[1]}</p> */}
      {/* <p>Property 2: {logger[0].events[0]}</p> */}
      {/* Add more properties as needed */}
      {/* </div> */}
      {/* )} */}
      <div className="events-header flex w-[96%] px-4 my-4 mx-auto items-center justify-between rounded-xl bg-[#915EFF]">
        <h3 className="raleway text-2xl">
          TechTatva 2023 : <span className="font-semibold ">Schedule</span>
        </h3>
        <button className="cardo text-3xl font-bold">Events TimeTable</button>
      </div>
      <div className="events-grid px-8 py-2 grid grid-cols-4 gap-5 mb-16">
        {eventsList.map((event, index) => (
          <div key={index} className="flex flex-col">
            <EventsCardL
              event={event.event}
              org={event.org}
              desc={event.desc}
              mode={event.mode}
              done={event.done}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
// };

export default Schedules;
