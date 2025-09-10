import NavBar from '../NavBar'
import MapButton from './MapButton';

const Dashboard = () => {
  return (
    <main>
      <NavBar />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#fe8a68] rounded hover:text-white">
    <MapButton label='Map' destLat={0.000} destLng={0.00}/>
</div>

    </main>
  )
}

export default Dashboard;