import React, { useState } from 'react';
import { Moon, Sun, FileEdit, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MarkdownCheatsheet from './MarkdownCheatsheet';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showCheatsheet, setShowCheatsheet] = useState(false);

  return (
    <header className="bg-gray-800 dark:bg-black border-b border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileEdit className="h-7 w-7 text-gray-200" />
          <h1 className="text-2xl font-bold text-gray-200">Markdown Editor</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowCheatsheet(true)}
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition-all duration-200"
          >
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Cheatsheet</span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition-all duration-200"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-200" />
            )}
          </button>
        </div>
      </div>
      <MarkdownCheatsheet isOpen={showCheatsheet} onClose={() => setShowCheatsheet(false)} />
    </header>
  );
};

export default Header;