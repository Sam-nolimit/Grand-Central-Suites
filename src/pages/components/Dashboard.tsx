import { FaMap } from 'react-icons/fa6';
import { Link } from 'react-router';
import NavBar from '../NavBar'

const Dashboard = () => {
  return (
    <main>
      <NavBar /><div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
  <button className="flex items-center space-x-2 font-semibold text-sm sm:text-base bg-[#fe8a68] text-white px-4 py-2 rounded shadow-lg hover:bg-[#ff6f4d] transition">
    <FaMap size={20} />
    <Link
      target="_blank"
      to="https://www.google.com/maps/dir/?api=1&destination=52.1727599,21.0262192"
      className="flex flex-row items-center"
    >
      map
    </Link>
  </button>
</div>

    </main>
  )
}

export default Dashboard;