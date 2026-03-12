import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider"; 
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  const { theme } = useContext(AuthContext);

  const events = [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      date: "March 25, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "Miami Beach, FL",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      spots: 25
    },
    {
      id: 2,
      title: "Food Distribution Program",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Downtown Community Center",
      image: "https://images.unsplash.com/photo-1593113598331-5a5c3f3c9b4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      spots: 15
    },
    {
      id: 3,
      title: "Elderly Care Workshop",
      date: "April 2, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Senior Living Center",
      image: "https://images.unsplash.com/photo-1576765975123-6f8e7b0a5b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      spots: 10
    }
  ];

  return (
    <section className={`py-20 ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}>
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
            Upcoming Events
          </h2>
          <p className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
            Join us in making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden ${
                theme === "light" 
                  ? "bg-white shadow-xl hover:shadow-2xl" 
                  : "bg-gray-700 shadow-2xl hover:shadow-3xl"
              } transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.spots} spots left
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className={theme === "light" ? "text-blue-600" : "text-yellow-400"} />
                    <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className={theme === "light" ? "text-blue-600" : "text-yellow-400"} />
                    <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className={theme === "light" ? "text-blue-600" : "text-yellow-400"} />
                    <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>{event.location}</span>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  theme === "light"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                }`}>
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={`btn btn-lg ${
            theme === "light"
              ? "btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              : "btn-outline border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
          }`}>
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;