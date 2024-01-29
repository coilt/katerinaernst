import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HomeSixProject from './ProjectSection';

import icon1 from "../../public/images/services/icon/code-1.svg";
import icon2 from "../../public/images/services/icon/code-2.svg";
import icon3 from "../../public/images/services/icon/code-3.svg";
import icon4 from "../../public/images/services/icon/code-4.svg";
import icon5 from "../../public/images/services/icon/code-5.svg";
import icon6 from "../../public/images/services/icon/code-6.svg";

const HomeSixService = () => {
    return (
        <>
            <div className="services-area home-six">
                <div className="container">
                    <h2 className="sub-title">Services</h2>
                    <h2 className="heading-title">The Service <br/> We Provide For You</h2>
                    <div className="services-item">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="ms-sb img-top">
                                    <div className="ms-sb--img boxed one">
                                        <Image src={icon1} alt="image" />
                                    </div>
                                    <div className="ms-sb--inner">
                                        <h3 className="ms-sb--title">
                                            <span>Development</span>
                                        </h3>
                                        <p className="ms-sb--text">Create a platform with the best and coolest
                                            quality from us.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="ms-sb img-top">
                                    <div className="ms-sb--img boxed two">
                                        <Image src={icon2} alt="image" />
                                    </div>
                                    <div className="ms-sb--inner">
                                        <h3 className="ms-sb--title">
                                            <span>UI/UX Designer</span>
                                        </h3>
                                        <p className="ms-sb--text">Create a platform with the best and coolest quality from us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="ms-sb img-top">
                                    <div className="ms-sb--img boxed three">
                                        <Image src={icon4} alt="image" />
                                    </div>
                                    <div className="ms-sb--inner">
                                        <h3 className="ms-sb--title">
                                            <span>Graphics Designer</span>
                                        </h3>
                                        <p className="ms-sb--text">Create a platform with the best and coolest quality from us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="ms-sb img-top">
                                    <div className="ms-sb--img boxed four">
                                        <Image src={icon3} alt="image" />
                                    </div>
                                    <div className="ms-sb--inner">
                                        <h3 className="ms-sb--title">
                                            <span>Motion Graphic</span>
                                        </h3>
                                        <p className="ms-sb--text">Create a platform with the best and coolest quality from us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="ms-sb img-top">
                                    <div className="ms-sb--img boxed five">
                                        <Image src={icon5} alt="image" />
                                    </div>
                                    <div className="ms-sb--inner">
                                        <h3 className="ms-sb--title">
                                            <span>Photography</span>
                                        </h3>
                                        <p className="ms-sb--text">Create a platform with the best and coolest quality from us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="ms-sb img-top">
                                    <div className="ms-sb--img boxed six">
                                        <Image src={icon6} alt="image" />
                                    </div>
                                    <div className="ms-sb--inner">
                                        <h3 className="ms-sb--title">
                                            <span>Videography</span>
                                        </h3>
                                        <p className="ms-sb--text">Create a platform with the best and coolest quality from us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeSixProject />
            </div>
        </>
    );
}

export default HomeSixService;
