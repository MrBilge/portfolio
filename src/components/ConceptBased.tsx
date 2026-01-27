import {
  BoltIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  EyeIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  CpuChipIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  ArrowPathIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    col: 15,
    icon: BoltIcon,
    color: "text-yellow-400",
    glow: "bg-yellow-400/30",
  },
  {
    col: 16,
    icon: PuzzlePieceIcon,
    color: "text-indigo-400",
    glow: "bg-indigo-400/30",
  },
  {
    col: 17,
    icon: ShieldCheckIcon,
    color: "text-emerald-400",
    glow: "bg-emerald-400/30",
  },
  {
    col: 18,
    icon: EyeIcon,
    color: "text-sky-400",
    glow: "bg-sky-400/30",
  },

  {
    col: 19,
    icon: Squares2X2Icon,
    color: "text-slate-400",
    glow: "bg-slate-400/30",
  },
  {
    col: 27,
    icon: ChartBarIcon,
    color: "text-green-400",
    glow: "bg-green-400/30",
  },
  {
    col: 28,
    icon: CursorArrowRaysIcon,
    color: "text-rose-400",
    glow: "bg-rose-400/30",
  },

  {
    col: 29,
    icon: CpuChipIcon,
    color: "text-violet-400",
    glow: "bg-violet-400/30",
  },
  {
    col: 30,
    icon: GlobeAltIcon,
    color: "text-cyan-400",
    glow: "bg-cyan-400/30",
  },
  {
    col: 31,
    icon: ArrowPathIcon,
    color: "text-orange-400",
    glow: "bg-orange-400/30",
  },
  {
    col: 32,
    icon: SparklesIcon,
    color: "text-fuchsia-400",
    glow: "bg-fuchsia-400/30",
  },
];
const COLS = 12;
const CARD_CLASS =
  "relative flex justify-center items-center h-28 w-28   rounded-2xl border border-white/10 bg-white/3  lg:backdrop-blur-sm transition-all duration-500 hover:scale-85 lg:overflow-visible";

export default function ConceptBased() {
  return (
    <div className="relative overflow-hidden">
      <SmallGridCards />
      <LargeGridCards />

      <div className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent" />
      <div className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent" />
      <div className="hidden lg:block pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="hidden lg:block pointer-events-none absolute inset-x-0 bottom-0   h-[330px] bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

const LargeGridCards = () => {
  return (
    <div className="hidden lg:grid grid-cols-12  lg:gap-3 lg:gap-x-30 xl:gap-3  relative z-0">
      {Array.from({ length: 48 }).map((_, i) => {
        const card = cards.find((c) => c.col === i);
        const rowIndex = Math.floor(i / COLS);
        const isEvenRow = rowIndex % 2 === 1;

        return (
          <div key={i}>
            <div
              className={`${CARD_CLASS} group ${
                isEvenRow
                  ? "lg:-translate-x-25 xl:translate-x-15"
                  : "lg:-translate-x-40 xl:-translate-x-0"
              }`}
            >
              {card && (
                <>
                  <div
                    className={`absolute -inset-6 rounded-3xl blur-2xl opacity-0 transition-opacity duration-500 ${card.glow} group-hover:opacity-100`}
                  />
                  <card.icon
                    className={`relative z-10 w-12 h-12 ${card.color}`}
                  />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SmallGridCards = () => {
  return (
    <div className=" grid grid-cols-3 sm:grid-cols-4  gap-4  lg:hidden">
      {cards.map((card) => (
        <div key={card.col} className={`${CARD_CLASS} group`}>
          <div
            className={`hidden   absolute -inset-6 rounded-3xl blur-2xl opacity-40 ${card.glow}`}
          />
          <card.icon className={`relative z-10 w-12 h-12 ${card.color}`} />
        </div>
      ))}
    </div>
  );
};
