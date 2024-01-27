"use client";
import React, { useRef, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { paragraphFont } from "./utils/fonts.js";
import getImages from "./utils/getImages";
import VideoThumbnailComponent from "./utils/VideoThumbnailComponent";

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

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);
  const videoThumbnailRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const images = getImages();
  console.log(images);

  const handleVideoThumbnailHover = () => {
    console.log("Hovered Video Tab");
    setIsVideoHovered(true);
    if (videoThumbnailRef.current) {
      videoThumbnailRef.current.play();
    }
  };

  const handleVideoThumbnailLeave = () => {
    console.log("Left Video Tab");
    setIsVideoHovered(false);
    if (videoThumbnailRef.current) {
      videoThumbnailRef.current.pause();
      videoThumbnailRef.current.currentTime = 0;
    }
  };

  console.log("Rendering Home");

  return (
    <div className="h-full overflow-auto">
      <Head>
        <script src="http://localhost:8097"></script>;
        <title>Katerina Ernst Filmmaker | Photographer</title>
        <meta
          name="Katerina Ernst Filmmaker | Photographer"
          content="Katerina Ernst Filmmaker Photographer portfolio site"
        />
        <meta property="og:image" content="<generated>" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" flex fixed w-full top-0 z-10 justify-between items-center h-[90px] px-10">
        <div className="contents-center font-body text-1xl">Katerina Ernst</div>
        <Link
          href="mailto:vocalaboca@gmail.com"
          className={`rounded-3xl bg-white text-stone-800 px-4 py-3 hover:bg-opacity-90 ${paragraphFont.className}`}
        >
          Get in touch
        </Link>
      </header>
      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2 uppercase">
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full w-full max-w-[1200px] p-2 sm:p-4 my-8 bg-opacity-30 content-center">
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
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
                  <LightGalleryComponent
                    speed={500}
                    plugins={[lgThumbnail, lgVideo]}
                    videojs={true}
                  >
                    <a
                      data-lg-size="1280-720"
                      data-src="//vimeo.com/180157095?muted=false"
                      data-poster="./thumbs/mobile-thumb-nightfall-wraith-c.jpg"
                      data-sub-html="<h4>NIGHTFALL</h4>"
                    >
                      <VideoThumbnailComponent
                        posterImage="./thumbs/mobile-thumb-nightfall-wraith-c.jpg"
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
                      data-src="//vimeo.com/180157095?muted=false"
                      data-poster="./thumbs/mobile-thumb-nightfall-wraith-c.jpg"
                      data-sub-html="<h4>NIGHTFALL</h4>"
                    >
                      <VideoThumbnailComponent
                        posterImage="./thumbs/mobile-thumb-nightfall-wraith-c.jpg"
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
                      data-src="//vimeo.com/180157095?muted=false"
                      data-poster="./thumbs/mobile-thumb-nightfall-wraith-c.jpg"
                      data-sub-html="<h4>NIGHTFALL</h4>"
                    >
                      <VideoThumbnailComponent
                        posterImage="./thumbs/mobile-thumb-nightfall-wraith-c.jpg"
                        videoSource="./video/v-thumb-nightfall.webm"
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
                  />
                  <p className={`my-16 ${paragraphFont.className}`}>
                    Katerina was born in Kirghiz Soviet Socialist Republic
                    (USSR) and decided to become a filmmaker after watching the
                    Alien (1978) for the first time.
                  </p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center text-stone-600">
        <p className={paragraphFont.className}>Katerina Ernst © 2024</p>
      </footer>
    </div>
  );
}
