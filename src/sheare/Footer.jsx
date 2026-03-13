import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import { 
  FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube,
  FaPaperPlane
} from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

// Use placeholder for now
const logo = "/src/assets/Images/logo.jpeg";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: "About Us", path: "/about" },
      { name: "Our Mission", path: "/mission" },
      { name: "Our Team", path: "/team" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" }
    ],
    volunteer: [
      { name: "Find Opportunities", path: "/AllVolunteer" },
      { name: "Become a Volunteer", path: "/register" },
      { name: "Training", path: "/training" },
      { name: "Success Stories", path: "/stories" },
      { name: "FAQ", path: "/faq" }
    ],
    support: [
      { name: "Contact Us", path: "/contact" },
      { name: "Help Center", path: "/help" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" }
    ],
    programs: [
      { name: "Education", path: "/programs/education" },
      { name: "Healthcare", path: "/programs/healthcare" },
      { name: "Environment", path: "/programs/environment" },
      { name: "Elderly Care", path: "/programs/elderly" },
      { name: "Disaster Relief", path: "/programs/disaster" }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" }
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: "+1 (555) 123-4567" },
    { icon: <FaEnvelope />, text: "info@volunteerhub.org" },
    { icon: <FaMapMarkerAlt />, text: "123 Volunteer St, New York, NY 10001" }
  ];

  return (
    <footer className={`relative transition-colors duration-300 ${
      theme === "light" 
        ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300" 
        : "bg-gradient-to-b from-gray-950 to-gray-900 text-gray-400"
    }`}>
      <div className="w-11/12 mx-auto pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src={logo} 
                  alt="VolunteerHub" 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  VolunteerHub
                </span>
              </Link>
              <p className="text-sm leading-relaxed">
                Empowering volunteers to make a difference worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 pt-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <span className="text-yellow-400">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4 flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      theme === "light"
                        ? "bg-gray-800 hover:bg-yellow-400 text-gray-300 hover:text-gray-900"
                        : "bg-gray-800 hover:bg-yellow-400 text-gray-400 hover:text-gray-900"
                    }`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([section, links], idx) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-yellow-400 rounded-full"></span>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <ul className="space-y-2">
                  {links.map(link => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-sm hover:text-yellow-400 transition-colors duration-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <p>© {currentYear} VolunteerHub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-400">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-yellow-400">Cookie Policy</Link>
          </div>
          <div className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by VolunteerHub Team
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;