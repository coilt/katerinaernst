import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import portfolioImg1 from "../../public/images/portfolio/01.jpg";
import portfolioImg2 from "../../public/images/portfolio/02.jpg";
import portfolioImg3 from "../../public/images/portfolio/03.jpg";
import portfolioImg4 from "../../public/images/portfolio/04.jpg";
import portfolioImg5 from "../../public/images/portfolio/08.jpg";

const HomeSixProject = () => {
    return (
        
        <div className="services-bottom">
            <div className="container">
                <h2 className="sub-title">Projects</h2>
                <h2 className="heading-title">Some of the Projects <br/> We Have Done Well</h2>
                <div className="project-item">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="portfolio_wrap" id="a645bf8">
                                <div className="portfolio-feed ms-p--d row">
                                    <span className="load_filter">
                                        <svg className="load-filter-icon" width="100%" height="100%"
                                            viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                            <circle cx="50" cy="50" r="30" stroke-width="6" stroke-linecap="round"
                                                fill="none">
                                                <animateTransform attributeName="transform" type="rotate"
                                                    repeatCount="indefinite" dur="1s"
                                                    values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1">
                                                </animateTransform>
                                                <animate attributeName="stroke-dasharray" repeatCount="indefinite"
                                                    dur="1s"
                                                    values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
                                                    keyTimes="0;0.5;1">
                                                </animate>
                                            </circle>
                                        </svg>
                                    </span>
                                    <div className="grid-sizer col-md-12"></div>
                                    <div className="overlay zoom left h-align-top grid-item-p col-md-12 post-48 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-style">
                                        <div className="item--inner">
                                            <Link href="project/justice-robot" aria-label="Justice Robot">
                                                <figure className="ms-p-img media-wrapper media-wrapper--1:1">
                                                    <Image decoding="async" src={portfolioImg5} alt="Justice Robot" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Justice Robot</h3>
                                                    <h4 className="ms-p-cat">style</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio_wrap" id="7f1071b">
                                <div className="portfolio-feed ms-p--d row">
                                    <span className="load_filter">
                                        <svg className="load-filter-icon" width="100%" height="100%"
                                            viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                            <circle cx="50" cy="50" r="30" stroke-width="6" stroke-linecap="round"
                                                fill="none">
                                                <animateTransform attributeName="transform" type="rotate"
                                                    repeatCount="indefinite" dur="1s"
                                                    values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1">
                                                </animateTransform>
                                                <animate attributeName="stroke-dasharray" repeatCount="indefinite"
                                                    dur="1s"
                                                    values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
                                                    keyTimes="0;0.5;1">
                                                </animate>
                                            </circle>
                                        </svg>
                                    </span>
                                    <div className="grid-sizer col-md-6"></div>
                                    <div className="below zoom left grid-item-p col-md-6 post-56 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-creative">
                                        <div className="item--inner">
                                            <Link href="project/freezing-birthday" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img media-wrapper media-wrapper--4:3">
                                                    <Image decoding="async" src={portfolioImg1} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Freezing Birthday</h3>
                                                    <h4 className="ms-p-cat">creative</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="below zoom left grid-item-p col-md-6 post-55 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-design">
                                        <div className="item--inner">
                                            <Link href="project/stream-shop" aria-label="Stream Shop">
                                                <figure className="ms-p-img media-wrapper media-wrapper--4:3">
                                                    <Image decoding="async" src={portfolioImg2} alt="Stream Shop" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Stream Shop</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="below zoom left grid-item-p col-md-6 post-54 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-photo">
                                        <div className="item--inner">
                                            <Link href="project/random-risk" aria-label="Random Risk">
                                                <figure className="ms-p-img media-wrapper media-wrapper--4:3">
                                                    <Image decoding="async" src={portfolioImg3} alt="Random Risk" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Random Risk</h3>
                                                    <h4 className="ms-p-cat">photo</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="below zoom left grid-item-p col-md-6 post-53 portfolios type-portfolios status-publish has-post-thumbnail hentry portfolios_categories-style">
                                        <div className="item--inner">
                                            <Link href="project/share-spark" aria-label="Share Spark">
                                                <figure className="ms-p-img media-wrapper media-wrapper--4:3">
                                                    <Image decoding="async" src={portfolioImg4} alt="Share Spark" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Share Spark</h3>
                                                    <h4 className="ms-p-cat">style</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSixProject;
