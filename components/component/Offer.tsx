"use client"
import React from "react";
import Image from "next/image";
import img2 from '../../app/assests/oscar-nord-MuJHwDHbXUk-unsplash.jpg'
import img3 from '../../app/assests/cristi-tohatan-XIBIC21QeZQ-unsplash.jpg'
import img4 from '../../app/assests/download.jpeg'
import { cn } from "@/lib/utils";
import { Button } from "../ui/moving-border";

const Offer = () => {
  const cards = [
    {
      image: img2,
      title: "Exciting Events",
      description:
        "Join us for dynamic workshops, seminars, and hackathons designed to propel you into the future of AI.",
    },
    {
      image: img3,
      title: "Cutting-Edge Technology",
      description:
        "Experience the latest in AI technology with hands-on sessions and exclusive insights from industry leaders.",
    },
    {
      image: img4,
      title: "Fun and Networking",
      description:
        "Connect with fellow enthusiasts and celebrate milestones with engaging social events and parties.",
    },
  ];

  return (
    <div>
      <section id="cuisine" className="w-full py-12 md:py-24 lg:py-16 bg-muted shadow-xl">
        <section className="py-8 px-6 bg-gray-100">
          <div className="container mx-auto flex justify-center items-center flex-col">
          <Button
             borderRadius="2rem"
             className="bg-white font-semibold tracking-wide dark:bg-slate-900 text-black dark:text-white border-slate-200"
           >
             Perks🌟
           </Button>
            <h2 className="lg:text-5xl text-4xl tracking-tight font-bold text-center mb-8 mt-14">
              What We Offer
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {cards.map((card, index) => (

                <div
                  key={index}
                  className="w-full sm:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Offer;
