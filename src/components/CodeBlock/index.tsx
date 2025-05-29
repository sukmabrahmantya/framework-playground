"use client";

import { useState } from "react";

interface Props {
  html: string;
  rawCode: string
}

const CodeBlock = ({
  html,
  rawCode
}: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const initial = `<pre><code>૮₍ ˃̵ ֊ ˂̵  ₎ა</code></pre>`

  return (
    <div className="relative bg-[#0d1117] text-white rounded-md overflow-hidden font-mono text-sm leading-6 border border-neutral-800 w-full">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded transition"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <div
        className="overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html || initial }}
      />
    </div>
  )
};

export default CodeBlock;