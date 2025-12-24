import React from 'react';
import Video from './Video';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 blur-lg">
        <Video />
      </div>

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/20 blur-sm z-0" />

      {/* Hero Text */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;