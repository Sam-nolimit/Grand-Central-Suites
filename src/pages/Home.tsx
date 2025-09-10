import backgroundImage from "../assets/richmond bg.jfif";
import logo1 from "../assets/richmond logo.jfif";
import { FaLocationPin, FaMap, FaPhone } from "react-icons/fa6";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import { HiArrowUpRight } from "react-icons/hi2";
import { useNavigate } from "react-router";

const Home = () => {
     const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <main>
      <section
        className="relative h-screen bg-cover bg-center flex justify-center items-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        }}
        role="banner"
        aria-label="Hero Section"
      >
        <div className="flex flex-col text-white space-y-4 items-start text-left max-w-lg">
          <img
            src={logo1}
            alt="Logo"
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full shadow-lg"
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Richmond 3
          </h1>
          <div className="w-32 sm:w-40 md:w-52 h-1.5 bg-[#fe8a68] mb-4 sm:mb-6"></div>

          <div className="flex items-center space-x-2 font-semibold mt-6 sm:mt-10 text-sm sm:text-base">
            <FaUserCircle size={24} className="sm:size-30" />
            <p>City Superhost</p>
          </div>

          <div className="flex items-center space-x-2 font-semibold text-sm sm:text-base">
            <FaPhone size={24} className="sm:size-30" />
            <p>+447523 840013</p>
          </div>

          <div className="flex items-center space-x-2 font-semibold text-sm sm:text-base">
            <FaEnvelope size={24} className="sm:size-30" />
            <p>connor@citysuperhost.com</p>
          </div>

          <div className="flex items-center space-x-2 font-semibold text-sm sm:text-base">
            <FaLocationPin size={24} className="sm:size-30" />
            <p className="max-w-xs sm:max-w-md">
              Richmond St, Manchester, Greater Manchester, M1
            </p>
          </div>

          <div className="flex items-center space-x-2 font-semibold text-sm sm:text-base">
            <FaMap size={24} className="sm:size-30" />
            <Link
              target="_blank"
              to="https://www.google.com/maps/dir/?api=1&destination=52.1727599,21.0262192"
              className="flex flex-row items-center hover:text-[#fe8a68] transition"
            >
              Directions
              <HiArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 p-1 ml-1 rounded-md" />
            </Link>
          </div>

          <button onClick={goToDashboard} className="mt-6 bg-[#fe8a68] text-white w-40 sm:w-48 h-10 sm:h-12 rounded-md text-lg sm:text-xl font-semibold hover:bg-[#ff6f4d] transition">
            Explore GuideBook
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
