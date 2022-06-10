import React from 'react';
import logo from '../../img/ljvlogo.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="nav">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-items">
                    <a>ABOUT</a>
                    <a>PROJECTS</a>
                    <a>CONTACT</a>
                    <a  id="resume" href="https://drive.google.com/file/d/1tiXCMvwznPjx71Ui0AOhlyu4aq9BEkrNFeg01pOKaHw/view" target="_blank">Resume</a>
                </div>
            </div>
            <div className="hero-info">
                <div className="socials">
                    <a href="https://www.linkedin.com/in/logan-veik-018187196/" target="_blank" rel="noreferrer"><i id="social-icon" class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/loganveik" target="_blank" rel="noreferrer"><i id="social-icon" class="fa-brands fa-github"></i></a>
                </div>
                <div className="fullname">
                    <p>LOGAN VEIK</p>
                </div>
                <div className="role">Frontend Software Developer</div>
            </div>
        </div>
    )
}

export default Hero;