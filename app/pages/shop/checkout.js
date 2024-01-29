import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';

import productImg1 from "../../public/images/shop/shop-sm01.jpg";
import productImg2 from "../../public/images/shop/shop-sm02.jpg";
import productImg3 from "../../public/images/shop/shop-sm03.jpg";
import productImg4 from "../../public/images/shop/shop-sm04.jpg";


const CheckoutPage = () => {
    const [cupon, setCupon] = useState(false);

    return (
        <>
            <HeaderTwo />

            <main className="ms-main">
                <div className="ms-page-content">
                    <article id="post-284" className="page checkout-area type-page status-publish hentry">
                        <header className="ms-sp--header container">
                            <h1 className="ms-sp--title">Checkout</h1>
                        </header>
                        <div className="ms-default-page container entry-content">
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"></div>
                                <div className="woocommerce-form-coupon-toggle">
                                    <div className="woocommerce-info"> Have a coupon? <a href="#0" className="showcoupon" onClick={() => { setCupon(!cupon); }}>Click here to enter your code</a></div>
                                </div>
                                {cupon ? 
                                    <form className="checkout_coupon woocommerce-form-coupon" method="post">
                                        <p>If you have a coupon code, please apply it below.</p>
                                        <p className="form-row form-row-first">
                                            <input type="text" name="coupon_code" className="input-text" placeholder="Coupon code" id="coupon_code" value="" />
                                        </p>
                                        <p className="form-row form-row-last">
                                            <button type="submit" className="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                        </p>
                                        <div className="clear"></div>
                                    </form>
                                 : null}
                                <div className="woocommerce-notices-wrapper"></div>
                                <form name="checkout" method="post" className="checkout woocommerce-checkout ms-woocommerce-checkout" action="#" enctype="multipart/form-data" novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="woocommerce-billing-fields">
                                                <h3>Billing details</h3>
                                                <div className="woocommerce-billing-fields__field-wrapper">
                                                    <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10">
                                                        <label for="billing_first_name" className="">First name&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="" autocomplete="given-name" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20">
                                                        <label for="billing_last_name" className="">Last name&nbsp; <abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="" autocomplete="family-name" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                        <label for="billing_company" className="">Company name&nbsp;<span className="optional">(optional)</span></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="billing_company" id="billing_company" placeholder="" value="" autocomplete="organization" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field" data-priority="40">
                                                        <label for="billing_country" className="">Country / Region&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <select name="billing_country" id="billing_country" className="country_to_state country_select select2-hidden-accessible" autocomplete="country" data-placeholder="Select a country / region…" data-label="Country / Region" tabIndex="-1" aria-hidden="true">
                                                                <option value="">Select a country / region…</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AX">Åland Islands</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AD">Andorra</option>
                                                                <option value="AO">Angola</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AQ">Antarctica</option>
                                                                <option value="AG">Antigua and Barbuda</option>
                                                                <option value="AR">Argentina</option>
                                                                <option value="AM">Armenia</option>
                                                                <option value="AW">Aruba</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="AZ">Azerbaijan</option>
                                                                <option value="BS">Bahamas</option>
                                                                <option value="BH">Bahrain</option>
                                                                <option value="BD">Bangladesh</option>
                                                                <option value="BB">Barbados</option>
                                                                <option value="BY">Belarus</option>
                                                                <option value="PW">Belau</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BZ">Belize</option>
                                                                <option value="BJ">Benin</option>
                                                                <option value="BM">Bermuda</option>
                                                                <option value="BT">Bhutan</option>
                                                                <option value="BO">Bolivia</option>
                                                                <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                                <option value="BA">Bosnia and Herzegovina</option>
                                                                <option value="BW">Botswana</option>
                                                                <option value="BV">Bouvet Island</option>
                                                                <option value="BR">Brazil</option>
                                                                <option value="IO">British Indian Ocean Territory</option>
                                                                <option value="BN">Brunei</option>
                                                                <option value="BG">Bulgaria</option>
                                                                <option value="BF">Burkina Faso</option>
                                                                <option value="BI">Burundi</option>
                                                                <option value="KH">Cambodia</option>
                                                                <option value="CM">Cameroon</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="CV">Cape Verde</option>
                                                                <option value="KY">Cayman Islands</option>
                                                                <option value="CF">Central African Republic</option>
                                                                <option value="TD">Chad</option>
                                                                <option value="CL">Chile</option>
                                                                <option value="CN">China</option>
                                                                <option value="CX">Christmas Island</option>
                                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                                <option value="CO">Colombia</option>
                                                                <option value="KM">Comoros</option>
                                                                <option value="CG">Congo (Brazzaville)</option>
                                                                <option value="CD">Congo (Kinshasa)</option>
                                                                <option value="CK">Cook Islands</option>
                                                                <option value="CR">Costa Rica</option>
                                                                <option value="HR">Croatia</option>
                                                                <option value="CU">Cuba</option>
                                                                <option value="CW">Curaçao</option>
                                                                <option value="CY">Cyprus</option>
                                                                <option value="CZ">Czech Republic</option>
                                                                <option value="DK">Denmark</option>
                                                                <option value="DJ">Djibouti</option>
                                                                <option value="DM">Dominica</option>
                                                                <option value="DO">Dominican Republic</option>
                                                                <option value="EC">Ecuador</option>
                                                                <option value="EG">Egypt</option>
                                                                <option value="SV">El Salvador</option>
                                                                <option value="GQ">Equatorial Guinea</option>
                                                                <option value="ER">Eritrea</option>
                                                                <option value="EE">Estonia</option>
                                                                <option value="SZ">Eswatini</option>
                                                                <option value="ET">Ethiopia</option>
                                                                <option value="FK">Falkland Islands</option>
                                                                <option value="FO">Faroe Islands</option>
                                                                <option value="FJ">Fiji</option>
                                                                <option value="FI">Finland</option>
                                                                <option value="FR">France</option>
                                                                <option value="GF">French Guiana</option>
                                                                <option value="PF">French Polynesia</option>
                                                                <option value="TF">French Southern Territories</option>
                                                                <option value="GA">Gabon</option>
                                                                <option value="GM">Gambia</option>
                                                                <option value="GE">Georgia</option>
                                                                <option value="DE">Germany</option>
                                                                <option value="GH">Ghana</option>
                                                                <option value="GI">Gibraltar</option>
                                                                <option value="GR">Greece</option>
                                                                <option value="GL">Greenland</option>
                                                                <option value="GD">Grenada</option>
                                                                <option value="GP">Guadeloupe</option>
                                                                <option value="GU">Guam</option>
                                                                <option value="GT">Guatemala</option>
                                                                <option value="GG">Guernsey</option>
                                                                <option value="GN">Guinea</option>
                                                                <option value="GW">Guinea-Bissau</option>
                                                                <option value="GY">Guyana</option>
                                                                <option value="HT">Haiti</option>
                                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                                <option value="HN">Honduras</option>
                                                                <option value="HK">Hong Kong</option>
                                                                <option value="HU">Hungary</option>
                                                                <option value="IS">Iceland</option>
                                                                <option value="IN">India</option>
                                                                <option value="ID">Indonesia</option>
                                                                <option value="IR">Iran</option>
                                                                <option value="IQ">Iraq</option>
                                                                <option value="IE">Ireland</option>
                                                                <option value="IM">Isle of Man</option>
                                                                <option value="IL">Israel</option>
                                                                <option value="IT">Italy</option>
                                                                <option value="CI">Ivory Coast</option>
                                                                <option value="JM">Jamaica</option>
                                                                <option value="JP">Japan</option>
                                                                <option value="JE">Jersey</option>
                                                                <option value="JO">Jordan</option>
                                                                <option value="KZ">Kazakhstan</option>
                                                                <option value="KE">Kenya</option>
                                                                <option value="KI">Kiribati</option>
                                                                <option value="KW">Kuwait</option>
                                                                <option value="KG">Kyrgyzstan</option>
                                                                <option value="LA">Laos</option>
                                                                <option value="LV">Latvia</option>
                                                                <option value="LB">Lebanon</option>
                                                                <option value="LS">Lesotho</option>
                                                                <option value="LR">Liberia</option>
                                                                <option value="LY">Libya</option>
                                                                <option value="LI">Liechtenstein</option>
                                                                <option value="LT">Lithuania</option>
                                                                <option value="LU">Luxembourg</option>
                                                                <option value="MO">Macao</option>
                                                                <option value="MG">Madagascar</option>
                                                                <option value="MW">Malawi</option>
                                                                <option value="MY">Malaysia</option>
                                                                <option value="MV">Maldives</option>
                                                                <option value="ML">Mali</option>
                                                                <option value="MT">Malta</option>
                                                                <option value="MH">Marshall Islands</option>
                                                                <option value="MQ">Martinique</option>
                                                                <option value="MR">Mauritania</option>
                                                                <option value="MU">Mauritius</option>
                                                                <option value="YT">Mayotte</option>
                                                                <option value="MX">Mexico</option>
                                                                <option value="FM">Micronesia</option>
                                                                <option value="MD">Moldova</option>
                                                                <option value="MC">Monaco</option>
                                                                <option value="MN">Mongolia</option>
                                                                <option value="ME">Montenegro</option>
                                                                <option value="MS">Montserrat</option>
                                                                <option value="MA">Morocco</option>
                                                                <option value="MZ">Mozambique</option>
                                                                <option value="MM">Myanmar</option>
                                                                <option value="NA">Namibia</option>
                                                                <option value="NR">Nauru</option>
                                                                <option value="NP">Nepal</option>
                                                                <option value="NL">Netherlands</option>
                                                                <option value="NC">New Caledonia</option>
                                                                <option value="NZ">New Zealand</option>
                                                                <option value="NI">Nicaragua</option>
                                                                <option value="NE">Niger</option>
                                                                <option value="NG">Nigeria</option>
                                                                <option value="NU">Niue</option>
                                                                <option value="NF">Norfolk Island</option>
                                                                <option value="KP">North Korea</option>
                                                                <option value="MK">North Macedonia</option>
                                                                <option value="MP">Northern Mariana Islands</option>
                                                                <option value="NO">Norway</option>
                                                                <option value="OM">Oman</option>
                                                                <option value="PK">Pakistan</option>
                                                                <option value="PS">Palestinian Territory</option>
                                                                <option value="PA">Panama</option>
                                                                <option value="PG">Papua New Guinea</option>
                                                                <option value="PY">Paraguay</option>
                                                                <option value="PE">Peru</option>
                                                                <option value="PH">Philippines</option>
                                                                <option value="PN">Pitcairn</option>
                                                                <option value="PL">Poland</option>
                                                                <option value="PT">Portugal</option>
                                                                <option value="PR">Puerto Rico</option>
                                                                <option value="QA">Qatar</option>
                                                                <option value="RE">Reunion</option>
                                                                <option value="RO">Romania</option>
                                                                <option value="RU">Russia</option>
                                                                <option value="RW">Rwanda</option>
                                                                <option value="ST">São Tomé and Príncipe</option>
                                                                <option value="BL">Saint Barthélemy</option>
                                                                <option value="SH">Saint Helena</option>
                                                                <option value="KN">Saint Kitts and Nevis</option>
                                                                <option value="LC">Saint Lucia</option>
                                                                <option value="SX">Saint Martin (Dutch part)</option>
                                                                <option value="MF">Saint Martin (French part)</option>
                                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                                <option value="WS">Samoa</option>
                                                                <option value="SM">San Marino</option>
                                                                <option value="SA">Saudi Arabia</option>
                                                                <option value="SN">Senegal</option>
                                                                <option value="RS">Serbia</option>
                                                                <option value="SC">Seychelles</option>
                                                                <option value="SL">Sierra Leone</option>
                                                                <option value="SG">Singapore</option>
                                                                <option value="SK">Slovakia</option>
                                                                <option value="SI">Slovenia</option>
                                                                <option value="SB">Solomon Islands</option>
                                                                <option value="SO">Somalia</option>
                                                                <option value="ZA">South Africa</option>
                                                                <option value="GS">South Georgia/Sandwich Islands</option>
                                                                <option value="KR">South Korea</option>
                                                                <option value="SS">South Sudan</option>
                                                                <option value="ES">Spain</option>
                                                                <option value="LK">Sri Lanka</option>
                                                                <option value="SD">Sudan</option>
                                                                <option value="SR">Suriname</option>
                                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                                <option value="SE">Sweden</option>
                                                                <option value="CH">Switzerland</option>
                                                                <option value="SY">Syria</option>
                                                                <option value="TW">Taiwan</option>
                                                                <option value="TJ">Tajikistan</option>
                                                                <option value="TZ">Tanzania</option>
                                                                <option value="TH">Thailand</option>
                                                                <option value="TL">Timor-Leste</option>
                                                                <option value="TG">Togo</option>
                                                                <option value="TK">Tokelau</option>
                                                                <option value="TO">Tonga</option>
                                                                <option value="TT">Trinidad and Tobago</option>
                                                                <option value="TN">Tunisia</option>
                                                                <option value="TR">Turkey</option>
                                                                <option value="TM">Turkmenistan</option>
                                                                <option value="TC">Turks and Caicos Islands</option>
                                                                <option value="TV">Tuvalu</option>
                                                                <option value="UG">Uganda</option>
                                                                <option value="UA">Ukraine</option>
                                                                <option value="AE">United Arab Emirates</option>
                                                                <option value="GB" selected="selected">United Kingdom (UK) </option>
                                                                <option value="US">United States (US)</option>
                                                                <option value="UM">United States (US) Minor Outlying Islands </option>
                                                                <option value="UY">Uruguay</option>
                                                                <option value="UZ">Uzbekistan</option>
                                                                <option value="VU">Vanuatu</option>
                                                                <option value="VA">Vatican</option>
                                                                <option value="VE">Venezuela</option>
                                                                <option value="VN">Vietnam</option>
                                                                <option value="VG">Virgin Islands (British)</option>
                                                                <option value="VI">Virgin Islands (US)</option>
                                                                <option value="WF">Wallis and Futuna</option>
                                                                <option value="EH">Western Sahara</option>
                                                                <option value="YE">Yemen</option>
                                                                <option value="ZM">Zambia</option>
                                                                <option value="ZW">Zimbabwe</option>
                                                            </select>
                                                            <noscript>
                                                                <button type="submit" name="woocommerce_checkout_update_totals" value="Update country / region">Update country / region</button>
                                                            </noscript>
                                                        </span>
                                                    </p>
                                                    <p className="form-row address-field validate-required form-row-wide" id="billing_address_1_field" data-priority="50">
                                                        <label for="billing_address_1" className="">Street address&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" value="" autocomplete="address-line1" data-placeholder="House number and street name" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row address-field form-row-wide" id="billing_address_2_field" data-priority="60">
                                                        <label for="billing_address_2" className="screen-reader-text">Apartment, suite, unit, etc.&nbsp;<span className="optional">(optional)</span></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit, etc. (optional)" value="" autocomplete="address-line2" data-placeholder="Apartment, suite, unit, etc. (optional)" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row address-field validate-required form-row-wide" id="billing_city_field" data-priority="70" data-o_className="form-row form-row-wide address-field validate-required">
                                                        <label for="billing_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="billing_city" id="billing_city" placeholder="" value="" autocomplete="address-level2" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row address-field validate-state form-row-wide" id="billing_state_field" data-priority="80" data-o_className="form-row form-row-wide address-field validate-state">
                                                        <label for="billing_state" className="">County&nbsp;<span className="optional">(optional)</span></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " value="" placeholder="" name="billing_state" id="billing_state" autocomplete="address-level1" data-input-classes="" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row address-field validate-required validate-postcode form-row-wide" id="billing_postcode_field" data-priority="90" data-o_className="form-row form-row-wide address-field validate-required validate-postcode">
                                                        <label for="billing_postcode" className="">Postcode&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="" autocomplete="postal-code" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field" data-priority="100">
                                                        <label for="billing_phone" className="">Phone&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" value="" autocomplete="tel" required />
                                                        </span>
                                                    </p>
                                                    <p className="form-row form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110">
                                                        <label for="billing_email" className="">Email address&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" value="" autocomplete="email" required />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="woocommerce-shipping-fields"> </div>
                                            <div className="woocommerce-additional-fields">
                                                <h3>Additional information</h3>
                                                <div className="woocommerce-additional-fields__field-wrapper">
                                                    <p className="form-row notes" id="order_comments_field" data-priority="">
                                                        <label for="order_comments" className="">Order notes&nbsp;<span className="optional">(optional)</span></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pl-lg-5 col-md-4">
                                            <h3 id="order_review_heading">Your order</h3>
                                            <div id="order_review" className="woocommerce-checkout-review-order">
                                                <table className="ms-checkout-review-order-table shop_table woocommerce-checkout-review-order-table">
                                                    <tbody>
                                                        <tr className="cart_item">
                                                            <td colspan="2">
                                                                <div className="ms-checkout-product">
                                                                    <div className="ms-checkout-product__thumbnail">
                                                                        <Image src={productImg1} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Shop Image" />
                                                                    </div>
                                                                    <div className="ms-checkout-product__content">
                                                                        <h5>Run Max 88 <span className="product-quantity">× 1</span> </h5>
                                                                        <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>120.00</bdi></span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="cart_item">
                                                            <td colspan="2">
                                                                <div className="ms-checkout-product">
                                                                    <div className="ms-checkout-product__thumbnail">
                                                                        <Image src={productImg2} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Shop Image" />
                                                                    </div>
                                                                    <div className="ms-checkout-product__content">
                                                                        <h5>Workout Revolution 2 <span className="product-quantity">× 1</span></h5>
                                                                        <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>180.00</bdi></span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="cart_item">
                                                            <td colspan="2">
                                                                <div className="ms-checkout-product">
                                                                    <div className="ms-checkout-product__thumbnail">
                                                                        <Image src={productImg3} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Shop Image" />
                                                                    </div>
                                                                    <div className="ms-checkout-product__content">
                                                                        <h5>KL 17 BS <span className="product-quantity">× 1</span> </h5>
                                                                        <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>80.00</bdi></span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="cart_item">
                                                            <td colspan="2">
                                                                <div className="ms-checkout-product">
                                                                    <div className="ms-checkout-product__thumbnail">
                                                                        <Image src={productImg4} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Shop Image" />
                                                                    </div>
                                                                    <div className="ms-checkout-product__content">
                                                                        <h5>Flex Armour <span className="product-quantity">× 1</span></h5>
                                                                        <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>139.00</bdi></span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr className="cart-subtotal">
                                                            <th>Subtotal</th>
                                                            <td><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>519.00</bdi></span>
                                                            </td>
                                                        </tr>
                                                        <tr className="order-total">
                                                            <th>Total</th>
                                                            <td><strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>519.00</bdi></span></strong>
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                                <div id="payment" className="woocommerce-checkout-payment">
                                                    <ul className="wc_payment_methods payment_methods methods">
                                                        <li className="woocommerce-notice woocommerce-notice--info woocommerce-info">
                                                            Sorry, it seems that there are no available payment methods for your
                                                            state. Please contact us if you require assistance or wish to make
                                                            alternate arrangements.
                                                        </li>
                                                    </ul>
                                                    <div className="form-row place-order">
                                                        <noscript>
                                                            Since your browser does not support JavaScript, or it is disabled,
                                                            please ensure you click the <em>Update Totals</em> button before
                                                            placing your order. You may be charged more than the amount stated
                                                            above if you fail to do so. <br />
                                                            <button type="submit" className="button alt" name="woocommerce_checkout_update_totals" value="Update totals">Update totals</button>
                                                        </noscript>
                                                        <div className="woocommerce-terms-and-conditions-wrapper">
                                                            <div className="woocommerce-privacy-policy-text">
                                                                <p>Your personal data will be used to process your order,
                                                                    support your experience throughout this website, and for
                                                                    other purposes described in our 
                                                                    <a href="#0" className="woocommerce-privacy-policy-link" target="_blank"> privacy policy</a>.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-proceed-to-checkout wc-proceed-to-checkout">
                                                            <a href="#" className="checkout-button button alt wc-forward wp-element-button"> Place Order</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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

export default CheckoutPage;
