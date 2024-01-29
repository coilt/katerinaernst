import React from 'react';
import Link from 'next/link';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';
import Breadcrumb from '../../src/components/Breadcrumb';
import SingleBlog from '../../src/components/Blog/';

import posts from '../../src/data/Posts.json';

const Blog = () => {
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
                        <div className="ms-posts--wrap">
                            <div className="row ms-posts--card">
                                {posts.map((blog, index) => {
                                    return (
                                        <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                                            <SingleBlog
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
                                        </div>
                                    )
                                }).slice(0, 6)}
                                <nav className="pagination" aria-label="Pagination">
                                    <ol className="pagination__list">
                                        <li className="page-item active"><a href="#0" className="pagination__item">1</a></li>
                                        <li className="display--sm"><a href="#0" className="pagination__item pagination__item--ellipsis">2</a></li>
                                        <li className="page-item next"><a href="#0">Next</a> </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer /> 
                    
        </>
    );
}

export default Blog;
