import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Schedules = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [logger, setLogger] = useState(null);
  const [events, setEvents] = useState([]);
  var phone = user.phoneNumbers[0].phoneNumber;
  phone = phone.slice(3, 13);

  useEffect(() => {
    console.log("In first use effect");
    axios
      .get(`http://localhost:3000/showusers/${phone}`)
      .then((res) => {
        setLogger(res.data);
        console.log(res.data);

        if (res.data && res.data[0].events.length > 0) {
          const fetchEvents = async () => {
            const eventPromises = res.data[0].events.map((eventId) =>
              axios.get(`http://localhost:3000/showevent/${eventId}`)
            );

            try {
              const eventResponses = await Promise.all(eventPromises);
              const eventData = eventResponses.map((res) => res.data);
              setEvents(eventData);
              console.log("Events fetched:", eventData);
            } catch (error) {
              console.error(error);
            }
          };

          fetchEvents();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [phone]);

  if (!isLoaded) return null;
  else {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-start gap-12">
        <h1 className="cardo text-6xl text-center mb-2">Events & Schedules</h1>
        <h1 className="cardo text-3xl text-center mb-2">
          {user.phoneNumbers[0].phoneNumber}
        </h1>
        {logger && logger[0].events && (
          <div className="cardo text-3xl text-center mb-2">
            <p>Property 1: {logger[0].events[1]}</p>
            <p>Property 2: {logger[0].events[0]}</p>
            {/* Add more properties as needed */}
          </div>
        )}
      </div>
    );
  }
};

export default Schedules;
