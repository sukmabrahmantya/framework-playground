import { Framework } from "@/types/interface";

export const generateFlexCode = (
  framework: Framework,
  direction: string,
  justifyContent: string,
  alignItems: string
): string => {
  switch (framework) {
    case "mui":
      return `<Grid
  container
  direction="${direction}"
  justifyContent="${justifyContent}"
  alignItems="${alignItems}"
>`;
    case "tailwind":
      return `<div className="flex flex-${direction} justify-${justifyContent} items-${alignItems}">`;
    case "chakra":
      return `<Flex
  direction="${direction}"
  justify="${justifyContent}"
  align="${alignItems}"
>`;
    default:
      return "// Unsupported framework";
  }
};
