import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import projects from '../../src/data/Projects.json';

import projectImg1 from "../../public/images/portfolio/01.jpg";
import projectImg2 from "../../public/images/portfolio/02.jpg";
import projectImg3 from "../../public/images/portfolio/03.jpg";
import projectImg4 from "../../public/images/portfolio/04.jpg";
import projectImg5 from "../../public/images/portfolio/05.jpg";
import projectImg6 from "../../public/images/portfolio/06.jpg";
import projectImg7 from "../../public/images/portfolio/07.png";
import projectImg8 from "../../public/images/portfolio/08.jpg";
import projectImg9 from "../../public/images/portfolio/09.jpg";

const ProjectMasonarySection = () => {
    let tab1 = "All Categories",
        tab2 = "Creative",
        tab3 = "Design",
        tab4 = "Photo",
        tab5 = "Style"
        const tabStyle = 'button-group portfolio-filter filters-button-group';
    
    const breakpointColumnsObj = {
        default: 3,
        1200: 3,
        992: 2,
        576: 1
    };
    return (
        <>
            <div className="ms-portfolio-filter-area project">
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
                            <div className="filter grid-masonary ms-masonry-gallery portfolio-feed">
                                <TabPanel>
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        {projects.map((project, index) => {
                                            return (
                                                <div key={index} className="fadein zoom center h-align-middle grid-item-p element-item transition photo" data-category="transition">
                                                    <div className="item--inner">
                                                        <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                            <figure className="ms-p-img">
                                                                <Image decoding="async" src={`/images/portfolio/${project.image}`} alt={project.title} width={800} height={600} />
                                                            </figure>
                                                            <div className="ms-p-content">
                                                                <h3>{project.title}</h3>
                                                                <h4 className="ms-p-cat">{project.category}</h4>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }).slice(0, 6)}
                                    </Masonry>
                                </TabPanel>
                                <TabPanel>
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        {projects.filter(project => project.category === 'Creative').map((project, index) => {
                                            return (
                                                <div key={index} className="fadein zoom center h-align-middle grid-item-p element-item transition photo" data-category="transition">
                                                    <div className="item--inner">
                                                        <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                            <figure className="ms-p-img">
                                                                <Image decoding="async" src={`/images/portfolio/${project.image}`} alt={project.title} width={800} height={600} />
                                                            </figure>
                                                            <div className="ms-p-content">
                                                                <h3>{project.title}</h3>
                                                                <h4 className="ms-p-cat">{project.category}</h4>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }).slice(0, 6)}
                                    </Masonry>
                                </TabPanel>
                                <TabPanel>
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        {projects.filter(project => project.category === 'Design').map((project, index) => {
                                            return (
                                                <div key={index} className="fadein zoom center h-align-middle grid-item-p element-item transition photo" data-category="transition">
                                                    <div className="item--inner">
                                                        <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                            <figure className="ms-p-img">
                                                                <Image decoding="async" src={`/images/portfolio/${project.image}`} alt={project.title} width={800} height={600} />
                                                            </figure>
                                                            <div className="ms-p-content">
                                                                <h3>{project.title}</h3>
                                                                <h4 className="ms-p-cat">{project.category}</h4>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }).slice(0, 6)}
                                    </Masonry>
                                </TabPanel>
                                <TabPanel>
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        {projects.filter(project => project.category === 'Photo').map((project, index) => {
                                            return (
                                                <div key={index} className="fadein zoom center h-align-middle grid-item-p element-item transition photo" data-category="transition">
                                                    <div className="item--inner">
                                                        <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                            <figure className="ms-p-img">
                                                                <Image decoding="async" src={`/images/portfolio/${project.image}`} alt={project.title} width={800} height={600} />
                                                            </figure>
                                                            <div className="ms-p-content">
                                                                <h3>{project.title}</h3>
                                                                <h4 className="ms-p-cat">{project.category}</h4>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }).slice(0, 6)}
                                    </Masonry>
                                </TabPanel>
                                <TabPanel>
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        {projects.filter(project => project.category === 'Style').map((project, index) => {
                                            return (
                                                <div key={index} className="fadein zoom center h-align-middle grid-item-p element-item transition photo" data-category="transition">
                                                    <div className="item--inner">
                                                        <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                            <figure className="ms-p-img">
                                                                <Image decoding="async" src={`/images/portfolio/${project.image}`} alt={project.title} width={800} height={600} />
                                                            </figure>
                                                            <div className="ms-p-content">
                                                                <h3>{project.title}</h3>
                                                                <h4 className="ms-p-cat">{project.category}</h4>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }).slice(0, 6)}
                                    </Masonry>
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

export default ProjectMasonarySection;
