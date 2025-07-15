
import React, { useState } from 'react';
import { Page } from './types';
import { NAV_ITEMS } from './constants';
import Sidebar from './components/Sidebar';
import PageWrapper from './components/PageWrapper';
import Quiz from './components/Quiz';

// Direct, static imports for stability
import Introduction from './sections/content/Introduction';
import EngulfingCandle from './sections/content/EngulfingCandle';
import MomentumCandle from './sections/content/MomentumCandle';
import MultiplePatterns from './sections/content/MultiplePatterns';
import DojiCandle from './sections/content/DojiCandle';
import Hammer from './sections/content/Hammer';
import ShootingStar from './sections/content/ShootingStar';
import Tweezer from './sections/content/Tweezer';
import Marubozu from './sections/content/Marubozu';


const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.INTRODUCTION);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const renderContent = () => {
    switch (activePage) {
      case Page.INTRODUCTION: return <Introduction />;
      case Page.ENGULFING: return <EngulfingCandle />;
      case Page.MOMENTUM: return <MomentumCandle />;
      case Page.MULTIPLE: return <MultiplePatterns />;
      case Page.DOJI: return <DojiCandle />;
      case Page.HAMMER: return <Hammer />;
      case Page.SHOOTING_STAR: return <ShootingStar />;
      case Page.TWEEZER: return <Tweezer />;
      case Page.MARUBOZU: return <Marubozu />;
      case Page.QUIZ: return <Quiz />;
      default: return <Introduction />;
    }
  };

  const handlePageChange = (page: Page) => {
    setActivePage(page);
    setSidebarOpen(false); // Close sidebar on navigation
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row text-teal-100 font-serif">
      <div className="md:hidden p-4 bg-blue-950/80 backdrop-blur-md sticky top-0 z-20 flex justify-between items-center border-b border-blue-800">
        <h1 className="text-xl font-bold text-blue-300">zvcN3xtgen Guide</h1>
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)} 
          className="p-2 rounded-md hover:bg-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Open navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <Sidebar 
        navItems={NAV_ITEMS}
        activePage={activePage}
        setActivePage={handlePageChange}
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <PageWrapper key={activePage}>
          {renderContent()}
        </PageWrapper>
      </main>

      <footer className="w-full text-center p-4 bg-blue-950/80 border-t border-blue-800 md:hidden">
        <p className="text-sm text-blue-400">zvcN3xtgen</p>
      </footer>
    </div>
  );
};

export default App;