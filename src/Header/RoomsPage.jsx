import { Home, Bed, Utensils, Gamepad2, Book, Coffee, Dumbbell, Car } from "lucide-react";

import "../Header/RoomsPage.css";
import Header from "./Header";

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Living Room",
      description: "A cozy space perfect for relaxation and entertainment with comfortable seating and ambient lighting.",
      icon: Home,
      link: "https://media.istockphoto.com/id/2167030750/photo/blue-modern-house-interior-living-room-design-cozy-home-have-yellow-armchair-with-light-blue.jpg?s=612x612&w=0&k=20&c=rRZzetEGMDMW1aX-RoERhXLb6ceq9aDhbTPLYqyZ_bk=",
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      name: "Master Bedroom",
      description: "Your private sanctuary featuring luxurious bedding and peaceful atmosphere for restful sleep.",
      icon: Bed,
      link: "/rooms/bedroom",
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 3,
      name: "Kitchen",
      description: "Modern culinary space equipped with premium appliances and ample counter space for cooking.",
      icon: Utensils,
      link: "/rooms/kitchen",
      color: "bg-green-50 text-green-600"
    },
    {
      id: 4,
      name: "Game Room",
      description: "Entertainment hub with gaming consoles, comfortable seating, and immersive audio setup.",
      icon: Gamepad2,
      link: "/rooms/game-room",
      color: "bg-red-50 text-red-600"
    },
    {
      id: 5,
      name: "Study Room",
      description: "Quiet workspace designed for productivity with ergonomic furniture and organized storage.",
      icon: Book,
      link: "/rooms/study",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: 6,
      name: "Coffee Corner",
      description: "Intimate space for morning rituals with premium coffee equipment and cozy seating.",
      icon: Coffee,
      link: "/rooms/coffee-corner",
      color: "bg-amber-50 text-amber-600"
    },
    {
      id: 7,
      name: "Home Gym",
      description: "Personal fitness space with professional equipment and motivating atmosphere.",
      icon: Dumbbell,
      link: "/rooms/gym",
      color: "bg-orange-50 text-orange-600"
    },
    {
      id: 8,
      name: "Garage",
      description: "Organized storage and workshop area with space for vehicles and hobby projects.",
      icon: Car,
      link: "/rooms/garage",
      color: "bg-gray-50 text-gray-600"
    }
  ];

  return (
    <>
    <Header/>
    <div className="rooms-page min-h-screen bg-stone-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" className="w-full h-full">
          <defs>
            <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor" fillOpacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-600 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-600 rounded-full opacity-5 animate-pulse delay-500"></div>

      <header className="relative z-10 text-center py-16 px-6">
        <h1 className="text-6xl font-light text-gray-700 font-serif mb-6 tracking-wide">
          Our Rooms
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
          Discover thoughtfully designed spaces that blend comfort with functionality.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Each room tells its own story of modern living and timeless elegance.
        </p>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rooms.map((room) => {
            const IconComponent = room.icon;
            return (
              <div
                key={room.id}
                className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
              >
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-full ${room.color} transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent size={32} />
                  </div>
                </div>

                <h3 className="text-2xl font-light text-gray-700 mb-6 font-serif group-hover:text-gray-900 transition-colors duration-300">
                  {room.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                  {room.description}
                </p>

                <div className="text-left">
                  <a
                    href={room.link}
                    className="text-amber-600 hover:text-amber-700 font-medium transition-all duration-300 hover:underline inline-flex items-center group"
                  >
                    Explore Space
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-amber-400 rounded-full opacity-30 animate-ping delay-700"></div>
    </div>
    
    </>
  );
}