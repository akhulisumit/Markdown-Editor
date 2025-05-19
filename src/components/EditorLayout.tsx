import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

const EditorLayout: React.FC = () => {
  return (
    <main className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-7xl h-[calc(100vh-4rem)]">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-0">
        <Editor />
        <Preview />
      </div>
    </main>
  );
};

export default EditorLayout;