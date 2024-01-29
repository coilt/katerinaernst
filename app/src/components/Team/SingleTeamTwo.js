import React from 'react';
import Image from 'next/image';

import teamImg1 from "../../../public/images/team/team-01.jpg";

const SingleTeamTwo = (props) => {
  const { itemClass, itemImg, Title, Designation, Description } = props;
    
	return(
        <div className={itemClass ? itemClass : 'ms-tm style-2 left'}>
            <div className="ms-tm--box">
                <div className="ms-tm--img">
                    <Image src={itemImg ? itemImg : teamImg1} className="attachment-full" alt="Team Image" />
                    <div className="ms-tm--socials">
                        <a className="ms-s-icon ms-s-icon--s2" href="#0">
                            <i aria-hidden="true" className="fab fa-facebook-f"></i>
                        </a>
                        <a className="ms-s-icon ms-s-icon--s2" href="#0">
                            <i aria-hidden="true" className="fab fa-twitter"></i>
                        </a>
                        <a className="ms-s-icon ms-s-icon--s2" href="#0">
                            <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="ms-tm--content">
                    <h3 className="ms-tm--title">{Title ? Title : 'Olivia Sixten'}</h3>
                    <p className="ms-tm--function">{Designation ? Designation : 'Web Developer'}</p>
                    <div className="ms-tm--desc">
                        <p></p>
                        <p>{Description ? Description : 'Rapidiously synergize revolutionary portals with holistic leadership skills'}</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default SingleTeamTwo