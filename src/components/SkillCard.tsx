import { ReactNode } from "react";

interface SkillItem {
  name: string;
  description: string;
  icon: ReactNode;
  wrapper?: boolean;
}

interface SkillCardsProps {
  item: SkillItem;
}

export default function SkillCards({ item }: SkillCardsProps) {
  return (
    <div
      className={`
        shrink-0 w-[300px] bg-white/5 space-y-5 py-10 px-10 rounded-xl
       
      `}
    >
      {item.icon}
      <p className="text-2xl font-semibold">{item.name}</p>
      <p className=" text-sm text-white/50 tracking-wide">{item.description}</p>
    </div>
  );
}
