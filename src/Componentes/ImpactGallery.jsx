import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import { FaHeart, FaComment, FaShare, FaPlay, FaSearch } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";

const ImpactGallery = () => {
  const { theme } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryImages = [
    {
      id: 1,
      url: "https://www.snehdhara.org/wp-content/uploads/2025/02/food-distribution-1.jpg",
      title: "Food Distribution Drive",
      category: "food",
      likes: 234,
      comments: 45,
      location: "Downtown Community Center"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5",
      title: "Beach Cleanup",
      category: "environment",
      likes: 567,
      comments: 89,
      location: "Miami Beach"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
      title: "Teaching Children",
      category: "education",
      likes: 432,
      comments: 67,
      location: "Local School"
    },
    {
      id: 4,
      url: "https://media.istockphoto.com/id/1387432869/photo/senior-couple-with-woman-in-wheelchair-greeting-nurse-or-care-worker-making-home-visit-at-door.jpg?s=612x612&w=0&k=20&c=TUkWRherZf4-0gFWp6MhalNhF3txMM0Sh8j60K1D4wo=",
      title: "Elderly Care Visit",
      category: "elderly",
      likes: 345,
      comments: 23,
      location: "Sunset Senior Home"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      title: "Medical Camp",
      category: "healthcare",
      likes: 678,
      comments: 91,
      location: "Community Clinic"
    },
    {
      id: 6,
      url: "https://images.stockcake.com/public/b/c/f/bcff3230-6ea3-456e-ad4c-eae374f95766_large/planting-young-tree-stockcake.jpg",
      title: "Tree Plantation",
      category: "environment",
      likes: 456,
      comments: 56,
      location: "City Park"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5",
      title: "Winter Clothing Drive",
      category: "community",
      likes: 321,
      comments: 34,
      location: "Shelter Home"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
      title: "Blood Donation Camp",
      category: "healthcare",
      likes: 543,
      comments: 78,
      location: "City Hospital"
    }
  ];

  const categories = [
    { id: "all", name: "All Moments", icon: "📸" },
    { id: "food", name: "Food Drive", icon: "🍲" },
    { id: "environment", name: "Environment", icon: "🌱" },
    { id: "education", name: "Education", icon: "📚" },
    { id: "healthcare", name: "Healthcare", icon: "🏥" },
    { id: "elderly", name: "Elderly Care", icon: "👴" },
    { id: "community", name: "Community", icon: "🤝" }
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className={`py-16 md:py-24 transition-colors duration-300 ${
      theme === "light" 
        ? "bg-gradient-to-b from-gray-50 to-white" 
        : "bg-gradient-to-b from-gray-900 to-gray-800"
    }`}>
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
            theme === "light"
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-700 text-yellow-400"
          }`}>
            <MdPhotoLibrary className="inline mr-2 text-lg" />
            Impact Gallery
          </span>

          <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}>
            Moments That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Matter
            </span>
          </h1>

          <p className={`text-lg max-w-2xl mx-auto ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}>
            Capturing the beautiful moments of volunteers making a difference in communities worldwide.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? theme === "light"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-500/30"
                  : theme === "light"
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold backdrop-blur-sm ${
                    theme === "light"
                      ? "bg-white/90 text-blue-600"
                      : "bg-gray-900/90 text-yellow-400"
                  }`}>
                    {categories.find(c => c.id === image.category)?.icon} {image.category}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm mb-2">{image.location}</p>
                  
                  <div className="flex gap-4 text-white/90">
                    <span className="flex items-center gap-1 text-sm">
                      <FaHeart /> {image.likes}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <FaComment /> {image.comments}
                    </span>
                  </div>
                </div>

                {/* Quick View Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md ${
                    theme === "light"
                      ? "bg-white/90 text-blue-600"
                      : "bg-gray-900/90 text-yellow-400"
                  }`}>
                    <FaSearch size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className={`group relative px-8 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 ${
            theme === "light"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
          }`}>
            <span className="relative z-10 flex items-center gap-2">
              View Full Gallery <FaPlay size={12} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImpactGallery;