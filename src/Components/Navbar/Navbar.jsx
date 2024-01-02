import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const Navbar = (
    <>
      <NavLink className="nav" to="/ResearchInstitutes">
        Research Institutes
      </NavLink>
      <NavLink className="nav" to="/Courses">
        Courses
      </NavLink>
      <NavLink className="nav" to="/Selections">
        Selections
      </NavLink>
      <NavLink className="nav" to="/Team">
        Our Team
      </NavLink>
      <NavLink className="nav" to="/Resources">
        Resources
      </NavLink>
      <NavLink className="nav" to="/Contact">
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar container mx-auto justify-between pt-1">
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
      <div className={`md:flex navs ${click ? "left-0" : "left-[-100%]"}`}>
        <ul className="text-base lg:text-lg font-medium flex gap-4 lg:gap-10 xl:gap-16 Navbar">
          {Navbar}
          <NavLink className=" md:hidden" to="/login">
            <button className="btn btn-sm h-10 rounded-full px-5 lg:px-8 font-light text-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500">
              Login
            </button>
          </NavLink>
        </ul>
      </div>
      <div onClick={() => setClick(!click)} className="flex md:hidden">
        {click ? (
          <RxCross2 className="text-purple-500 cursor-pointer" size={28} />
        ) : (
          <FaBars className="text-indigo-500   cursor-pointer" size={26} />
        )}
      </div>
      <div className="hidden md:flex">
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
