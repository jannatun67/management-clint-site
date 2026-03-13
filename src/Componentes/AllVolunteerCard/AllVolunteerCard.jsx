import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaHeart,
  FaShare,
  FaBookmark,
  FaEye,
  FaClock,
  FaUserFriends
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const AllVolunteerCard = ({post}) => {
    const { theme } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    // Default image if thumbnail is not provided
    const defaultImage = "https://images.unsplash.com/photo-1593113598331-5a5c3f3c9b4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return "No deadline";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    // Calculate days remaining
    const getDaysRemaining = (deadline) => {
        if (!deadline) return null;
        const today = new Date();
        const deadlineDate = new Date(deadline);
        const diffTime = deadlineDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const daysRemaining = getDaysRemaining(post.deadline);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="h-full"
        >
            <div className={`group relative rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col ${
                theme === "light"
                    ? "bg-white shadow-lg hover:shadow-2xl"
                    : "bg-gray-800 shadow-2xl hover:shadow-3xl"
            }`}>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={post.thumbnail || defaultImage}
                        alt={post.title}
                    />
                    
                    {/* Animated Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                        theme === "light"
                            ? "from-black/70 via-transparent to-transparent"
                            : "from-gray-900/90 via-transparent to-transparent"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-md ${
                                theme === "light"
                                    ? "bg-white/90 text-blue-600"
                                    : "bg-gray-900/90 text-yellow-400"
                            }`}
                        >
                            <MdCategory className="text-sm" />
                            {post.category || "General"}
                        </motion.div>
                    </div>

                    {/* Days Remaining Badge */}
                    {daysRemaining && daysRemaining > 0 && (
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-4 right-4"
                        >
                            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-md ${
                                daysRemaining <= 3
                                    ? "bg-red-500 text-white"
                                    : theme === "light"
                                        ? "bg-white/90 text-orange-600"
                                        : "bg-gray-900/90 text-yellow-400"
                            }`}>
                                <FaClock className="text-xs" />
                                {daysRemaining <= 1 
                                    ? "Last day!" 
                                    : `${daysRemaining} days`}
                            </div>
                        </motion.div>
                    )}

                    {/* Floating Action Buttons */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 right-4 flex gap-2"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsLiked(!isLiked)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                                isLiked
                                    ? "bg-red-500 text-white"
                                    : theme === "light"
                                        ? "bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white"
                                        : "bg-gray-900/90 text-gray-300 hover:bg-red-500 hover:text-white"
                            }`}
                        >
                            <FaHeart size={14} />
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsSaved(!isSaved)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                                isSaved
                                    ? "bg-blue-500 text-white"
                                    : theme === "light"
                                        ? "bg-white/90 text-gray-700 hover:bg-blue-500 hover:text-white"
                                        : "bg-gray-900/90 text-gray-300 hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            <FaBookmark size={14} />
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                                theme === "light"
                                    ? "bg-white/90 text-gray-700 hover:bg-green-500 hover:text-white"
                                    : "bg-gray-900/90 text-gray-300 hover:bg-green-500 hover:text-white"
                            }`}
                        >
                            <FaShare size={14} />
                        </motion.button>
                    </motion.div>

                    {/* Organization Logo Overlay (if available) */}
                    {post.organization && (
                        <div className="absolute bottom-4 left-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className={`flex items-center gap-2 px-2 py-1 rounded-lg backdrop-blur-md ${
                                    theme === "light"
                                        ? "bg-white/90"
                                        : "bg-gray-900/90"
                                }`}
                            >
                                {post.organizationLogo ? (
                                    <img
                                        src={post.organizationLogo}
                                        alt={post.organization}
                                        className="w-5 h-5 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                                        theme === "light"
                                            ? "bg-blue-100 text-blue-600"
                                            : "bg-gray-700 text-yellow-400"
                                    }`}>
                                        {post.organization.charAt(0)}
                                    </div>
                                )}
                                <span className={`text-xs font-medium ${
                                    theme === "light" ? "text-gray-700" : "text-gray-300"
                                }`}>
                                    {post.organization}
                                </span>
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    {/* Title */}
                    <motion.h3 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className={`text-xl font-bold mb-3 line-clamp-2 min-h-[56px] ${
                            theme === "light" ? "text-gray-800" : "text-white"
                        }`}
                    >
                        {post.title}
                    </motion.h3>

                    {/* Info Chips */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 mb-4"
                    >
                        {/* Category Chip */}
                        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                            theme === "light" ? "bg-blue-50" : "bg-gray-700"
                        }`}>
                            <MdCategory className={theme === "light" ? "text-blue-600" : "text-yellow-400"} />
                            <span className={`text-xs font-medium ${
                                theme === "light" ? "text-gray-700" : "text-gray-300"
                            }`}>
                                {post.category || "General"}
                            </span>
                        </div>

                        {/* Deadline Chip */}
                        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                            daysRemaining && daysRemaining <= 3
                                ? theme === "light" ? "bg-red-50" : "bg-red-900/30"
                                : theme === "light" ? "bg-gray-100" : "bg-gray-700"
                        }`}>
                            <FaCalendarAlt className={
                                daysRemaining && daysRemaining <= 3
                                    ? "text-red-500"
                                    : theme === "light" ? "text-gray-600" : "text-gray-400"
                            } />
                            <span className={`text-xs font-medium ${
                                daysRemaining && daysRemaining <= 3
                                    ? "text-red-600"
                                    : theme === "light" ? "text-gray-700" : "text-gray-300"
                            }`}>
                                {formatDate(post.deadline)}
                            </span>
                        </div>
                    </motion.div>

                    {/* Location */}
                    {post.location && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-2 mb-3"
                        >
                            <FaMapMarkerAlt className={theme === "light" ? "text-gray-400" : "text-gray-500"} />
                            <span className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                                {post.location}
                            </span>
                        </motion.div>
                    )}

                    {/* Volunteers Info */}
                    {post.volunteersNeeded && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-2 mb-3"
                        >
                            <FaUserFriends className={theme === "light" ? "text-gray-400" : "text-gray-500"} />
                            <span className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                                <span className="font-semibold">{post.volunteersNeeded}</span> volunteers needed
                            </span>
                        </motion.div>
                    )}

                    {/* Progress Bar */}
                    {post.currentVolunteers && post.volunteersNeeded && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mb-4"
                        >
                            <div className="flex justify-between text-xs mb-1">
                                <span className={theme === "light" ? "text-gray-600" : "text-gray-400"}>
                                    Progress
                                </span>
                                <span className={theme === "light" ? "text-gray-800 font-semibold" : "text-white font-semibold"}>
                                    {Math.round((post.currentVolunteers / post.volunteersNeeded) * 100)}%
                                </span>
                            </div>
                            <div className={`h-2 rounded-full ${
                                theme === "light" ? "bg-gray-200" : "bg-gray-700"
                            }`}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(post.currentVolunteers / post.volunteersNeeded) * 100}%` }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    className={`h-2 rounded-full ${
                                        theme === "light" ? "bg-blue-600" : "bg-yellow-400"
                                    }`}
                                ></motion.div>
                            </div>
                            <p className={`text-xs mt-1 ${theme === "light" ? "text-gray-500" : "text-gray-500"}`}>
                                {post.currentVolunteers} joined • {post.volunteersNeeded - post.currentVolunteers} spots left
                            </p>
                        </motion.div>
                    )}

                    {/* Description Preview */}
                    {post.description && (
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className={`text-sm mb-4 line-clamp-2 ${
                                theme === "light" ? "text-gray-600" : "text-gray-400"
                            }`}
                        >
                            {post.description}
                        </motion.p>
                    )}

                    {/* View Details Button */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-auto"
                    >
                        <Link to={`/AllDetails/${post._id}`} className="block">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                                    theme === "light"
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                                        : "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-500 hover:to-orange-600 shadow-lg hover:shadow-xl"
                                }`}
                            >
                                <FaEye className="group-hover/btn:scale-110 transition-transform" />
                                <span>View Full Details</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Urgent Badge */}
                {post.urgent && (
                    <div className="absolute -top-1 -left-1">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-50 animate-ping"></div>
                            <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-lg">
                                URGENT
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default AllVolunteerCard;