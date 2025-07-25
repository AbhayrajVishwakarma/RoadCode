// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: -60, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-sub", { y: 30, opacity: 0, delay: 0.5, duration: 1 });
      gsap.from(".hero-buttons", {
        scale: 0.8,
        opacity: 0,
        delay: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage: "url('/bg-hero.jpg')",
        addingTop: "100px",
        paddingTop: "100px",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-3xl text-center text-white backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl bg-white/10">
        <h1 className="hero-title text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl mb-6">
          Discover the Ride
        </h1>
        <p className="hero-sub text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          Join <span className="text-pink-400 font-semibold">Mumbiker Nikhil</span> on the journey of a lifetime with{" "}
          <span className="text-blue-400 font-semibold">RoadCode</span>.
        </p>

        <div className="hero-buttons flex flex-wrap justify-center gap-4">
         <button
  onClick={() => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
>
  🌍 Explore Now
</button>

          <a href="https://www.youtube.com/results?search_query=mumbiker+nikhil"><button className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105">
            🎬 Watch Trailer
          </button></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
