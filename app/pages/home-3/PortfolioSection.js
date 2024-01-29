import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SinglePortfolio from '../../src/components/Portfolio';

import projects from '../../src/data/Projects.json';

const HomePortfolio = () => {
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
                        <div className="portfolio_wrap" id="e088d9e">
                            <div className="portfolio-feed ms-p--d">
                                <span className="load_filter">
                                    <svg className="load-filter-icon" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                        <circle cx="50" cy="50" r="30" stroke-width="6" stroke-linecap="round" fill="none">
                                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"></animateTransform>
                                            <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1s" values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882" keyTimes="0;0.5;1"></animate>
                                        </circle>
                                    </svg>
                                </span>

                                <TabPanel className="row">
                                    {projects.map((project, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">
                                                <SinglePortfolio 
                                                    itemClass="flash grid-item-p element-item transition"
                                                    imgClass="ms-p-img media-wrapper media-wrapper--4:4"
                                                    slug={project.slug}
                                                    itemImg={project.image}
                                                    Title={project.title}
                                                    Category={project.category}
                                                />
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                                <TabPanel className="row">
                                    {projects.filter(project => project.category === 'Creative').map((project, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">
                                                <SinglePortfolio 
                                                    itemClass="flash grid-item-p element-item transition"
                                                    imgClass="ms-p-img media-wrapper media-wrapper--4:4"
                                                    slug={project.slug}
                                                    itemImg={project.image}
                                                    Title={project.title}
                                                    Category={project.category}
                                                />
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                                <TabPanel className="row">
                                    {projects.filter(project => project.category === 'Design').map((project, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">
                                                <SinglePortfolio 
                                                    itemClass="flash grid-item-p element-item transition"
                                                    imgClass="ms-p-img media-wrapper media-wrapper--4:4"
                                                    slug={project.slug}
                                                    itemImg={project.image}
                                                    Title={project.title}
                                                    Category={project.category}
                                                />
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                                <TabPanel className="row">
                                    {projects.filter(project => project.category === 'Photo').map((project, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">
                                                <SinglePortfolio 
                                                    itemClass="flash grid-item-p element-item transition"
                                                    imgClass="ms-p-img media-wrapper media-wrapper--4:4"
                                                    slug={project.slug}
                                                    itemImg={project.image}
                                                    Title={project.title}
                                                    Category={project.category}
                                                />
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                                <TabPanel className="row">
                                    {projects.filter(project => project.category === 'Style').map((project, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">
                                                <SinglePortfolio 
                                                    itemClass="flash grid-item-p element-item transition"
                                                    imgClass="ms-p-img media-wrapper media-wrapper--4:4"
                                                    slug={project.slug}
                                                    itemImg={project.image}
                                                    Title={project.title}
                                                    Category={project.category}
                                                />
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default HomePortfolio;
