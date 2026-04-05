import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2a40] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        {/* About */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-4 mb-6 group">
            <img
              src="/logo1.png"
              alt="ПБФ Лого"
              className="h-16 w-auto brightness-0 invert opacity-90"
            />
            <div className="flex flex-col border-l border-white/20 pl-4 py-1">
              <span className="font-serif font-bold text-xl uppercase tracking-wider">
                Актив за научни подмладак
              </span>
              <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-widest leading-tight">
                Православни богословски факултет <br /> Универзитет у Београду
              </span>
            </div>
          </Link>
          <p className="text-gray-300 font-sans text-sm max-w-md leading-relaxed">
            Платформа за промоцију академског рада, истраживања и теолошке мисли међу младим истраживачима и студентима Православног богословског факултета.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif font-bold text-lg text-white mb-6">Брзи линкови</h4>
          <ul className="space-y-4 font-sans text-sm text-gray-300">
            <li>
              <Link href="/istorijat" className="hover:text-[#c5a059] transition-colors">Историјат Актива</Link>
            </li>
            <li>
              <Link href="/arhiva" className="hover:text-[#c5a059] transition-colors">Архива трибина</Link>
            </li>
            <li>
              <Link href="/knjige" className="hover:text-[#c5a059] transition-colors">Препоруке књига</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif font-bold text-lg text-white mb-6">Контакт</h4>
          <ul className="space-y-4 font-sans text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#c5a059] shrink-0 translate-y-0.5" />
              <span>Мије Ковачевића 11б, Београд</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#c5a059] shrink-0" />
              <a href="mailto:info@pbf.rs" className="hover:text-[#c5a059] transition-colors">
                pbf.aktiv@bg.ac.rs
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-400">
        <p>© {currentYear} Актив за научни подмладак ПБФ. Сва права задржана.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Политика приватности</Link>
          <Link href="#" className="hover:text-white transition-colors">Услови коришћења</Link>
        </div>
      </div>
    </footer>
  );
}
