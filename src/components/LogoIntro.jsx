
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// NEW FILE: Create this as LogoIntro.jsx
const LogoIntro = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const lettersRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const logoText = 'Marketa Ai';
    const logoElement = logoRef.current;
    
    // Create letter spans
    logoElement.innerHTML = '';
    lettersRef.current = [];
    
    logoText.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.className = 'font-[unbounded]';
      logoElement.appendChild(span);
      lettersRef.current.push(span);
      
      // Highlight first letter
      if (index === 0) {
        span.style.color = '#FF6B35';
      } else {
        span.style.color = '#ffffff';
      }
    });

    // Set initial state
    gsap.set(lettersRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    // Animation timeline
    const tl = gsap.timeline();

    // Letter by letter entrance animation
    lettersRef.current.forEach((letter, index) => {
      tl.to(letter, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)',
      }, index * 0.08);
    });

    // Add a subtle pulse effect
    tl.to(lettersRef.current, {
      scale: 1.05,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut',
    }, '+=0.2');

    // Wait, then scale down the logo and fade out background
    tl.to(logoRef.current, {
      scale: 0.6, // Scale down to match hero text size
      duration: 1,
      ease: 'power2.inOut',
    }, '+=0.5');

    // Fade out the black background to reveal the website
    tl.to(bgRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    }, '-=0.6'); // Start slightly before logo scale completes

    // Finally fade out the logo itself
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        onComplete();
      }
    }, '-=0.3');

  }, [onComplete]);

  return (
    <>
      {/* Black background that fades out */}
      <div 
        ref={bgRef}
        className="fixed inset-0 z-50 bg-black"
      />
      
      {/* Logo container */}
      <div 
        ref={containerRef}
        className="fixed inset-0 z-[51] flex items-center justify-center"
        style={{ pointerEvents: 'none' }}
      >
        <div 
          ref={logoRef}
          className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider"
        />
      </div>
    </>
  );
};

export default LogoIntro;