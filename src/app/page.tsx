"use client";

import CodeBlock from "@/components/CodeBlock";
import { highlightCode } from "@/lib/shiki";
import InteractiveDemo from "./components/InteractiveDemo";
import ControlPanel from "./components/ControlPanel";
import { useEffect, useState } from "react";
import { AlignItems, Direction, Framework, JustifyContent } from "@/types/interface";
import FrameworkSelector from "./components/FrameworkSelector";
import { generateFlexCode } from "@/lib/codeGenerator";
import Footer from "@/components/Footer/footer";

export default function Home() {
  const [direction, setDirection] = useState<Direction>("row");
  const [justifyContent, setJustifyContent] = useState<JustifyContent>("center");
  const [alignItems, setAlignItems] = useState<AlignItems>("center");
  const [highlighted, setHighlighted] = useState("");
  const [selectedFramework, setSelectedFramework] = useState<Framework>("tailwind");

  const code = generateFlexCode(selectedFramework, direction, justifyContent, alignItems)

  useEffect(() => {
    highlightCode(code, "tsx").then(setHighlighted);
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] mx-auto">
      <main className="bg-slate-50 border-slate-400 flex flex-col gap-6 p-8 rounded-md items-center sm:items-start w-full border">
        <InteractiveDemo
          direction={direction}
          justifyContent={justifyContent}
          alignItems={alignItems}
        />
        <ControlPanel
          direction={direction}
          justifyContent={justifyContent}
          alignItems={alignItems}
          onDirectionChange={setDirection}
          onJustifyChange={setJustifyContent}
          onAlignChange={setAlignItems}
        />
        <FrameworkSelector
          selected={selectedFramework}
          onChange={setSelectedFramework}
        />
        <CodeBlock html={highlighted} rawCode={code} />
      </main>
      <Footer />
    </div>
  );
}