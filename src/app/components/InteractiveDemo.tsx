import { AlignItems, Direction, JustifyContent } from "@/types/interface";

interface Props {
  direction: Direction;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
};

const directionMap: Record<Direction, string> = {
  "row": "flex-row",
  "row-reverse": "flex-row-reverse",
  "column": "flex-col",
  "column-reverse": "flex-col-reverse"
};

const justifyMap: Record<JustifyContent, string> = {
  "flex-start": "justify-start",
  "center": "justify-center",
  "flex-end": "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
};

const alignMap: Record<AlignItems, string> = {
  "flex-start": "items-start",
  "center": "items-center",
  "flex-end": "items-end",
  "stretch": "items-stretch",
  "baseline": "items-baseline",
};

const InteractiveDemo = ({
  direction,
  justifyContent,
  alignItems,
}: Props) => {

  const containerClass = `flex gap-4 w-full min-h-[200px] ${directionMap[direction]} ${justifyMap[justifyContent]} ${alignMap[alignItems]}`
  return (
    <div className={containerClass}>
      <div className="px-5 drop-shadow-lg drop-shadow-slate-500/50 py-3 border border-gray-400 bg-white rounded-md">Box 1</div>
      <div className="px-5 drop-shadow-lg drop-shadow-slate-500/50 py-6 border border-gray-400 bg-white rounded-md">Box 2</div>
      <div className="px-5 drop-shadow-lg drop-shadow-slate-500/50 py-10 border border-gray-400 bg-white rounded-md">Box 3</div>
    </div>
  )
}

export default InteractiveDemo;