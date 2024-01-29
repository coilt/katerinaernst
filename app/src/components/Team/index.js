import React from 'react';
import Image from 'next/image';

import teamImg1 from "../../../public/images/team/team-01.jpg";

const SingleTeam = (props) => {
  const { itemClass, itemImg, Title, Designation, Description } = props;
    
	return(
        <div className={itemClass ? itemClass : 'ms-tm style-1 default d_column'}>
            <div className="ms-tm--box">
                <div className="ms-tm--img">
                    <Image src={itemImg ? itemImg : teamImg1} className="attachment-full size-full wp-image-2094" alt="Team Image" />
                    <div className="ms-tm--socials">
                        <a className="ms-s-icon ms-s-icon--s2" href="#">
                            <i aria-hidden="true" className="fab fa-facebook-f"></i>
                        </a>
                        <a className="ms-s-icon ms-s-icon--s2" href="#">
                            <i aria-hidden="true" className="fab fa-twitter"></i>
                        </a>
                        <a className="ms-s-icon ms-s-icon--s2" href="#">
                            <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="ms-tm--content">
                    <h3 className="ms-tm--title">{Title ? Title : 'Liam Willson'}</h3>
                    <p className="ms-tm--function">{Designation ? Designation : 'CO Founder'}</p>
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

export default SingleTeam