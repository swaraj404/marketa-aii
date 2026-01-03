import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeHeroText = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitle2Ref = useRef(null);

  useEffect(() => {
    const titleText = 'Marketa Ai';
    const titleElement = titleRef.current;
    const isMobile = window.innerWidth < 768;
    
    // Clear and create letter spans
    titleElement.innerHTML = '';
    const lettersRef = [];
    
    titleText.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.className = 'font-[unbounded]';
      span.style.fontWeight = '900';
      titleElement.appendChild(span);
      lettersRef.push(span);
      
      // Highlight first letter with orange color
      if (index === 0) {
        span.style.color = '#FF6B35';
      } else {
        span.style.color = '#ffffff';
      }
    });

    // Set initial state
    gsap.set(lettersRef, {
      opacity: 1,
      y: 0,
    });
    
    gsap.set([subtitleRef.current, subtitle2Ref.current], {
      opacity: 1,
      y: 0,
    });

    // Responsive animation parameters
    const scrubValue = isMobile ? 1.5 : 1;
    const fadeDistance = isMobile ? 30 : 50;

    // Create main scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: isMobile ? '+=400' : '+=600',
        scrub: scrubValue,
        pin: false,
      }
    });

    // Simple fade and slide up animation for letters
    lettersRef.forEach((letter, index) => {
      tl.to(letter, {
        opacity: 0,
        y: -fadeDistance,
        ease: 'power2.in',
        duration: 0.3,
      }, index * 0.03);
    });

    // Subtitle animations - smooth fade and slide
    tl.to(subtitleRef.current, {
      opacity: 0,
      y: -fadeDistance * 0.8,
      ease: 'power2.in',
      duration: 0.4,
    }, 0.2);

    tl.to(subtitle2Ref.current, {
      opacity: 0,
      y: -fadeDistance * 0.8,
      ease: 'power2.in',
      duration: 0.4,
    }, 0.25);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-screen w-screen flex relative overflow-hidden"
    >
      {/* Left Side - Main Title at bottom border left */}
      <div className="absolute left-6 sm:left-8 md:left-10 lg:left-12 xl:left-16 bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16">
        <div 
          ref={titleRef}
          className="font-black text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[9rem] 2xl:text-[11rem] leading-[0.85] relative"
          style={{ 
            letterSpacing: '-0.02em',
            fontWeight: '900',
            textAlign: 'left'
          }}
        />
      </div>
      
      {/* Right Side - Subtitles at bottom border */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16 right-6 sm:right-8 md:right-12 lg:right-16 xl:right-20 flex flex-col items-end text-right">
        {/* Subtitle 1 */}
        <div 
          ref={subtitleRef}
          className="text-[5.5vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.2rem] font-semibold text-gray-100 mb-3 sm:mb-4 whitespace-nowrap"
          style={{ 
            letterSpacing: '0.02em',
            textAlign: 'right'
          }}
        >
          Your AI Based
        </div>
        
        {/* Subtitle 2 */}
        <div 
          ref={subtitle2Ref}
          className="text-[4.8vw] sm:text-[3.8vw] md:text-[3vw] lg:text-[2.2rem] xl:text-[2.5rem] 2xl:text-[2.8rem] font-medium text-gray-200 whitespace-nowrap"
          style={{ 
            letterSpacing: '0.03em',
            textAlign: 'right'
          }}
        >
          Marketing Co-Pilot
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;