import { FaTelegramPlane } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="py-5 px-16 text-white"
        style={{
          backgroundImage: `url('https://i.ibb.co/fNDxp4F/foo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col items-start justify-center mb-10">
          <img
            className=" w-20"
            src="https://i.ibb.co/V2Z9VYw/sciastra.webp"
            alt=""
          />
          <p className="ml-2">SciAstra</p>
        </div>
        <div className="grid justify-items-start grid-cols-3">
          <div className="flex flex-col gap-2 items-start">
            <h2 className=" text-xl font-semibold">SciAstra</h2>
            <Link>Mission</Link>
            <Link>Selections</Link>
            <Link>Team</Link>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h2 className=" text-xl font-semibold">Institutes</h2>
            <Link>IISC</Link>
            <Link>IISER</Link>
            <Link>NISER</Link>
            <Link>ISI</Link>
            <Link>CMI</Link>
            <Link>IACS</Link>
            <Link>CEBS</Link>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h2 className=" text-xl font-semibold">Quick links</h2>
            <Link>Our Courses</Link>
            <Link>Blogs</Link>
            <Link>Web Stories</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-5 items-center justify-between">
          <p>SciAstra Education Pvt Ltd, Bhubaneswar, Odisha</p>
          <Link to={`mailto:support@sciastra.com`}>support@sciastra.com</Link>
          <div className="flex gap-3 items-center justify-center">
            <FaYoutube color="white" size={30} />
            <FaWhatsapp color="white" size={30} />
            <FaLinkedin color="white" size={30} />
            <FaInstagram color="white" size={30} />
            <FaTelegramPlane color="white" size={30} />
          </div>
        </div>
      </footer>
      <footer className=" bg-black text-white text-center py-3">
        © Copyright 2023, SciAstra. All rights reserved
      </footer>
    </>
  );
};

export default Footer;
