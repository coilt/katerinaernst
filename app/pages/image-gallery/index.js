import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Masonry from 'react-masonry-css';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';

import blogImg1 from "../../public/images/blog/blog-1.jpg";
import blogImg2 from "../../public/images/blog/blog-2.jpg";
import blogImg3 from "../../public/images/blog/blog-3.jpg";
import blogImg4 from "../../public/images/blog/blog-4.jpg";
import blogImg5 from "../../public/images/blog/blog-5.jpg";
import blogImg6 from "../../public/images/blog/blog-6.jpg";
import blogImg7 from "../../public/images/blog/blog-7.jpg";
import blogImg8 from "../../public/images/blog/blog-8.jpg";
import blogImg9 from "../../public/images/blog/blog-9.jpg";
import blogImg10 from "../../public/images/blog/blog-10.jpg";

import portfolioImg1 from "../../public/images/portfolio/01.jpg";
import portfolioImg2 from "../../public/images/portfolio/02.jpg";
import portfolioImg3 from "../../public/images/portfolio/03.jpg";
import portfolioImg4 from "../../public/images/portfolio/04.jpg";
import portfolioImg5 from "../../public/images/portfolio/05.jpg";
import portfolioImg7 from "../../public/images/portfolio/07.png";
import portfolioImg6 from "../../public/images/portfolio/06.jpg";
import portfolioImg8 from "../../public/images/portfolio/08.jpg";
import portfolioImg9 from "../../public/images/portfolio/09.jpg";

import cvImg from "../../public/images/portfolio/personal-cv.jpg";

const ImageGallery = () => {
    const breakpointColumnsObj = {
      default: 3,
      1200: 3,
      992: 2,
      576: 1
    };

    return (
        <>
            <HeaderTwo />

            <main className="ms-main">
                <div className="ms-page-content">
                    <div className="team-area one gallery">
                        <div className="container">
                            <h4 className="heading-title">Gallery Widget</h4>
                            <h1 className="title">Simple Grid 3 col. <br/> Hover Style #1</h1>
                            <div className="ms-content--portfolio">
                                <div className="row grid grid-content blockgallery h_s1">
                                    <div className="grid-sizer col-xs-12 col-lg-4 col-md-3"></div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0" title="">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={blogImg1} alt="full-shot-travel-concept-with-landmarks" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={blogImg2} alt="dee-copper-and-wild-XJBC_7VY37k-unsplash" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0" title="">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={blogImg3} alt="charming-relaxed-gentle-young-woman" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={blogImg4} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0" title="">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={blogImg5} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0" title="">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={blogImg6} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                                            </figure>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-area one two gallery gallery1">
                        <div className="container">
                            <h4 className="heading-title">Gallery Widget</h4>
                            <h1 className="title">Justified <br/>
                                Hover Style #2</h1>
                            <div className="ms-content--portfolio" id="237a777">
                                <div className="row grid grid-content blockgallery">
                                    <div className="grid-sizer col-xs-12 col-lg-4 col-md-3"></div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4 one">
                                        <a className="mfp-img" href="#0" title="">
                                            <figure className="media-wrapper one media-wrapper--4:3">
                                                <Image decoding="async" src={cvImg}alt="full-shot-travel-concept-with-landmarks" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={blogImg1} alt="dee-copper-and-wild-XJBC_7VY37k-unsplash" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0" title="">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={blogImg2} alt="charming-relaxed-gentle-young-woman" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={portfolioImg9} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4 one">
                                        <a className="mfp-img" href="#0" title="">
                                            <figure className="media-wrapper one media-wrapper--4:3">
                                                <Image decoding="async" src={portfolioImg8} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid-item col-6 col-lg-4 col-md-4">
                                        <a className="mfp-img" href="#0" title="">
                                            <figure className="media-wrapper media-wrapper--4:3">
                                                <Image decoding="async" src={portfolioImg7} alt="sebastian-banasiewcz-CMs6ZGOdyho-unsplash" />
                                            </figure>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ms-portfolio-filter-area  project gallery">
                        <div className="container">
                            <h4 className="heading-title">Gallery Widget</h4>
                            <h1 className="title">Masonry <br/>
                                Hover Style #3</h1>
                            <div className="portfolio_wrap">
                                <div className="filter grid-masonary ms-masonry-gallery portfolio-feed">
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        <div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <a href="#0" aria-label="Freezing Birthday">
                                                        <figure className="ms-p-img">
                                                            <Image decoding="async" src={portfolioImg8} alt="Freezing Birthday" />
                                                        </figure>
                                                        <div className="ms-p-content">
                                                            <div className="mfp-icon">
                                                                <i aria-hidden="true" className="fas fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="fadein zoom center h-align-middle grid-item-p element-item transition design" data-category="transition">
                                                <div className="item--inner">
                                                    <a href="#0" aria-label="Freezing Birthday">
                                                        <figure className="ms-p-img">
                                                            <Image decoding="async" src={portfolioImg2} alt="Freezing Birthday" />
                                                        </figure>
                                                        <div className="ms-p-content">
                                                            <div className="mfp-icon">
                                                                <i aria-hidden="true" className="fas fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="fadein zoom center h-align-middle grid-item-p element-item transition design" data-category="transition">
                                                <div className="item--inner">
                                                    <a href="#0" aria-label="Freezing Birthday">
                                                        <figure className="ms-p-img">
                                                            <Image decoding="async" src={portfolioImg6} alt="Freezing Birthday" />
                                                        </figure>
                                                        <div className="ms-p-content">
                                                            <div className="mfp-icon">
                                                                <i aria-hidden="true" className="fas fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="fadein zoom center h-align-middle grid-item-p element-item transition style" data-category="transition">
                                                <div className="item--inner">
                                                    <a href="#0" aria-label="Freezing Birthday">
                                                        <figure className="ms-p-img">
                                                            <Image decoding="async" src={portfolioImg4} alt="Freezing Birthday" />
                                                        </figure>
                                                        <div className="ms-p-content">
                                                            <div className="mfp-icon">
                                                                <i aria-hidden="true" className="fas fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="fadein zoom center h-align-middle grid-item-p element-item transition creative photo style" data-category="transition">
                                                <div className="item--inner">
                                                    <a href="#0" aria-label="Freezing Birthday">
                                                        <figure className="ms-p-img">
                                                            <Image decoding="async" src={blogImg4} alt="Freezing Birthday" />
                                                        </figure>
                                                        <div className="ms-p-content">
                                                            <div className="mfp-icon">
                                                                <i aria-hidden="true" className="fas fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="fadein zoom center h-align-middle grid-item-p element-item transition photo" data-category="transition">
                                                <div className="item--inner">
                                                    <a href="#0" aria-label="Freezing Birthday">
                                                        <figure className="ms-p-img">
                                                            <Image decoding="async" src={portfolioImg5} alt="Freezing Birthday" />
                                                        </figure>
                                                        <div className="ms-p-content">
                                                            <div className="mfp-icon">
                                                                <i aria-hidden="true" className="fas fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="fadein zoom center h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <a href="#0" aria-label="Freezing Birthday">
                                                        <figure className="ms-p-img">
                                                            <Image decoding="async" src={portfolioImg3} alt="Freezing Birthday" />
                                                        </figure>
                                                        <div className="ms-p-content">
                                                            <div className="mfp-icon">
                                                                <i aria-hidden="true" className="fas fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="fadein zoom center h-align-middle grid-item-p element-item transition photo" data-category="transition">
                                                <div className="item--inner">
                                                    <a href="#0" aria-label="Freezing Birthday">
                                                        <figure className="ms-p-img">
                                                            <Image decoding="async" src={portfolioImg1} alt="Freezing Birthday" />
                                                        </figure>
                                                        <div className="ms-p-content">
                                                            <div className="mfp-icon">
                                                                <i aria-hidden="true" className="fas fa-eye"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Masonry>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer /> 
                    
        </>
    );
}

export default ImageGallery;
