import React from 'react';
import emailjs from 'emailjs-com';

import shapeImg1 from '../../public/img/contact/ct-shape-1.png';
import shapeImg2 from '../../public/img/contact/ct-shape-2.png';
import shapeImg3 from '../../public/img/contact/ct-shape-3.png';
import shapeImg4 from '../../public/img/contact/ct-shape-4.png';

const Contact = (props) => {
	const { itemClass } = props;

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('', '', e.target, '')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    } 

	return (
		<div className={itemClass ? itemClass : 'contact__area contact__plr p-relative fix'}>
            <div className="contact__shape-1 d-none d-lg-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="contact__shape-2 d-none d-md-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="contact__shape-3 d-none d-md-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="contact__shape-4 d-none d-md-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="contact__section-title pb-10">
                            <h4 className="section-subtitle char-anim">Get In Contact</h4>
                            <h3 className="section-title char-anim">Feel free to get in touch <br/>
                            Contact with me.</h3>  
                        </div>
                        <div className="contact__text">
                            <p className="char-anim-2">Business tailored it design, management & support services
                            business agency elit, sed do eiusmod tempor. </p> 
                        </div>
                        <div className="contact__form wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                            <form action="#" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="postbox__contact-input">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="postbox__contact-input">
                                        <input type="email" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="postbox__contact-textarea">
                                        <textarea placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>                    
                            </form>
                        </div>
                        <div className="contact__button wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
                            <a className="main-btn-sm  tp-btn-hover alt-color" href="#"><span>Send Request</span><b></b></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="contact__left-side">
                            <div className="contact__item d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <div className="contact__icon">
                                    <span><a href="#"><i className="fal fa-phone-alt"></i></a></span>
                                </div>
                                <div className="contact__content">
                                    <h4 className="contact__title-sm">Call This Now</h4>
                                    <span><a href="tel:+025461556695">+025461556695 <br/>
                                        +826542556455</a></span>
                                </div>
                            </div>
                            <div className="contact__item d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                <div className="contact__icon">
                                    <span><a href="#"><i className="fal fa-envelope-open-text"></i></a></span>
                                </div>
                                <div className="contact__content">
                                    <h4 className="contact__title-sm">Your Message</h4>
                                    <span><a href="mailto:amar@mail.com">amar@mail.com <br/>
                                        robi@mail.com</a></span>
                                </div>
                            </div>
                            <div className="contact__item d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                <div className="contact__icon">
                                    <span><a href="#"><i className="fal fa-map-marker-check"></i></a></span>
                                </div>
                                <div className="contact__content">
                                    <h4 className="contact__title-sm">Your location</h4>
                                    <span><a href="tel:+025461556695">+025461556695 <br/>
                                        +826542556455</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Contact;




