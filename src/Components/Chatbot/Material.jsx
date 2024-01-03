import { Link } from "react-router-dom";

const Material = () => {
  return (
    <div className="flex items-center ml-14">
      <Link to="https://www.sciastra.com/materials/">
        <button className="strt p-2 rounded-3xl">Free Material</button>
      </Link>
    </div>
  );
};

export default Material;
