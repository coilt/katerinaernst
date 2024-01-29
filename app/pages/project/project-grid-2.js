import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import ProjectGridSectionTwo from './ProjectGridSectionTwo';

import Logo from "../../public/images/logo/logo-light.svg";

const ProjectGrid = () => {
    return (
        <div className="projects1">
            <Header 
                headerLogo={Logo}
            />

            <div class="breadcrumb-area breadcrumbs-2 breadcrumb-bg bg_image">
                <div class="container">
                    <div class="row align-items-end banner">
                        <div class="col-lg-8 breadcrumb-1">
                            <h2 class="heading-title">LOOK, CHOOSE, <br/> ADJUST, LAUNCH</h2>
                        </div>
                        <div class="col-lg-4">
                            <p class="desc">Take a look at the theme provided. Choose the suitable layout. Customize it. Use the selected style and launch the project.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <main className="ms-main">
                <ProjectGridSectionTwo />
            </main>

            <Footer /> 
                    
        </div>
    );
}

export default ProjectGrid;
