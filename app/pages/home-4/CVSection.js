import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CVImg from "../../public/images/portfolio/personal-cv.jpg";
import clientImg1 from "../../public/images/clients/logo-partner-1.png";
import clientImg2 from "../../public/images/clients/logo-partner-2.png";
import clientImg3 from "../../public/images/clients/logo-partner-3.png";
import clientImg4 from "../../public/images/clients/logo-partner-4.png";
import clientImg5 from "../../public/images/clients/logo-partner-5.png";
import clientImg6 from "../../public/images/clients/logo-partner-6.png";
import clientImg7 from "../../public/images/clients/logo-partner-7.png";
import clientImg8 from "../../public/images/clients/logo-partner-8.png";
import clientImg9 from "../../public/images/clients/logo-partner-9.png";

import icon1 from "../../public/images/services/icon/code-1.svg";
import icon2 from "../../public/images/services/icon/code-2.svg";
import icon3 from "../../public/images/services/icon/code-3.svg";
import icon4 from "../../public/images/services/icon/code-4.svg";

const HomeCV = () => {
    return (
        <>
            <div className="container">
                <div className="personal-cv-area">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image-left-side">
                                <Image src={CVImg} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="right-side-content">
                                <h1 className="heading-title">Mad Sparrow</h1>
                                <p>

                                    <em>
                                        <span className="cate-color">34 years &nbsp;</span>
                                        <span> /</span>&nbsp; &nbsp;
                                        <span className="cate-color">London &nbsp;</span> &nbsp;
                                        <span>/</span>&nbsp; &nbsp;
                                        <span className="cate-color">Freelance</span>
                                    </em>
                                </p>
                                <p className="desc">Credibly e-enable standards compliant users rather than front-end
                                    solutions. Enthusiastically harness client-focused action items before corporate
                                    intellectual capital. Uniquely repurpose world-class infrastructures through
                                    client-centered collaboration and idea-sharing. Progressively mesh magnetic quality
                                    vectors before dynamic markets. Competently leverage existing leading-edge
                                    collaboration and idea-sharing with 2.0 total linkage.
                                </p>
                                <div className="services-area">
                                    <h2 className="services-title">My Services</h2>
                                    <div className="services-items">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="ms-sb img-top">
                                                    <div className="ms-sb--img default">
                                                        <Image src={icon1} className="attachment-full size-full" alt="icon" />
                                                    </div>
                                                    <div className="ms-sb--inner">
                                                        <h4 className="ms-sb--title">
                                                            <span>Development</span>
                                                        </h4>
                                                        <p className="ms-sb--text">Create a platform with the best and
                                                            coolest quality from us.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="ms-sb img-top">
                                                    <div className="ms-sb--img default">
                                                        <Image src={icon2} className="attachment-full size-full" alt="icon" />
                                                    </div>
                                                    <div className="ms-sb--inner">
                                                        <h4 className="ms-sb--title">
                                                            <span>UI/UX Designer</span>
                                                        </h4>
                                                        <p className="ms-sb--text">We provide UI/UX Design services, and of course with the best quality</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="ms-sb img-top">
                                                    <div className="ms-sb--img default">
                                                        <Image src={icon3} className="attachment-full size-full" alt="icon" />
                                                    </div>
                                                    <div className="ms-sb--inner">
                                                        <h4 className="ms-sb--title">
                                                            <span>SEO Optimization</span>
                                                        </h4>
                                                        <p className="ms-sb--text">Create a platform with the best and coolest quality from us.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="ms-sb img-top">
                                                    <div className="ms-sb--img default">
                                                        <Image src={icon4} className="attachment-full size-full" alt="icon" />
                                                    </div>
                                                    <div className="ms-sb--inner">
                                                        <h4 className="ms-sb--title">
                                                            <span>Consulting</span>
                                                        </h4>
                                                        <p className="ms-sb--text">We provide UI/UX Design services, and of course with the best quality</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-area">
                                    <h2 className="pricing-title">My Pricing</h2>
                                    <div className="pricing-inner">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 inner">
                                                <div className="ms-pt-block">
                                                    <div className="ms-pt--price">
                                                    </div>
                                                    <div className="ms-pt--header top">
                                                        <h4 className="ms-pt--title"> Basic </h4>
                                                        <span className="currency currency--before">$</span>
                                                        <span className="price">29</span>
                                                        <span className="period">/ Hour</span>
                                                    </div>
                                                    <div className="ms-pt--content">
                                                        <ul>
                                                            <li className="active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 24 24" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M20 6L9 17l-5-5"></path>
                                                                    </svg>
                                                                </i>
                                                                <span> Consulting </span>
                                                            </li>
                                                            <li className="active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 24 24" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M20 6L9 17l-5-5"></path>
                                                                    </svg>
                                                                </i>
                                                                <span> Development </span>
                                                            </li>
                                                            <li className="no-active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                                <span> Design </span>
                                                            </li>
                                                            <li className="no-active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                                <span> 24/7 Support </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ms-pt--footer">
                                                        <a className="btn btn--ba btn--primary" role="button" href="#">
                                                            <div className="ms-btn__text">
                                                                <span className="text--main">Choose Plan</span>
                                                            </div>
                                                            <span className="ms-btn--ripple"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 inner">
                                                <div className="ms-pt-block">
                                                    <div className="ms-pt--price">
                                                    </div>
                                                    <div className="ms-pt--header top">
                                                        <h4 className="ms-pt--title"> Advanced </h4>
                                                        <span className="currency currency--before">$</span>
                                                        <span className="price">39</span>
                                                        <span className="period">/ Hour</span>
                                                    </div>
                                                    <div className="ms-pt--content">
                                                        <ul>
                                                            <li className="active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 24 24" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M20 6L9 17l-5-5"></path>
                                                                    </svg>
                                                                </i>
                                                                <span> Consulting </span>
                                                            </li>
                                                            <li className="active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 24 24" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M20 6L9 17l-5-5"></path>
                                                                    </svg>
                                                                </i>
                                                                <span> Development </span>
                                                            </li>
                                                            <li className="no-active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                                <span> Design </span>
                                                            </li>
                                                            <li className="no-active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                                <span> 24/7 Support </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ms-pt--footer">
                                                        <a className="btn btn--ba btn--primary" role="button" href="#">
                                                            <div className="ms-btn__text">
                                                                <span className="text--main">Choose Plan</span>
                                                            </div>
                                                            <span className="ms-btn--ripple"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 inner">
                                                <div className="ms-pt-block">
                                                    <div className="ms-pt--price">
                                                    </div>
                                                    <div className="ms-pt--header top">
                                                        <h4 className="ms-pt--title"> Premium </h4>
                                                        <span className="currency currency--before">$</span>
                                                        <span className="price">99</span>
                                                        <span className="period">/ Hour</span>
                                                    </div>
                                                    <div className="ms-pt--content">
                                                        <ul>
                                                            <li className="active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 24 24" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M20 6L9 17l-5-5"></path>
                                                                    </svg>
                                                                </i>
                                                                <span> Consulting </span>
                                                            </li>
                                                            <li className="active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 24 24" stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M20 6L9 17l-5-5"></path>
                                                                    </svg>
                                                                </i>
                                                                <span> Development </span>
                                                            </li>
                                                            <li className="no-active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                                <span> Design </span>
                                                            </li>
                                                            <li className="no-active">
                                                                <i className="icon-check">
                                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <path className="cls-1" d="M7 7l18 18M7 25L25 7"></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                                <span> 24/7 Support </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ms-pt--footer">
                                                        <a className="btn btn--ba btn--primary" role="button" href="#">
                                                            <div className="ms-btn__text">
                                                                <span className="text--main">Choose Plan</span>
                                                            </div>
                                                            <span className="ms-btn--ripple"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clients-area">
                                    <h2 className="clients-title">My Clients</h2>
                                    <div className="clients-inner">
                                        <div id="gallery-1" className="gallery galleryid-1718 gallery-columns-5 gallery-size-medium">
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg1} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg2} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg3} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg4} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg5} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg6} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg7} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg8} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                            <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                    <Image width="300" height="243" src={clientImg9} className="attachment-medium size-medium" alt="" decoding="async" loading="lazy" />
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCV;
