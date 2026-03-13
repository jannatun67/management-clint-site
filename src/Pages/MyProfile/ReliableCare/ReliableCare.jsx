import { useContext } from "react";
import Reliable from "../../../assets/Images/Banner/care.jpg";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import { FaCheckCircle, FaHeart, FaHandsHelping, FaShieldAlt, FaClock, FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReliableCare = () => {
  const { theme } = useContext(AuthContext);

  const features = [
    { icon: <FaHeart className="text-xl" />, text: "Compassionate Care" },
    { icon: <FaHandsHelping className="text-xl" />, text: "Professional Support" },
    { icon: <FaShieldAlt className="text-xl" />, text: "Safe Environment" },
    { icon: <FaClock className="text-xl" />, text: "24/7 Availability" },
    { icon: <FaSmile className="text-xl" />, text: "Happy Community" },
    { icon: <FaCheckCircle className="text-xl" />, text: "Verified Volunteers" },
  ];

  const stats = [
    { value: "5000+", label: "Happy Families" },
    { value: "1000+", label: "Active Volunteers" },
    { value: "50+", label: "Care Programs" },
  ];

  return (
    <section className={`py-16 md:py-24 overflow-hidden transition-colors duration-300 ${
      theme === "light" 
        ? "bg-gradient-to-br from-blue-50 via-white to-purple-50" 
        : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    }`}>
      <div className="w-11/12 mx-auto relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            theme === "light" ? "bg-blue-400" : "bg-yellow-400"
          }`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            theme === "light" ? "bg-purple-400" : "bg-orange-400"
          }`}></div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              theme === "light"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-700 text-yellow-400"
            }`}>
              <FaHandsHelping className="inline mr-2 mb-1" />
              Why Choose Us
            </span>

            {/* Headings */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}>
              Reliable{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Care.
              </span>
            </h1>
            
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}>
              Excellent{" "}
              <span className={`${
                theme === "light" ? "text-blue-600" : "text-yellow-400"
              }`}>Service</span>
            </h2>

            {/* Description */}
            <p className={`text-lg mb-8 leading-relaxed ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              We provide compassionate care and support to those who need it most. 
              Our dedicated team of volunteers ensures that every individual receives 
              the attention and assistance they deserve.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    theme === "light"
                      ? "bg-white shadow-md hover:shadow-lg"
                      : "bg-gray-800 shadow-lg hover:shadow-xl"
                  } transition-all duration-300 hover:-translate-y-1`}
                >
                  <span className={theme === "light" ? "text-blue-600" : "text-yellow-400"}>
                    {feature.icon}
                  </span>
                  <span className={`text-sm font-medium ${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  }`}>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`text-2xl font-bold ${
                    theme === "light" ? "text-blue-600" : "text-yellow-400"
                  }`}>{stat.value}</div>
                  <div className={`text-sm ${
                    theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/volunteer"
                className={`group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  theme === "light"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl"
                    : "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-xl hover:shadow-2xl"
                }`}
              >
                <span className="relative z-10">Join Us Today</span>
                <div className={`absolute inset-0 ${
                  theme === "light"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600"
                    : "bg-gradient-to-r from-orange-500 to-yellow-400"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </Link>

              <Link
                to="/about"
                className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                  theme === "light"
                    ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                    : "border-yellow-400 text-yellow-400 hover:bg-gray-800"
                }`}
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={Reliable}
                  alt="Reliable Care"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  theme === "light"
                    ? "from-blue-600/20 to-transparent"
                    : "from-yellow-400/20 to-transparent"
                }`}></div>
              </div>

              {/* Floating Card 1 - Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`absolute -bottom-6 -left-6 p-4 rounded-xl shadow-xl ${
                  theme === "light"
                    ? "bg-white"
                    : "bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === "light" ? "bg-blue-100" : "bg-gray-700"
                  }`}>
                    <FaHeart className={`text-2xl ${
                      theme === "light" ? "text-blue-600" : "text-yellow-400"
                    }`} />
                  </div>
                  <div>
                    <div className={`text-xl font-bold ${
                      theme === "light" ? "text-gray-800" : "text-white"
                    }`}>10+ Years</div>
                    <div className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-gray-400"
                    }`}>of Excellence</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Satisfaction Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className={`absolute -top-6 -right-6 p-4 rounded-xl shadow-xl ${
                  theme === "light"
                    ? "bg-white"
                    : "bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === "light" ? "bg-purple-100" : "bg-gray-700"
                  }`}>
                    <FaSmile className={`text-2xl ${
                      theme === "light" ? "text-purple-600" : "text-yellow-400"
                    }`} />
                  </div>
                  <div>
                    <div className={`text-xl font-bold ${
                      theme === "light" ? "text-gray-800" : "text-white"
                    }`}>98%</div>
                    <div className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-gray-400"
                    }`}>Satisfaction</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Dots */}
              <div className={`absolute -z-10 -bottom-10 -right-10 w-32 h-32 ${
                theme === "light" ? "text-blue-200" : "text-gray-700"
              }`}>
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                  <circle cx="20" cy="20" r="4" fill="currentColor" />
                  <circle cx="40" cy="20" r="4" fill="currentColor" />
                  <circle cx="60" cy="20" r="4" fill="currentColor" />
                  <circle cx="80" cy="20" r="4" fill="currentColor" />
                  <circle cx="20" cy="40" r="4" fill="currentColor" />
                  <circle cx="40" cy="40" r="4" fill="currentColor" />
                  <circle cx="60" cy="40" r="4" fill="currentColor" />
                  <circle cx="80" cy="40" r="4" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute -bottom-16 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path 
              fill={theme === "light" ? "#3B82F6" : "#FBBF24"} 
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ReliableCare;