import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="nav">
                <div className="nav-logo">
                    <img src="https://www.dizpot.com/wp-content/uploads/2018/05/logo-1.svg" />
                </div>
                <div className="nav-items">
                    <a>ABOUT</a>
                    <a>PROJECTS</a>
                    <a>CONTACT</a>
                    {/* <a id="resume">RESUME</a> */}
                </div>
            </div>
            <div className="hero-info">
                <div className="socials">
                    <a><i id="social-icon" class="fa-brands fa-linkedin"></i></a>
                    <a><i id="social-icon" class="fa-brands fa-github"></i></a>
                </div>
                <div className="fullname">
                    <p>LOGAN VEIK</p>
                </div>
                <div className="role">Fullstack Software Developer</div>
            </div>
        </div>
    )
}

export default Hero;