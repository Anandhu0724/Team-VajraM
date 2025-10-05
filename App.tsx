import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import CosmicJourneys from './components/CosmicJourneys';
import Celestialpedia from './components/Celestialpedia';
import LearningModules from './components/LearningModules';
import Challenges from './components/Challenges';
import SplashScreen from './components/SplashScreen';
import SpaceSurf from './components/SpaceSurf';
import RelativityScanner from './components/RelativityScanner';
import { NavView } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<NavView>(NavView.COSMIC_JOURNEYS);
  const [showSplash, setShowSplash] = useState(true);
  const [appVisible, setAppVisible] = useState(false);

  const handleEnter = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    if (!showSplash) {
      // Delay visibility for fade-in effect
      const timer = setTimeout(() => setAppVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);


  const renderActiveView = () => {
    switch (activeView) {
      case NavView.COSMIC_JOURNEYS:
        return <CosmicJourneys />;
      case NavView.CELESTIALPEDIA:
        return <Celestialpedia />;
      case NavView.LEARNING_MODULES:
        return <LearningModules />;
      case NavView.CHALLENGES:
        return <Challenges />;
      case NavView.SPACE_SURF:
        return <SpaceSurf />;
      case NavView.RELATIVITY_SCANNER:
        return <RelativityScanner />;
      default:
        return <CosmicJourneys />;
    }
  };
  
  if (showSplash) {
    return <SplashScreen onEnter={handleEnter} />;
  }

  return (
    <main 
      className={`min-h-screen w-full text-[var(--text-primary)] font-sans transition-opacity duration-1000 ${appVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="min-h-screen w-full bg-black/10 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl h-[90vh] max-h-[900px] bg-black/30 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[var(--primary-glow)]/20 flex overflow-hidden ring-1 ring-white/10">
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
          <div className="flex-1 overflow-y-auto flex flex-col">
            <header className="flex justify-center items-center py-4 border-b border-white/10 flex-shrink-0 bg-black/20">
              <div className="flex items-center space-x-3">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin" style={{animationDuration: '20s'}}>
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="var(--primary-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3C14.7614 3 17 7.02944 17 12C17 16.9706 14.7614 21 12 21C9.23858 21 7 16.9706 7 12C7 7.02944 9.23858 3 12 3Z" stroke="var(--primary-glow)" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H21" stroke="var(--secondary-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h1 className="text-2xl font-display font-bold tracking-widest text-white">CHRONO-SHIFT</h1>
              </div>
            </header>
            <div className="flex-grow p-4 md:p-6 overflow-y-auto">
              <div className="min-h-full h-[calc(100vh-200px)]">{renderActiveView()}</div>
            </div>
             <footer className="text-center p-4 text-xs text-white/40 flex-shrink-0">
                POWERED BY NASA DATA & GOOGLE AI
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
