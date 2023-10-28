"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import lazylogo from "@/public/images/lazy-logo-2.png";
// import lazylogo from "@/public/images/lazy-logo.png";
import cartIcon from "@/public/images/Cart.png";
import navOpen from "@/public/images/nav-open.png";
import navClose from "@/public/images/nav-close.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const handleItemClick = (index: React.SetStateAction<number>) => {
    setSelectedItem(index);
  };

  const navItems = [
    { label: "Burger", href: "/menu" },
    { label: "Fries", href: "/menu/fries" },
    { label: "Shawarma", href: "/menu/shawarma" },
    { label: "Rice", href: "/menu/rice" },
    { label: "Pasta", href: "/menu/pasta" },
    { label: "Drinks", href: "/menu/drinks" },
  ];

  return (
  <>
    <header className="fixed w-full top-0">
      <nav className="sm:hidden flex justify-between items-center">
        <button
          type="button"
          className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <Image src={navClose} alt="" className="ml-4" />
          ) : (
            <Image src={navOpen} alt="" className="ml-4" />
          )}
        </button>
        <h2 className="text-[#F1AC74] text-xl font-Trap font-bold p-6">
            MENU
        </h2>
        <div className="mr-4">
          <Image src={cartIcon} alt="" />
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex items-center justify-around h-16 hidden">
          <nav className="hidden sm:flex space-x-4">
            <Link
              href="/menu"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Menu
            </Link>
            <Link
              href="/order"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Order
            </Link>
            <Link
              href="/restaurant"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Restaurant
            </Link>
          </nav>
          <div className="sm:flex items-center justify-center mx-auto hidden">
            <Link href="/" className="text-white text-lg font-bold">
              <Image
                src={lazylogo}
                alt=""
                className="w-[5rem] h-[4rem] flex-shrink-0"
              />
            </Link>
          </div>
          <nav className="hidden sm:flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Account
            </Link>
            <div className="mr-4 cursor-pointer">
              <Image src={cartIcon} alt="" />
            </div>
          </nav>
        </div>
      </div>
      <nav
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 h-[100vh] mobile-menu">
          <Link
            href="/menu"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleMenuToggle}
          >
            Menu
          </Link>
          <Link
            href="/order"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleMenuToggle}
          >
            Order
          </Link>
          <Link
            href="/restaurant"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleMenuToggle}
          >
            Restaurant
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleMenuToggle}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
     <div className="overflow-x-auto">
        <ul className="flex md:justify-center md:items-center md:mx-auto mt-12 p-4 space-x-4 text-white" style={{ width: `${navItems.length * 200}px` }}>
          {navItems.map((item, index) => (
            <li key={item.label}>
              <Link href={item.href}>
                <span
                  onClick={() => handleItemClick(index)}
                  className={`text-white hover:text-[#F1AC74] ${
                    selectedItem === index ? "border-b-2 pb-2 border-[#F1AC74]" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
  </>
  );
};

export default Navbar;
