import React, { useEffect } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-black" id="hero">
      {/* Hero Section */}
      <section className="bg-[#111111] text-white min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 rounded-b-4xl">
        <div className="max-w-7xl w-full flex flex-col items-center text-center gap-8 md:gap-12">
          {/* Left Content */}
          <div data-aos="fade-up">
            <p className="text-yellow-300">The #1 Gym In The Country</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
             Peak Performance.<br />
              <span className="text-[#4ab8e9]">Peak Results.</span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base sm:text-lg md:text-xl">
             Welcome to Peak Fitness, where every workout propels you toward the submit of your fitness goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a href="/#contact">
                <button className="border-2 border-[#4ab8e9] text-white px-6 py-3 rounded-full flex items-center gap-2 group hover:bg-[#4ab8e9] transition font-semibold">
                  <span className="transition-transform duration-300 text-sm lg:text-base group-hover:-translate-x-1 group-active:-translate-x-1">
                    Let's Reach Your Peak
                  </span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 mt-1" />
                </button>
              </a>

              <button className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-[#4ab8e9] transition">
                <FiPlay className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white text-black shadow-lg py-10 -mt-12 justify-center w-[90%] md:w-[80%] px-6 md:px-12 lg:px-20 rounded-2xl max-w-5xl mx-auto translate-x-0 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl items-center text-center">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ef5a24]">10K</h3>
            <p className="text-[#ef5a24]">Members</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ef5a24]">1K</h3>
            <p className="text-[#ef5a24]">Trainers</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ef5a24]">10M</h3>
            <p className="text-[#ef5a24]">Calories Burnt</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ef5a24]">10K</h3>
            <p className="text-[#ef5a24]">Hours Trained</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
