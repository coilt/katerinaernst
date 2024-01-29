import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderThree from '../../src/components/Header/HeaderThree';
import Footer from '../../src/components/Footer';

import productImg1 from "../../public/images/shop/shop-01.jpg";
import productImg2 from "../../public/images/shop/shop-02.jpg";
import productImg3 from "../../public/images/shop/shop-03.jpg";
import productImg4 from "../../public/images/shop/shop-04.jpg";


const CartPage = () => {

    const [values, setValues] = useState([
        { id: 1, value: 1, img:productImg1, title:'Run Max 88', price:120.00 },
        { id: 2, value: 1, img:productImg2, title:'Workout Revolution 2', price:180.00 },
        { id: 3, value: 1, img:productImg3, title:'	KL 17 BS', price:80.00 },
        { id: 4, value: 1, img:productImg4, title:'Flex Armour', price:139.00 },
    ]);

    function handleChange(id, value) {
        const newValues = values.map(item => {
          if (item.id === id) {
            return { ...item, value: Number(value) };
          }
          return item;
        });
        setValues(newValues);
    }
    
    function handleIncrement(id) {
        const newValues = values.map(item => {
          if (item.id === id) {
            return { ...item, value: item.value + 1 };
          }
          return item;
        });
        setValues(newValues);
    }
    
    function handleDecrement(id) {
        const newValues = values.map(item => {
          if (item.id === id && item.value > 1) {
            return { ...item, value: item.value - 1 };
          }
          return item;
        });
        setValues(newValues);
    }

    const total = values.reduce((acc, curr) => acc + curr.value * curr.price, 0);

    return (
        <>
            <HeaderThree />

            <main className="ms-main">
                <div className="ms-page-content">
                    <article id="post-283" className="post-283 page type-page status-publish hentry">
                        <header className="ms-sp--header container">
                            <h1 className="ms-sp--title">Cart</h1>
                        </header>
                        <div className="ms-default-page container">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"></div>
                                <div className="ms-woocommerce-cart-form-wrapper">
                                    <form className="woocommerce-cart-form" action="#" method="post">
                                        <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                                            <thead>
                                                <tr>
                                                    <th className="product-remove">&nbsp;</th>
                                                    <th className="product-thumbnail">&nbsp;</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {values.map(item => (
                                                    <tr className="woocommerce-cart-form__cart-item cart_item" key={item.id}>
                                                        <td className="product-remove">
                                                            <a href="#0" className="remove" aria-label="Remove this item" data-product_id="470" data-product_sku="161056">
                                                                <svg viewBox="0 0 200 200" width="18" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z">
                                                                    </path>
                                                                </svg>
                                                            </a>
                                                        </td>
                                                        <td className="product-thumbnail">
                                                            <a href="#0">
                                                                <Image src={item.img} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                                            </a>
                                                        </td>
                                                        <td className="product-name" data-title="Product">
                                                            <a href="#0">{item.title}</a>
                                                        </td>

                                                        <td className="product-price" data-title="Price">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi><span className="woocommerce-Price-currencySymbol">$</span>{item.price}</bdi>
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity" data-title="Quantity">
                                                            <div className="ms-quantity">
                                                                <button type="button" className="button-minus"  onClick={() => handleDecrement(item.id)}>
                                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <line x1="7" x2="25" y1="16" y2="16"></line>
                                                                        </g>
                                                                    </svg>
                                                                </button>
                                                                <input type="number" className="input-text qty text" step="1" min="0" max="7" name="cart[26337353b7962f533d78c762373b3318][qty]" value={item.value} title="Qty" placeholder="" inputmode="numeric" autocomplete="off"  onChange={event => handleChange(item.id, event.target.value)} />
                                                                <button type="button" className="button-plus"  onClick={() => handleIncrement(item.id)}><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <line x1="16" x2="16" y1="7" y2="25"></line>
                                                                            <line x1="7" x2="25" y1="16" y2="16"></line>
                                                                        </g>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="product-subtotal" data-title="Subtotal">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi><span className="woocommerce-Price-currencySymbol">$</span>{item.price * item.value}</bdi>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td colspan="6" className="actions">
                                                        <div className="ms-actions-inner">
                                                            <div className="coupon">
                                                                <input type="text" name="coupon_code" className="input-text" id="coupon_code" placeholder="Coupon code" />
                                                                <button type="submit" className="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                                            </div>
                                                            <button type="submit" className="button" name="update_cart" value="Update cart" disabled="" aria-disabled="true">Update cart</button>
                                                            <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="babb50821b" />
                                                            <input type="hidden" name="_wp_http_referer" value="/most/cart/" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                    <div className="row">
                                        <div className="col-md-5 offset-md-7">
                                            <div className="ms-cart-collaterals cart-collaterals">
                                                <div className="ms-cart-totals cart_totals ">
                                                    <h3>Cart totals</h3>
                                                    <table className="shop_table shop_table_responsive">
                                                        <tbody>
                                                            <tr className="cart-subtotal">
                                                                <th>Subtotal</th>
                                                                <td data-title="Subtotal">
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi><span className="woocommerce-Price-currencySymbol">$</span>{total}</bdi>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <th>Total</th>
                                                                <td data-title="Total">
                                                                    <strong><span className="woocommerce-Price-amount amount">
                                                                        <bdi><span className="woocommerce-Price-currencySymbol">$</span>{total}</bdi></span>
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="ms-proceed-to-checkout wc-proceed-to-checkout">
                                                        <a href="#0" className="checkout-button button alt wc-forward wp-element-button"> Proceed to checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </article>
                </div>
            </main>

            <Footer /> 
                    
        </>
    );
}

export default CartPage;
