import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SingleBlogTwo = (props) => {
    const { ID, slug, blogImg, blogClass, Title, Description, blogCategory, CategoryTwo, blogAuthor, authorImg, publishedDate, readTimeText, btnText } = props;
    return (
        <article className={blogClass ? blogClass : 'grid-item'}>
            <Link href={`/blog/${slug}`} aria-label={Title}>
                <figure className="media-wrapper">
                    <Image decoding="async" src={`/images/blog/${blogImg}`} alt={Title} width={800} height={600} />
                </figure>
            </Link>
            <div className="post-content">
                <div className="post-header">
                    <div className="post-category__list">
                        <ul className="post-categories">
                            <li><a href="#" rel="category tag">{blogCategory ? blogCategory : 'Design'}</a></li>
                            {CategoryTwo ? <li><a href="#" rel="category tag">{CategoryTwo}</a></li> : null}
                        </ul>
                    </div>
                </div>

                <Link href={`/blog/${slug}`} aria-label="Title">
                    <h2>{Title ? Title : 'UI vs. UX: What’s the difference?'}</h2>
                </Link>

                <p className="post-excerpt">{Description ? Description : 'Completely formulate integrated methods Globally maintain multifunctional products before...'}</p>
                <div className="post-footer">
                    <div className="post-meta-footer">
                        <Link href="#">
                            <Image decoding="async" src={`/images/blog/${authorImg}`} alt={blogAuthor} width={50} height={50} />
                        </Link>
                        <div className="post-meta__info">
                            <span className="post-meta__author">{blogAuthor ? blogAuthor : 'Mad Sparrow'}</span>
                            <div className="card__footer">
                                <span className="post-meta__date">{publishedDate ? publishedDate : 'August 9, 2022'}</span>
                                <span className="ms-p--ttr">{readTimeText ? readTimeText : '2 min read'}</span>
                            </div>
                        </div>
                    </div>
                    <span className="post-footer--link">
                        <Link href={`/blog/${slug}`}>{btnText ? btnText : 'Read More'}</Link>
                    </span>
                </div>
            </div>
        </article>      

    )
}

export default SingleBlogTwo