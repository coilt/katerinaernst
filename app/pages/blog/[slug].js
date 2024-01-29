import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import Footer from '../../src/components/Footer';

import posts from '../../src/data/Posts.json';

import blogImg1 from "../../public/images/blog/blog-sm6.jpg";
import blogImg2 from "../../public/images/blog/blog-sm7.jpg";

function SinglePost() {

  const router = useRouter();
    var slug = router.query.slug;
    if (slug === undefined) {
        slug = 'ui-vs-ux-whats-the-difference';
    }

    // Find the data for the current slug in your JSON data
    const post = posts.find(item => item.slug === slug)

  return (
    <>
      <HeaderTwo />

        <main className="ms-main ms-single-post inner">
            <div className="ms-single-post--img default">
                <figure className="media-wrapper">
                    <Image src={`/images/blog/${post.image}`} width={800} height={600} alt={post.title} />
                </figure>
            </div>
            <header className="ms-sp--header">
                <div className="post-category__list">
                    <ul className="post-categories">
                        <li><a href="#0" rel="category tag">{post.category}</a></li>
                    </ul>
                </div>
                <div className="container">
                    <h1 className="heading-title single">UI vs. UX: What’s the difference?</h1>
                    <div className="post-meta-date meta-date-sp">
                        <span className="post-author__name">{post.author}</span>
                        <span>{post.publishedDate}</span>
                    </div>
                </div>
            </header>
            <article className="ms-sp--article">
                <div className="entry-content">
                    <h3><strong>Completely formulate integrated methods</strong></h3>
                    <p>{post.description}</p>
                    <p>Globally maintain multifunctional products before ubiquitous applications. Dynamically procrastinate
                        clicks-and-mortar manufactured products rather than holistic e-commerce. Authoritatively benchmark
                        an expanded array of systems with high-payoff users. Proactively target dynamic opportunities and
                        strategic expertise. Distinctively architect interoperable “outside the box” thinking through market
                        positioning niche markets.
                    </p>
                    <p>Enthusiastically coordinate one-to-one meta-services whereas accurate ideas. Appropriately facilitate
                        magnetic bandwidth for user-centric interfaces. Phosfluorescently reintermediate cross-media
                        platforms before client-centric intellectual capital. Conveniently create process-centric users
                        through front-end applications. Seamlessly reintermediate accurate opportunities with 2.0 vortals.
                    </p>
                    <blockquote className="wp-block-quote is-style-default">
                        <p>Quickly incubate B2B imperatives through e-business e-business. Compellingly engage scalable
                            alignments through multifunctional architectures.
                        </p>
                        <cite>Mad Sparrow</cite>
                    </blockquote>
                    <p>Distinctively procrastinate interactive technology and process-centric mindshare. Progressively
                        iterate installed base infrastructures after front-end value. Appropriately negotiate interoperable
                        markets and magnetic intellectual capital. Credibly orchestrate multifunctional vortals and quality
                        synergy. Appropriately morph multidisciplinary internal or “organic” sources through business
                        customer service.
                    </p>
                    <h3><strong>Interactively leverage existing timely</strong></h3>
                    <p>Competently visualize 2.0 mindshare via B2B process improvements. Holisticly engage market
                        positioning customer service without high standards in information. Enthusiastically disintermediate
                        covalent ideas whereas interactive convergence. Professionally e-enable diverse technology via fully
                        researched ROI. Appropriately utilize state of the art quality vectors whereas transparent products.
                    </p>
                    <p>Efficiently aggregate fully researched relationships and mission-critical quality vectors.
                        Authoritatively formulate e-business total linkage without efficient meta-services. Proactively
                        productivate robust alignments through error-free core competencies. Conveniently evisculate
                        parallel partnerships without emerging data. Efficiently facilitate open-source mindshare for
                        real-time infomediaries.
                    </p>
                    <p>Holisticly strategize interdependent action items with end-to-end platforms. Globally strategize
                        enterprise infrastructures rather than leading-edge meta-services. Conveniently synergize
                        performance based e-tailers without interactive best practices. Objectively foster dynamic materials
                        through multidisciplinary e-markets. Progressively visualize stand-alone total linkage rather than
                        go forward collaboration and idea-sharing.
                    </p>
                </div>
            </article>
            <div className="single-post__tags">
                <a href="#0" rel="tag">News</a>
                <a href="#0" rel="tag">Travel</a>
                <a href="#0" rel="tag">UX/UI Design</a>
            </div>
            <nav className="navigation post-navigation">
                <div className="nav-links">
                    <div className="nav-previous">
                        <a href="#0" rel="prev">
                            <div className="prev-post">
                                <div className="ms-spp">
                                    <span className="nav-label" aria-hidden="true">Previous Article</span>
                                    <h3 className="post-title">UX design is shifting towards realism</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="nav-next"> </div>
                </div>
            </nav>
            <section className="ms-related-posts">
                <div className="alignwide">
                    <h2 className="ms-rp--title">Related Posts</h2>
                    <article className="ms-rp--block">
                        <div className="ms-rp--top">
                            <Image src={`/images/blog/${post.authorImg}`} width={50} height={50} alt={post.author} />
                            <span className="post-meta__author">Mad Sparrow</span>
                            <span className="ms-rp__date">August 9, 2022</span>
                        </div>
                        <div className="ms-rp--inner">
                            <div className="rp-inner__left">
                                <Link href="/blog/the-biggest-design-trends-of-2022" rel="bookmark" title="The Biggest Design Trends of 2022">
                                    <div className="ms-rp--cont">
                                        <div className="ms-rp--text">
                                            <h3 className="ms-rp__title">The Biggest Design Trends of 2022</h3>
                                            <div>
                                                <p className="post-excerpt">Efficiently strategize just in time process Globally
                                                    maintain multifunctional products before ubiquitous applications.
                                                    Dynamically...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="rp-inner__right">
                                <Link href="/blog/the-biggest-design-trends-of-2022" rel="bookmark" title="The Biggest Design Trends of 2022">
                                    <figure className="ms-rp--thumb">
                                        <Image src={blogImg1} alt="The Biggest Design Trends of 2022" />
                                    </figure>
                                </Link>
                            </div>
                        </div>

                        <div className="rp-inner__footer">
                            <div className="rp-post-category">
                                <ul className="post-categories">
                                    <li><a href="#0" rel="category tag">Design</a></li>
                                    <li><a href="#0" rel="category tag">Events</a></li>
                                </ul>
                            </div>
                            <span className="ms-rp--ttr">2 min read</span>
                        </div>
                    </article>
                    <article className="ms-rp--block">
                        <div className="ms-rp--top">
                            <Image src={`/images/blog/${post.authorImg}`} width={50} height={50} alt={post.author} />
                            <span className="post-meta__author">Mad Sparrow</span>
                            <span className="ms-rp__date">August 9, 2022</span>
                        </div>

                        <div className="ms-rp--inner">

                            <div className="rp-inner__left">
                                <Link href="/blog/understand-the-background-of-design" rel="bookmark" title="Understand The Background Of Design">
                                    <div className="ms-rp--cont">
                                        <div className="ms-rp--text">
                                            <h3 className="ms-rp__title">Understand The Background Of Design</h3>
                                            <div>
                                                <p className="post-excerpt">Phosfluorescently incubate go forward internal or
                                                    “organic” sources and competitive ideas. Synergistically communicate
                                                    bricks-and-clicks e-b...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="rp-inner__right">
                                <Link href="/blog/understand-the-background-of-design" rel="bookmark" title="Understand The Background Of Design">
                                    <figure className="ms-rp--thumb">
                                        <Image src={blogImg2} alt="Understand The Background Of Design" />
                                    </figure>
                                </Link>
                            </div>
                        </div>
                        <div className="rp-inner__footer">
                            <div className="rp-post-category">
                                <ul className="post-categories">
                                    <li><a href="#0" rel="category tag">Design</a></li>
                                    <li><a href="#0" rel="category tag">Photography</a></li>
                                </ul>
                            </div>
                            <span className="ms-rp--ttr">2 min read</span>
                        </div>

                    </article>
                </div>
            </section>

            <div id="comments" className="ms-comments-area">
                <div className="ms-section__comments">
                    <div id="respond" className="comment-respond">
                        <h2 id="reply-title">Leave a Reply <a rel="nofollow" id="cancel-comment-reply-link" href="#0">Cancel Reply</a></h2>
                        <form action="#0" method="post" id="commentform" className="row" novalidate="">
                            <p className="comment-notes">
                                <span id="email-notes">Your email address will not be published.</span>
                                <span className="required-field-message">Required fields are marked <span className="required">*</span></span>
                            </p>
                            <div className="form-group form-comment col-12">
                                <textarea id="ms-comment" className="form-control" placeholder="Your Comment" name="comment" rows="8" required="required"></textarea>
                            </div>
                            <div className="form-group form-comment col-md-6">
                                <input id="ms-author" name="author" type="text" className="form-control" placeholder="Name" value="" required="required" />
                            </div>
                            <div className="form-group form-comment col-md-6">
                                <input id="ms-email" name="email" className="form-control" placeholder="Email" type="text" value="" required="required" />
                            </div>
                            <p className="comment-form-cookies-consent">
                                <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                                <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                            </p>
                            <p className="form-submit">
                                <button type="submit" id="submit" className="btn--comments" data-title="Post Comment">Post Comment</button>
                                <input type="hidden" name="comment_post_ID" value="29" id="comment_post_ID" />
                                <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <Footer /> 
    </>
  );
}

export default SinglePost;
