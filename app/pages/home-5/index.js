import React from 'react';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import HomeFiveBanner from './BannerSection';
import HomeFiveParallax from './ParallaxSection';
import HomeFivePortfolio from './PortfolioSection';
import HomeFiveService from './ServiceSection';
import HomeFiveClient from './ClientSection';

const HomeFive = () => {
    return (
        <>
            <HeaderTwo />
            
            <main className="ms-main">
                <div className="ms-page-content">
                    <HomeFiveBanner />
                    <HomeFiveParallax />
                    <HomeFiveService />
                    <HomeFivePortfolio />
                    <HomeFiveClient />
                </div>
            </main>

            <Footer /> 
        </>
    );
}

export default HomeFive;
