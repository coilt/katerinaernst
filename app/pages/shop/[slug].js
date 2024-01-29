import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import HeaderThree from '../../src/components/Header/HeaderThree';
import Footer from '../../src/components/Footer';

import SingleProduct from '../../src/components/Product';

import products from '../../src/data/Products.json';

const sliderOption = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    spaceBetween: 0,
    slidesPerView: '1',
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
    }
}

function ProductDetails() {
    const router = useRouter();
    var slug = router.query.slug;
    if (slug === undefined) {
        slug = 'run-max-88';
    }

    // Find the data for the current slug in your JSON data
    const product = products.find(item => item.slug === slug)

    let tab1 = "Description",
        tab2 = "Additional Information",
        tab3 = "Review (1)"
        const tabStyle = 'nav nav-tabs';

    const [value, setValue] = useState(1);

    function handleChange(event) {
        setValue(Number(event.target.value));
    }
    
    function handleIncrement() {
        if (value < 7) {
            setValue(value + 1);
        }
    }
    
    function handleDecrement() {
        if (value > 1) {
            setValue(value - 1);
        }
    }

  return (
    <>
        <HeaderThree />

        <main className="ms-main">
            <div className="container">
                <div id="primary" className="content-area single-product">
                    <div className="site-main">
                        <div className="woocommerce-notices-wrapper"></div>
                        <div id="product-470" className="ms-single-product product type-product post-470 status-publish first instock product_cat-run product_tag-life product_tag-move product_tag-sport product_tag-trainers has-post-thumbnail shipping-taxable purchasable product-type-simple">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="banner-horizental">
                                        <div className="swiper swiper-container-h1">
                                            <Swiper {...sliderOption} className="swiper-wrapper">
                                                <SwiperSlide className="swiper-slide">
                                                    <div className="slider-inner">
                                                        <Image src={`/images/shop/${product.image}`} width={800} height={600} alt={product.title} />
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide className="swiper-slide">
                                                    <div className="slider-inner">
                                                        <Image src={`/images/shop/${product.image3}`} width={800} height={600} alt={product.title} />
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide className="swiper-slide">
                                                    <div className="slider-inner">
                                                        <Image src={`/images/shop/${product.image2}`} width={800} height={600} alt={product.title} />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <div className="slider-pagination-area">
                                            <div className="swiper-pagination swiper-pagination-horizontal">
                                                <span className="swiper-pagination-bullet"></span>
                                                <span className="swiper-pagination-bullet two"></span>
                                                <span className="swiper-pagination-bullet three"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ms-single-product__content">
                                        <h2 className="ms-single-product_title">{product.Title}</h2>
                                        <p className="price">
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi><span className="woocommerce-Price-currencySymbol">$</span>{product.Price}</bdi>
                                            </span>
                                        </p>
                                        <div className="ms-woocommerce-product-rating woocommerce-product-rating">
                                            <div className="ms-rating-icon">
                                                
                                            </div>
                                            <div className="ms-rating-average"> 5.00 </div>
                                            <a href="#reviews" className="woocommerce-review-link" rel="nofollow">(<span className="count">1</span> customer review)</a>
                                        </div>
                                        <div className="woocommerce-product-details__short-description">
                                            <p>{product.Description}
                                                Phosfluorescently benchmark unique e-services whereas transparent
                                                collaboration and idea-sharing. Enthusiastically communicate maintainable
                                                networks via global metrics. Credibly negotiate progressive bandwidth for go
                                                forward e-commerce. Rapidiously evolve magnetic initiatives through
                                                client-based portals.
                                            </p>
                                        </div>
                                        <p className="stock in-stock">7 in stock</p>
                                        <form className="cart" action="#" method="post" enctype="multipart/form-data">
                                            <div className="ms-quantity">
                                                <label className="screen-reader-text" for="quantity_63ec94c17230a">Run Max 88
                                                    quantity</label>
                                                <button type="button" className="button-minus" onClick={handleDecrement}>
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <line x1="7" x2="25" y1="16" y2="16"></line>
                                                        </g>
                                                    </svg>
                                                </button>
                                                <input type="number" id="quantity_63ec94c17230a" className="input-text qty text" step="1" min="1" max="7" name="quantity" value={value} onChange={handleChange} title="Qty" placeholder="" inputmode="numeric" autocomplete="off" />
                                                <button type="button" className="button-plus" onClick={handleIncrement}>
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <line x1="16" x2="16" y1="7" y2="25"></line>
                                                            <line x1="7" x2="25" y1="16" y2="16"></line>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                            <a href="#0" className="single_add_to_cart_button button alt">Add to cart</a>
                                        </form>
                                        <div className="product_meta">
                                            <span className="sku_wrapper"><strong>SKU:</strong> <span className="sku">161056</span></span>
                                            <span className="posted_in"><strong>Category:</strong> <a href="#0" rel="tag">For Running</a></span>
                                            <span className="tagged_as"><strong>Tags:</strong> <a href="#0" rel="tag">Life</a>, 
                                                <a href="#0" rel="tag">Move</a>, 
                                                <a href="#0" rel="tag">Sport</a>, 
                                                <a href="#0" rel="tag">Trainers</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="tab-area">
                                        <Tabs>
                                            <TabList className={tabStyle}>
                                                <Tab><button>{tab1}</button></Tab>
                                                <Tab><button>{tab2}</button></Tab>
                                                <Tab><button>{tab3}</button></Tab>
                                            </TabList>
                                            
                                            <div className="tab-content">
                                                <TabPanel>
                                                    <div className="tab-pane" id="home" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">Credibly e-enable e-business materials with competitive products.
                                                        Enthusiastically extend unique leadership before timely users. Synergistically
                                                        scale B2C e-business rather than quality products. Synergistically incubate
                                                        extensible outsourcing via magnetic sources. Interactively revolutionize
                                                        intuitive collaboration and idea-sharing through high-quality models.
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                                        <div className="ms-section-title">
                                                            <h3 className="ms-heading-title"> Additional information</h3>
                                                            <table className="woocommerce-product-attributes shop_attributes">
                                                                <tbody>
                                                                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_size">
                                                                        <th className="woocommerce-product-attributes-item__label">Size</th>
                                                                        <td className="woocommerce-product-attributes-item__value">
                                                                            <p>39, 40, 41, 42, 43, 44</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_collection">
                                                                        <th className="woocommerce-product-attributes-item__label"> Collection</th>
                                                                        <td className="woocommerce-product-attributes-item__value">
                                                                            <p>Most Sport Pro</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_upper-material">
                                                                        <th className="woocommerce-product-attributes-item__label">Upper Material</th>
                                                                        <td className="woocommerce-product-attributes-item__value">
                                                                            <p>Leather</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabIndex="0">
                                                        <div id="reviews" className="woocommerce-Reviews">
                                                            <div className="full-details-inner">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className="reveiw-form">
                                                                            <h2 className="heading-title"> Be the first to reveiw</h2>
                                                                            <div className="reveiw-form-main">
                                                                                <form className="contact-form">
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6 col-sm-12">
                                                                                            <div className="input-box text-input">
                                                                                                <textarea name="Message" id="validationDefault01" cols="30" rows="10" placeholder="Your Review*"></textarea>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-sm-12">
                                                                                            <div className="col-lg-12">
                                                                                                <div className="input-box">
                                                                                                    <input type="text" id="validationDefault02" placeholder="Name*" required />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-12">
                                                                                                <div className="input-box mail-input">
                                                                                                    <input type="text" id="validationDefault03" placeholder="E-mail*" required />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-12">
                                                                                                <div className="rating">
                                                                                                    <p>Your Rating :</p>
                                                                                                    <div className="rating-icon">
                                                                                                        <span className="one"><a href="#"> <i className="fal fa-star"></i></a></span>
                                                                                                        <span className="two"><a href="#"> <i className="fal fa-star"></i></a></span>
                                                                                                        <span className="three"><a href="#"> <i className="fal fa-star"></i></a></span>
                                                                                                        <span className="four"><a href="#"> <i className="fal fa-star"></i></a></span>
                                                                                                        <span className="five"><a href="#"> <i className="fal fa-star"></i></a></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="ms-cf--bottom col-12">
                                                                                                <input className="btn btn--primary" type="submit" value="Submit" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                            <div className="related products">
                                <h2>Related products</h2>
                                <div className="row ms-woo-feed">
                                    {products.map((product, index) => {
                                        return (
                                            <div key={index} className="col-lg-3 col-md-6">
                                                <SingleProduct
                                                    ID= {product.id}
                                                    slug= {product.slug}
                                                    productImg={product.image}
                                                    Title={product.Title}
                                                    Description={product.Description}
                                                    Price={product.Price}
                                                    oldPrice={product.oldPrice}
                                                    Sale={product.saleText}
                                                    Category={product.Category}
                                                    CategoryTwo={product.categoryTwo}
                                                />
                                            </div>
                                        )
                                    }).slice(0, 4)}
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

export default ProductDetails;
