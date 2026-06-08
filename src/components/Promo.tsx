import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Периодичность замены ГРМ
      </h3>

      <div className="absolute bottom-12 left-6 right-6 z-10 flex flex-col sm:flex-row gap-6 sm:gap-12 items-end justify-between">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg z-10 leading-tight">
          Бензин: 45 000–120 000 км. Дизель: 45 000–90 000 км. Некоторые модели — до 150 000 км.
        </p>
        <p className="text-white/70 text-sm sm:text-base max-w-xs leading-relaxed shrink-0">
          Несоблюдение регламента грозит серьёзной поломкой двигателя, снижением мощности и ростом расхода топлива.
        </p>
      </div>
    </div>
  );
}