import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", { opacity: 0, y: -30, duration: 1 });
      gsap.from(".about-content", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
      gsap.from(".team-member", { opacity: 0, x: -50, stagger: 0.2, delay: 0.5 });
      gsap.from(".stats-card", { scale: 0.8, opacity: 0, stagger: 0.2, delay: 0.6 });
      gsap.from(".testimonial", { y: 50, opacity: 0, stagger: 0.3, delay: 0.7 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 px-6 py-20 text-gray-800 dark:text-white"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="about-title text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-pink-600">Mumbiker Nikhil</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Exploring the world one ride at a time. Here's everything about the journey, passion and community.
        </p>
      </div>

      {/* Bio Section */}
      <div className="about-content grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-24">
        <img
          src="/assets/mumbiker.jpeg"
          alt="Mumbiker Nikhil"
          className="w-full rounded-2xl shadow-lg border border-white/10"
        />
        <div className="text-left space-y-5">
          <h2 className="text-3xl font-semibold">Who is Mumbiker Nikhil?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Nikhil Sharma, aka <strong>Mumbiker Nikhil</strong>, is one of India’s top moto-vloggers. His thrilling adventures and cinematic vlogs
            inspire millions.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            From Ladakh to Los Angeles, Nikhil’s journey is about capturing emotion, speed, and passion on camera.
          </p>
          <p className="italic text-gray-500 dark:text-gray-400">
            “Life is all about following your passion” – Nikhil
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 mb-24">
        {[
          { label: "Countries Ridden", value: "18+" },
          { label: "Total KM", value: "1,50,000+" },
          { label: "Years Riding", value: "10+" },
        ].map((stat, idx) => (
          <div key={idx} className="stats-card bg-white/10 border border-white/20 p-6 rounded-xl w-60 text-center shadow-md backdrop-blur-md">
            <h3 className="text-4xl font-bold text-pink-500">{stat.value}</h3>
            <p className="mt-2 text-gray-200">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Saurav", role: "Creative Director", image: "/assets/team1.jpg" },
            { name: "Nikita", role: "Marketing Head", image: "/assets/team2.jpg" },
            { name: "Rohan", role: "Editor", image: "/assets/team3.jpg" },
          ].map((member, idx) => (
            <div key={idx} className="team-member bg-white/10 p-6 rounded-xl shadow-xl text-center border border-white/20">
              <img src={member.image} alt={member.name} className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-pink-500" />
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Amit Sharma",
              quote: "His journey inspires me to explore and never stop chasing dreams.",
            },
            {
              name: "Divya Joshi",
              quote: "The best thing about Mumbiker Nikhil is how real he is on camera.",
            },
          ].map((t, i) => (
            <div key={i} className="testimonial bg-white/10 backdrop-blur p-6 rounded-xl shadow-md border border-white/20">
              <p className="text-lg italic">“{t.quote}”</p>
              <p className="mt-4 text-right font-semibold text-pink-400">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
