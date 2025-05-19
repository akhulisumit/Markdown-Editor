import MarkdownIt from 'markdown-it';

// Initialize markdown-it with options
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

/**
 * Renders markdown content to HTML
 * @param content Markdown content
 * @returns Rendered HTML
 */
export const renderMarkdown = (content: string): string => {
  return md.render(content);
};