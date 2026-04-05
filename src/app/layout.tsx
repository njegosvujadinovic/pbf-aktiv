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
    default: 'Актив за научни подмладак ПБФ | Универзитет у Београду',
    template: '%s | Актив ПБФ'
  },
  description: 'Званична платформа Актива за научни подмладак Православног богословског факултета. Научни дијалог, трибине, теолошка истраживања и архив предавања.',
  keywords: ['ПБФ', 'Актив за научни подмладак', 'Теологија', 'Београд', 'Православни богословски факултет', 'Наука', 'Трибине'],
  authors: [{ name: 'Актив ПБФ' }],
  openGraph: {
    title: 'Актив за научни подмладак ПБФ',
    description: 'Истражите архиву наших предавања и најновије научне активности подмлатка ПБФ-а.',
    url: 'https://pbf-aktiv.rs', // Ово ћемо променити кад купите домен
    siteName: 'Актив ПБФ',
    images: [
      {
        url: '/og-image.jpg', // Ово је слика која ће се видети на Viberu
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
        
        {/* Navigacija sa tvojim novim čistim logotipom */}
        <header className="sticky top-0 z-50 bg-[#FCFAFA]/90 backdrop-blur-sm border-b border-[#c5a059]/5">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* LOGO POVEZIVANJE */}
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-cist.png" 
                alt="ПБФ Лого" 
                className="h-20 w-auto object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-all duration-300" 
              />
            </Link>

            {/* Menije ne diramo ако ти већ раде, само их стилизујемо да прате естетику */}
            <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm uppercase tracking-widest">
              <Link href="/" className="hover:text-[#c5a059] transition-colors relative group">
                Почетна
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/istorijat" className="hover:text-[#c5a059] transition-colors relative group">
                Историјат
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/arhiva" className="hover:text-[#c5a059] transition-colors relative group">
                Архива
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/knjige" className="hover:text-[#c5a059] transition-colors relative group">
                Препоруке
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="py-10 text-center text-xs font-sans uppercase tracking-[0.2em] border-t border-[#c5a059]/10 mt-20 opacity-60">
          Актив за научни подмладак ПБФ © 2026
        </footer>
      </body>
    </html>
  );
}
