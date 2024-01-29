import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';


const Service = () => {

    return (
        <>
            <HeaderTwo />

            <main className="ms-main">
                <div className="ms-page-content">
                    <div className="contact-area contact account">
                        <div className="container">
                            <h1 className="heading-title">My account</h1>
                            <h2 className="sub-title">Login</h2>
                            <div className="contact-area-inner">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-form">
                                            <form action="#" method="post" aria-label="Contact form">
                                                <div className="row">
                                                    <div className="form-group col-12">
                                                        <label>Username or email address&nbsp;<span className="required">*</span></label>
                                                        <input aria-required="true" aria-invalid="false" value="" type="email" name="your-email" required />
                                                    </div>
                                                    <div className="form-group col-12">
                                                        <label>Password&nbsp;<span className="required">*</span></label>
                                                        <input aria-invalid="false" value="" type="text" name="your-subject" required />
                                                    </div>
                                                    <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme checkbox">
                                                        <input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span>Remember me</span>
                                                    </label>
                                                    <div className="ms-cf--bottom col-12">
                                                        <input className="btn btn--primary" type="submit" value="Log in" />
                                                    </div>
                                                    <p className="woocommerce-LostPassword lost_password">
                                                        <a href="#0">Lost your password?</a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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

export default Service;
