"use client";
import React from "react";
import Slider from "react-slick";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import "animate.css";
import { Button } from "../ui/moving-border";
const FullPageSlider = () => {

  return (
    <div className="relative mt-16 flex min-h-screen h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center lg:text-6xl text-4xl font-semibold lg:font-semibold tracking-tight text-black dark:text-white bg-gradient-to-l from-customDarkBlue via-customLightBlue to-customBlue text-transparent bg-clip-text h-20">
        Welcome To Artificial Intelligence Club
      </p>
      <Button
        borderRadius="2rem"
        className="bg-white font-semibold tracking-wide dark:bg-slate-900 text-black dark:text-white border-slate-200"
      >
        In collaboration ACM🌟
      </Button>
      
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  );
};

export default FullPageSlider;
