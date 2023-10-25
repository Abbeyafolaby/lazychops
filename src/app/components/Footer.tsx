import React from "react";
import Image from "next/image";
import fbIcon from "@/public/images/fb_icon.png";
import twIcon from "@/public/images/tw_icon.png";
import mailIcon from "@/public/images/mail_icon.png";
import igIcon from "@/public/images/ig_icon.png";
import footer from "@/public/images/footer.png";

const Footer = () => {
  return (
    <footer className="text-white font-Trap flex flex-col justify-center items-center m-12 p-8 space-y-6 md:border md:border-[#F1AC74] md:border-solid">
      <ul className="flex flex-col md:flex-row md:justify-between md:space-x-8 md:items-center">
        <li className="mb-4">News</li>
        <li className="mb-4">Events</li>
        <li className="mb-4">About Us</li>
        <li className="mb-4">FAQS</li>
        <li className="mb-4">Support</li>
      </ul>
      <hr className="md:w-[25.5rem] w-[6rem] text-[#F1AC74]" />
      <div>
        <div className="mb-12 text-center">
          <p className="text-sm">123 Mockup Street</p>
          <p className="text-sm">San Francisco, CA 10000</p>
          <p className="text-sm">(556) 555-555</p>
        </div>
        <div>
          <p className="text-sm">
            Copyright&copy; 2023 LazyChops. All rights reserved.
          </p>
        </div>
      </div>
      <ul className="flex space-x-4 mb-12">
        <li>
          <Image src={fbIcon} alt="" className="w-6 cursor-pointer md:w-8" />
        </li>
        <li>
          <Image src={mailIcon} alt="" className="w-6 cursor-pointer md:w-8" />
        </li>
        <li>
          <Image src={twIcon} alt="" className="w-6 cursor-pointer md:w-8" />
        </li>
        <li>
          <Image src={igIcon} alt="" className="w-6 cursor-pointer md:w-8" />
        </li>
      </ul>
      <Image src={footer} alt="" />
    </footer>
  );
};

export default Footer;
