import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import testiImg1 from "../../public/images/testimonial/avatar-1.png";
import testiImg2 from "../../public/images/testimonial/avatar-2.png";
import testiImg3 from "../../public/images/testimonial/avatar-3.png";

const HomeSixTestimonial = () => {
    return (
        <>
            <div className="testimonial-area">
                <div className="container">
                    <h2 className="sub-title">Testimonials</h2>
                    <h2 className="heading-title">Some Reviews From <br/> Clients Abous Us</h2>
                    <div className="testimonial-item">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="testimonial-wraper">
                                    <div className="content">Professionally productize customized imperatives and fully tested
                                        interfaces. Proactively redefine standardized markets through cross-unit
                                        methodologies. </div>
                                    <div className="author">
                                        <div className="author-image">
                                            <Image src={testiImg1} alt="" />
                                        </div>
                                        <div className="author-details">
                                            <h2 className="name">John Doe</h2>
                                            <p className="desc">Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="testimonial-wraper">
                                    <div className="content">Professionally productize customized imperatives and fully tested
                                        interfaces. Proactively redefine standardized markets through cross-unit
                                        methodologies. </div>
                                    <div className="author">
                                        <div className="author-image">
                                            <Image src={testiImg2} alt="" />
                                        </div>
                                        <div className="author-details">
                                            <h2 className="name">John Doe</h2>
                                            <p className="desc">Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="testimonial-wraper">
                                    <div className="content">Professionally productize customized imperatives and fully tested
                                        interfaces. Proactively redefine standardized markets through cross-unit
                                        methodologies. </div>
                                    <div className="author">
                                        <div className="author-image">
                                            <Image src={testiImg3} alt="" />
                                        </div>
                                        <div className="author-details">
                                            <h2 className="name">John Doe</h2>
                                            <p className="desc">Designer</p>
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

export default HomeSixTestimonial;
