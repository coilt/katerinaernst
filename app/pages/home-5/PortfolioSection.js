import React from 'react';
import Link from 'next/link';

import SinglePortfolio from '../../src/components/Portfolio/';

import projects from '../../src/data/Projects.json';

const HomeFivePortfolio = () => {
    return (
        <>
            <div className="portfolio-area-2">
                <div className="container">
                    <div className="portfolio-area-inner">
                        <h2 className="heading-title text-center">Our Awesome Portfolio</h2>
                        <div className="portfolio-items">
                            <div className="portfolio_wrap">
                                <div className="portfolio-feed ms-p--d row">
                                    <span className="load_filter">
                                        <svg className="load-filter-icon" width="100%" height="100%" viewBox="0 0 100 100"
                                            preserveAspectRatio="xMidYMid">
                                            <circle cx="50" cy="50" r="30" stroke-width="6" stroke-linecap="round"
                                                fill="none">
                                                <animateTransform attributeName="transform" type="rotate"
                                                    repeatCount="indefinite" dur="1s"
                                                    values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1">
                                                </animateTransform>
                                                <animate attributeName="stroke-dasharray" repeatCount="indefinite"
                                                    dur="1s"
                                                    values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
                                                    keyTimes="0;0.5;1"></animate>
                                            </circle>
                                        </svg>
                                    </span>
                                    <div className="grid-sizer col-lg-4 col-md-6"></div>
                                    {projects.map((project, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">
                                                <SinglePortfolio 
                                                    itemClass="fadein zoom center h-align-middle grid-item-p"
                                                    imgClass="ms-p-img media-wrapper media-wrapper--16:9"
                                                    contentClass="ms-p-content text-center"
                                                    slug={project.slug}
                                                    itemImg={project.image}
                                                    Title={project.title}
                                                    Category={project.category}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="btn-wrap text-center">
                                    <Link className="btn btn-circle btn--md" role="button" href="/project/project-grid">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-btn--label">
                                            <div className="ms-btn__text">Take A Look</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeFivePortfolio;
