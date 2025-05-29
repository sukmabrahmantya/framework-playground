import { Framework } from "@/types/interface";

interface Props {
  selected: Framework;
  onChange: (framework: Framework) => void;
}

const frameworks: { label: string; value: Framework }[] = [
  { label: "Tailwind", value: "tailwind" },
  { label: "MUI v5", value: "mui" },
  { label: "Chakra v2", value: "chakra" },
];

const FrameworkSelector = ({
  selected,
  onChange
}: Props) => {
  return (
    <div className="flex gap-4 border px-6 py-4 w-fit border-gray-300 bg-white rounded-md">
      {frameworks.map((framework) => (
        <button
          key={framework.value}
          onClick={() => onChange(framework.value)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition 
            ${selected === framework.value
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
        >
          {framework.label}
        </button>
      ))}
    </div>
  )
};

export default FrameworkSelector;