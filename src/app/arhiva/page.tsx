import { client } from '@/lib/sanity.client';

// Помоћна функција за YouTube ID
const getYouTubeID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default async function ArhivaPage() {
  // Повлачимо трибине из Sanity-ја
  const predavanja = await client.fetch(`*[_type == "predavanje"] | order(datum desc)`);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 mb-32">
      <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-center mb-20 text-[#1a2a40]">
        Архива предавања
      </h1>

      {predavanja.length === 0 ? (
        <div className="text-center py-32 border-2 border-dashed border-[#c5a059]/20 rounded-3xl bg-white/50">
          <p className="text-gray-400 font-sans text-lg">Тренутно нема објављених предавања у бази.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {predavanja.map((p: any) => (
            <div key={p._id} className="bg-white rounded-[2rem] shadow-sm border border-[#c5a059]/10 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              {/* YouTube Video Frame */}
              {p.youtubeUrl && (
                <div className="aspect-video w-full bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${getYouTubeID(p.youtubeUrl)}`}
                    title={p.naslov}
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              )}
              
              <div className="p-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#c5a059] font-sans font-bold text-xs uppercase tracking-widest bg-[#c5a059]/5 px-4 py-2 rounded-full border border-[#c5a059]/10">
                    {p.datum}
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#1a2a40] mb-4 leading-[1.1] tracking-tight">
                  {p.naslov}
                </h2>
                <p className="text-[#c5a059] font-sans italic text-sm mb-6">Предавач: {p.predavac}</p>
                <div className="h-px w-12 bg-[#c5a059]/20 mb-6" />
                <p className="text-gray-600 font-sans text-base leading-relaxed line-clamp-3 opacity-80">
                  {p.opis}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
