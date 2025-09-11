import { useState } from "react";
import NavBar from "../NavBar";
import CardSideBar from "./CardSideBar";
import MapButton from "./MapButton";
import ServiceDetails from "./ServiceDetails";

const Dashboard = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setSidebarOpen(false); // close sidebar on mobile
  };

  return (
    <main className="flex flex-col h-screen">
      <NavBar />

      <section className="flex flex-1 w-full relative">
        {/* Sidebar */}
        <aside
          className={`
            bg-gray-100 border-r overflow-y-auto
            w-2/4 min-w-[200px]
            lg:static lg:block
            ${sidebarOpen ? "fixed inset-0 z-40 w-full" : "hidden lg:block"}
          `}
        >
          <CardSideBar onSelectService={handleSelectService} />
        </aside>

        {/* Service details */}
        <section className="flex-1 p-4 overflow-y-auto">
          {selectedService ? (
            <ServiceDetails service={selectedService} />
          ) : (
            <p className="text-gray-500 text-center py-8">
              Select a service to view details.
            </p>
          )}
        </section>
      </section>

      {/* Floating map button */}
       <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-purple-600 rounded hover:bg-purple-800">
        <MapButton label="Map" destLat={0.0} destLng={0.0} />
      </div>

      {/* Mobile sidebar toggle button */}
      {!sidebarOpen && (
        <button
          className="fixed top-20 left-4 z-40 p-3 bg-purple-600 text-white rounded-full shadow-lg lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}
    </main>
  );
};

export default Dashboard;
