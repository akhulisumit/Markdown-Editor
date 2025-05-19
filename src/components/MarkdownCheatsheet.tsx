import React from 'react';
import { X } from 'lucide-react';

interface MarkdownCheatsheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const MarkdownCheatsheet: React.FC<MarkdownCheatsheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Markdown Cheatsheet</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-slate-500 dark:text-slate-400" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Headers</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-slate-600 dark:text-slate-300"># Heading 1</p>
              <p className="text-slate-600 dark:text-slate-300">## Heading 2</p>
              <p className="text-slate-600 dark:text-slate-300">### Heading 3</p>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Emphasis</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-slate-600 dark:text-slate-300">*italic* or _italic_</p>
              <p className="text-slate-600 dark:text-slate-300">**bold** or __bold__</p>
              <p className="text-slate-600 dark:text-slate-300">~~strikethrough~~</p>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Lists</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-slate-600 dark:text-slate-300">1. Ordered list</p>
              <p className="text-slate-600 dark:text-slate-300">* Unordered list</p>
              <p className="text-slate-600 dark:text-slate-300">- Or minus</p>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Links & Images</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-slate-600 dark:text-slate-300">[Link text](url)</p>
              <p className="text-slate-600 dark:text-slate-300">![Image alt](url)</p>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Code</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-slate-600 dark:text-slate-300">`inline code`</p>
              <p className="text-slate-600 dark:text-slate-300">```
code block
```</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MarkdownCheatsheet;