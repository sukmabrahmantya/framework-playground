import { makeSingletonHighlighter } from "shiki/bundle/web";
import { createHighlighter } from "shiki";

export async function highlightCode(code: string, lang = 'tsx') {
  const getHighlighter = makeSingletonHighlighter(createHighlighter);

  const highlighter = await getHighlighter({
    themes: ['github-dark-high-contrast'],
    langs: ['jsx', 'tsx']
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'github-dark-high-contrast',
  });

}