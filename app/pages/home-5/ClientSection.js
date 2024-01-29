import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import partnerImg1 from "../../public/images/clients/logo-partner-1.png";
import partnerImg2 from "../../public/images/clients/logo-partner-2.png";
import partnerImg3 from "../../public/images/clients/logo-partner-3.png";
import partnerImg4 from "../../public/images/clients/logo-partner-4.png";
import partnerImg5 from "../../public/images/clients/logo-partner-5.png";
import partnerImg6 from "../../public/images/clients/logo-partner-6.png";
import partnerImg7 from "../../public/images/clients/logo-partner-7.png";
import partnerImg8 from "../../public/images/clients/logo-partner-8.png";
import partnerImg9 from "../../public/images/clients/logo-partner-9.png";

const HomeFiveClient = () => {
    return (
        <>
            <div className="clients-area-2">
                <div className="container">
                    <div className="ms-content--portfolio">
                        <div className="row grid grid-content blockgallery h_s2">
                            <div className="grid-sizer col-xs-12 col-lg-2 col-md-3"></div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg1} alt="most_logo_partner_8" />
                                </figure>
                            </div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg2} alt="most_logo_partner_9" />
                                </figure>
                            </div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg3} alt="most_logo_partner_6" />
                                </figure>
                            </div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg4} alt="most_logo_partner_5" />
                                </figure>
                            </div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg5} alt="most_logo_partner_7" />
                                </figure>
                            </div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg6} alt="most_logo_partner_4" />
                                </figure>
                            </div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg7} alt="most_logo_partner_3" />
                                </figure>
                            </div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg8} alt="most_logo_partner_2" />
                                </figure>
                            </div>
                            <div className="grid-item col-6 col-lg-2 col-md-3">
                                <figure className="media-wrapper media-wrapper--4:3 mfp-none">
                                    <Image decoding="async" src={partnerImg9} alt="most_logo_partner_1" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeFiveClient;
