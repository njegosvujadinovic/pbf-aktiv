import type { Metadata } from 'next';
import { Cormorant_Garamond, Lora } from "next/font/google";
import './globals.css';
import Link from 'next/link';

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "600", "700"],
});

const lora = Lora({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: 'Актив ПБФ | Универзитет у Београду',
    template: '%s | Актив ПБФ'
  },
  description: 'Званична презентација Актива за научни подмладак ПБФ-а.',
  keywords: ['ПБФ', 'Актив за научни подмладак', 'Теологија', 'Београд', 'Православни богословски факултет', 'Наука', 'Трибине'],
  authors: [{ name: 'Актив ПБФ' }],
  openGraph: {
    title: 'Актив за научни подмладак ПБФ',
    description: 'Истражите архиву наших предавања и најновије научне активности подмлатка ПБФ-а.',
    url: 'https://pbf-aktiv.rs',
    siteName: 'Актив ПБФ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${lora.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="bg-[#FCFAFA] text-[#1a2a40] min-h-full flex flex-col font-sans">
        
        {/* Header/Nav Section */}
        <header className="sticky top-0 z-50 bg-[#FCFAFA]/95 backdrop-blur-sm border-b border-[#c5a059]/10">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-cist.png" 
                alt="Logo" 
                width={80} 
                height={80} 
                className="h-16 w-auto object-contain mix-blend-multiply" 
              />
            </Link>
            
            <div className="flex items-center gap-6 font-medium text-sm md:text-base">
              <Link href="/" className="hover:text-[#c5a059] transition-colors">Почетна</Link>
              <Link href="/istorijat" className="hover:text-[#c5a059] transition-colors">Историјат</Link>
              <Link href="/arhiva" className="hover:text-[#c5a059] transition-colors">Архива</Link>
              <Link href="/knjige" className="hover:text-[#c5a059] transition-colors hidden sm:block">Препоруке</Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-[#1a2a40] text-white py-12 mt-20">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Колона 1: О нама */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-[#c5a059]">Актив ПБФ</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Заједница студената и истраживача посвећена академском развоју и мисији Православног богословског факултета.
              </p>
            </div>

            {/* Колона 2: Контакт */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-[#c5a059]">Контакт</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>📍 Мије Ковачевића 11б, Београд</li>
                <li>📧 aktiv@pbf.rs</li>
                <li>📞 +381 11 3957300</li>
              </ul>
            </div>

            {/* Колона 3: Друштвене мреже */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-[#c5a059]">Пратите нас</h3>
              <div className="flex gap-5">
                <a href="https://www.instagram.com/aktiv_za_naucni_podmladak_pbf/" target="_blank" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.facebook.com/PbfAktiv/" target="_blank" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://bfspc.bg.ac.rs/studenti/aktiv-za-naucni-podmladak/" target="_blank" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 0 1 0 20"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6">
            © 2026 Актив за научни подмладак ПБФ. Сва права задржана.
          </div>
        </footer>
      </body>
    </html>
  );
}
