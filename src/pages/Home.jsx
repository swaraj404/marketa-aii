import React, { useState } from 'react';
import Hero from '../components/Hero';
import GettingStarted from '../components/GettingStarted';
import LogoIntro from '../components/LogoIntro';

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [startMainAnimation, setStartMainAnimation] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setStartMainAnimation(true);
  };

  return (
    <div className="relative">
      {showIntro && <LogoIntro onComplete={handleIntroComplete} />}
      
      <div className={`transition-opacity duration-1000 ${startMainAnimation ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <GettingStarted />
      </div>
    </div>
  );
};

export default Home;