import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar";
import LNavbar from "./pages/forLoggedIn/LNavbar";
import Home from "./pages/Home";
import RuleBook from "./pages/RuleBook";
import Conclave from "./pages/Conclave";
import Events from "./pages/Events";
import Events2 from "./pages/Events2";
import Events3 from "./pages/Events3";
import Events4 from "./pages/Events4";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/forLoggedIn/Dashboard";
import Schedules from "./pages/forLoggedIn/Schedules";
import Profile from "./pages/forLoggedIn/Profile";
import { useNavigate } from "react-router-dom";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  RedirectToSignUp,
} from "@clerk/clerk-react";

const App = () => {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey="pk_test_bmF0dXJhbC1yYXB0b3ItOTcuY2xlcmsuYWNjb3VudHMuZGV2JA"
      navigate={(to) => navigate(to)}
    >
      <div className="app h-full w-full  bg-bg-image bg-repeat text-white ">
        {/* {isLogin === false ? <Navbar /> : <LNavbar />} */}
        <SignedIn>
          <LNavbar />
        </SignedIn>
        <SignedOut>
          <Navbar />
        </SignedOut>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <SignedIn>
                  <Home />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut> */}
                <Home />
              </>
            }
          />
          <Route path="/rulebook" element={<RuleBook />} />
          <Route
            path="/conclave"
            element={
              // <>
              //   <SignedIn>
              //     <Conclave />
              //   </SignedIn>
              //   <SignedOut>
              //     <RedirectToSignIn />
              //   </SignedOut>
              // </>
              <Conclave />
            }
          />
          <Route
            path="/events"
            element={
              <>
                {/* <SignedIn>
                  <Events />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut> */}
                <Events />
              </>
            }
          />
          <Route
            path="/events-2"
            element={
              <>
                {/* <SignedIn>
                  <Events2 />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut> */}
                <Events2 />
              </>
            }
          />
          <Route
            path="/events-3"
            element={
              <>
                {/* <SignedIn>
                  <Events3 />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut> */}
                <Events3 />
              </>
            }
          />
          <Route
            path="/events-4"
            element={
              <>
                {/* <SignedIn>
                  <Events4 />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut> */}
                <Events4 />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          {/* <Route
            path="/login"
            element={<Login status={isLogin} setStatus={setLogin} />}
          /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route
            path="/login"
            element={
              <>
                <RedirectToSignIn />
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <RedirectToSignUp />
              </>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/events-schedules"
            element={
              <>
                <SignedIn>
                  <Schedules />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <SignedIn>
                  <Profile />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/logout"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </ClerkProvider>
  );
};

export default App;
