import { useRef, useEffect } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';

SwiperCore.use([Mousewheel]);

import bannerImg1 from "../../public/images/slider/most_slide_1.jpg";
import bannerImg2 from "../../public/images/slider/most_slide_2.jpg";

const sliderOption = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    spaceBetween: 0,
    slidesPerView: '1',
    parallax: true,
    speed: 700,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
    }
}

const HomeSlider = () => {
    
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
          swiperRef.current, sliderOption;
        }
    }, []);

    return (
        <div className="banner-horizental">
            <div className="swiper swiper-container-h">
                <Swiper {...sliderOption} mousewheel={true} ref={swiperRef} watchSlidesProgress className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-inner" data-swiper-parallax="100">
                            <Image src={bannerImg1} alt="full_screen-image" />
                            <div className="swiper-content" data-swiper-parallax="2000">
                                <div className="title-area">
                                    <p className="tag">OUR VISION</p>
                                    <a href="#" className="title"> DESIGN </a>
                                </div>
                                <p className="disc">
                                    Credibly leverage existing business experiences through
                                    <br />
                                    magnetic mindshare. Synergistically exploit
                                    <br />
                                    efficient partnerships world-class applications.
                                </p>
                                <div className="btn-wrap">
                                    <a className="btn btn-circle btn--md" role="button" href="#0">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ms-btn--label">
                                            <div className="ms-btn__text">Take A Look</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div className="slider-inner" data-swiper-parallax="100">
                            <Image src={bannerImg2} alt="full_screen-image" />
                            <div className="swiper-content" data-swiper-parallax="2000">
                                <div className="title-area">
                                    
                                    <p className="tag">INSPIRATION</p>
                                    <a href="#" className="title"> MOTION </a>
                                    
                                </div>
                                <p className="disc">
                                    Conveniently formulate progressive users for error-free
                                    <br />
                                    interfaces. Monotonectally deploy superior
                                    <br />
                                    relationships without seamless infomediaries.
                                </p>
                                <div className="btn-wrap">
                                    <a className="btn btn-circle btn--md" role="button" href="#0">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ms-btn--label">
                                            <div className="ms-btn__text">See More</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div className="slider-inner" data-swiper-parallax="100">
                            <video autoPlay loop muted>
                                <source src="/videos/video.mp4" type="video/mp4" />
                            </video>
                            
                            <div className="swiper-content" data-swiper-parallax="2000">
                                <div className="title-area">
                                    
                                    <a href="#" className="title"> ENGINE </a>
                                    
                                </div>
                                <p className="disc">
                                    Conveniently formulate progressive users for error-free
                                    <br />
                                    interfaces. Monotonectally deploy superior
                                    <br />
                                    relationships without seamless infomediaries.
                                </p>
                                <div className="btn-wrap">
                                    <a className="btn btn-circle btn--md" role="button" href="https://theme.madsparrow.me/most/list-style/">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ms-btn--label">
                                            <div className="ms-btn__text">Take A Look</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-button-wrapper">
                    <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide">
                    </div>
                    <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide">
                    </div>
                </div>
                <div className="slider-pagination-area">
                    <h5 className="slide-range one">01</h5>
                    <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"><span className="swiper-pagination-progressbar-fill"></span></div>
                    <h5 className="slide-range three">03</h5>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;
