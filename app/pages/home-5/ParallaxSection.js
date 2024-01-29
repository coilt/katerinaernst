import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SinglePortfolio from '../../src/components/Portfolio';

import portfolioImg1 from "../../public/images/portfolio/01.jpg";
import portfolioImg2 from "../../public/images/portfolio/02.jpg";
import portfolioImg3 from "../../public/images/portfolio/03.jpg";
import portfolioImg4 from "../../public/images/portfolio/04.jpg";
import portfolioImg5 from "../../public/images/portfolio/05.jpg";
import portfolioImg6 from "../../public/images/portfolio/06.jpg";
import portfolioImg7 from "../../public/images/portfolio/07.png";
import portfolioImg8 from "../../public/images/portfolio/08.jpg";
import portfolioImg9 from "../../public/images/portfolio/09.jpg";

const HomeFiveParallax = () => {
    return (
        <section className="ms-hero">
            <div className="ms-parallax jarallax-img" data-speed="0.7" data-type="scroll"></div>
        </section>
    );
}

export default HomeFiveParallax;
