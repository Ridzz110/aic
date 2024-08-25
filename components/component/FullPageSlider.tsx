'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

const FullPageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
  };

  const slides = [
    {
      image: "/image1.avif",
      heading: "Welcome to the AIC",
      description: "Discover the future of Artificial Intelligence with us.",
    },
    {
      image: "/events.avif",
      heading: "Innovative Events Await",
      description: "Engage in cutting-edge workshops, webinars, and hackathons.",
    },
    {
      image: "/clam.webp",
      heading: "Connect and Collaborate",
      description: "Join a vibrant community of AI enthusiasts and experts.",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex justify-center items-center">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex flex-col justify-center items-center text-center text-white p-4 md:p-8">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s text-shadow-lg gradient-text">{slide.heading}</h2>
              <p className="text-xl md:text-3xl leading-relaxed mb-4 animate__animated animate__fadeIn animate__delay-2s text-shadow-md">{slide.description}</p>
              {/* Removed the SVG clock/icon */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullPageSlider;
