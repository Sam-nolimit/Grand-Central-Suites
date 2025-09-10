import { FaLocationPin, FaPhone } from "react-icons/fa6";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { useNavigate } from "react-router";
import MapButton from "./components/MapButton";

const grandLogo = new URL("../assets/grandlogo.png", import.meta.url).href;
const backgroundImage = new URL("../assets/grandbg.png", import.meta.url).href;


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
            src={grandLogo}
            alt="Logo"
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-purple-600 shadow-lg"
          />

          <h1 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl font-bold">
            Grand Central Suites
          </h1>
          <div className="w-32 sm:w-40 md:w-52 h-1.5 bg-purple-600 mb-4 sm:mb-6 rounded"></div>

          <div className="flex items-center space-x-2 font-semibold mt-6 sm:mt-10 text-sm sm:text-base">
            <FaUserCircle size={24} className="sm:size-30" />
            <p>Grand Central Suites</p>
          </div>

          <div className="flex items-center space-x-2 font-semibold text-sm sm:text-base">
            <FaPhone size={24} className="sm:size-30" />
            <p>07957233344</p>
          </div>

          <div className="flex items-center space-x-2 font-semibold text-sm sm:text-base">
            <FaEnvelope size={24} className="sm:size-30" />
            <p>Folasadeadejolu@gmail.com</p>
          </div>

          <div className="flex items-center space-x-2 font-semibold text-sm sm:text-base">
            <FaLocationPin size={24} className="sm:size-30" />
            <p className="max-w-xs sm:max-w-md">
              one swallow street Birmingham
            </p>
          </div>

          <div className="flex items-center hover:text-purple-600 font-semibold text-sm sm:text-base">
           <MapButton label="Get Directions" destLat={0} destLng={0}/>
              <HiArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 rounded-md" />
          </div>

          <button onClick={goToDashboard} className="mt-6 bg-purple-600 text-white w-40 sm:w-48 h-10 sm:h-12 rounded-md text-lg sm:text-xl font-semibold hover:bg-purple-800 transition">
            Explore GuideBook
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
