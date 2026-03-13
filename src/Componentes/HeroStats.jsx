import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider"; // ✅ fixed path
import { FaHeart, FaHandsHelping, FaGlobe, FaUsers } from "react-icons/fa";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const HeroStats = () => {
  const { theme } = useContext(AuthContext);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: <FaHandsHelping className="text-4xl" />, value: 15000, label: "Volunteers", suffix: "+" },
    { icon: <FaHeart className="text-4xl" />, value: 5000, label: "Lives Impacted", suffix: "+" },
    { icon: <FaGlobe className="text-4xl" />, value: 50, label: "Countries", suffix: "" },
    { icon: <FaUsers className="text-4xl" />, value: 250, label: "Organizations", suffix: "+" },
  ];

  return (
    <section 
      ref={ref} 
      className={`py-20 ${
        theme === "light" 
          ? "bg-gradient-to-r from-blue-50 to-indigo-50" 
          : "bg-gradient-to-r from-gray-800 to-gray-900"
      }`}
    >
      <div className="w-11/12 mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}>
          Our Global Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
           <div 
  key={index} 
  className={`text-center p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 ${
    theme === "light" 
      ? "bg-white shadow-xl hover:shadow-2xl" 
      : "bg-gray-700 shadow-2xl hover:shadow-3xl"
  }`}
>
  {/* Icon Wrapper */}
  <div className={`flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full ${
    theme === "light" ? "bg-blue-100 text-blue-600" : "bg-yellow-800 text-yellow-400"
  }`}>
    {stat.icon}
  </div>

  {/* Count */}
  <div className={`text-4xl font-bold mb-2 ${
    theme === "light" ? "text-gray-800" : "text-white"
  }`}>
    {inView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />}
  </div>

  {/* Label */}
  <p className={`text-lg ${
    theme === "light" ? "text-gray-600" : "text-gray-300"
  }`}>
    {stat.label}
  </p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;