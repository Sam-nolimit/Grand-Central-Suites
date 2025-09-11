import ServiceCard from "./ServiceCard";

interface CardSideBarProps {
  onSelectService: (service: string) => void;
}

const CardSideBar: React.FC<CardSideBarProps> = ({ onSelectService }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border rounded-lg shadow-md p-4 m-5 gap-4">
      <ServiceCard
        iconName="handshake"
        title="Check In"
        color="text-purple-600"
        onClick={() => onSelectService("checkin")}
      />
      <ServiceCard
        iconName="checkout"
        title="Check Out"
        color="text-purple-600"
        onClick={() => onSelectService("checkout")}
      />
      <ServiceCard
        iconName="phone"
        title="Getting In Touch"
        color="text-purple-600"
        onClick={() => onSelectService("phone")}
      />
      <ServiceCard
        iconName="parking"
        title="Parking"
        color="text-purple-600"
        onClick={() => onSelectService("parking")}
      />
      <ServiceCard
        iconName="wifi"
        title="WIFI"
        color="text-purple-600"
        onClick={() => onSelectService("wifi")}
      />
      <ServiceCard
        iconName="direction"
        title="Directions"
        color="text-purple-600"
        onClick={() => {
          const destLat = 0;
          const destLng = 0;

          window.navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destLat},${destLng}`;
            window.open(mapsUrl, "_blank");
          });
        }}
      />
 <ServiceCard
        iconName="property"
        title="Property Manual"
        color="text-purple-600"
        onClick={() => onSelectService("property")}

      />

      <ServiceCard
        iconName="ticket"
        title="Football Event Tickets"
        color="text-purple-600"
        onClick={() => onSelectService("tickets")}
      />

      <ServiceCard
        iconName="instagram"
        title="Instagram"
        color="text-purple-600"
        onClick={() => onSelectService("instagram")}
      />

      <ServiceCard
        iconName="food"
        title="Food & Drink"
        color="text-purple-600"
        onClick={() => onSelectService("food")}
      />

      <ServiceCard
        iconName="search"
        title="Things To Do"
        color="text-purple-600"
        onClick={() => onSelectService("things")}
      />

      <ServiceCard
        iconName="supply"
        title="Supplies"
        color="text-purple-600"
        onClick={() => onSelectService("supplies")}
      />

      <ServiceCard
        iconName="houserules"
        title="House Rules"
        color="text-purple-600"
        onClick={() => onSelectService("houserules")}
      />

      <ServiceCard
        iconName="pets"
        title="Pets"
        color="text-purple-600"
        onClick={() => onSelectService("pets")}
      />

      <ServiceCard
        iconName="luggage"
        title="Luggage Storage"
        color="text-purple-600"
        onClick={() => onSelectService("luggage")}
      />

      <ServiceCard
        iconName="review"
        title="Review Us"
        color="text-purple-600"
        onClick={() => onSelectService("review")}
      />

      <ServiceCard
        iconName="bookagain"
        title="Book Again"
        color="text-purple-600"
        onClick={() => onSelectService("bookagain")}
      />

      <ServiceCard
        iconName="airbnb"
        title="Booking for Airbnb Property Management"
        color="text-purple-600"
        onClick={() => onSelectService("airbnb")}
      />    </section>
  );
};

export default CardSideBar;
