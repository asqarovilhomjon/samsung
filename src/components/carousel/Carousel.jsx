import React from 'react'
import "./Carousel.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="carousel"
            >
            <SwiperSlide>
                <img src="https://images.app.goo.gl/v8LvPruvbLRXfnUK6" alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Carousel