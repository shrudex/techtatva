import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = {
      email,
      subject,
      message,
    };
    setEmail("");
    setSubject("");
    setMessage("");
    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form data sent successfully");
      } else {
        console.error("Form data could not be sent");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="pt-2 pb-3 mx-auto px-4 w-full work bg-purple-500 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="text-white block mb-1 text-lg worko font-medium"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 block w-full p-2"
            placeholder="shrudex@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-1 text-lg font-medium text-white"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-0"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-1 text-lg font-medium text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-0 "
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-1 px-6 text-lg font-medium text-center text-[#915EFF] rounded-lg bg-primary-700 sm:w-fit bg-white hover:bg-primary-800 box "
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
