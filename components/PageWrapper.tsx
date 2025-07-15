import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="animate-slide-fade-in">
      {children}
    </div>
  );
};

export default PageWrapper;