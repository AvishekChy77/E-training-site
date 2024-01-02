const Facilities = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-14">
      <div className="flex p-5 h-40 rounded-tl-3xl rounded-br-3xl  bg-gradient-to-r from-blue-700 to-purple-800 items-center justify-center gap-5">
        <img
          className=" w-20"
          src="https://i.ibb.co/YZ30cXL/scientist.webp"
          alt=""
        />
        <p className=" text-left text-white max-w-28">Zero/Minimum Fees</p>
      </div>
      <div className="flex p-5 h-40 rounded-tl-3xl rounded-br-3xl  bg-gradient-to-r from-blue-700 to-purple-800 items-center justify-center gap-5">
        <img
          className=" w-20"
          src="https://i.ibb.co/sjkJZq4/brain.webp"
          alt=""
        />
        <p className=" text-left text-white max-w-28">
          Full Scholarship (Rs. 4 Lakhs)
        </p>
      </div>
      <div className="flex p-5 h-40 rounded-tl-3xl rounded-br-3xl  bg-gradient-to-r from-blue-700 to-purple-800 items-center justify-center gap-5">
        <img
          className=" w-20"
          src="https://i.ibb.co/7gZGMqq/mentor.webp"
          alt=""
        />
        <p className=" text-left text-white max-w-28">
          Top International Ph.D Placements
        </p>
      </div>
    </div>
  );
};

export default Facilities;
