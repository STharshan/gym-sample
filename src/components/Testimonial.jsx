"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trainers = [
  {
    name: "BLAKE HUDSON",
    role: "Strength & Conditioning Coach",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800", // Replace with your own
  },
  {
    name: "ALEX HARRINGTON",
    role: "Holistic Fitness & Mobility Coach",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=800",
  },
  {
    name: "NICHOLAS PHILLIPS",
    role: "Fat Loss & HIIT Expert",
    image:
      "https://images.unsplash.com/photo-1594737625785-cbdbf7b6b2e2?q=80&w=800",
  },
  {
    name: "LOUIS CHAVEZ",
    role: "Transformation Coach",
    image:
      "https://images.unsplash.com/photo-1594737625785-cbdbf7b6b2e2?q=80&w=800",
  },
  {
    name: "EMILY TURNER",
    role: "Yoga & Wellness Instructor",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800",
  },
];

export default function TrainersSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#0e0e0e] text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-yellow-400 text-sm font-semibold mb-2">★ Our Trainers</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          OUR EXPERT TRAINERS
        </h2>
        <p className="text-gray-400 text-lg max-w-lg mx-auto">
          Our certified fitness professionals are more than just trainers transformation specialists.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide px-10"
        >
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="w-64 bg-[#111] rounded-xl overflow-hidden flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800"
                  alt={trainer.name}
                  className="h-80 w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-4">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-yellow-400 text-sm font-medium">
                    {trainer.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}
