// src/pages/Products.jsx
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    title: "BMW Treptow GTX Boots",
    price: "₹1,299",
    image: "/assets/product1.jpeg",
  },
  {
    id: 2,
    title: "GS Rallye gloves",
    price: "₹2,499",
    image: "/assets/product2.jpeg",
  },
  {
    id: 3,
    title: "EVS RS9 Knee Brace",
    price: "₹1,999",
    image: "/assets/product3.jpeg",
  },
  {
    id: 4,
    title: "BMW Motorrad GS Competition Boots",
    price: "₹5,999",
    image: "/assets/product4.jpeg",
  },
  { id: 5,
    title: "Arythe Helmet Visor",  
    price: "₹1,799",
    image: "/assets/product5.jpeg",
  },
  { id: 6,
    title: "tudds Raider Super Full-Face Helmet ",  
    price: "₹1,199",
    image: "/assets/product6.jpeg",
  },
  { id: 7,  
    title: "BMW S 1000 RR Schlüsselanhänger (blau / rot)", 
    price: "₹899",
    image: "/assets/product7.jpeg",
  },
];


export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-14">
        🛒 Featured Products
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-[1.03] border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {product.price}
              </p>
              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
