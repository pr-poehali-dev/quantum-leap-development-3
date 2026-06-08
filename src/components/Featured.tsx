import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Search",
    title: "Периодический осмотр",
    description:
      "Проверка клапанов, сёдел, кулачков распредвала, толкателей, штанг, коромысел, направляющих втулок и зубьев распределительной шестерни.",
  },
  {
    icon: "Settings2",
    title: "Регулировка тепловых зазоров",
    description:
      "Проверка и регулировка зазоров между клапанами и сёдлами, а также между стержнями клапанов и носками коромысел по заводским нормам.",
  },
  {
    icon: "ShieldCheck",
    title: "Герметичность клапанов",
    description:
      "Контроль герметичности посадки клапанов. При нарушениях — притирка конусных фасок клапанов к сёдам.",
  },
  {
    icon: "Link",
    title: "Ремень и цепь ГРМ",
    description:
      "Осмотр на трещины, расслоения, замасливание. Проверка натяжения. Замена при обнаружении дефектов или по регламенту.",
  },
  {
    icon: "Gauge",
    title: "Фазы газораспределения",
    description:
      "Точное совмещение меток на шкивах коленчатого и распределительного валов. Проверка натяжителя и успокоителя цепи.",
  },
  {
    icon: "Activity",
    title: "Компрессия в цилиндрах",
    description:
      "Проверка компрессометром на прогретом двигателе (75–80 °C). Контроль состояния маслосъёмных колпачков и сальников.",
  },
];

export default function Featured() {
  return (
    <div className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">
          Основные работы при ТО ГРМ
        </h3>
        <p className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight max-w-3xl">
          Полный комплекс диагностики и обслуживания газораспределительного механизма.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((item) => (
            <div key={item.title} className="border-t border-neutral-200 pt-6">
              <Icon name={item.icon} fallback="Settings" size={24} className="mb-4 text-neutral-900" />
              <h4 className="text-lg font-semibold mb-2 text-neutral-900">{item.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Записаться на сервис
        </button>
      </div>
    </div>
  );
}