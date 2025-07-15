import React from 'react';

const Loader: React.FC = () => (
  <div className="flex justify-center items-center h-64">
    <div 
      className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
      role="status"
      aria-label="Loading content..."
    ></div>
  </div>
);

export default Loader;
