import React from "react";
import {
  FaPhone,
  FaWifi,
  FaMapMarkedAlt,
  FaBook,
  FaTicketAlt,
  FaInstagram,
  FaUtensils,
  FaDog,
  FaSuitcaseRolling,
  FaStar,
  FaRedo,
  FaAirbnb,
  FaRegHandshake,
  FaCar,
  FaSearchLocation,
} from "react-icons/fa";
import {
  FaBagShopping,
  FaHouseCircleCheck,
  FaHouseCircleExclamation,
  FaPersonWalkingLuggage,
} from "react-icons/fa6";

import parking from "../../assets/parking.jpg";
import football from "../../assets/football.jpg";
import wifi from "../../assets/wifi.jpg";

interface ServiceDetailsProps {
  service: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  let heading = "";
  let description = "";
  let image: string | undefined;
  let Icon: React.ElementType = FaBook;

  switch (service) {
    case "checkin":
      heading = "Check In";
      description = "Check-in instructions and guidelines for guests.";
      Icon = FaRegHandshake;
      break;
    case "checkout":
      heading = "Check Out";
      description = "Check-out process and what to do before leaving.";
      Icon = FaPersonWalkingLuggage;
      break;
    case "phone":
      heading = "Getting In Touch";
      description = "Contact numbers and support information.";
      Icon = FaPhone;
      break;
    case "parking":
      heading = "Parking";
      description = "Details about parking facilities and permits.";
      Icon = FaCar;
      image = parking;
      break;
    case "wifi":
      heading = "WiFi";
      description = "WiFi network name and password.";
      Icon = FaWifi;
      image = wifi;
      break;
    case "property":
      heading = "Property Manual";
      description = "House manual, appliances guide, and important info.";
      Icon = FaHouseCircleCheck;
      break;
    case "tickets":
      heading = "Football Event Tickets";
      description = "Buy or access football match tickets.";
      Icon = FaTicketAlt;
            image = football;
      break;
    case "instagram":
      heading = "Instagram";
      description = "Follow our Instagram for updates and inspiration.";
      Icon = FaInstagram;
      break;
    case "food":
      heading = "Food & Drink";
      description = "Recommended restaurants, bars, and cafes nearby.";
      Icon = FaUtensils;
      break;
    case "things":
      heading = "Things To Do";
      description = "Attractions, tours, and activities in the area.";
      Icon = FaSearchLocation;
      break;
    case "supplies":
      heading = "Supplies";
      description = "Information about essential supplies and shopping.";
      Icon = FaBagShopping;
      break;
    case "houserules":
      heading = "House Rules";
      description = "Rules and policies for guests staying at the property.";
      Icon = FaHouseCircleExclamation;
      break;
    case "pets":
      heading = "Pets";
      description = "Guidelines for bringing and caring for pets.";
      Icon = FaDog;
      break;
    case "luggage":
      heading = "Luggage Storage";
      description = "Options for storing luggage before check-in/out.";
      Icon = FaSuitcaseRolling;
      break;
    case "review":
      heading = "Review Us";
      description = "Share your experience and leave a review.";
      Icon = FaStar;
      break;
    case "bookagain":
      heading = "Book Again";
      description = "Steps to rebook your stay at our property.";
      Icon = FaRedo;
      break;
    case "airbnb":
      heading = "Airbnb Property Management";
      description = "Services for Airbnb property booking and management.";
      Icon = FaAirbnb;
      break;
    default:
      heading = "Service Not Found";
      description = "No details available for this service.";
      Icon = FaMapMarkedAlt;
  }

  return (
    <section className="border rounded-lg shadow-md min-h-screen p-6 m-5 flex flex-col items-start gap-4">
      <div className="flex items-center gap-3 bg-purple-700 text-white w-full h-20 rounded p-6">
        <Icon className="text-purple-900 text-3xl" />
        <h2 className="text-xl font-bold">{heading}</h2>
      </div>

      <p className="text-gray-700 text-lg">{description}</p>

       {image && (
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img src={image} alt={heading} className="w-full h-full object-cover" />
        </div>
      )}
      </section>
  );
};

export default ServiceDetails;
