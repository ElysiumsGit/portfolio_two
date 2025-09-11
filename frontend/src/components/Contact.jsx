import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaEnvelope, FaRegCommentDots, FaRegFileAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cl8vwuc",
      "template_e69viby",
      form.current,
      "DHtbdKfA-McvQsyK8"
    ).then(() => {
      alert("Message sent successfully");
      form.current.reset();
    }),
    (error) => {
      alert("Failed:", error.text);
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="flex items-center bg-[#2c2c3c] text-gray-400 rounded-md overflow-hidden group">
          <div className="p-4 bg-[#252536] group-focus-within:bg-yellow-400 transition-colors">
            <FaUser className="text-gray-400 group-focus-within:text-black transition-colors" />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-3 bg-transparent focus:outline-none text-white"
            required
          />
        </div>

        <div className="flex items-center bg-[#2c2c3c] text-gray-400 rounded-md overflow-hidden group">
          <div className="p-4 bg-[#252536] group-focus-within:bg-yellow-400 transition-colors">
            <FaRegFileAlt className="text-gray-400 group-focus-within:text-black transition-colors" />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-3 bg-transparent focus:outline-none text-white"
            required
          />
        </div>

        <div className="flex items-center bg-[#2c2c3c] text-gray-400 rounded-md overflow-hidden group">
          <div className="p-4 bg-[#252536] group-focus-within:bg-yellow-400 transition-colors">
            <FaEnvelope className="text-gray-400 group-focus-within:text-black transition-colors" />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 bg-transparent focus:outline-none text-white"
            required
          />
        </div>

        <div className="flex bg-[#2c2c3c] text-gray-400 rounded-md overflow-hidden group">
          <div className="p-4 bg-[#252536] group-focus-within:bg-yellow-400 transition-colors">
            <FaRegCommentDots className="text-gray-400 group-focus-within:text-black transition-colors" />
          </div>
          <textarea
            rows="6"
            name="message"
            placeholder="Message"
            className="w-full bg-transparent p-4 focus:outline-none text-white resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 mt-4 hover:bg-yellow-500 transition"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
