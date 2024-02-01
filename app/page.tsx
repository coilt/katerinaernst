"use client";
import React, { useRef, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Head from "next/head";
import Masonry from "react-masonry-css";
import { paragraphFont, footerFont, buttonFont } from "./utils/fonts.js";
import getImages from "./utils/getImages";
import VideoThumbnailComponent from "./utils/VideoThumbnailComponent";
import FormComponent from "./utils/FormComponent";

// LightGallery
import LightGalleryComponent from "lightgallery/react";
import type { LightGallery } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import "video.js/dist/video-js.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";

const tabs = [
  {
    key: "Home",
    display: "Home",
  },
  {
    key: "Photo",
    display: "Photo",
  },
  {
    key: "Video",
    display: "Video",
  },
  {
    key: "about me",
    display: "About",
  },
];

const handleButtonClick = () => {
  console.log("Button clicked");
  // Additional logic or state updates here
};

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);

  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    // Toggle the state to show/hide the form
    setShowForm(!showForm);
  };
  const [activeTab, setActiveTab] = useState("Home"); // State to track active tab

  const images = getImages();
  console.log(images);

  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="h-full overflow-auto custom-scrollbar">
      <Head>
        <title>Katerina Ernst Filmmaker | Photographer</title>
        <meta
          name="Katerina Ernst Filmmaker | Photographer"
          content="Katerina Ernst Filmmaker Photographer portfolio site"
        />
        <meta property="og:image" content="<generated>" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header className="flex fixed w-full top-0 z-10 justify-between items-center h-[90px] px-10">
          <div className="logo">Katerina Ernst</div>
          <button
            onClick={handleButtonClick}
            id="contactbutton"
            className={`rounded-3xl bg-white text-stone-800 px-4 py-3 hover:bg-opacity-90`}
          >
            Contact
          </button>
        </header>
        {/* Render the FormComponent conditionally based on the state */}
        {showForm && <FormComponent />}
      </div>

      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          {/* Conditionally render video or image based on active tab */}
          {activeTab === "Home" && (
            <div
              style={{
                height: "100vh",
                width: "100%",
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -100,
                overflow: "hidden", // Ensure no scroll bars
              }}
            >
              {/* Use HTML video element */}
              <video
                poster="./thumbs/thumb-nightfall.webp"
                autoPlay
                playsInline
                muted
                loop
                src="./video/v_thumb_nightfall.mp4"
                type="video/mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.3,
                  filter: "blur(200px)",
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <Tab.Group>
            <Tab.List className="flex items-center gap-12 z-20">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2 uppercase">
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                      onClick={() => handleTabChange(tab.key)}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full w-full max-w-[1200px] p-2 sm:p-4 my-8 bg-opacity-30 content-center">
              <Tab.Panel className=" flex justify-center">
                <div className="w-[1200px]  ">
                  <p className="my-0 intro text-center animated-gradient">
                    Katerina Ernst —
                  </p>
                  <p className=" my-3 brand text-center accent">Photographer</p>
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <style jsx>{`
                  .image-container {
                    overflow: hidden; /* Clip the content to the rounded boundaries */
                    border-radius: 16px; /* Set the border-radius for the container */
                  }

                  .hover-zoom {
                    transition: transform 0.8s ease;
                    border-radius: 16px; /* Set the border-radius for the image */
                    overflow: hidden; /* Hide overflowing content */
                  }

                  .hover-zoom:hover {
                    transform: scale(1.05);
                  }
                `}</style>

                <Masonry
                  breakpointCols={{ default: 2, 700: 1 }}
                  className="flex gap-4"
                  columnClassName="my-masonry-grid-column"
                >
                  {images.map((image, idx) => (
                    <div
                      key={image.src}
                      className="relative overflow-hidden image-container"
                    >
                      <img
                        src={image.src}
                        className="my-2 cursor-pointer hover-zoom"
                        alt={`Image ${idx + 1}`}
                        onClick={() => {
                          lightboxRef.current?.openGallery(idx);
                        }}
                      />
                    </div>
                  ))}
                </Masonry>

                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  download={false}
                  counter={false}
                  plugins={[lgThumbnail, lgVideo]}
                  dynamic
                  dynamicEl={images.map((image) => ({
                    src: image.src,
                    thumb: image.src,
                  }))}
                ></LightGalleryComponent>
              </Tab.Panel>

              <Tab.Panel className="flex">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
                  <LightGalleryComponent
                    speed={500}
                    plugins={[lgThumbnail, lgVideo]}
                    videojs={true}
                  >
                    <a
                      data-lg-size="1280-720"
                      data-src="//vimeo.com/180157095"
                      data-poster="./thumbs/thumb-nightfall.webp"
                      data-sub-html="<h4>NIGHTFALL</h4>"
                    >
                      <VideoThumbnailComponent
                        posterImage="./thumbs/thumb-nightfall.webp"
                        videoSource="./video/v-thumb-nightfall.webm"
                      />
                    </a>
                  </LightGalleryComponent>

                  <LightGalleryComponent
                    speed={500}
                    plugins={[lgThumbnail, lgVideo]}
                    videojs={true}
                  >
                    <a
                      data-lg-size="1280-720"
                      data-src="https://youtu.be/v573oQLKV38"
                      data-poster="./thumbs/thumb-opium.webp"
                      data-sub-html="<h4>BOXXER — OPIUM</h4>"
                    >
                      <VideoThumbnailComponent
                        posterImage="./thumbs/thumb-opium.webp"
                        videoSource="./video/v-thumb-opium.webm"
                      />
                    </a>
                  </LightGalleryComponent>

                  <LightGalleryComponent
                    speed={500}
                    plugins={[lgThumbnail, lgVideo]}
                    videojs={true}
                  >
                    <a
                      data-lg-size="1280-720"
                      data-src="//vimeo.com/156413267"
                      data-poster="./thumbs/thumb-alabama.webp"
                      data-sub-html="<h4>Alabama Shakes — Gimme All Your Love</h4>"
                    >
                      <VideoThumbnailComponent
                        posterImage="./thumbs/thumb-alabama.webp"
                        videoSource="./video/v-thumb-alabama.webm"
                      />
                    </a>
                  </LightGalleryComponent>

                  <LightGalleryComponent
                    speed={500}
                    plugins={[lgThumbnail, lgVideo]}
                    videojs={true}
                  >
                    <a
                      data-lg-size="1280-720"
                      data-src="//vimeo.com/129055751"
                      data-poster="./thumbs/thumb-cgs.webp"
                      data-sub-html="<h4>CGS — Tattoo Artist Promo </h4>"
                    >
                      <VideoThumbnailComponent
                        posterImage="./thumbs/thumb-cgs.webp"
                        videoSource="./video/v-thumb-cgs.webm"
                      />
                    </a>
                  </LightGalleryComponent>

                  <LightGalleryComponent
                    speed={500}
                    plugins={[lgThumbnail, lgVideo]}
                    videojs={true}
                  >
                    <a
                      data-lg-size="1280-720"
                      data-src="//vimeo.com/150533258"
                      data-poster=".thumbs/thumb-woowooki.webp"
                      data-sub-html="<h4>WOOWOOKI — Promo</h4>"
                    >
                      <VideoThumbnailComponent
                        posterImage="./thumbs/thumb-woowooki.webp"
                        videoSource="./video/v-thumb-woowooki.webm"
                      />
                    </a>
                  </LightGalleryComponent>
                </div>
              </Tab.Panel>

              <Tab.Panel className=" flex justify-center">
                <div className="w-[600px] ">
                  {" "}
                  <img
                    src="katerina-portrait.jpg"
                    alt="Katerina's self-portrait"
                    style={{
                      borderRadius: "12px",
                    }}
                  />
                  <p className={`my-4 ${paragraphFont.className}`}>
                    Ever since I've picked up the camera for the first time many
                    years ago, it has been my goal to capture what even the eye
                    can't see. To me it is not just important, it's the whole
                    point — to grasp the unsayable, the unseeable. Every time I
                    peer through the viewfinder or into the control monitor, I'm
                    striving to seize not just image, but the feeling, the
                    emotion itself.
                  </p>
                  <p className={`my-4 ${paragraphFont.className}`}>
                    If that's something that you're also looking for, feel free
                    to contact me via the contact form. Currently I live in
                    Thailand.
                  </p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer
        className={`h-[60px] flex justify-center items-center text-stone-600 ${
          activeTab === "Home" ? "absolute bottom-0 left-0 right-0" : ""
        }`}
      >
        <p className={footerFont.className}>Katerina Ernst © 2024</p>
      </footer>
    </div>
  );
}
