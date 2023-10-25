import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md">
      <h4 className="text-xl mt-8 font-Trap text-white text-center">
        Log in to your Chops Account
      </h4>

      <p className="text-center mb-8 mr-4">Don’t have an account?</p>
      <span className="underline text-[#F1AC74]">Sign up</span>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-white text-sm font-Trap mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full border p-2 border-[#f1cea9] bg-transparent focus:outline-none"
          placeholder="john.doe@example.com"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-white text-sm font-Trap mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full border p-2 border-[#f1cea9] bg-transparent focus:outline-none"
          placeholder=""
        />
      </div>
      <div className="mt-6">
        <button
          className="w-full bg-[#F1CEA9] text-black py-2 px-4 font-Trap hover:bg-transparent hover:text-[#F1CEA9] duration-700 ease-in-out hover:border hover:border-[#F1CEA9] focus:outline-none"
          type="submit"
        >
          Log in
        </button>
      </div>
      <p className="font-Trap text-base text-white text-center mt-4">
        Forgot Password?
      </p>
      <div className="bg-[#F1CEA9] mt-6 mx-auto w-[80dvw] md:w-[312px] h-[271px] flex justify-center items-center flex-col gap-y-6 font-Trap text-black h-25">
        <p className="text-sm">Not a Member?</p>
        <p className="w-[75%] text-center text-sm">
          Join now to enjoy exclusive offers tailored just for you
        </p>
        <button
          className="w-[80%] bg-tranparent border border-black text-black py-2 px-4 font-Trap focus:outline-none"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-sm underline">Continue as guest</p>
      </div>
    </div>
  );
};

export default page;
