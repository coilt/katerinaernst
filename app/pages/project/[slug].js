import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';

import projects from '../../src/data/Projects.json';

import projectImg1 from "../../public/images/slider/most_slide_sm1.jpg";
import projectImg2 from "../../public/images/slider/most_slide_sm2.jpg";
import projectImg3 from "../../public/images/slider/most_slide_sm3.jpg";
import projectImg4 from "../../public/images/slider/most_slide_sm4.jpg";

function ProjectDetails() {

  const router = useRouter();
    var slug = router.query.slug;
    if (slug === undefined) {
        slug = 'freezing-birthday';
    }

    // Find the data for the current slug in your JSON data
    const project = projects.find(item => item.slug === slug)
    var nextProject = projects.find(item => item.id - 1 === project.id)
    if (nextProject === undefined) {
        nextProject = projects.find(item => item.id === 1);
    }
    console.log(nextProject);

  return (
    <div className="masonry">
        <HeaderTwo />

        <main className="ms-main single">
            <div className="ms-page-content">
                <div className="project-single-banner">
                    <div className="container">
                        <div className="project-single-inner">
                            <div className="row top">
                                <div className="col-lg-6">
                                    <h1 className="heading-title">{project.title}</h1>
                                </div>
                                <div className="col-lg-6">
                                    <p className="desc">{project.description}</p>
                                </div>
                            </div>
                            <div className="row bottom">
                                <div className="col-lg-6">
                                    <div className="author-area">
                                        <div className="client">
                                            <p className="tag">Client:</p>
                                            <h4 className="platform">Themeforest</h4>
                                        </div>
                                        <div className="partner">
                                            <p className="tag">Partners:</p>
                                            <h4 className="platform">Envato</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <p className="catagory">#3D #ANIMATION #USER #GENERATED #CONTENT #DESIGN #FRONT-END #DEVELOPMENT #BACK-END #DEVELOPMENT #CLOUD #RENDERING</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ms-hero project single">
                    <div className="ms-parallax jarallax-img" data-speed="0.7" data-type="scroll"></div>
                </section>
                <section className="project-single-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="portfolio-image">
                                    <Link href="#">
                                        <Image src={projectImg3} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="portfolio-image">
                                    <Link href="#">
                                        <Image src={projectImg4} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="portfolio-image">
                                    <a href="#">
                                        <Image src={projectImg1} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="portfolio-image">
                                    <Link href="#">
                                        <Image src={projectImg2} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-spn--wrap container">
                        <div className="ms-spn--content row">
                            <div className="ms-spn--text col-md-6">
                                <Link className="ms-spn--link" href={`/project/${nextProject.slug}`}>
                                    <div className="ms-spn--head">
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"></path>
                                            </g>
                                        </svg>
                                        <h3>Next Project</h3>
                                    </div>
                                    <h1>{nextProject.title}</h1>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link href="#" className="ms-spn--thumb">
                                    <Image src={`/images/portfolio/${nextProject.image}`} alt={nextProject.title} width={800} height={600} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        <Footer /> 
                
    </div>
  );
}

export default ProjectDetails;
