"use client";
import React, { useState } from 'react';

const page: React.FC = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleTermsCheckboxChange = () => {
      setAgreeToTerms(!agreeToTerms);
    };


  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-Ravie font-semibold text-[#f1cea9] text-center mb-8">
        Sign Up
      </h2>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-white text-sm font-Trap mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full border p-2 border-[#f1cea9] bg-transparent focus:outline-none"
          placeholder=""
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-white text-sm font-Trap mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="w-full border p-2 border-[#f1cea9] bg-transparent focus:outline-none"
          placeholder=""
        />
      </div>
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
          htmlFor="mobile"
          className="block text-white text-sm font-Trap mb-2"
        >
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          className="w-full border p-2 border-[#f1cea9] bg-transparent focus:outline-none"
          placeholder=""
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
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-white text-sm font-Trap mb-2"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          className="w-full border p-2 border-[#f1cea9] bg-transparent focus:outline-none"
          placeholder="City, Country"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="terms" className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 self-start"
            checked={agreeToTerms}
            onChange={handleTermsCheckboxChange}
          />
          <span className="font-Trap text-sm">
            I agree to the Privacy Statement and consent to the processing of my
            personal data by Haute Chops for the management of my account in the
            conditions set forth in the Privacy Statement available in the
            footer and accessible here.
          </span>
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="terms" className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 self-start checked:bg-[#F1CEA9]"
            // checked={agreeToTerms}
            // onChange={handleTermsCheckboxChange}
          />
          <span className="font-Trap text-sm">
            I wish to subscribe to the Weekly Newsletter
          </span>
        </label>
      </div>
      <div className="mt-6">
        <button
          className="w-full bg-[#F1CEA9] text-black py-2 px-4 font-Trap hover:bg-transparent hover:text-[#F1CEA9] duration-700 ease-in-out hover:border hover:border-[#F1CEA9] focus:outline-none"
          type="submit"
          disabled={!agreeToTerms}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default page;

