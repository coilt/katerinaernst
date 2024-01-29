import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';

import icon1 from "../../public/images/services/icon/code-1.svg";
import icon2 from "../../public/images/services/icon/code-2.svg";
import icon3 from "../../public/images/services/icon/code-3.svg";
import icon4 from "../../public/images/services/icon/code-4.svg";
import icon5 from "../../public/images/services/icon/code-5.svg";
import icon6 from "../../public/images/services/icon/code-6.svg";

const Services = () => {
    return (
        <>
            <HeaderTwo />

            <main className="ms-main">
                <div className="ms-page-content">
                    <section class="ms-hero services">
                        <div class="ms-parallax jarallax-img" data-speed="0.7" data-type="scroll">
                            <div class="ms-hc">
                                <div class="ms-hc--inner">
                                    <h1 class="ms-hero-title">Services</h1>
                                    <p class="ms-hero-subtitle">Distinctively revolutionize<br/> unique deliverables.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="services-area-2 services">
                        <div class="container">
                            <div class="services-area-inner">
                                <div class="services-bottom">
                                    <div class="services-item">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto one">
                                                        <Image src={icon1} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>Development</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto two">
                                                        <Image src={icon2} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>UI/UX Designer</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto three">
                                                        <Image src={icon4} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>Graphics Designer</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto four">
                                                        <Image src={icon3} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>Motion Graphic</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto five">
                                                        <Image src={icon5} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>Photography</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto six">
                                                        <Image src={icon6} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>Videography</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto one">
                                                        <Image src={icon1} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>Development</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto two">
                                                        <Image src={icon3} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>UI/UX Designer</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 text-center">
                                                <div class="ms-sb img-top">
                                                    <div class="ms-sb--img boxed margin-x-auto three">
                                                        <Image src={icon5} class="attachment-full size-full" alt="image" />
                                                    </div>
                                                    <div class="ms-sb--inner">
                                                        <h3 class="ms-sb--title">
                                                            <span>Graphics Designer</span>
                                                        </h3>
                                                        <p class="ms-sb--text">Create a platform with the best and coolest
                                                            quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Services;
