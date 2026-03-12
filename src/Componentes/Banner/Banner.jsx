import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import "./Banner.css";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaHandsHelping, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  const { theme } = useContext(AuthContext);

  const bannerSlides = [
    {
      id: 1,
      title: "Make a Difference Today",
      subtitle: "Join our community of volunteers",
      description: "Your time and skills can change lives. Start your volunteering journey with us.",
      buttonText: "Get Started",
      buttonLink: "/register",
      image: "banner1",
      overlay: "bg-gradient-to-r from-blue-900/80 to-purple-900/80"
    },
    {
      id: 2,
      title: "Together We Can",
      subtitle: "Create lasting impact",
      description: "Every hand that helps makes our community stronger. Be the change you wish to see.",
      buttonText: "Learn More",
      buttonLink: "/about",
      image: "banner2",
      overlay: "bg-gradient-to-r from-green-900/80 to-teal-900/80"
    },
    {
      id: 3,
      title: "Volunteer Opportunities",
      subtitle: "Find your perfect role",
      description: "From teaching to environmental conservation - discover opportunities that match your passion.",
      buttonText: "Explore Now",
      buttonLink: "/AllVolunteer",
      image: "banner3",
      overlay: "bg-gradient-to-r from-orange-900/80 to-red-900/80"
    }
  ];

  return (
    <div className="relative">
      <Swiper
        navigation={true}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="mySwiper h-[600px] md:h-[700px] lg:h-[800px] w-full"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div className={`absolute inset-0 ${slide.image} bg-cover bg-center`}>
              {/* Dynamic Overlay based on theme */}
              <div className={`absolute inset-0 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-black/90 to-gray-900/90' 
                  : slide.overlay
              }`}></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Animated Badge */}
                  <div className="inline-block mb-6">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                      theme === 'dark'
                        ? 'bg-gray-800/80 text-yellow-400 border border-gray-700'
                        : 'bg-white/20 text-white border border-white/30'
                    }`}>
                      <FaHandsHelping className="animate-pulse" />
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Main Title with Animation */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
                    <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
                    theme === 'dark' ? 'text-gray-300' : 'text-white/90'
                  }`}>
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to={slide.buttonLink}
                      className={`group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                          : 'bg-white text-blue-900 hover:bg-gray-100'
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {slide.buttonText}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className={`absolute inset-0 ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                          : 'bg-gradient-to-r from-white to-gray-100'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </Link>

                    <Link
                      to="/about"
                      className={`px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'border-gray-600 text-white hover:bg-white/10'
                          : 'border-white/50 text-white hover:bg-white/20'
                      }`}
                    >
                      Watch Video
                    </Link>
                  </div>

                  {/* Stats Preview */}
                  <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                    {[
                      { value: '10K+', label: 'Volunteers' },
                      { value: '500+', label: 'Organizations' },
                      { value: '50+', label: 'Countries' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-2xl font-bold ${
                          theme === 'dark' ? 'text-yellow-400' : 'text-white'
                        }`}>{stat.value}</div>
                        <div className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-white/80'
                        }`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for Swiper Navigation */}
      <style jsx>{`
        .mySwiper :global(.swiper-button-prev),
        .mySwiper :global(.swiper-button-next) {
          color: ${theme === 'dark' ? '#fbbf24' : 'white'};
          background: ${theme === 'dark' ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.2)'};
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }

        .mySwiper :global(.swiper-button-prev:hover),
        .mySwiper :global(.swiper-button-next:hover) {
          background: ${theme === 'dark' ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.3)'};
          transform: scale(1.1);
        }

        .mySwiper :global(.swiper-button-prev:after),
        .mySwiper :global(.swiper-button-next:after) {
          font-size: 20px;
        }

        .mySwiper :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: ${theme === 'dark' ? '#fbbf24' : 'white'};
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .mySwiper :global(.swiper-pagination-bullet-active) {
          width: 30px;
          border-radius: 6px;
          opacity: 1;
          background: ${theme === 'dark' ? '#fbbf24' : 'white'};
        }

        .mySwiper :global(.swiper-pagination-bullet:hover) {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Banner;