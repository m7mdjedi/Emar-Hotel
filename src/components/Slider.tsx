import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import classes from "../styles/slider.module.css";
import m1 from "../assets/hot2.jfif";
import m2 from "../assets/hot10.jfif";
import m4 from "../assets/hot5.jfif";
import m5 from "../assets/hot6.jfif";

import m7 from "../assets/hot7.jfif";
import m8 from "../assets/hot8.jfif";

const Slider = () => {
  const images = [m1, m2, m4,m5, m7, m8];

  return (
    <section className={classes.slider}>
      {/* <div className='text-center font-extrabold text-2xl my-8'>Your own Slider</div> */}
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30} // Adjust the spacing as needed
        slidesPerView={1} // Show only one slide by default
        autoplay
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <a href="/#">
              <img
                src={img}
                alt={`slide-${index + 1}`}
                // className='w-fit h-[500px] mx-auto select-none'
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
