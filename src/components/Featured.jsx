// src/components/Featured.jsx
import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { gsap } from "gsap";

const videos = [
  {
    id: 1,
    title: "Leh Ladakh Adventure",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
  {
    id: 2,
    title: "Goa Road Trip",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Exploring Spiti Valley",
    thumbnail: "https://img.youtube.com/vi/zpOULjyy-n8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=zpOULjyy-n8",
  },
];

export default function Featured() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-12">
        🎥 Featured Adventures
      </h2>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 transition transform hover:-translate-y-1"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition duration-300">
              <FaPlay className="text-white text-3xl opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition" />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {video.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
