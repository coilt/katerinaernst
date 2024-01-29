import React from 'react';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import HomeSixBanner from './BannerSection';
import HomeSixService from './ServiceSection';
import HomeSixTestimonial from './TestimonialSection';
import HomeSixBlog from './BlogSection';
import HomeSixPricing from './PricingSection';
import HomeSixPartner from './PartnerSection';

const HomeSix = () => {
    return (
        <>
            <HeaderTwo />
            
            <main className="ms-main home-six">
                <HomeSixBanner />
                <HomeSixService />
                <HomeSixTestimonial />
                <HomeSixBlog />
                <HomeSixPricing />
                <HomeSixPartner />
            </main>

            <Footer /> 
        </>
    );
}

export default HomeSix;
