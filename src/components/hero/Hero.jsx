import "./Hero.scss"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import hero_img from "../../assets/images/hero_img.png"
import hero_img2 from "../../assets/images/karusel.png"
import hero_as from "../../assets/images/as.jpg"
import hero_dr from "../../assets/images/guys.jpg"
import hero_model from "../../assets/images/model.jpg"



const Hero = () => {
    return (
        <main className="hero">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero_left_content">
                        <p className="hero_text">Save up to $1,400</p>
                        <h3 className="hero_title">Our brightest idea</h3>
                        <p className="descrip">Save $1,400 off a 85 Class Samsung Neo QLED 4K QN85D and exprience the brightness of Quantum Matrix with Mini LEDs.Enjoy Savings during Samsung Week to celebrate our 555<sup>th</sup> anniversary</p>
                        <button className="buy">Shop now</button>
                    </div>
                    <img className="hero_img" src={hero_as} alt="hero_img" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_left_content">
                        <p className="hero_text">Save up to $1,050+</p>
                        <h3 className="hero_title">Epic savings, your way</h3>
                        <p className="descrip">Get to $750 instant trade-in<sup>θ</sup> or up to $350 without trade-in<sup>B</sup> towards Galaxy S24 Ultra. Plus, get double the storage on us<sup>Ω</sup> and up to 30% off Galaxy Watch Ultra with purchase.</p>
                        <button className="buy">Buy now</button>
                    </div>
                    <img className="hero_img" src={hero_img} alt="hero_img" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_left_content">
                        <p className="hero_text">Save up to $1,400</p>
                        <h3 className="hero_title">Our brightest idea</h3>
                        <p className="descrip">Save $1,400 off a 85 Class Samsung Neo QLED 4K QN85D and exprience the brightness of Quantum Matrix with Mini LEDs.Enjoy Savings during Samsung Week to celebrate our 555<sup>th</sup> anniversary</p>
                        <button className="buy">Shop now</button>
                    </div>
                    <img className="hero_img" src={hero_dr} alt="hero_img" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_left_content">
                        <p className="hero_text">Save up to $1,050+</p>
                        <h3 className="hero_title">Epic savings, your way</h3>
                        <p className="descrip">Get to $750 instant trade-in<sup>θ</sup> or up to $350 without trade-in<sup>B</sup> towards Galaxy S24 Ultra. Plus, get double the storage on us<sup>Ω</sup> and up to 30% off Galaxy Watch Ultra with purchase.</p>
                        <button className="buy">Buy now</button>
                    </div>
                    <img className="hero_img" src={hero_img2} alt="hero_img" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_left_content">
                        <p className="hero_text">Save up to $1,400</p>
                        <h3 className="hero_title">Our brightest idea</h3>
                        <p className="descrip">Save $1,400 off a 85 Class Samsung Neo QLED 4K QN85D and exprience the brightness of Quantum Matrix with Mini LEDs.Enjoy Savings during Samsung Week to celebrate our 555<sup>th</sup> anniversary</p>
                        <button className="buy">Shop now</button>
                    </div>
                    <img className="hero_img" src={hero_model} alt="hero_img" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_left_content">
                        <p className="hero_text">Save up to $1,050+</p>
                        <h3 className="hero_title">Epic savings, your way</h3>
                        <p className="descrip">Get to $750 instant trade-in<sup>θ</sup> or up to $350 without trade-in<sup>B</sup> towards Galaxy S24 Ultra. Plus, get double the storage on us<sup>Ω</sup> and up to 30% off Galaxy Watch Ultra with purchase.</p>
                        <button className="buy">Buy now</button>
                    </div>
                    <img className="hero_img" src={hero_dr} alt="hero_img" />
                </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default Hero