import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import portfolioBanner from "../../public/images/portfolio/most-hero.png";

const HomeBanner = () => {
    return (
        <>
            <div className="ms-page-content portfolio-banner">
                <div className="container">
                    <div className="portfolio-banner-inner">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="banner-content">
                                    <h2 className="heading-title">Hi, i'm</h2>
                                    <h2 className="sub-title">Mad Sparrow</h2>
                                    <h2 className="title">Creative &nbsp;&nbsp;&nbsp;&nbsp;Designer.</h2>
                                    <p className="desc">Since creative designers often interact with creative <br/> teams,
                                        managers and clients, they need strong <br/> communication skills.</p>
                                    <div className="ms-social-icon">
                                        <div className="ms-s-w">
                                            <a className="ms-s-i mono s-it" href="#"><i
                                                    className="socicon-instagram"><span>instagram</span></i></a>
                                            <a className="ms-s-i mono s-it" href="#"><i
                                                    className="socicon-pinterest"><span>pinterest</span></i></a>
                                            <a className="ms-s-i mono s-it" href=""><i
                                                    className="socicon-500px"><span>500px</span></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="banner-hero">
                                    <Image src={portfolioBanner} alt="Portfolio Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeBanner;
