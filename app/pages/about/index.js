import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import SingleTeamTwo from '@/components/Team/SingleTeamTwo';

import aboutImg from '../../public/images/about/about-us.png';
import teamImg1 from '../../public/images/team/team-01.jpg';
import teamImg2 from '../../public/images/team/team-02.jpg';
import teamImg3 from '../../public/images/team/team-03.jpg';
import teamImg4 from '../../public/images/team/team-04.jpg';
import teamImg5 from '../../public/images/team/team-05.jpg';
import teamImg6 from '../../public/images/team/team-06.jpg';


const About = () => {

    return (
        <>
            <HeaderTwo />

            <main className="ms-main">
                <div className="ms-page-content">
                    <div className="banner-area inner">
                        <div className="container">
                            <h1 className="heading-title">We A Graphic <strong><span>Design Agency</span></strong> <br/> Forvisually Compelling Stories.​</h1>
                        </div>
                    </div>

                    <div className="ms-hero-area-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-image">
                                    <Image src={aboutImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-rules-area">
                        <div className="container">
                            <div className="team-rules-area-inner">
                                <div className="border-line"></div>
                                <div className="top">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4 className="heading-title"> Our Team Rules</h4>
                                        </div>
                                        <div className="col-lg-8 col-md-8">
                                            <h1 className="title">Authoritatively seize web readiness. Completely benchmark partnerships. </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="middle">
                                    <div className="row">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="inner">
                                                <div className="border-line"></div>
                                                <div className="content">
                                                    <p className="desc">Team Rule <br/> (No.01)</p>
                                                    <h2 className="sub-title">Love what de do</h2>
                                                    <p>Completely plagiarize intermandated services whereas multifunctional mindshare. Monotonectally mesh low-risk high-yield methods of empowerment after cross functional testing procedures.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="inner">
                                                <div className="border-line"></div>
                                                <div className="content">
                                                    <p className="desc">Team Rule <br/> (No.02)</p>
                                                    <h2 className="sub-title">Trust</h2>
                                                    <p>Dynamically maintain reliable e-services without prospective supply chains. Continually deploy cross-unit niches via seamless networks. Synergistically foster ubiquitous methods…</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="inner">
                                                <div className="border-line"></div>
                                                <div className="content">
                                                    <p className="desc">Team Rule <br/> (No.03)</p>
                                                    <h2 className="sub-title">Communication</h2>
                                                    <p>Appropriately parallel task cutting-edge mindshare rather than B2B catalysts for change. Efficiently myocardinate collaborative niche markets without excellent web-readiness.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="inner">
                                                <div className="border-line"></div>
                                                <div className="content">
                                                    <p className="desc">Team Rule <br/> (No.04)</p>
                                                    <h2 className="sub-title">Honesty</h2>
                                                    <p>Monotonectally parallel task cross-unit e-tailers without performance based platforms. Phosfluorescently unleash market-driven niche markets via flexible functionalities.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-area">
                        <div className="container">
                            <div className="team-area-inner">
                                <div className="border-line"></div>
                                <div className="team-content">
                                    <h4 className="heading-title">Our Team</h4>
                                    <h1 className="title">We Have Come <br/> Together to Create</h1>
                                </div>
                                <div className="team-member">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo 
                                                itemImg={teamImg1}
                                                Title="Samantha Marisa"
                                                Designation="Graphic Designer"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo 
                                                itemImg={teamImg2}
                                                Title="Liam Willson"
                                                Designation="CO Founder"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo 
                                                itemImg={teamImg3}
                                                Title="Ava Ludger"
                                                Designation="Project Manager"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo 
                                                itemImg={teamImg4}
                                                Title="Olivia Sixten"
                                                Designation="Web Developer"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo 
                                                itemImg={teamImg5}
                                                Title="Lena Karin"
                                                Designation="UI/UX Designer"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo 
                                                itemImg={teamImg6}
                                                Title="Ariane Halvar"
                                                Designation="Team Leader"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-area">
                        <div className="container">
                            <div className="border-line"></div>
                            <h4 className="heading-title">Send A Request</h4>
                            <div className="contact-area-inner">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <h2 className="title">Got A Project Or <br/> A Partnership In Mind?</h2>
                                            <p className="desc">Holisticly leverage other’s user friendly platforms with progressive products. Proactively matrix exceptional content through B2C schemas. Seamlessly exploit cutting-edge niche markets rather than premium results. Collaboratively restore pandemic e-business and plug-and-play data. Conveniently target exceptional platforms whereas standards compliant data.</p>
                                        </div>
                                        <div className="row contact">
                                            <ul className="col-lg-6 phone">
                                                <li className="tag">Phone:</li>
                                                <li>+99 (0)1047011888</li>
                                                <li>+99 (0)1310011444</li>
                                            </ul>
                                            <ul className="col-lg-6 email">
                                                <li className="tag">Email:</li>
                                                <li>info@madsparrow.com</li>
                                                <li>contact@most.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-form">
                                            <form action="#" method="post" aria-label="Contact form">
                                                <div className="row">
                                                    <div className="form-group col-6">
                                                        <input aria-required="true" aria-invalid="false" placeholder="Name" value="" type="text" name="your-name" required />
                                                    </div>
                                                    <div className="form-group col-6">
                                                        <input aria-required="true" aria-invalid="false" placeholder="Email" value="" type="email" name="your-email" required />
                                                    </div>
                                                    <div className="form-group col-12">
                                                        <input aria-invalid="false" placeholder="Title" value="" type="text" name="your-subject" required />
                                                    </div>
                                                    <div className="form-group col-12">
                                                        <textarea aria-invalid="false" placeholder="Message" name="message"></textarea>
                                                    </div>
                                                    <div className="ms-cf--bottom">
                                                        <input className="btn btn--primary" type="submit" value="Send" />
                                                    </div>
                                                </div>
                                            </form>
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

export default About;
