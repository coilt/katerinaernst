"use client";
import { createContext } from "react";
import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Masonry from 'react-masonry-css';
import { paragraphFont, titleFont } from "./utils/fonts.js";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "people",
    display: "People",
  },

  {
    key: "events",
    display: "Events",
  },
  {
    key: "videos",
    display: "Videos",
  },

  {
    key: "about me",
    display: "About",
  },
];

export default function Home() {
  return (
    

    <div className="h-full overflow-auto">
      <Head>
        <title>Katerina Ernst Filmmaker Photographer</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />

             </Head>                         
      <header className=" flex fixed w-full top-0 z-10 justify-between items-center h-[90px] px-6">
        <div className="contents-center font-body text-1xl">Katerina Ernst</div>
        <Link
          href="mailto:vocalaboca@gmail.com"
          className="rounded-3xl bg-white text-stone-800 px-4 py-3 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>
      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-centered gap-12">
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
            <Tab.Panels className="h-full w-full bg-zinc-800 max-w-[1200px]  p-2 sm:p-4 my-8 bg-opacity-30 ">
              <Tab.Panel>
              <Masonry breakpointCols={2} className="flex gap-4" columnClassName="">
                <img src="./images/elvira_01.jpg" alt="" className="my-4" ></img>
                <img src="./images/elvira_02.jpg" alt="" className="my-4" ></img>
                <img src="./images/elvira_03.jpg" alt="" className="my-4" ></img>
                <img src="./images/elvira_04.jpg" alt="" className="my-4" ></img>
                <img src="./images/elvira_05.jpg" alt="" className="my-4" ></img>
                <img src="./images/elvira_06.jpg" alt="" className="my-4" ></img>
                <img src="./images/elvira_08.jpg" alt="" className="my-4" ></img>
                <img src="./images/elvira_09.jpg" alt="" className="my-4" ></img>
                <img src="./images/elvira_10.jpg" alt="" className="my-4" ></img>
                
                </Masonry>
                </Tab.Panel>
              <Tab.Panel>Portraits</Tab.Panel>
              <Tab.Panel>Events</Tab.Panel>
              <Tab.Panel>Videos</Tab.Panel>
              <Tab.Panel>About Me</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center text-stone-600">
        <p className={paragraphFont.className}>Katerina Ernst  ©  2012 — 2024</p>
      </footer>
  </div>



    );
    }
