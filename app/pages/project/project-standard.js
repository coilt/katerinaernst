import React from 'react';
import Link from 'next/link';

import ProjectStandardSection from './ProjectStandardSection';

import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import Logo from "../../public/images/logo/logo-light.svg";

const ProjectStandard = () => {
    return (
        <div className="projects1">
            <Header 
                headerLogo={Logo}
            />

            <div className="breadcrumb-area breadcrumbs-2 breadcrumb-bg bg_image">
                <div className="container">
                    <div className="row align-items-end banner">
                        <div className="col-lg-8 breadcrumb-1">
                            <h2 className="heading-title">LOOK, CHOOSE, <br/> ADJUST, LAUNCH</h2>
                        </div>
                        <div className="col-lg-4">
                            <p className="desc">Take a look at the theme provided. Choose the suitable layout. Customize it. Use the selected style and launch the project.</p>
                        </div>
                    </div>
                </div>
            </div>

            <main className="ms-main">
                <ProjectStandardSection />
            </main>

            <Footer /> 
                    
        </div>
    );
}

export default ProjectStandard;
