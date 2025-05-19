import React from 'react';
import { useEditor } from '../context/EditorContext';
import WordCount from './WordCount';

const Editor = () => {
  const { markdown, setMarkdown } = useEditor();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="h-full flex flex-col bg-[#FFFFFF] dark:bg-[#1E1E1E] rounded-lg shadow-lg border border-[#E5E7EB] dark:border-[#2C2C2C] overflow-hidden">
      <div className="px-4 py-2.5 bg-[#F9FAFB] dark:bg-[#121212] text-[#111827] dark:text-white font-medium text-sm flex items-center border-b border-[#E5E7EB] dark:border-[#2C2C2C]">
        <span className="flex-1">EDITOR</span>
      </div>
      <div className="flex-1 overflow-hidden">
        <textarea
          value={markdown}
          onChange={handleChange}
          className="h-full w-full p-4 font-mono text-[#111827] dark:text-white bg-[#FFFFFF] dark:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#BB86FC] resize-none transition-colors duration-300 text-sm leading-relaxed overflow-auto placeholder-[#6B7280] dark:placeholder-[#B3B3B3]"
          placeholder={`# Welcome to Markdown Editor\n\n## Features\n\n- Cheatsheet (Markdown help)\n- Theme toggle (Light/Dark)\n- Auto-save (local storage)\n- Download as .md\n- Live preview\n- Word & character count\n- Responsive design\n\n## Example\n\n- **Bold** and *italic*\n- [Link](https://example.com)\n- \`Inline code\`\n\n\`\`\`js\n// Code block\nconsole.log('Hello!');\n\`\`\`\n\n> Blockquote\n\n![Image](https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=3900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n`}
          spellCheck="false"
        />
      </div>
      <WordCount />
    </div>
  );
};

export default Editor;