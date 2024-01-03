import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const DropdownContent = (
    <div
      className={`dropdown-content drop font-extralight text-sm text-white hidden md:${
        showDropdown ? "flex flex-col" : "hidden pointer-events-none"
      }`}
    >
      <NavLink
        className="links rounded-t-md"
        to="/IISC"
        onClick={closeDropdown}
      >
        IISC
      </NavLink>
      <NavLink className="links" to="/IISER" onClick={closeDropdown}>
        IISER
      </NavLink>
      <NavLink className="links" to="/NISER" onClick={closeDropdown}>
        NISER
      </NavLink>
      <NavLink className="links" to="/isi" onClick={closeDropdown}>
        ISI
      </NavLink>
      <NavLink className="links" to="/cmi" onClick={closeDropdown}>
        CMI
      </NavLink>
      <NavLink className="links" to="/cmi" onClick={closeDropdown}>
        IACS
      </NavLink>
      <NavLink className="links rounded-b-md" to="/cmi" onClick={closeDropdown}>
        CEBS
      </NavLink>
    </div>
  );

  const Navbar = (
    <>
      <div
        className="flex flex-col items-start"
        onMouseEnter={handleDropdownToggle}
        onMouseLeave={handleDropdownToggle}
      >
        <NavLink
          className={`nav ${
            click
              ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
              : ""
          }`}
          to="/ResearchInstitutes"
        >
          Research Institutes
        </NavLink>
        {DropdownContent}
      </div>
      <NavLink
        className={`nav ${
          click
            ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
            : ""
        }`}
        to="/Courses"
      >
        Courses
      </NavLink>
      <NavLink
        className={`nav ${
          click
            ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
            : ""
        }`}
        to="/Selections"
      >
        Selections
      </NavLink>
      <NavLink
        className={`nav ${
          click
            ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
            : ""
        }`}
        to="/Team"
      >
        Our Team
      </NavLink>
      <NavLink
        className={`nav ${
          click
            ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
            : ""
        }`}
        to="/Resources"
      >
        Resources
      </NavLink>
      <NavLink
        className={`nav ${
          click
            ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
            : ""
        }`}
        to="/Contact"
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar items-start container mx-auto justify-between pt-1">
      <div className="">
        <div className=" flex items-center">
          <Link to="/">
            <img
              className="w-14 lg:w-16"
              src="https://i.ibb.co/V2Z9VYw/sciastra.webp"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div
        className={`md:flex md:mt-5 navs ${click ? "left-0" : "left-[-100%]"}`}
      >
        <ul className="text-base lg:text-lg font-medium flex gap-4 lg:gap-10 xl:gap-16 Navbar">
          {Navbar}
          <NavLink className=" md:hidden" to="/login">
            <button className="btn border-none btn-sm h-10 rounded-full px-8  text-white bg-gradient-to-r from-indigo-500 to-purple-500">
              Login
            </button>
          </NavLink>
        </ul>
      </div>
      <div onClick={() => setClick(!click)} className="flex mt-3 md:hidden">
        {click ? (
          <RxCross2 className="text-purple-500 cursor-pointer" size={28} />
        ) : (
          <FaBars className="text-indigo-500   cursor-pointer" size={26} />
        )}
      </div>
      <div className="hidden md:flex mt-4">
        <NavLink to="/login">
          <button className="btn btn-sm h-10 border-none rounded-full px-5 lg:px-8 font-light text-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
