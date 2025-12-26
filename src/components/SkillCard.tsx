export default function SkillCards({ item }: any) {
  return (
    <div
      className={`
        shrink-0 w-[350px] space-y-5 py-10 px-10 rounded-xl
        ${item.wrapper ? "bg-transparent" : "card-surface"}
      `}
    >
      {item.icon}
      <p className="text-2xl font-semibold">{item.name}</p>
      <p className="font-playfair">{item.description}</p>
      <div className="border-b border-2 w-20" />
    </div>
  );
}
