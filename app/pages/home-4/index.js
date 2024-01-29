import React from 'react';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import HomeCV from './CVSection';

const HomeFour = () => {
    return (
        <>
            <HeaderTwo />
            
            <main className="ms-main">
                <div className="ms-page-content">
                    <HomeCV />
                </div>
            </main>

            <Footer /> 
        </>
    );
}

export default HomeFour;
