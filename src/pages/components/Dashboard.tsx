import { useState } from "react";
import NavBar from "../NavBar";
import CardSideBar from "./CardSideBar";
import MapButton from "./MapButton";
import ServiceDetails from "./ServiceDetails";

const Dashboard = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <main className="flex flex-col h-screen">
      <NavBar />

      <section className="flex flex-1 flex-row w-full">

        <aside className="w-2/4 min-w-[200px] bg-gray-100 border-r overflow-y-auto">
          <CardSideBar onSelectService={setSelectedService} />
        </aside>

        <section className="flex-1 p-4 overflow-y-auto">
          {selectedService ? (
            <ServiceDetails service={selectedService} />
          ) : (
            <p className="text-gray-500">Select a service to view details.</p>
          )}
        </section>
      </section>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-purple-600 rounded hover:bg-purple-800">
        <MapButton label="Map" destLat={0.0} destLng={0.0} />
      </div>
    </main>
  );
};

export default Dashboard;
