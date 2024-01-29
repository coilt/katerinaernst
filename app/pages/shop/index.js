import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import ShopSidebar from './ShopSidebar';

import SingleProduct from '../../src/components/Product';
import products from '../../src/data/Products.json';

import catImg1 from "../../public/images/shop/shop-sm01.jpg";
import catImg2 from "../../public/images/shop/shop-sm02.jpg";
import catImg3 from "../../public/images/shop/shop-sm03.jpg";
import catImg4 from "../../public/images/shop/shop-sm04.jpg";

const Shop = () => {

    return (
        <>
            <HeaderTwo />

            <main className="ms-main">
                <div className="container">
                    <header className="ms-sp--header">
                        <h1 className="ms-sp--title">Shop</h1>
                    </header>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="woocommerce-notices-wrapper"></div>
                            <div className="woocommerce-content-loop-header">
                                <p className="woocommerce-result-count">
                                    Showing 1–6 of 7 results</p>
                                <form className="woocommerce-ordering" method="get">
                                    <select name="orderby" className="orderby" aria-label="Shop order">
                                        <option value="menu_order" selected="selected">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by latest</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                    <input type="hidden" name="paged" value="1" />
                                </form>
                            </div>
                            <div className="row ms-woo-feed">
                                <div className="ms-woocommerce-product-category">
                                    <div className="product-category product first">
                                        <div className="ms-product-media">
                                            <Link href="#">
                                                <Image src={catImg1} alt="For Running" />
                                            </Link>
                                        </div>
                                        <div className="ms-product-content">
                                            <h3 className="ms-product-title">
                                                <Link href="#">For Running</Link>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="product-category product last">
                                        <div className="ms-product-media">
                                            <Link href="#">
                                                <Image src={catImg3} alt="Training" />
                                            </Link>
                                        </div>
                                        <div className="ms-product-content">
                                            <h3 className="ms-product-title">
                                                <Link href="#">Training</Link>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="product-category product first">
                                        <div className="ms-product-media">
                                            <Link href="#">
                                                <Image src={catImg2} alt="Walking" />
                                            </Link>
                                        </div>
                                        <div className="ms-product-content">
                                            <h3 className="ms-product-title">
                                                <Link href="#">Walking</Link>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="product-category product last">
                                        <div className="ms-product-media">
                                            <Link href="#">
                                                <Image src={catImg4} alt="Workout" />
                                            </Link>
                                        </div>
                                        <div className="ms-product-content">
                                            <h3 className="ms-product-title">
                                                <Link href="#">Workout</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                {products.map((product, index) => {
                                    return (
                                        <div key={index} className="col-sm-6">
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
                                }).slice(0, 6)}
                            </div>
                            <nav className="woocommerce-pagination">
                                <ul className="page-numbers">
                                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                                    <li><a className="page-numbers" href="#0">2</a></li>
                                    <li><a className="next page-numbers" href="#0">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="pl-lg-5 col-lg-4">
                            <ShopSidebar />
                        </div>
                    </div>
                </div>
            </main>

            <Footer /> 
                    
        </>
    );
}

export default Shop;
