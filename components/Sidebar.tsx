import React from 'react';
import { Page } from '../types';
import { BookIcon, EngulfingIcon, MomentumIcon, PatternsIcon, DojiIcon, HammerIcon, ShootingStarIcon, TweezerIcon, MarubozuIcon, QuizIcon } from './Icons';

interface SidebarProps {
  navItems: Page[];
  activePage: Page;
  setActivePage: (page: Page) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const PageIcons: { [key in Page]: React.FC<any> } = {
    [Page.INTRODUCTION]: BookIcon,
    [Page.ENGULFING]: EngulfingIcon,
    [Page.MOMENTUM]: MomentumIcon,
    [Page.MULTIPLE]: PatternsIcon,
    [Page.DOJI]: DojiIcon,
    [Page.HAMMER]: HammerIcon,
    [Page.SHOOTING_STAR]: ShootingStarIcon,
    [Page.TWEEZER]: TweezerIcon,
    [Page.MARUBOZU]: MarubozuIcon,
    [Page.QUIZ]: QuizIcon,
};

const Sidebar: React.FC<SidebarProps> = ({ navItems, activePage, setActivePage, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside className={`fixed md:sticky top-0 h-screen bg-teal-950/80 backdrop-blur-md z-40 md:z-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64 md:w-72 flex-shrink-0 flex flex-col border-r border-teal-800/50`}>
        <div className="p-6 border-b border-teal-800">
          <h1 className="text-2xl font-bold animate-gradient-text">zvcN3xtgen Candlestick Guide</h1>
          <p className="text-sm text-teal-300 mt-1">A Crypto Trader's Guide</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = PageIcons[item];
            return (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-3 ${
                  activePage === item
                    ? 'bg-blue-500/20 text-blue-300 font-semibold'
                    : 'text-teal-200 hover:bg-teal-800/50 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </button>
            )
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-teal-800 text-center">
            <p className="text-sm text-blue-400">zvcN3xtgen</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;