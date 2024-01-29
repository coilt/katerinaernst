import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import projects from '../../src/data/Projects.json';

const ProjectSection = () => {
    let tab1 = "All Categories",
        tab2 = "Creative",
        tab3 = "Design",
        tab4 = "Photo",
        tab5 = "Style"
        const tabStyle = 'button-group filters-button-group';
    return (
        <>
            <div className="ms-portfolio-filter-area main-isotop">
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
                            <div className="filter row portfolio-feed">
                                <TabPanel className="row">
                                    {projects.map((project, index) => {
                                        return (
                                            <div key={index} className="grid-item-p element-item transition creative col-md-12" data-category="transition">
                                                <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                    <div className="ms-p-list-item__img-container">
                                                        <figure className="project-list-item__image">
                                                            <Image decoding="async" src={`/images/portfolio/${project.smImg}`} alt={project.title} width={215} height={125} />
                                                        </figure>
                                                    </div>
                                                    <div className="p-list-item__title col-md-6">
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                    <div className="p-list-item__info col-md-3">
                                                        <div className="p-list-item__cat">
                                                            <h4>{project.category}</h4>
                                                        </div>
                                                        <div>
                                                            <h4>/{project.publishedDate}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="p-list-item__icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.67 384.67">
                                                            <g>
                                                                <path fill-rule="evenodd" d="M0 45.26l276.05 276.05H22.63v63.36h362.04V22.63h-63.36v253.42L45.26 0 0 45.26z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }).slice(0, 6)}
                                </TabPanel>
                                <TabPanel className="row">
                                    {projects.filter(project => project.category === 'Creative').map((project, index) => {
                                        return (
                                            <div key={index} className="grid-item-p element-item transition creative col-md-12" data-category="transition">
                                                <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                    <div className="ms-p-list-item__img-container">
                                                        <figure className="project-list-item__image">
                                                            <Image decoding="async" src={`/images/portfolio/${project.smImg}`} alt={project.title} width={215} height={125} />
                                                        </figure>
                                                    </div>
                                                    <div className="p-list-item__title col-md-6">
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                    <div className="p-list-item__info col-md-3">
                                                        <div className="p-list-item__cat">
                                                            <h4>{project.category}</h4>
                                                        </div>
                                                        <div>
                                                            <h4>/{project.publishedDate}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="p-list-item__icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.67 384.67">
                                                            <g>
                                                                <path fill-rule="evenodd" d="M0 45.26l276.05 276.05H22.63v63.36h362.04V22.63h-63.36v253.42L45.26 0 0 45.26z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }).slice(0, 6)}
                                </TabPanel>
                                <TabPanel className="row">
                                    {projects.filter(project => project.category === 'Design').map((project, index) => {
                                        return (
                                            <div key={index} className="grid-item-p element-item transition creative col-md-12" data-category="transition">
                                                <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                    <div className="ms-p-list-item__img-container">
                                                        <figure className="project-list-item__image">
                                                            <Image decoding="async" src={`/images/portfolio/${project.smImg}`} alt={project.title} width={215} height={125} />
                                                        </figure>
                                                    </div>
                                                    <div className="p-list-item__title col-md-6">
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                    <div className="p-list-item__info col-md-3">
                                                        <div className="p-list-item__cat">
                                                            <h4>{project.category}</h4>
                                                        </div>
                                                        <div>
                                                            <h4>/{project.publishedDate}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="p-list-item__icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.67 384.67">
                                                            <g>
                                                                <path fill-rule="evenodd" d="M0 45.26l276.05 276.05H22.63v63.36h362.04V22.63h-63.36v253.42L45.26 0 0 45.26z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }).slice(0, 6)}
                                </TabPanel><TabPanel className="row">
                                    {projects.filter(project => project.category === 'Photo').map((project, index) => {
                                        return (
                                            <div key={index} className="grid-item-p element-item transition creative col-md-12" data-category="transition">
                                                <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                    <div className="ms-p-list-item__img-container">
                                                        <figure className="project-list-item__image">
                                                            <Image decoding="async" src={`/images/portfolio/${project.smImg}`} alt={project.title} width={215} height={125} />
                                                        </figure>
                                                    </div>
                                                    <div className="p-list-item__title col-md-6">
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                    <div className="p-list-item__info col-md-3">
                                                        <div className="p-list-item__cat">
                                                            <h4>{project.category}</h4>
                                                        </div>
                                                        <div>
                                                            <h4>/{project.publishedDate}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="p-list-item__icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.67 384.67">
                                                            <g>
                                                                <path fill-rule="evenodd" d="M0 45.26l276.05 276.05H22.63v63.36h362.04V22.63h-63.36v253.42L45.26 0 0 45.26z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }).slice(0, 6)}
                                </TabPanel><TabPanel className="row">
                                    {projects.filter(project => project.category === 'Style').map((project, index) => {
                                        return (
                                            <div key={index} className="grid-item-p element-item transition creative col-md-12" data-category="transition">
                                                <Link href={`/project/${project.slug}`} aria-label={project.title}>
                                                    <div className="ms-p-list-item__img-container">
                                                        <figure className="project-list-item__image">
                                                            <Image decoding="async" src={`/images/portfolio/${project.smImg}`} alt={project.title} width={215} height={125} />
                                                        </figure>
                                                    </div>
                                                    <div className="p-list-item__title col-md-6">
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                    <div className="p-list-item__info col-md-3">
                                                        <div className="p-list-item__cat">
                                                            <h4>{project.category}</h4>
                                                        </div>
                                                        <div>
                                                            <h4>/{project.publishedDate}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="p-list-item__icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.67 384.67">
                                                            <g>
                                                                <path fill-rule="evenodd" d="M0 45.26l276.05 276.05H22.63v63.36h362.04V22.63h-63.36v253.42L45.26 0 0 45.26z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }).slice(0, 6)}
                                </TabPanel>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default ProjectSection;
