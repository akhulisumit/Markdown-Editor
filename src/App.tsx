import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { EditorProvider } from './context/EditorContext';
import Header from './components/Header';
import EditorLayout from './components/EditorLayout';

function App() {
  return (
    <ThemeProvider>
      <EditorProvider>
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-black overflow-hidden">
          <Header />
          <EditorLayout />
        </div>
      </EditorProvider>
    </ThemeProvider>
  );
}

export default App;