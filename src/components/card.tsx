"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  href: string;
  label?: string;
  date?: string;
}

export default function Card({ title, subtitle, image, href, label, date }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <Link href={href} className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-[#1a2a40]/5 flex items-center justify-center p-8">
            <span className="text-[#1a2a40]/20 font-serif text-4xl italic">ПБФ</span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a40]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {label && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#c5a059] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
              {label}
            </span>
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        {date && (
          <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-widest mb-2">
            {date}
          </span>
        )}
        <h3 className="text-[#1a2a40] font-serif font-bold text-xl mb-2 line-clamp-2 leading-tight group-hover:text-[#c5a059] transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-500 font-sans text-sm line-clamp-2 leading-relaxed mb-4">
            {subtitle}
          </p>
        )}
        
        <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-50">
          <Link 
            href={href}
            className="text-[#1a2a40] font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn"
          >
            Детаљније
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
