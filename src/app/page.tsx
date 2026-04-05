"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/card";

const features = [
  {
    icon: <Users className="text-[#c5a059]" size={24} />,
    title: "Академска заједница",
    desc: "Повезивање младих истраживача и студената кроз дијалог и сарадњу.",
  },
  {
    icon: <BookOpen className="text-[#c5a059]" size={24} />,
    title: "Научни рад",
    desc: "Подстицање критичког размишљања и објављивање самосталних радова.",
  },
  {
    icon: <Award className="text-[#c5a059]" size={24} />,
    title: "Изврсност",
    desc: "Тежња ка највишим академским стандардима у богословским наукама.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#FCFAFA] -z-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-[#1a2a40]/5 -z-10" />
        
        <div className="max-w-5xl text-center flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: [30, -10, 0],
            }}
            transition={{ 
              opacity: { duration: 1 },
              y: { 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              } 
            }}
            className="mb-12"
          >
            <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-[0.5em] mb-8 block">
              Православни богословски факултет
            </span>
            <h1 className="text-[#1a2a40] font-serif text-6xl md:text-[7rem] font-bold leading-[0.95] mb-12 tracking-tight">
              Актив за <br /> 
              <span className="italic font-medium text-[#c5a059]">научни подмладак</span>
            </h1>
            <p className="text-gray-600 font-sans text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-16 opacity-80">
              Центар за развој богословске мисли и афирмацију младих истраживача. 
              Негујемо дијалог, академску изврсност и будућност теологије.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-8"
          >
            <Link 
              href="/arhiva" 
              className="bg-[#1a2a40] text-white px-12 py-6 rounded-full font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#c5a059] transition-all duration-500 shadow-2xl shadow-blue-950/20 flex items-center gap-4 group"
            >
              Архива трибина 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <Link 
              href="/istorijat" 
              className="bg-white text-[#1a2a40] border border-[#1a2a40]/10 px-12 py-6 rounded-full font-sans font-bold text-xs uppercase tracking-widest hover:border-[#c5a059] hover:text-[#c5a059] transition-all duration-500"
            >
              О Активу
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features - Value Propositions */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#c5a059]/5 flex items-center justify-center mb-8 group-hover:bg-[#c5a059]/10 transition-colors duration-300 border border-[#c5a059]/10">
                {f.icon}
              </div>
              <h3 className="text-[#1a2a40] font-serif font-bold text-2xl mb-4 tracking-tight">{f.title}</h3>
              <p className="text-gray-500 font-sans text-base leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-100 pb-10">
          <div className="mb-6 md:mb-0">
            <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Актуелности</span>
            <h2 className="text-[#1a2a40] font-serif text-4xl md:text-5xl font-bold tracking-tight">Најновије трибине</h2>
          </div>
          <Link href="/arhiva" className="text-[#c5a059] font-sans text-sm font-bold uppercase tracking-widest hover:text-[#1a2a40] transition-colors flex items-center gap-2 group">
            Све трибине <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card 
            title="Наслов предстојеће трибине" 
            subtitle="Кратак опис теме о којој ће се говорити на трибини и значај за академску заједницу."
            date="24. Април 2026."
            href="/arhiva"
            label="Предстојеће"
          />
          <Card 
            title="Теолошки дијалог у савременом свету" 
            subtitle="Предавање о изазовима савременог друштва и одговорима традиционалног богословља."
            date="10. Март 2026."
            href="/arhiva"
            label="Архива"
          />
          <Card 
            title="Име предавача: Наслов предавања" 
            subtitle="Детаљније информације о предавачу и тези коју ће представити студентима."
            date="15. Фебруар 2026."
            href="/arhiva"
            label="Архива"
          />
        </div>
      </section>

      {/* Recommended Books Section */}
      <section className="bg-[#1a2a40] py-32 w-full relative overflow-hidden">
        {/* Subtle Decorative Elements for Dark Section */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl -mb-48 -mr-48" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mt-48 -ml-48" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-10">
            <div className="text-white mb-6 md:mb-0">
              <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Препоручена литература</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Библиотека Актива</h2>
            </div>
            <Link href="/knjige" className="text-[#c5a059] font-sans text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
              Сви спискови <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card 
              title="Петосто година богословља" 
              subtitle="Препорука књига за разумевање историјског развоја догматских истина и њиховог тумачења."
              href="/knjige"
              label="Теологија"
            />
            <Card 
              title="Литургика и савремени човек" 
              subtitle="Збирка радова која истражује однос између литургијског живота и изазова свакодневице."
              href="/knjige"
              label="Литургика"
            />
            <Card 
              title="Патрологија: Оци Цркве" 
              subtitle="Избор кључне литературе за проучавање светоотачког предања у савременом контексту."
              href="/knjige"
              label="Патрологија"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
