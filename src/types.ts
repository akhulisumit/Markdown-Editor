export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface EditorContextType {
  markdown: string;
  setMarkdown: (value: string) => void;
  wordCount: number;
  characterCount: number;
  isSaving: boolean;
}