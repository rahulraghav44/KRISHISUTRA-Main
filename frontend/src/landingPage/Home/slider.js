
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Slider() {
  return ( 
    <>
    <div className='slider'>
    <Swiper
        slidesPerView={2}
        spaceBetween={3}
        
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide><img id='slider-img' src="./media/slider1.jpg" alt="slider"/> </SwiperSlide>
      <SwiperSlide><img id='slider-img' src="./media/slider2.jpg" alt="slider"/> </SwiperSlide>
      <SwiperSlide><img id='slider-img' src="./media/slider3.jpg" alt="slider"/> </SwiperSlide>
      <SwiperSlide><img id='slider-img' src="./media/slider4.jpg" alt="slider"/> </SwiperSlide>
      </Swiper>
      
      
    </div>
    </>
   );
}

export default Slider;

