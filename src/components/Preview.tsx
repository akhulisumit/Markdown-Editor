import React from 'react';
import { useEditor } from '../context/EditorContext';
import { renderMarkdown } from '../utils/markdown';

const Preview: React.FC = () => {
  const { markdown } = useEditor();

  return (
    <div className="h-full flex flex-col bg-[#FFFFFF] dark:bg-[#1E1E1E] rounded-lg shadow-lg border border-[#E5E7EB] dark:border-[#2C2C2C] overflow-hidden">
      <div className="px-4 py-2.5 bg-[#F9FAFB] dark:bg-[#121212] text-[#111827] dark:text-white font-medium text-sm flex items-center border-b border-[#E5E7EB] dark:border-[#2C2C2C]">
        <span className="flex-1">PREVIEW</span>
      </div>
      <div 
        className="flex-1 p-4 overflow-auto prose max-w-none w-full bg-[#FFFFFF] dark:bg-[#1E1E1E] transition-colors duration-300 text-sm leading-relaxed text-[#111827] dark:text-white"
        style={{ color: 'inherit' }}
        dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
      />
      <style>{`
        .prose :where(p, h1, h2, h3, h4, h5, h6, li, code, pre, strong, em, blockquote, th, td) {
          color: #111827 !important;
        }
        .prose code, .prose pre {
          background: #F3F4F6 !important;
          color: #3B82F6 !important;
        }
        .prose a { color: #06B6D4 !important; }
        .prose strong { color: #3B82F6 !important; }
        .prose em { color: #6366F1 !important; }
        .dark .prose :where(p, h1, h2, h3, h4, h5, h6, li, code, pre, strong, em, blockquote, th, td) {
          color: #FFFFFF !important;
        }
        .dark .prose code, .dark .prose pre {
          background: #23272a !important;
          color: #BB86FC !important;
        }
        .dark .prose a { color: #2196F3 !important; }
        .dark .prose strong { color: #BB86FC !important; }
        .dark .prose em { color: #03DAC6 !important; }
      `}</style>
    </div>
  );
};

export default Preview;