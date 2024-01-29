import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SinglePortfolio = (props) => {
  const { slug, itemClass, imgClass, contentClass, itemImg, Title, Category } = props;
    
	return(
        <div className={itemClass ? itemClass : 'flash grid-item-p'}>
            <div className="item--inner">
                <Link href={`/project/${slug}`} aria-label={Title ? Title : 'Freezing Birthday'}>
                    <figure className={imgClass ? imgClass : 'ms-p-img media-wrapper media-wrapper--4:3'}>
                        <Image src={`/images/portfolio/${itemImg}`} alt={Title ? Title : 'Freezing Birthday'} width={800} height={600} />
                    </figure>
                    <div className={contentClass ? contentClass : 'ms-p-content'}>
                        <h3>{Title ? Title : 'Freezing Birthday'}</h3>
                        <h4 className="ms-p-cat">{Category ? Category : 'Creative'}</h4>
                    </div>
                </Link>
            </div>
        </div>
	)
}

export default SinglePortfolio