import React from 'react';
import { Link } from 'react-router-dom';


const Topbar = (props) => {
	const { headerClass, parentMenu, headerLogo } = props;

	return (
		<>
			<div className="header-top__area header-top__bg header-top__plr z-index-3">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-6 col-lg-4 col-sm-4">
                        <div className="header-top__lang d-none d-sm-block">
                           <ul>
                              <li>
                                 <a href="#">English<i className="fal fa-angle-down"></i></a>
                                 <ul>
                                    <li><a href="#">Arabic</a></li>
                                    <li><a href="#">spanis</a></li>
                                    <li><a href="#">Bangla</a></li>
                                    <li><a href="#">English</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-8 col-sm-8">
                        <div className="header-top__social text-end">
                           <span>Visit our social pages:</span>
                           <a href="#"><i className="fab fa-facebook-f"></i></a>
                           <a href="#"><i className="fab fa-instagram"></i></a>
                           <a href="#"><i className="fab fa-pinterest"></i></a>
                           <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
		</>
	);
}

export default Topbar;