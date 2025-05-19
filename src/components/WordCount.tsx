import React from 'react';
import { useEditor } from '../context/EditorContext';
import { Download } from 'lucide-react';

const WordCount: React.FC = () => {
  const { wordCount, characterCount, markdown, isSaving } = useEditor();

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center text-sm text-[#111827] dark:text-[#FFFFFF] py-2 px-4 bg-[#F9FAFB] dark:bg-[#1E1E1E] border-t border-[#E5E7EB] dark:border-[#2C2C2C] rounded-b-lg">
      <div className="mr-6">Words: <span className="font-medium">{wordCount}</span></div>
      <div>Characters: <span className="font-medium">{characterCount}</span></div>
      <div className="ml-6 text-xs italic text-[#6B7280] dark:text-[#B3B3B3] flex items-center min-w-[70px]">
        {isSaving ? (
          <span className="flex items-center gap-1">
            Saving
            <span className="animate-pulse">...</span>
          </span>
        ) : (
          'Auto-saved'
        )}
      </div>
      <div className="flex-1" />
      <button
        onClick={handleDownload}
        className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold transition-colors duration-200 shadow-sm ml-4"
        title="Download Markdown"
      >
        <Download className="h-4 w-4" />
        Download
      </button>
    </div>
  );
};

export default WordCount;