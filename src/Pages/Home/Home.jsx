import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Exams from "./Exams";
import Facilities from "./Facilities";

const Home = () => {
  return (
    <div>
      <header
        className="h-screen relative"
        style={{
          backgroundImage: `url('https://i.ibb.co/Zx9ZDH5/space.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Navbar />
        <div className=" absolute space-y-2 left-[7%] bottom-[20%] text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            SciAstra
          </h2>
          <p className=" text-xl sm:text-2xl lg:text-4xl font-semibold">
            For the love of science
          </p>
        </div>
      </header>
      <div className="my-16 container space-y-16 mx-auto px-4">
        <Exams />
        <Facilities />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
