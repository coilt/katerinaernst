import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';

import projectImg from '../../public/img/project/pro-4.jpg';

import projectImg1 from '../../public/img/project/pro-4.jpg';
import projectImg2 from '../../public/img/project/pro-5.jpg';
import projectImg3 from '../../public/img/project/pro-6.jpg';
import projectImg4 from '../../public/img/project/pro-7.jpg';
import projectImg5 from '../../public/img/project/pro-8.jpg';
import projectImg6 from '../../public/img/project/pro-9.jpg';

const dataImages = [
    {
      id: 1,
      image: projectImg1,
    },
    {
      id: 2,
      image: projectImg2,
    },
    {
      id: 3,
      image: projectImg3,
    },
    {
      id: 4,
      image: projectImg4,
    },
    {
      id: 5,
      image: projectImg5,
    },
    {
      id: 6,
      image: projectImg6,
    },
];

const SingleProject = (props) => {
    const { itemClass, Image, Title, categoryOne, categoryTwo } = props;

    // State
	  const [toggle, setToggle] = React.useState(false);
	  const [sIndex, setSIndex] = React.useState(0);

    // Handler
    const lightBoxHandler = (status, value) => {
        setToggle(status);
        setSIndex(value);
    };
    
	return(
        <div className={itemClass ? itemClass : 'project-2__item'}>
            <div className="project-2__thumb">
                <Link to="/project-details">
                    <img src={Image ? Image : projectImg} alt="" />
                </Link>                     
                <div className="project-2__img-icon">
                    <Link className="popup-image" to="#" onClick={() => {lightBoxHandler(true, 1);}}><i className="fal fa-search-plus"></i></Link>
                </div>
                <div className="project-2__img-text">
                    <h4><Link to="/project-details">{Title ? Title : 'Conference On Projects'}</Link></h4>
                    <i>{categoryOne ? categoryOne : 'BUSINESS'}  / <span>{categoryTwo ? categoryTwo : 'BRANDING'}</span></i>
                </div>
                <LightBox
                  state={toggle}
                  event={lightBoxHandler}
                  data={dataImages}
                  imageWidth="600px"
                  imageHeight="500px"
                  thumbnailHeight={50}
                  thumbnailWidth={50}
                  setImageIndex={setSIndex}
                  imageIndex={sIndex}
              />
            </div>
        </div>
	)
}

export default SingleProject