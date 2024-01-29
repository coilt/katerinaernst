import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import SingleTeam from '@/components/Team';
import SingleTeamTwo from '@/components/Team/SingleTeamTwo';
import SingleTeamThree from '@/components/Team/SingleTeamThree';

import teamImg1 from "../../public/images/team/team-01.jpg";
import teamImg2 from "../../public/images/team/team-02.jpg";
import teamImg3 from "../../public/images/team/team-03.jpg";
import teamImg4 from "../../public/images/team/team-04.jpg";
import teamImg5 from "../../public/images/team/team-05.jpg";
import teamImg6 from "../../public/images/team/team-06.jpg";

const Team = () => {
    return (
        <>
            <HeaderTwo />

            <main className="ms-main">
                <div className="ms-page-content">
                    <div className="team-area one">
                        <div className="container">
                            <h4 className="heading-title">Team Widget</h4>
                            <h1 className="title">Style #1</h1>
                            <div className="team-area-inner">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <SingleTeam 
                                            itemImg={teamImg1}
                                            Title="Samantha Marisa"
                                            Designation="Graphic Designer"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <SingleTeam 
                                            itemImg={teamImg2}
                                            Title="Liam Willson"
                                            Designation="CO Founder"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <SingleTeam 
                                            itemImg={teamImg3}
                                            Title="Ava Ludger"
                                            Designation="Project Manager"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-area one two">
                    <div className="container">
                        <h4 className="heading-title">Team Widget</h4>
                        <h1 className="title">Style #2</h1>
                        <div className="team-area-inner two">
                            <div className="row">
                                <div className="col-lg-4">
                                    <SingleTeamTwo 
                                        itemImg={teamImg4}
                                        Title="Samantha Marisa"
                                        Designation="Graphic Designer"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <SingleTeamTwo 
                                        itemImg={teamImg5}
                                        Title="Liam Willson"
                                        Designation="CO Founder"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <SingleTeamTwo 
                                        itemImg={teamImg6}
                                        Title="Ava Ludger"
                                        Designation="Project Manager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-area one three">
                    <div className="container">
                        <h4 className="heading-title">Team Widget</h4>
                        <h1 className="title">Style #3</h1>
                        <div className="team-area-inner two">
                            <div className="row">
                                <div className="col-lg-4">
                                    <SingleTeamThree 
                                        itemImg={teamImg1}
                                        Title="Samantha Marisa"
                                        Designation="Graphic Designer"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <SingleTeamThree 
                                        itemImg={teamImg2}
                                        Title="Liam Willson"
                                        Designation="CO Founder"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <SingleTeamThree 
                                        itemImg={teamImg3}
                                        Title="Ava Ludger"
                                        Designation="Project Manager"
                                    />
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

export default Team;
