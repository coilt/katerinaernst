import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import posts from '../../data/Posts.json';

const BlogSidebar = () => {
    return (
        <>
            <div className="ms-sidebar">
                <aside className="ms_widget_recent_posts">
                    <div className="text-divider">
                        <h5>Recent Posts</h5>
                    </div>
                    <ul>
                        {posts.map((blog, index) => {
                            return (
                                <li key={index} className="recent-post">
                                    <Link href={`/blog/${blog.slug}`}>
                                        <div className="post-image">
                                            <Image  src={`/images/blog/${blog.smImg}`} alt={blog.title} width={50} height={50} className="attachment-most-recent-post-thumb size-most-recent-post-thumb wp-post-image" />
                                        </div>
                                        <div className="recent-post__info">{blog.title} <span className="post-date">{blog.publishedDate}</span> </div>
                                    </Link>
                                </li>
                            )
                        }).slice(0, 5)}
                    </ul>
                </aside>
                <aside id="categories-2" className="widget_categories">
                    <div className="text-divider">
                        <h5>Categories</h5>
                    </div>
                    <ul>
                        <li className="cat-item cat-item-4">
                            <Link href="#0">Design</Link>
                        </li>
                        <li className="cat-item cat-item-5">
                            <Link href="#0">Events</Link>
                        </li>
                        <li className="cat-item cat-item-6">
                            <Link href="#0">Photography</Link>
                        </li>
                        <li className="cat-item cat-item-1">
                            <Link href="#0">Uncategorized</Link>
                        </li>
                        <li className="cat-item cat-item-7">
                            <Link href="#0">WordPress</Link>
                        </li>
                    </ul>
                </aside>
                <aside id="tag_cloud-3" className="widget_tag_cloud">
                    <div className="text-divider">
                        <h5>Tags</h5>
                    </div>
                    <div className="tagcloud">
                        <Link href="#0" className="tag-cloud-link tag-link-44 tag-link-position-1">Design</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-51 tag-link-position-2">Life Style</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-46 tag-link-position-3">News</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-52 tag-link-position-4">NFT</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-50 tag-link-position-5">Photography</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-45 tag-link-position-6">Realism</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-53 tag-link-position-7">Things</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-47 tag-link-position-8">Travel</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-49 tag-link-position-9">Trend</Link>
                        <Link href="#0" className="tag-cloud-link tag-link-54 tag-link-position-10">UX/UI Design</Link>
                    </div>
                </aside>
                <aside className="widget_mc4wp_form_widget">
                    <div className="text-divider">
                        <h5>Newsletter</h5>
                    </div>
                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-1146" method="post" blog-id="1146" blog-name="">
                        <div className="mc4wp-form-fields">
                            <div className="ms-mc4wp--wrap">
                                <div className="row">
                                    <div className="ms-mc4wp--content col-lg-6">
                                        <h2>Join our Newsletter</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                                            ipsum quo nihil ipsam sapiente. Suscipit, rerum! </p>
                                    </div>
                                    <div className="ms-mc4wp--action col-lg-6">
                                        <div className="ms-mc4wp--ac">
                                            <input className="form-control" type="email" name="EMAIL" placeholder="Your e-mail address" required="" />
                                            <a className="btn btn-default btn--md btn--primary" role="button" href="#">
                                                <div className="ms-btn__text">Click Here</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="_mc4wp_timestamp" value="1675920229" />
                        <input type="hidden" name="_mc4wp_form_id" value="1146" />
                        <input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                        <div className="mc4wp-response"></div>
                    </form>
                </aside>
            </div>
                    
        </>
    );
}

export default BlogSidebar;
