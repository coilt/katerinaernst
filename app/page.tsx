"use client";
import { createContext } from "react";
import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col h-full bg-[url('')] bg-top bg-cover">
      <Head>
        <title>Katerina Ernst Filmmaker Photographer</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center h-[90px] px-6">
        <div className="contents-center font-body text-1xl">Katerina Ernst</div>
        <Link
          href="mailto:vocalaboca@gmail.com"
          className="rounded-3xl bg-white text-stone-800 px-4 py-3 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>

      <main className="grow ">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-centered gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2 font-body text-1xl uppercase ">
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
            <Tab.Panels className="h-full w-full bg-zinc-800 max-w-[1200px]  p-2 sm:p-4 my-8 bg-opacity-30">
              <Tab.Panel>All photos</Tab.Panel>
              <Tab.Panel>Portraits</Tab.Panel>
              <Tab.Panel>Videos</Tab.Panel>
              <Tab.Panel>About Me</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center">
        <p>Katerina Ernst Filmmaker | Photographer</p>
      </footer>
    </div>
  );
}
