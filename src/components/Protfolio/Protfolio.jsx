import React from 'react';
import './protfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import sidebar from '../../img/sidebar.png'
import hoc from '../../img/hoc.png'
import ecommerce from '../../img/ecommerce.png'
import musicApp from '../../img/musicapp.png'

const Protfolio = () => {
    return (
        <div>
            {/* Headding */}
            <span>Recent Projects</span>
            <span>Protfolio</span>

            {/* Slide */}

            <Swiper>
                <SwiperSlide>
                    <img src={sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Protfolio;