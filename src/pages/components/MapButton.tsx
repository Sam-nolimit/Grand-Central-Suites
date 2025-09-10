import { useState } from "react";
import { FaMap } from "react-icons/fa";
import type {MapButtonProps} from "../../types/type";

const MapButton: React.FC<MapButtonProps> = ({ label = "Map", destLat, destLng, placeId, address }) => {
  const [error, setError] = useState<string | null>(null);

  const handleDirections = () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;

          let mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}`;

          if (placeId) {
            mapsUrl += `&destination_place_id=${placeId}`;
          } else if (address) {
            mapsUrl += `&destination=${encodeURIComponent(address)}`;
          } else if (destLat && destLng) {
            mapsUrl += `&destination=${destLat},${destLng}`;
          }

          window.open(mapsUrl, "_blank");
        },
        () => setError("Location permission denied.")
      );
    } else {
      setError("Geolocation not supported.");
    }
  };

  return (
    <div>
      <button
        onClick={handleDirections}
        className="flex items-center space-x-2  text-white px-4 py-2 rounded-md hover:text-[#ff6f4d] transition"
      >
        <FaMap size={20} />
        <span>{label}</span>
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default MapButton;
