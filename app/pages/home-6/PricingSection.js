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

const HomeSixPricing = () => {
    return (
        <div className="pricing-area-2">
            <div className="container">
                <h2 className="sub-title">Pricing</h2>
                <h2 className="heading-title">You Can See <br/> Our Loyal Prices</h2>
                <div className="pricing-inner">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="ms-pt-block">
                                <div className="ms-pt--price"> </div>
                                <div className="ms-pt--header top">
                                    <h4 className="ms-pt--title"> Free </h4>
                                    <span className="currency currency--before">$</span>
                                    <span className="price">0</span>
                                    <span className="period">/ Month</span>
                                </div>
                                <div className="ms-pt--content">
                                    <ul>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Credibly iterate distributed systems. </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Dynamically revolutionize distributed . </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Holisticly pontificate. </span>
                                        </li>
                                        <li className="no-active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                            <span> Energistically evolve. </span>
                                        </li>
                                        <li className="no-active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                            <span> Energistically leverage other's covalent </span>
                                        </li>
                                        <li className="no-active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                            <span> Quickly benchmark open-source . </span>
                                        </li>
                                        <li className="no-active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                            <span> Globally implement. </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ms-pt--footer">
                                    <a className="btn btn--md btn--primary btn--full-width" role="button" href="#">
                                        <div className="ms-btn__text">
                                            <span className="text--main">Sign Up</span>
                                        </div>
                                        <span className="ms-btn--ripple"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ms-pt-block">
                                <div className="ms-pt--price"></div>
                                <div className="ms-pt--header top">
                                    <h4 className="ms-pt--title"> Pro </h4>
                                    <span className="currency currency--before">$</span>
                                    <span className="price">59</span>
                                    <span className="period">/ Month</span>
                                </div>
                                <div className="ms-pt--content">
                                    <ul>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Credibly iterate distributed systems. </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Dynamically revolutionize distributed . </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Holisticly pontificate. </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Energistically evolve. </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Energistically leverage other's covalent </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Quickly benchmark open-source . </span>
                                        </li>
                                        <li className="no-active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                            <span> Globally implement. </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ms-pt--footer">
                                    <a className="btn btn--md btn--primary btn--full-width" role="button" href="#">
                                        <div className="ms-btn__text">
                                            <span className="text--main">Sign Up</span>
                                        </div>
                                        <span className="ms-btn--ripple"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ms-pt-block">
                                <div className="ms-pt--price"> </div>
                                <div className="ms-pt--header top">
                                    <h4 className="ms-pt--title"> Enterprise </h4>
                                    <span className="currency currency--before">$</span>
                                    <span className="price">120</span>
                                    <span className="period">/ Month</span>
                                </div>
                                <div className="ms-pt--content">
                                    <ul>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Credibly iterate distributed systems. </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Dynamically revolutionize distributed . </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Holisticly pontificate. </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Energistically evolve. </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Energistically leverage other's covalent </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Quickly benchmark open-source . </span>
                                        </li>
                                        <li className="active">
                                            <i className="icon-check">
                                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </i>
                                            <span> Globally implement. </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ms-pt--footer">
                                    <a className="btn btn--md btn--primary btn--full-width" role="button" href="#">
                                        <div className="ms-btn__text">
                                            <span className="text--main">Sign Up</span>
                                        </div>
                                        <span className="ms-btn--ripple"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSixPricing;
