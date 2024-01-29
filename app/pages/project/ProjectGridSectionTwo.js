import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import projectImg1 from "../../public/images/portfolio/sm-01.jpg";
import projectImg2 from "../../public/images/portfolio/sm-02.jpg";
import projectImg3 from "../../public/images/portfolio/sm-03.jpg";
import projectImg4 from "../../public/images/portfolio/sm-04.jpg";
import projectImg5 from "../../public/images/portfolio/sm-05.jpg";
import projectImg6 from "../../public/images/portfolio/sm-06.jpg";

const ProjectGridSectionTwo = () => {
    let tab1 = "All Categories",
        tab2 = "Creative",
        tab3 = "Design",
        tab4 = "Photo",
        tab5 = "Style"
        const tabStyle = 'button-group filters-button-group';
    return (
        <>
            
            <div className="ms-portfolio-filter-area main-isotop project">
                <div className="container">
                    <Tabs>
                        <TabList className={tabStyle}>
                            <Tab><button>{tab1}</button></Tab>
                            <Tab><button>{tab2}</button></Tab>
                            <Tab><button>{tab3}</button></Tab>
                            <Tab><button>{tab4}</button></Tab>
                            <Tab><button>{tab5}</button></Tab>
                        </TabList>
                        <div className="portfolio_wrap">
                            <div className="filter portfolio-feed">
                                <TabPanel className="row">
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/freezing-birthday" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg1} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Freezing Birthday</h3>
                                                    <h4 className="ms-p-cat">creative</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/stream-shop" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg2} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Stream Shop</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/random-risk" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg3} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Random Risk</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/share-spark" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg4} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Share Spark</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/wiggly-finger" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg5} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Wiggly Finger</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/subsequent-sneeze" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg6} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Subsequent Sneeze</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="row">
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/wiggly-finger" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg5} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Wiggly Finger</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/stream-shop" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg2} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Stream Shop</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/freezing-birthday" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg1} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Freezing Birthday</h3>
                                                    <h4 className="ms-p-cat">creative</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/subsequent-sneeze" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg6} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Subsequent Sneeze</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="row">
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/wiggly-finger" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg5} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Wiggly Finger</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/stream-shop" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg2} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Stream Shop</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/subsequent-sneeze" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg6} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Subsequent Sneeze</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/freezing-birthday" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg1} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Freezing Birthday</h3>
                                                    <h4 className="ms-p-cat">creative</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="row">
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/wiggly-finger" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg5} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Wiggly Finger</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/stream-shop" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg2} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Stream Shop</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/random-risk" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg3} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Random Risk</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="row">
                                    <div className="flash grid-item-p element-item transition creative col-md-8" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/freezing-birthday" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg1} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Freezing Birthday</h3>
                                                    <h4 className="ms-p-cat">creative</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flash grid-item-p element-item transition creative col-md-4" data-category="transition">
                                        <div className="item--inner">
                                            <Link href="/project/subsequent-sneeze" aria-label="Freezing Birthday">
                                                <figure className="ms-p-img">
                                                    <Image decoding="async" src={projectImg6} alt="Freezing Birthday" />
                                                </figure>
                                                <div className="ms-p-content">
                                                    <h3>Subsequent Sneeze</h3>
                                                    <h4 className="ms-p-cat">design</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>

                        <div className="btn-wrap ajax-area" data-max="2">
                            <div className="btn btn-load-more btn-circle btn--md">
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
                                    <div className="ms-btn--label">
                                        <div className="ms-btn__text">Load More</div>
                                        <div className="ms-btn__border"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default ProjectGridSectionTwo;
