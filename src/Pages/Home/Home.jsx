import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className=" space-y-16 mb-16">
      <header
        className="h-screen"
        style={{
          backgroundImage: `url('https://i.ibb.co/Zx9ZDH5/space.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Navbar />
      </header>
      <section>SciAstra</section>
    </div>
  );
};

export default Home;
