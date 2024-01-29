import React from 'react';
import Link from 'next/link';

import ProjectSection from './ProjectSection';

import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import Logo from "../../public/images/logo/logo-light.svg";
import LogoLight from "../../public/images/logo/logo-dark.svg";

const Project = () => {
    return (
        <div className="index-six">
            <Header 
                headerLogo={Logo}
                headerLogoLight={LogoLight}
            />

            <main className="ms-main home-six list">
                <div className="banner-area-2">
                    <div className="video-bg-container">
                        <video autoPlay loop muted width="10000">
                            <source src="/videos/Whisper.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="ms-tt-wrap">
                        <ul className="ms-tt">
                            <li className="ms-tt__text">Portfolio <span>List Style</span> by Most Theme Portfolio <span>List Style</span> by Most Theme&nbsp;</li>
                            <li className="ms-tt__text">Portfolio <span>List Style</span> by Most Theme Portfolio <span>List Style</span> by Most Theme&nbsp;</li>
                            <li className="ms-tt__text">Portfolio <span>List Style</span> by Most Theme Portfolio <span>List Style</span> by Most Theme&nbsp;</li>
                            <li className="ms-tt__text">Portfolio <span>List Style</span> by Most Theme Portfolio <span>List Style</span> by Most Theme&nbsp;</li>
                            <li className="ms-tt__text">Portfolio <span>List Style</span> by Most Theme Portfolio <span>List Style</span> by Most Theme&nbsp;</li>
                            <li className="ms-tt__text">Portfolio <span>List Style</span> by Most Theme Portfolio <span>List Style</span> by Most Theme&nbsp;</li>
                            <li className="ms-tt__text">Portfolio <span>List Style</span> by Most Theme Portfolio <span>List Style</span> by Most Theme&nbsp;</li>
                            <li className="ms-tt__text">Portfolio <span>List Style</span> by Most Theme Portfolio <span>List Style</span> by Most Theme&nbsp;</li>
                        </ul>
                    </div>
                </div>

                <ProjectSection />
                
            </main>

            <Footer /> 
                    
        </div>
    );
}

export default Project;
