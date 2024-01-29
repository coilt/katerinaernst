import React from 'react';
import Link from 'next/link';
import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';

import Breadcrumb from '../../src/components/Breadcrumb';
import SingleBlogThree from '../../src/components/Blog/SingleBlogThree';

import BlogSidebar from '../../src/components/Blog/BlogSidebar';
import posts from '../../src/data/Posts.json';

import authorImg from "../../public/images/blog/author.png";
import blogImg1 from "../../public/images/blog/blog-1.jpg";
import blogImg2 from "../../public/images/blog/blog-2.jpg";
import blogImg3 from "../../public/images/blog/blog-3.jpg";
import blogImg4 from "../../public/images/blog/blog-4.jpg";

const BlogRandomThumb = () => {
    return (
        <>
            <HeaderTwo />
            
            <Breadcrumb
                pageTitle=""
                pageSubTitle=""
            />

            <main className="ms-main">
                <div className="blog-post-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="ms-posts--wrap">
                                    <div className="ms-posts--list" data-order="order_3">
                                        {posts.map((blog, index) => {
                                            return (
                                                <SingleBlogThree
                                                    ID= {blog.id}
                                                    slug= {blog.slug}
                                                    blogImg={blog.image}
                                                    Title={blog.title}
                                                    Description={blog.description}
                                                    blogCategory={blog.category}
                                                    CategoryTwo={blog.categoryTwo}
                                                    blogAuthor={blog.author}
                                                    authorImg={blog.authorImg}
                                                    publishedDate={blog.publishedDate}
                                                    btnText={blog.btnText}
                                                />
                                            )
                                        }).slice(0, 4)}
                                        <nav className="pagination" aria-label="Pagination">
                                            <ol className="pagination__list">
                                                <li className="page-item active"><Link href="#0" className="pagination__item">1</Link></li>
                                                <li><Link href="#" className="pagination__item">2</Link></li>
                                                <li><Link href="#" className="pagination__item">3</Link></li>
                                                <li className="page-item next"><Link href="#0">Next</Link> </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer /> 
                    
        </>
    );
}

export default BlogRandomThumb;
