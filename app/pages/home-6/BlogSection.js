import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import posts from '../../src/data/Posts.json';
import SingleBlog from '../../src/components/Blog';

import authorImg from "../../public/images/blog/author.png";
import blogImg1 from "../../public/images/blog/blog-1.jpg";
import blogImg2 from "../../public/images/blog/blog-2.jpg";
import blogImg3 from "../../public/images/blog/blog-3.jpg";

const HomeFivePortfolio = () => {
    return (
        <>
            <div className="blog-area">
                <div className="container">
                    <h2 className="sub-title">News</h2>
                    <h2 className="heading-title">Some Pieces <br/> of the Newsletter</h2>
                    <div className="ms-posts--wrap">
                        <div className="row ms-posts--card" id="d681c37" data-order="">
                            {posts.map((blog, index) => {
                                return (
                                    <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                                        <SingleBlog
                                            ID= {blog.id}
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
                            }).slice(0, 3)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeFivePortfolio;
