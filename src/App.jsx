import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import RuleBook from "./pages/RuleBook";
import Conclave from "./pages/Conclave";
import Events from "./pages/Events";
import Events2 from "./pages/Events2";
import Events3 from "./pages/Events3";
import Events4 from "./pages/Events4";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
const App = () => {
  return (
    <div className="app h-full w-full  bg-bg-image bg-repeat text-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rulebook" element={<RuleBook />} />
        <Route path="/conclave" element={<Conclave />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events-2" element={<Events2 />} />
        <Route path="/events-3" element={<Events3 />} />
        <Route path="/events-4" element={<Events4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
