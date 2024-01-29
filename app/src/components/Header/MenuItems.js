import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MenuItems = (props) => {
    const { parentMenu } = props;

    const location = useRouter();

    const [home, setHome] = useState(false)
	const [stories, setStories] = useState(false)
	const [works, setWorks] = useState(false)
	const [page, setPage] = useState(false)
	const [shop, setShop] = useState(false)

	const openMobileMenu = menu => {
		if (menu === 'home') {
			setHome(!home)
			setStories(false)
			setWorks(false)
			setPage(false)
			setShop(false)
		}
		if (menu === 'stories') {
			setHome(false)
			setStories(!stories)
			setWorks(false)
			setPage(false)
			setShop(false)
		}
		if (menu === 'works') {
			setHome(false)
			setStories(false)
			setWorks(!works)
			setPage(false)
			setShop(false)
		}
		else if (menu === 'page') {
			setHome(false)
			setStories(false)
			setWorks(false)
			setPage(!page)
			setShop(false)
		}
		if (menu === 'shop') {
			setHome(false)
			setStories(false)
			setWorks(false)
			setPage(false)
			setShop(!shop)
		}
	};

    return (
        <>
            <li className={parentMenu === 'home' ? 'menu-item menu-item-has-children active' : 'menu-item menu-item-has-children'}><Link href="#" title="Home" onClick={() => { openMobileMenu('home'); }} className={home ? "active" : ""}><span>Home</span></Link>
                <ul className={home ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location === "/home-2" ? "menu-item active" : "menu-item"}><Link href="/home-2">Home Portfolio</Link></li>
                    <li className={location === "/" ? "menu-item active" : "menu-item"}><Link href="/">Full Page Slider</Link></li>
                    <li className={location === "/home-3" ? "menu-item active" : "menu-item"}><Link href="/home-3">Personal Portfolio</Link></li>
                    <li className={location === "/home-4" ? "menu-item active" : "menu-item"}><Link href="/home-4">Personal CV</Link></li>
                    <li className={location === "/home-5" ? "menu-item active" : "menu-item"}><Link href="/home-5">Creative Agency</Link></li>
                    <li className={location === "/home-6" ? "menu-item active" : "menu-item"}><Link href="/home-6">Business &amp; Corporate</Link></li>
                </ul>
            </li>
            <li className={parentMenu === 'stories' ? 'menu-item menu-item-has-children active' : 'menu-item menu-item-has-children'}><Link href="#" title="Stories" onClick={() => { openMobileMenu('stories'); }} className={stories ? "active" : ""}><span>Stories</span></Link>
                <ul className={stories ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location === "/blog-right-sidebar" ? "menu-item active" : "menu-item"}><Link href="/blog/blog-right-sidebar">Blog Right Sidebar</Link></li>
                    <li className={location === "/blog" ? "menu-item active" : "menu-item"}><Link href="/blog">Blog Card</Link></li>
                    <li className={location === "/blog/blog-left-thumb" ? "menu-item active" : "menu-item"}><Link href="/blog/blog-left-thumb">Blog List Left Thumb</Link></li>
                    <li className={location === "/blog/blog-random-thumb" ? "menu-item active" : "menu-item"}><Link href="/blog/blog-random-thumb">Blog List Random Thumb</Link></li>
                    <li className={location === "/blog/blog-right-thumb" ? "menu-item active" : "menu-item"}><Link href="/blog/blog-right-thumb">Blog List Right Thumb</Link></li>
                    <li className={location === "/blog/[]" ? "menu-item active" : "menu-item"}><Link href="/blog/ui-vs-ux-whats-the-difference">Blog Single</Link></li>
                </ul>
            </li>
            <li className={parentMenu === 'works' ? 'menu-item menu-item-has-children active' : 'menu-item menu-item-has-children'}><Link href="#" title="Works" onClick={() => { openMobileMenu('works'); }} className={works ? "active" : ""}><span>Works</span></Link>
                <ul className={works ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location === "/project" ? "menu-item active" : "menu-item"}><Link href="/project">List Style</Link></li>
                    <li className={location === "/project/project-standard" ? "menu-item active" : "menu-item"}><Link href="/project/project-standard">Grid Standard</Link></li>
                    <li className={location === "/project/project-grid" ? "menu-item active" : "menu-item"}><Link href="/project/project-grid">Grid Style 1</Link></li>
                    <li className={location === "/project/project-grid-2" ? "menu-item active" : "menu-item"}><Link href="/project/project-grid-2">Grid Style 2</Link></li>
                    <li className={location === "/project/project-masonary" ? "menu-item active" : "menu-item"}><Link href="/project/project-masonary">Grid Masonry</Link></li>
                    <li className={location === "/project/project-details" ? "menu-item active" : "menu-item"}><Link href="/project/freezing-birthday">Project Single</Link></li>
                </ul>
            </li>
            <li className={parentMenu === 'page' ? 'menu-item menu-item-has-children active' : 'menu-item menu-item-has-children'}><Link href="#" title="Page" onClick={() => { openMobileMenu('page'); }} className={page ? "active" : ""}><span>Page</span></Link>
                <ul className={page ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location === "/about" ? "menu-item active" : "menu-item"}><Link href="/about">About Us</Link></li>
                    <li className={location === "/team" ? "menu-item active" : "menu-item"}><Link href="/team">Team Page</Link></li>
                    <li className={location === "/image-gallery" ? "menu-item active" : "menu-item"}><Link href="/image-gallery">Image Gallery</Link></li>
                    <li className={location === "/services" ? "menu-item active" : "menu-item"}><Link href="/services">Services</Link></li>
                    <li className={location === "/404" ? "menu-item active" : "menu-item"}><Link href="/404">Page 404</Link></li>
                </ul>
            </li>
            <li className={location === "/contact" ? "menu-item active" : "menu-item"}><Link href="/contact" title="Contact"><span>Contact</span></Link></li>
            <li className={parentMenu === 'shop' ? 'menu-item menu-item-has-children active' : 'menu-item menu-item-has-children'}><Link href="#" title="Shop" onClick={() => { openMobileMenu('shop'); }} className={shop ? "active" : ""}><span>Shop</span></Link>
                <ul className={shop ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location === "/shop" ? "menu-item active" : "menu-item"}><Link href="/shop">Shop Page</Link></li>
                    <li className={location === "/shop/[]" ? "menu-item active" : "menu-item"}><Link href="/shop/run-max-88">Single Product</Link></li>
                    <li className={location === "/shop/cart" ? "menu-item active" : "menu-item"}><Link href="/shop/cart">Cart</Link></li>
                    <li className={location === "/shop/checkout" ? "menu-item active" : "menu-item"}><Link href="/shop/checkout">Checkout</Link></li>
                    <li className={location === "/shop/account" ? "menu-item active" : "menu-item"}><Link href="/shop/account">My Account</Link></li>
                </ul>
            </li>
        </>
    );
}

export default MenuItems;