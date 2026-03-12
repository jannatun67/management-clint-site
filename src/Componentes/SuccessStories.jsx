import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider"; // ✅ fixed path
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SuccessStories = () => {
  const { theme } = useContext(AuthContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1494790108777-286d2a6a6494?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "Volunteering has changed my life completely. I've met amazing people and made a real difference in my community.",
      location: "New York, USA"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The platform made it so easy to find volunteering opportunities that match my skills and schedule.",
      location: "Toronto, Canada"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Non-profit Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "Thanks to this community, we've been able to reach more people in need than ever before.",
      location: "London, UK"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className={`py-20 ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className="w-11/12 mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
          Success Stories
        </h2>
        <p className={`text-center mb-12 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
          Real stories from real people making a difference
        </p>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-2xl ${
                theme === "light" 
                  ? "bg-gradient-to-br from-blue-50 to-purple-50" 
                  : "bg-gradient-to-br from-gray-800 to-gray-700"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <img
                    src={stories[currentIndex].image}
                    alt={stories[currentIndex].name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                </div>
                <div className="flex-1">
                  <FaQuoteLeft className={`text-4xl mb-4 ${theme === "light" ? "text-blue-600" : "text-yellow-400"}`} />
                  <p className={`text-lg mb-4 italic ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                    "{stories[currentIndex].quote}"
                  </p>
                  <h3 className={`text-xl font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                    {stories[currentIndex].name}
                  </h3>
                  <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                    {stories[currentIndex].role} • {stories[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full flex items-center justify-center ${
              theme === "light"
                ? "bg-white shadow-lg hover:bg-gray-100 text-gray-800"
                : "bg-gray-700 shadow-lg hover:bg-gray-600 text-white"
            } transition-all duration-300`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full flex items-center justify-center ${
              theme === "light"
                ? "bg-white shadow-lg hover:bg-gray-100 text-gray-800"
                : "bg-gray-700 shadow-lg hover:bg-gray-600 text-white"
            } transition-all duration-300`}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? theme === "light" ? "bg-blue-600 w-6" : "bg-yellow-400 w-6"
                  : theme === "light" ? "bg-gray-300" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;