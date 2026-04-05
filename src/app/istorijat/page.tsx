"use client";

import { motion } from "framer-motion";
import { 
  History, 
  Scroll, 
  BookOpen, 
  Clock, 
  Compass, 
  Film, 
  RefreshCcw
} from "lucide-react";

// Wrapper for main sections with scroll reveal
interface ScrollSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

const ScrollSection = ({ title, icon, children, delay = 0 }: ScrollSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
    className="mb-20 last:mb-0"
  >
    <div className="flex items-center gap-5 mb-10 border-b border-[#1a2a40]/5 pb-6">
      <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shadow-inner">
        {icon}
      </div>
      <h2 className="text-[#1a2a40] font-serif text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
    <div className="grid gap-4">
      {children}
    </div>
  </motion.div>
);

// Minimalist Card for individual items with hover effects
const ItemCard = ({ text }: { text: string }) => {
  // Logic to highlight names (before colon) and dates (in parentheses)
  const formatText = (input: string) => {
    const colonIndex = input.indexOf(':');
    let name = "";
    let content = input;

    if (colonIndex !== -1) {
      name = input.substring(0, colonIndex);
      content = input.substring(colonIndex + 1);
    }

    // Highlight dates (e.g., (17. 11. 2010)) using a simple split for safety
    const parts = content.split(/(\([^)]+\))/g);

    return (
      <div className="text-[#1a2a40] font-sans leading-[1.8] text-base md:text-lg">
        {name && <span className="font-bold text-[#1a2a40]">{name}:</span>}
        {parts.map((part: string, index: number) => {
          if (part.startsWith('(') && part.endsWith(')')) {
            return (
              <span key={index} className="text-[#c5a059] font-semibold tracking-wide mx-1 group-hover:text-[#b08e4d] transition-colors">
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </div>
    );
  };

  return (
    <motion.div
      whileHover={{ 
        y: -3, 
        boxShadow: "0px 10px 30px rgba(0,0,0,0.04)", 
        borderColor: "#c5a059" 
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="group bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm transition-all flex gap-5 items-start"
    >
      <div className="mt-2.5 shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] group-hover:scale-150 transition-transform duration-300" />
      </div>
      <div className="flex-grow">
        {formatText(text)}
      </div>
    </motion.div>
  );
};

export default function HistoryPage() {
  return (
    <div className="bg-[#FCFAFA] selection:bg-[#c5a059]/30 selection:text-[#1a2a40]">
      <div className="max-w-5xl mx-auto px-6 py-24 pb-40">
        {/* Header section with refined reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-32"
        >
          <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-[0.4em] mb-6 block">
            Званични летопис
          </span>
          <h1 className="text-[#1a2a40] font-serif text-5xl md:text-7xl font-bold mb-10 leading-tight">
            Летопис Актива
          </h1>
          <div className="w-32 h-[2px] bg-[#c5a059]/30 mx-auto relative">
            <div className="absolute inset-0 bg-[#c5a059] translate-x-[-100%] animate-[shimmer_2s_infinite]" />
          </div>
        </motion.div>

        {/* 1. Founding */}
        <ScrollSection title="Оснивање" icon={<History size={26} />}>
          <motion.div 
            className="bg-white border-l-4 border-[#c5a059] p-8 md:p-12 rounded-r-4xl shadow-sm group hover:shadow-md transition-shadow"
            whileHover={{ x: 5 }}
          >
            <p className="text-[#1a2a40] font-sans leading-[1.9] text-lg md:text-xl">
              Актив за научни подмладак и друштвено-културне активности први пут је основан академске 2009/2010. године на предлог продекана за науку професора **др Богољуба Шијаковића**, уз благослов декана професора **др Иринеја Буловића**, као и уз подршку Деканског колегијума и Наставно-научног већа Православног богословског факултета. За координатора је именован **др Богдан Лубардић**, доцент на катедри за философију.
            </p>
          </motion.div>
        </ScrollSection>

        {/* 2. Chastity Lectures */}
        <ScrollSection title="Трибине „Целомудреност“" icon={<Scroll size={26} />}>
          <ItemCard text="Др Бојан Јовановић: „Хришћанство и култура: аскетски аспекти“ (21. 4. 2010)" />
          <ItemCard text="Др Ирина Деретић: „Зашто Диотима саопштава истину о Еросу или о еросу и философији у Платоновој Гозби“ (17. 5. 2010)" />
          <ItemCard text="Др Џон Бер: „Изазов наше прошлости и испитивање прошлости“ (11. 10. 2010)" />
          <ItemCard text="Др Џон Бер: „Задаци православне теологије у 21. веку“ (14. 10. 2010)" />
          <ItemCard text="Др Мило Ломпар: „Религиолошке и културолошке теме у мисли и делу Милоша Црњанског“ (03. 11. 2010)" />
          <ItemCard text="Мр Миша Ђурковић: „Хомосексуализам и проблеми глобализације“ (17. 11. 2010)" />
          <ItemCard text="Др Виктор Кастелани: „Кога кривити: богови, судбина и слобода у античкој грчкој трагедији“ (9. 12. 2010)" />
          <ItemCard text="Архимандрит Василије Гондикакис: „Разговори на духовне теме“ (16.12.2010)" />
          <ItemCard text="Милош Кнежевић: „Православље и геополитика“ (23. 12. 2010)" />
          <ItemCard text="Брат Ришар (Тезе): „Тезе – место где се хришћани моле и сусрећу“ (16.02.2011)" />
          <ItemCard text="„Београдски синдикат“: „Утицај популарне културе на развој појединца и друштва“ (22.02.2011)" />
          <ItemCard text="Др Предраг Чичовачки: „Глобализам и светска криза“ (09. 03.2011)" />
          <ItemCard text="Мр Ђорђе Вукадиновић: „Отпорност националног идентитета под притиском медијске и политичке манипулације“ (25. 5. 2011)" />
          <ItemCard text="Јован Ераковић: „Бицикл: Љубвељубни начин да се допустимо себи” (7. 3. 2012)" />
        </ScrollSection>

        {/* 3. Faces and Books */}
        <ScrollSection title="Трибине „Лица и књиге“" icon={<BookOpen size={26} />}>
          <ItemCard text="Др Свилен Тутеков: „Добродетелта заради истината“ (17.04.2011)" />
          <ItemCard text="Представљање књиге „Буктиње“ академика Николе Милошевића (27. мај 2010). Легат Николе Милошевића поклоњен Факултету. Говорили: др Богдан Лубардић, др Мило Ломпар и Марко Делић." />
          <ItemCard text="Др Вера Јанићијевић: „Лексикон византијске философије“ (10.05.2011)" />
          <ItemCard text="Др Милан Брдар: „Филозофија у Дишановом писоару – постмодерни пресек двадесетовековне филозофије“ (10. 5. 2011)" />
          <ItemCard text="Др Слободан Антонић: „Културни рат у Србији“ (21. 12. 2011)" />
          <ItemCard text="Др Предраг Ристић: „Истина о Лепенском Виру“ (14. 3. 2012)" />
          <ItemCard text="Др Смиља Аврамов: „Геноцид у Југославији“ (22. 3. 2012)" />
        </ScrollSection>

        {/* 4. We in Time */}
        <ScrollSection title="Трибине „Ми у времену“" icon={<Clock size={26} />}>
          <ItemCard text="Часни канон др Мајкл Грин (Michael Green): „Евангелизација некада и сада – изазови савременог доба“ (10.10.2012)" />
          <ItemCard text="Тибор Тарјан и Живко Мицић: „Историја бициклизма“ (хуманитарна акција)" />
        </ScrollSection>

        {/* 5. Excursions and Humanitarian */}
        <ScrollSection title="Тематске екскурзије и Хуманитарни рад" icon={<Compass size={26} />}>
          <ItemCard text="Путовање на Косово и Метохију (Грачаница, Бабин мост, Студеница). Помоћ деци из метохијских школа." />
          <ItemCard text="Меморијални парк „Јајинци“ (жртве геноцида)." />
          <ItemCard text="Први организован одлазак у манастир Ћелије." />
          <ItemCard text="Старачки дом у Шапцу, Текериш, Косанин град (опело јунацима Церске битке) и манастир Радовашница." />
          <ItemCard text="и 7. 7. 2011. Одлазак у манастир Ћелије. Изградња спомен стола од масивног храстовог дрвета са плакетом захвалности светом Јустину Поповићу." />
          <ItemCard text="Посета Сремским Карловцима. Библиотеци Богословије уручено 150 књига. Помен проф. др Лазару Мирковићу и Милошу Ердељану. Обилазак Фрушке горе и манастира Крушедол." />
          <ItemCard text="НУДОР сарадња и Циклосвет Србија (21.12.2012) помоћ за Дом за незбринута лица у Кумодрашкој." />
        </ScrollSection>

        {/* 6. Arts and Cinema */}
        <ScrollSection title="Кино секција, позориште и песништво" icon={<Film size={26} />}>
          <ItemCard text="Представа „Зашто балкан није секси” (09.06.2011)" />
          <ItemCard text="„Библио-драме“ и Кино секција са Николом Јеловцем." />
          <ItemCard text="Поетско вече (14. 12. 2011): Учествовало седам студената, владика Давид крушевачки и др Богдан Лубардић." />
        </ScrollSection>

        {/* 7. Renewal */}
        <ScrollSection title="Обнова рада" icon={<RefreshCcw size={26} />}>
          <motion.div 
            className="bg-[#1a2a40] p-10 md:p-14 rounded-4xl shadow-xl text-white relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <p className="text-white/90 font-sans leading-[2] text-lg md:text-xl relative z-10">
              У академској 2014/2015. години, рад Актива је обновљен. За саветника изабран **Ненад Божовић**, а координатор студент којег именује Студентски парламент.
            </p>
          </motion.div>
        </ScrollSection>
      </div>
    </div>
  );
}
