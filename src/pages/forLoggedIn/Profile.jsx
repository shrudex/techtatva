import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Profile = ({ status, setStatus }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(false);
    console.log(status);
    navigate("/");
  };
  const { isSignedIn, user, isLoaded } = useUser();
  const [logger, setLogger] = useState(null);
  const [events, setEvents] = useState([]);
  var phone = user?.phoneNumbers?.[0]?.phoneNumber;
  console.log(user);
  const username = user?.username;
  const email = user?.emailAddresses[0].emailAddress;
  const img = user?.imageUrl;
  const id = user?.id;
  const delegate = id?.slice(5,);
  console.log(email, username);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start gap-12">
      <h1 className="cardo text-6xl text-center mb-2">My Profile</h1>
      <div className="pf-display w-11/12 flex items-center justify-center mx-auto h-96">
        <div className="show-details-pf w-fit flex flex-col items-start gap-5 bg-purple-600 px-20 py-4 rounded-md justify-center">
          <h3 className="work text-4xl">Your Details</h3>
          <div className="profile-card">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
            >
              <img
                className="object-cover pl w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded  md:rounded-l-lg"
                src={img}
                alt=""
              />
              <div className="flex flex-col justify-between w-full px-4 py-1 leading-normal">
                <h5 className="mb-2 raleway text-4xl font-bold tracking-tight text-black ">
                  Hi,{" "}
                  <span className="uppercase text-purple-500">{username}</span>
                </h5>
                <p className="mb-3 inter font-semibold text-black ">
                  Your Delegate ID :{" "}
                  <span className="text-purple-600">{delegate}</span>
                </p>
                <p className="mb-3 inter font-semibold text-black ">
                  Email :{" "}
                  <span className="text-purple-600">{email}</span>
                </p>
                <p className="mb-3 inter font-semibold text-black ">
                  Phone :{" "}
                  <span className="text-purple-600">{phone}</span>
                </p>
              </div>
            </a>
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 raleway bg-white border border-black text-purple-600 font-semibold hover:bg-gray-100 rounded text-xl py-1 px-4"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
