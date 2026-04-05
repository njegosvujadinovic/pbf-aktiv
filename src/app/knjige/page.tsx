"use client";

import { motion } from "framer-motion";
import { Book, Bookmark, Library, Star } from "lucide-react";
import Card from "@/components/card";

export default function BooksPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16"
      >
        <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-widest mb-4 block">
          Препоруке и рецензије
        </span>
        <h1 className="text-[#1a2a40] font-serif text-5xl font-bold mb-8">
          Препоруке књига
        </h1>
        <p className="text-gray-600 font-sans text-lg leading-relaxed">
          Теолошка литература коју препоручују чланови и сарадници Актива. Наш „Five Books“ систем нуди стручне препоруке за кључне области православне теологије и науке.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card 
            key={i}
            title={`Препоручена књига ${i}`} 
            subtitle="Препорука теолога: Зашто је ова књига фундаментална за разумевање савремених богословских питања."
            href="#"
            label="Препорука"
          />
        ))}
      </div>
    </div>
  );
}
