import React from "react";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

const Contact = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Contact</h2>
      <form className="space-y-6">
        <div className="flex items-center bg-[#2c2c3c] text-gray-400 rounded-md overflow-hidden group ">
          <div className="p-4 bg-[#252536] group-focus-within:bg-yellow-400 transition-colors">
            <FaUser className="text-gray-400 group-focus-within:text-black transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 bg-transparent focus:outline-none text-white"
          />
        </div>

        <div className="flex items-center bg-[#2c2c3c] text-gray-400 rounded-md overflow-hidden group">
          <div className="p-4 bg-[#252536] group-focus-within:bg-yellow-400 transition-colors">
            <FaEnvelope className="text-gray-400 group-focus-within:text-black transition-colors" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 bg-transparent focus:outline-none text-white"
          />
        </div>

        <div className="flex bg-[#2c2c3c] text-gray-400 rounded-md overflow-hidden group">
          <div className="p-4 bg-[#252536] group-focus-within:bg-yellow-400 transition-colors">
            <FaRegCommentDots className="text-gray-400 group-focus-within:text-black transition-colors" />
          </div>
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full bg-transparent p-4 focus:outline-none text-white resize-none"
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
