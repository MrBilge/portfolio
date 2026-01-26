export default function HeroSkillCard() {
  return (
    <div className="relative  flex items-center justify-center w-full h-full">
      <div className="glow glow-purple" />
      <div className="glow glow-blue" />

      <div
        className="relative z-10 w-80 h-40 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 
                flex flex-col justify-center gap-3 p-4 text-[11px]"
      >
        <span
          className=" inline-block w-max px-3 py-1 rounded-full 
                   bg-white/5 border border-white/10 text-sm
                   text-purple-300 tracking-wide"
        >
          Scalable UI Systems
        </span>

        <span
          className="inline-block w-max px-3 py-1 rounded-full 
                   bg-white/5 border border-white/10    text-sm
                   text-blue-300 tracking-wide"
        >
          Performance-Focused Design
        </span>

        <span
          className="inline-block w-max px-3 py-1 rounded-full 
                   bg-white/5 border border-white/10   text-sm
                   text-gray-200 tracking-wide"
        >
          Clean & Maintainable Code
        </span>
      </div>
    </div>
  );
}
