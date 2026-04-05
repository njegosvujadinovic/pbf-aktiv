"use client";

import { motion } from "framer-motion";
import { Play, Calendar, User, Search } from "lucide-react";

const lectures = [
  {
    id: 1,
    title: "Теологија и савремени свет: Изазови дигиталног доба",
    speaker: "Проф. др Богољуб Шијаковић",
    date: "12. Октобар 2025.",
    description: "Разговор о томе како се традиционалне богословске вредности суочавају са брзим променама у технологији и друштву.",
  },
  {
    id: 2,
    title: "Литургија као средиште хришћанског живота",
    speaker: "Др Богдан Лубардић",
    date: "25. Новембар 2025.",
    description: "Дубока анализа литургијског предања и његовог значаја за формирање идентитета савременог верника.",
  },
  {
    id: 3,
    title: "Православље и уметност: Визуелни језик иконе",
    speaker: "Др Ненад Божовић",
    date: "15. Децембар 2025.",
    description: "Истраживање симболике и духовне поруке коју носе византијски и српски средњовековни живописи.",
  },
];

// Animation variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ArhivaPage() {
  return (
    <div className="bg-[#FCFAFA] min-h-screen pb-24">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Дигитална библиотека
          </span>
          <h1 className="text-[#1a2a40] font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Архива предавања и трибина
          </h1>
          <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Приступите видео снимцима претходних трибина, предавања и дискусија 
            које је организовао Актив за научни подмладак ПБФ.
          </p>
        </motion.div>
      </section>

      {/* Grid Content */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {lectures.map((lecture) => (
            <motion.div
              key={lecture.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(26, 42, 64, 0.1)"
              }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 flex flex-col h-full group"
            >
              {/* Mockup Video Thumbnail */}
              <div className="relative aspect-video bg-[#f0f2f5] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2a40]/5 to-transparent opacity-50" />
                
                {/* Play Button Mockup */}
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1a2a40] group-hover:scale-110 group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-500 z-10">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
                
                {/* Video Duration Mockup */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md">
                  45:20
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-[#c5a059] font-sans text-[10px] font-bold uppercase tracking-widest">
                    <User size={12} />
                    {lecture.speaker}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#c5a059] font-sans text-[10px] font-bold uppercase tracking-widest">
                    <Calendar size={12} />
                    {lecture.date}
                  </div>
                </div>

                <h3 className="text-[#1a2a40] font-serif font-bold text-xl mb-4 leading-tight group-hover:text-[#c5a059] transition-colors duration-300">
                  {lecture.title}
                </h3>
                
                <p className="text-gray-500 font-sans text-sm leading-relaxed mb-6 line-clamp-3">
                  {lecture.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50">
                  <button className="text-[#1a2a40] font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                    Гледај видео
                    <div className="w-6 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover/btn:w-10" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Empty State / Bottom Note */}
      <section className="mt-20 py-20 bg-white border-y border-gray-100 w-full text-center px-6">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#1a2a40]/5 flex items-center justify-center mx-auto mb-6 text-[#c5a059]">
            <Search size={28} />
          </div>
          <h4 className="text-[#1a2a40] font-serif text-2xl font-bold mb-4">Тражите одређено предавање?</h4>
          <p className="text-gray-500 font-sans mb-8">
            Наша архива се редовно ажурира новим садржајима. Уколико не успете да пронађете оно што тражите, слободно нас контактирајте преко наше контакт форме.
          </p>
          <button className="bg-[#1a2a40] text-white px-8 py-3 rounded-full font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#c5a059] transition-all duration-300">
            Контакт служба
          </button>
        </div>
      </section>
    </div>
  );
}
