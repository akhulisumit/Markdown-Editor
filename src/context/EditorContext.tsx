import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { EditorContextType } from '../types';

const EditorContext = createContext<EditorContextType | undefined>(undefined);

const STORAGE_KEY = 'markdown-editor-content';
const AUTO_SAVE_INTERVAL = 3000; // 3 seconds

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [markdown, setMarkdown] = useState<string>(() => {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    return savedContent || '# Welcome to Markdown Editor\n\nStart typing here...\n\n## Features\n\n- **Bold text** and *italic text*\n- [Links](https://example.com)\n- Lists\n  - Nested lists\n- `Code blocks`\n\n```javascript\nconsole.log("Hello, world!");\n```\n\n> Blockquotes\n\n![Images](https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
  });

  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Calculate word and character count
  useEffect(() => {
    const text = markdown.trim();
    setCharacterCount(text.length);
    setWordCount(text ? text.split(/\s+/).filter(Boolean).length : 0);
  }, [markdown]);

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setInterval(() => {
      localStorage.setItem(STORAGE_KEY, markdown);
    }, AUTO_SAVE_INTERVAL);

    return () => clearInterval(timer);
  }, [markdown]);

  // Saving animation logic
  const handleSetMarkdown = (value: string) => {
    setMarkdown(value);
    setIsSaving(true);
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <EditorContext.Provider value={{ markdown, setMarkdown: handleSetMarkdown, wordCount, characterCount, isSaving }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = (): EditorContextType => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};