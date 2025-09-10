import { useNavigate } from "react-router";
import { FaArrowCircleUp, FaShareAlt, FaDownload } from "react-icons/fa";

const grandLogo = new URL("../assets/grandlogo.png", import.meta.url).href;


const NavBar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-purple-600 px-4 py-2 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between text-white max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img
            src={grandLogo}
            alt="Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full"
          />
          <button
            onClick={goToHome}
            className="flex items-center text-lg sm:text-xl font-semibold hover:opacity-80 transition"
          >
            Guide Details <FaArrowCircleUp className="ml-2" />
          </button>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-center space-x-4">
          <button className="hover:opacity-80 transition">
            <FaDownload size={28} />
          </button>
          <button className="hover:opacity-80 transition">
            <FaShareAlt size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
