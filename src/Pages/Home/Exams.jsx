const Exams = () => {
  return (
    <div className=" text-center">
      <h2 className=" text-4xl md:text-6xl mb-20 font-bold bg-gradient-to-r from-blue-700 to-purple-800 text-transparent bg-clip-text">
        More Options Than JEE & NEET
      </h2>
      <div className="mb-10 flex items-center justify-center gap-10 sm:gap-20 md:gap-32">
        <div className="flex flex-col items-start text-xs sm:text-lg gap-9 sm:gap-7">
          <p>IISc Bengaluru, IIT Madras & 7 IISERs</p>
          <p>NISER Bhubaneswar & CEBS Mumbai</p>
          <p>ISI & CMI</p>
          <p>IACS</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <button className="bg-gradient-to-r from-blue-700 to-purple-800 text-white btn btn-sm px-5 w-36 sm:w-40 md:w-44">
            IAT Exam
          </button>
          <button className="bg-gradient-to-r from-blue-700 to-purple-800 text-white btn btn-sm px-5 w-36 sm:w-40 md:w-44">
            NEST Exam
          </button>
          <button className="bg-gradient-to-r from-blue-700 to-purple-800 text-white btn btn-sm px-5 w-36 sm:w-40 md:w-44">
            ISI/CMI Exam
          </button>
          <button className="bg-gradient-to-r from-blue-700 to-purple-800 text-white btn btn-sm px-5 w-36 sm:w-40 md:w-44">
            UPST Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exams;
