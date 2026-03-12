import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider"; // ✅ fixed path
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const { theme } = useContext(AuthContext);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I become a volunteer?",
      answer: "Simply click on the 'Login/Register' button, create an account, and browse through available opportunities. You can apply directly to any position that interests you!"
    },
    {
      question: "Is there any training provided?",
      answer: "Yes! We provide comprehensive orientation and training for all volunteers. The training duration varies depending on the role and organization."
    },
    {
      question: "Can I volunteer with my friends?",
      answer: "Absolutely! Group volunteering is encouraged. You can create a team and register together for events that allow group participation."
    },
    {
      question: "What is the minimum time commitment?",
      answer: "Time commitments vary by position. Some opportunities require just a few hours, while others may need regular weekly commitment. You can choose what works best for your schedule."
    },
    {
      question: "How are volunteers matched with opportunities?",
      answer: "Our platform uses an intelligent matching system based on your skills, interests, availability, and location to suggest the most relevant opportunities."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className="w-11/12 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
            Find answers to common questions about volunteering
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden ${
                theme === "light" 
                  ? "bg-gray-50 border border-gray-200" 
                  : "bg-gray-800 border border-gray-700"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-300 ${
                  theme === "light" 
                    ? "hover:bg-gray-100" 
                    : "hover:bg-gray-700"
                }`}
              >
                <span className={`font-semibold text-lg ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 ${theme === "light" ? "text-blue-600" : "text-yellow-400"}`}>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-4 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className={`mt-12 text-center p-8 rounded-2xl ${
          theme === "light" 
            ? "bg-gradient-to-r from-blue-600 to-purple-600" 
            : "bg-gradient-to-r from-gray-800 to-gray-700"
        }`}>
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-white/90 mb-6">We're here to help you on your volunteering journey</p>
          <button className="btn bg-white text-blue-600 hover:bg-gray-100 border-none px-8">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;