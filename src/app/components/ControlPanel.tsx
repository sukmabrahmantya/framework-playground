import { AlignItems, Direction, JustifyContent } from "@/types/interface";

interface Props {
  direction: Direction;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  onDirectionChange: (value: Direction) => void;
  onJustifyChange: (value: JustifyContent) => void;
  onAlignChange: (value: AlignItems) => void;
}

const ControlPanel = ({
  direction,
  justifyContent,
  alignItems,
  onDirectionChange,
  onJustifyChange,
  onAlignChange,
}: Props) => {
  const directionOptions: Direction[] = ["row", "row-reverse", "column", "column-reverse"];
  const justifyOptions: JustifyContent[] = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];
  const alignOptions: AlignItems[] = ["flex-start", "center", "flex-end", "stretch", "baseline"];

  const renderRadioGroup = <T extends string>(
    name: string,
    options: T[],
    value: T,
    onChange: (value: T) => void
  ) => (
    <fieldset>
      <legend className="mb-1 font-medium capitalize">{name}</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );


  return (
    <div className="flex flex-col gap-6 border border-gray-300 bg-white rounded-md w-full p-6">
      {renderRadioGroup("direction", directionOptions, direction, onDirectionChange)}
      {renderRadioGroup("justifyContent", justifyOptions, justifyContent, onJustifyChange)}
      {renderRadioGroup("alignItems", alignOptions, alignItems, onAlignChange)}
    </div>
  )
};

export default ControlPanel;