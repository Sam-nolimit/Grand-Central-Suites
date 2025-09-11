import { type FC } from "react";
import { FaRegHandshake, FaSearchLocation, FaShoppingCart, FaSmileWink, FaSuitcaseRolling, FaTicketAlt, FaWifi } from "react-icons/fa";
import { FaAirbnb, FaCar, FaDog, FaHouseCircleCheck, FaHouseCircleExclamation, FaInstagram, FaMapLocationDot, FaPersonWalkingLuggage, FaPhone, FaTicket, FaUtensils } from "react-icons/fa6";

const iconCards = {
  handshake: <FaRegHandshake />,
  direction: <FaMapLocationDot />,
  phone: <FaPhone />,
  wifi: <FaWifi />,
  parking: <FaCar />,
  instagram: <FaInstagram />,
  checkout: <FaPersonWalkingLuggage />,
  property: <FaHouseCircleCheck />,
  ticket: <FaTicket />,
  bookagain: <FaTicketAlt />,
  food: <FaUtensils />,
  pets: <FaDog />,
  review: <FaSmileWink />,
  houserules: <FaHouseCircleExclamation />,
  luggage: <FaSuitcaseRolling />,
  airbnb: <FaAirbnb />,
  search: <FaSearchLocation />,
  supply: <FaShoppingCart /> 
} as const;


export interface ServiceCardProps {
  title: string;
  iconName?: keyof typeof iconCards;
  color?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  iconName = "handshake", 
  color = "text-gray-700",
  hoverColor = "hover:text-purple-800",
 onClick,
}) => {
  const icon = iconCards[iconName ?? ""] || null;

  return (
     <div
           onClick={onClick}
      className={`flex flex-col items-center justify-center space-y-2 cursor-pointer transition 
      border rounded-lg shadow-md p-4 w-40 h-40 bg-white ${color} ${hoverColor}`}
    >
      <div className="text-4xl">{icon}</div>
      <div className="text-lg font-semibold">{title}</div>
    </div>
  );
};

export default ServiceCard;
