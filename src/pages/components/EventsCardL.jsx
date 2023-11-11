import React from "react";

const EventsCardL = ({ event, org, desc, done }) => {
  console.log(done);
  const handleClick = (e) => {
    e.preventDefault();
    done = true;
  };
  console.log(done);
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
        className={`items-center cursor-pointer w-2/6 mx-auto px-3 py-1 rounded-lg raleway text-sm font-medium text-white text-center  focus:ring-4 focus:outline-none ${
          done === true
            ? "bg-[#915EFF]  hover:bg-purple-600"
            : "bg-[#3762ff] hover:bg-blue-700"
        }`}
        onClick={handleClick}
      >
        {done === true ? (
          "REGISTERED"
        ) : (
          <a href="https://checkout.stripe.com/c/pay/cs_test_a13JEK8kv0R3pwOmpRIbR8pAXiYyzEIMEKeJj5MHTggiGe53RZCSCIWBdK#fidkdWxOYHwnPyd1blpxYHZxWjA0SjxxSEdWRGZWd0ZvdENTbDRjNXBJfVRtYUZwXTRVdW1KbH1NNlxrcV1XYjBccVxBV1c8YExMQUc9SWBia2NJf3Z8Y0xNU0piRGxdRGZJVTx3f0NOQFw1NTVQV0RqY3RyQCcpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJzY0NGdjYzEzKDdmZDEoMTE3MSg8Yzw3KGQ0YWA3MDFgN2EyYTc3PTJmZycpJ3ZsYSc%2FJz1jYTRhNTcxKDJjMTIoMWBjNChkNjBnKDRmYGE2ZzQ2PD08MDcwYWQyPSd4KSdnYHFkdic%2FXlgpJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdT8qKmlqZmRpbWp2cT82NTU1J3gl">
            REGISTER
          </a>
        )}
      </button>
    </div>
  );
};

export default EventsCardL;
