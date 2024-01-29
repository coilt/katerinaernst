import React from 'react';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import HomePortfolio from './PortfolioSection';

const HomeTwo = () => {
    return (
        <>
            <HeaderTwo />
            
            <main className="ms-main">
                <div className="ms-page-content">
                    <HomePortfolio />
                </div>
            </main>

            <Footer /> 
        </>
    );
}

export default HomeTwo;
