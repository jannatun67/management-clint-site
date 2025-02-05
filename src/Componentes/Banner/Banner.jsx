import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./Banner.css"


const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper z-0">
        <SwiperSlide className='banner1 z-0'> </SwiperSlide>
        <SwiperSlide className='banner2 z-0'> </SwiperSlide>
        <SwiperSlide className='banner3 z-0'></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;