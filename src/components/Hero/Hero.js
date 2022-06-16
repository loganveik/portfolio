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
                    <a id="about-item">ABOUT</a>
                    <a id="projects-item">PROJECTS</a>
                    <a id="contact-item">CONTACT</a>
                    <a id="resume" href="https://drive.google.com/file/d/1tiXCMvwznPjx71Ui0AOhlyu4aq9BEkrNFeg01pOKaHw/view" target="_blank">Resume</a>
                </div>
                <div className="nav-items-mobile">
                    <p id="close-mobile" onClick={() => {
                        document.querySelector(".nav-menu").classList.toggle("active");
                        document.querySelector(".nav-items-mobile").classList.toggle("active");
                    }}>X</p>
                    <a id="about-mobile">ABOUT</a>
                    <a id="projects-mobile">PROJECTS</a>
                    <a id="contact-mobile">CONTACT</a>
                    <a id="resume-mobile" href="https://drive.google.com/file/d/1tiXCMvwznPjx71Ui0AOhlyu4aq9BEkrNFeg01pOKaHw/view" target="_blank">Resume</a>
                </div>
                <button className="nav-menu" onClick={() => {
                    document.querySelector(".nav-menu").classList.toggle("active");
                    document.querySelector(".nav-items-mobile").classList.toggle("active");
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="hero-info">
                <div className="socials">
                    <a href="https://www.linkedin.com/in/logan-veik-018187196/" target="_blank" rel="noreferrer"><i id="social-icon" className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/loganveik" target="_blank" rel="noreferrer"><i id="social-icon" className="fa-brands fa-github"></i></a>
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