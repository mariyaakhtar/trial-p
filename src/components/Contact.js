import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#0D0C07] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/40f2da29-7a23-4c4f-9b37-76591b027c52"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#2b9348] text-gray-300">
            Contact
          </p>
          <p className="py-6 text-gray-300 text-xl">
            {" "}
            Submit the form below, and let's get in touch!
          </p>
        </div>

        <input
          className="bg-gray-200"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-200"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray-200 p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#2b9348] hover:border-[#2b9348] px-4 py-3 my-8 mx-auto flex items-center">
          Lets collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
