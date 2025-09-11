// // src/components/ServiceDetailsConfig.ts
// import {
//   FaRegHandshake,
//   FaPersonWalkingLuggage,
//   FaPhone,
//   FaCar,
//   FaWifi,
//   FaHouseCircleCheck,
//   FaTicketAlt,
//   FaInstagram,
//   FaUtensils,
//   FaSearchLocation,
//   FaBagShopping,
//   FaHouseCircleExclamation,
//   FaDog,
//   FaSuitcaseRolling,
//   FaStar,
//   FaRedo,
//   FaAirbnb,
//   FaMapMarkedAlt,
// } from "react-icons/fa";

// import parking from "../assets/parking.jpg";
// import wifi from "../assets/wifi.jpg";

// export interface ServiceDetail {
//   heading: string;
//   description: string;
//   icon: React.ElementType;
//   image?: string;
//   lat?: number;
//   lng?: number;
// }

// export const services: Record<string, ServiceDetail> = {
//   checkin: {
//     heading: "Check In",
//     description: "Check-in instructions and guidelines for guests.",
//     icon: FaRegHandshake,
//   },
//   checkout: {
//     heading: "Check Out",
//     description: "Check-out process and what to do before leaving.",
//     icon: FaPersonWalkingLuggage,
//   },
//   phone: {
//     heading: "Getting In Touch",
//     description: "Contact numbers and support information.",
//     icon: FaPhone,
//   },
//   parking: {
//     heading: "Parking",
//     description: "Details about parking facilities and permits.",
//     icon: FaCar,
//     image: parking,
//     lat: 40.7128, // Example coordinate
//     lng: -74.006, // Example coordinate
//   },
//   wifi: {
//     heading: "WiFi",
//     description: "WiFi network name and password.",
//     icon: FaWifi,
//     image: wifi,
//   },
//   property: {
//     heading: "Property Manual",
//     description: "House manual, appliances guide, and important info.",
//     icon: FaHouseCircleCheck,
//   },
//   tickets: {
//     heading: "Football Event Tickets",
//     description: "Buy or access football match tickets.",
//     icon: FaTicketAlt,
//   },
//   instagram: {
//     heading: "Instagram",
//     description: "Follow our Instagram for updates and inspiration.",
//     icon: FaInstagram,
//   },
//   food: {
//     heading: "Food & Drink",
//     description: "Recommended restaurants, bars, and cafes nearby.",
//     icon: FaUtensils,
//   },
//   things: {
//     heading: "Things To Do",
//     description: "Attractions, tours, and activities in the area.",
//     icon: FaSearchLocation,
//   },
//   supplies: {
//     heading: "Supplies",
//     description: "Information about essential supplies and shopping.",
//     icon: FaBagShopping,
//   },
//   houserules: {
//     heading: "House Rules",
//     description: "Rules and policies for guests staying at the property.",
//     icon: FaHouseCircleExclamation,
//   },
//   pets: {
//     heading: "Pets",
//     description: "Guidelines for bringing and caring for pets.",
//     icon: FaDog,
//   },
//   luggage: {
//     heading: "Luggage Storage",
//     description: "Options for storing luggage before check-in/out.",
//     icon: FaSuitcaseRolling,
//   },
//   review: {
//     heading: "Review Us",
//     description: "Share your experience and leave a review.",
//     icon: FaStar,
//   },
//   bookagain: {
//     heading: "Book Again",
//     description: "Steps to rebook your stay at our property.",
//     icon: FaRedo,
//   },
//   airbnb: {
//     heading: "Airbnb Property Management",
//     description: "Services for Airbnb property booking and management.",
//     icon: FaAirbnb,
//   },
// };

// // Fallback service
// export const defaultService: ServiceDetail = {
//   heading: "Service Not Found",
//   description: "No details available for this service.",
//   icon: FaMapMarkedAlt,
// };
