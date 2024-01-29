import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import products from '../../src/data/Products.json';

const ShopSidebar = () => {

    const [value, setValue] = useState(50);
    const [upperValue, setUpperValue] = useState(180);

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleChangeUpper(event) {
        setUpperValue(event.target.value);
    }

    return (
        <>
            <div className="ms-sidebar ms-sb-wc ms-sidebar--right">
                <aside id="woocommerce_price_filter-3" className="woocommerce widget_price_filter">
                    <div className="text-divider">
                        <h5>Filter by price</h5>
                    </div>
                    <div className="wrapper">
                        <fieldset className="filter-price">
                            <div className="price-field">
                                <input type="range" min="50" max="180" id="lower" value={value} onChange={handleChange} />
                                <input type="range" min="50" max="180" id="upper" value={upperValue} onChange={handleChangeUpper} />
                            </div>
                            <div className="price-wrap">
                                <span className="price-title">PRICE:</span>
                                <div className="price-wrap-1">
                                    <input id="one" value={value} />
                                    <label for="one">$</label>
                                </div>
                                <div className="price-wrap_line">-</div>
                                <div className="price-wrap-2">
                                    <input id="two" value={upperValue} />
                                    <label for="two">$</label>
                                </div>
                                <div className="filter-btn">
                                    <button type="submit" className="btn">FILTER</button>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </aside>
                <aside id="woocommerce_products-3" className="woocommerce widget_products">
                    <div className="text-divider">
                        <h5>Products</h5>
                    </div>
                    <ul className="product_list_widget">
                        {products.map((product, index) => {
                            return (
                                <li key={index}>
                                    <Link className="ms-widget-product__img" href={`/shop/${product.slug}`}>
                                        <Image src={`/images/shop/${product.image}`} alt={product.Title} width={800} height={600} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" />
                                    </Link>
                                    <div className="ms-widget-product__content">
                                        <Link href={`/shop/${product.slug}`}>
                                            <span className="product-title">{product.Title}</span>
                                        </Link>
                                        <div className="product-price">
                                            <span className="woocommerce-Price-amount amount"> <span className="woocommerce-Price-currencySymbol">$</span>{product.Price}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        }).slice(0, 5)}
                    </ul>
                </aside>
                <aside id="woocommerce_product_categories-3" className="woocommerce widget_product_categories">
                    <div className="text-divider">
                        <h5>Product categories</h5>
                    </div>
                    <ul className="product-categories">
                        <li className="cat-item cat-item-27"><a href="#0">For Running</a></li>
                        <li className="cat-item cat-item-29"><a href="#0">Training</a></li>
                        <li className="cat-item cat-item-26"><a href="#0">Uncategorized</a></li>
                        <li className="cat-item cat-item-30"><a href="#0">Walking</a></li>
                        <li className="cat-item cat-item-28"><a href="#0">Workout</a> </li>
                    </ul>
                </aside>
                <aside id="woocommerce_product_tag_cloud-2" className="woocommerce widget_product_tag_cloud">
                    <div className="text-divider">
                        <h5>Product tags</h5>
                    </div>
                    <div className="tagcloud">
                        <a href="#0" className="tag-cloud-link tag-link-33 tag-link-position-1">Life</a>
                        <a href="#0" className="tag-cloud-link tag-link-32 tag-link-position-2">Move</a>
                        <a href="#0" className="tag-cloud-link tag-link-34 tag-link-position-3">Sport</a>
                        <a href="#0" className="tag-cloud-link tag-link-31 tag-link-position-4">Trainers</a>
                    </div>
                </aside>
            </div>
                    
        </>
    );
}

export default ShopSidebar;
