import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="flex items-center ml-14">
      <Link to="https://www.sciastra.com/courses/">
        <button className="strt p-2 rounded-3xl">See courses</button>
      </Link>
    </div>
  );
};

export default Courses;
