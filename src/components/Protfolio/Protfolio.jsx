import React from 'react';
import './protfolio.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
import sidebar from '../../img/sidebar.png'
import hoc from '../../img/hoc.png'
import musicApp from '../../img/musicapp.png'

const Protfolio = () => {
    return (
        <div className='protfolio-area'>
            <div className="container">
                <div className="section-title">
                    <h2>My Awesome Works</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, repellat!</p>
                </div>
                <div className="protfolio">
                    <div className="single-protfolio">
                        <img src={hoc} alt="" />
                    </div>
                    <div className="single-protfolio">
                        <img src={musicApp} alt="" />
                    </div>
                    <div className="single-protfolio">
                        <img src={sidebar} alt="" />
                    </div>
                    <div className="single-protfolio">
                        <img src={musicApp} alt="" />
                    </div>
                    <div className="single-protfolio">
                        <img src={sidebar} alt="" />
                    </div>
                    <div className="single-protfolio">
                        <img src={hoc} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;