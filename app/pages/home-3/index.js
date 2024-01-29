import React from 'react';

import HomeBanner from './BannerSection';
import HomeService from './ServiceSection';
import HomePortfolio from './PortfolioSection';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';

const HomeThree = () => {
    return (
        <>
            <HeaderTwo />
            
            <main className="ms-main">
                <div className="ms-page-content">
                    <HomeBanner />
                    <HomePortfolio />
                    <HomeService />
                </div>
            </main>

            <Footer /> 
        </>
    );
}

export default HomeThree;
