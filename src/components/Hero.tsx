import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/c058e431-3e8c-41bb-92c7-da00acb9c811/files/96c8f874-d7a2-42a8-b5e4-99ab4f8696fe.jpg"
          alt="Двигатель автомобиля, ГРМ"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="md:text-7xl lg:text-8xl tracking-tight mb-6 font-normal text-3xl">Основные виды работ при ТО ГРМ 
Ежедневное обслуживание (ЕО). После прогрева двигателя при контрольном осмотре проверяют отсутствие стуков при различной частоте коленчатого вала. Также очищают двигатель от внешних загрязнений. 

</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Профессиональное техническое обслуживание газораспределительного механизма — точно, надёжно, в срок
        </p>
      </div>
    </div>
  );
}