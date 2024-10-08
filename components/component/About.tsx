'use client'
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { cn } from "@/lib/utils";
const About = () => {
  return (
    <div>
      <section className="relative shadow-lg w-full py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl xl:text-6xl bg-gradient-to-l from-customDarkBlue via-customLightBlue to-customBlue py-2 bg-clip-text text-transparent">
                Discover Our Artificial Intelligence Club
              </h1>
              <p className="mt-4 text-lg text-gray-700 md:text-xl font-extralight">
                AIC x MUET is where aspiring tech leaders come together to shape
                the future. Not just students, but future tech moguls in the
                making, our club offers exciting events, innovative workshops,
                and collaborative projects. Join us to connect with like-minded
                peers and drive the next wave of technological advancements!
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  href="/attractionAndCuisine"
                  className="inline-flex items-center justify-center h-12 px-6 py-3 bg-customBlue text-white font-medium rounded-lg shadow-lg hover:bg-customDarkBlue transition duration-300 ease-in-out transform hover:scale-105"
                  prefetch={false}
                >
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="w-5 h-5"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                  Learn More
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center h-12 px-6 py-3 bg-zinc-800 text-white font-medium rounded-lg shadow-lg hover:bg-zinc-900 transition duration-300 ease-in-out transform hover:scale-105"
                  prefetch={false}
                >
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="w-5 h-5"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                  Events
                </Link>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <img
                src="/aiclogo.jpg"
                className="w-full h-auto transition-transform transform hover:scale-105"
                alt="AIC Logo"
              />
              </BackgroundGradient>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
