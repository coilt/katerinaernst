import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import ProjectMasonarySection from './ProjectMasonarySection';

const ProjectMasonary = () => {
    return (
        <>
            <HeaderTwo />

            <main className="ms-main">
                <div className="ms-page-content">
                    <div className="container">
                        <section className="ms-hero project">
                            <div className="ms-parallax jarallax-img" data-speed="0.7" data-type="scale">
                                <div className="ms-hc">
                                    <div className="ms-hc--inner">
                                        <h1 className="ms-hero-title">Portfolio </h1>
                                        <p className="ms-hero-subtitle">Masonry Style</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <ProjectMasonarySection />
            </main>

            <Footer /> 
                    
        </>
    );
}

export default ProjectMasonary;
