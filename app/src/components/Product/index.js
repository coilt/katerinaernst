import Link from 'next/link';
import Image from 'next/image';

import productImg1 from "../../../public/images/shop/shop-01.jpg";

const SingleProduct = (props) => {
  const { ID, slug, itemClass, productImg, Title, Price, oldPrice, Category, categoryTwo, btnText, Sale } = props;
    
	return(
        <article className={itemClass ? itemClass : 'ms-product'}>
          <div className="ms-product-media">
              <Link href={`/shop/${slug}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                {Sale ? <span className="onsale">{Sale}!</span> : null}
                  <Image src={`/images/shop/${productImg}`} alt={Title} width={800} height={600} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" />
              </Link>
          </div>
          <Link href={`/shop/${slug}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></Link>
          <div className="ms-product-content">
              <Link href={`/shop/${slug}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></Link>
              <div className="ms-product-cat">
                  <Link href={`/shop/${slug}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></Link>
                  <Link href={`/shop/${slug}`} rel="tag">{Category}</Link>{categoryTwo ? <>, <Link href={`/shop/${slug}`} rel="tag">{categoryTwo}</Link></> : ''}
              </div>
              <h5 className="ms-product-title">
                  <Link href={`/shop/${slug}`}>{Title}</Link>
              </h5>
              <div className="ms-product-footer">
                  <div className="ms-product-price">
                      <span className="price">
                        {oldPrice ? 
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                               <bdi><span className="woocommerce-Price-currencySymbol">$</span>{oldPrice}</bdi>
                            </span>
                          </del> 
                        : null}
                          <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi> <span className="woocommerce-Price-currencySymbol">$</span>{Price}</bdi>
                              </span>
                          </ins>
                      </span>
                  </div>
                  <div className="ms-product-link">
                      <Link href="/shop/cart" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">{btnText ? btnText : 'Add to cart'}</Link>
                  </div>
              </div>
          </div>
      </article>
	)
}

export default SingleProduct