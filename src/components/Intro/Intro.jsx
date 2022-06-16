import React from 'react';
import './intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import InstaGram from '../../img/instagram.png'
import Victor1 from '../../img/Vector1.png'
import Victor2 from '../../img/Vector2.png'
import crown from '../../img/crown.png'
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import hasan from "../../img/hasan.png"
import Thumbup from '../../img/thumbup.png'


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Md Hasan Ali</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam illo, velit magnam dolore veritatis exercitationem porro! Maxime, maiores ratione?</span>
                    <button className="i-button button">
                        Hire Me
                    </button>
                    <div className="i-icons">
                        <img src={Github} alt="" />
                        <img src={Linkedin} alt="" />
                        <img src={InstaGram} alt="" />
                    </div>
                </div>

            </div>
            <div className="i-right">
                <img src={Victor1} alt="" />
                <img src={Victor2} alt="" />
                <img src={hasan} alt="" />
                <div style={{ top: "-4%", left: "65%" }} className="floating">
                    <Floatingdiv image={crown} text1="Web" text2="Developer" />
                </div>
                <div style={{ left: "0", top: "18rem" }}>
                    <Floatingdiv image={Thumbup} text1="Best Design" text2="Awards" />
                </div>
                {/* blur */}
                <div className="blur" style={{ background: "rgb(238, 210 , 258)" }}>
                    <div className="blur" style={{
                        background: "#c1f5ff",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-25rem"
                    }} >

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;