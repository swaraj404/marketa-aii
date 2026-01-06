import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import Video from './Video';
import HeroText from './HeroText';
import maskingImage from '../assets/masking1.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const prefersReducedMotion = useMediaQuery({ query: '(prefers-reduced-motion: reduce)' });
  const heroRef = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.hero-masked-video', { 
        maskSize: '120%',
        opacity: 1
      });
      gsap.set('.hero-video-container', {
        scale: 0.85
      });
      return;
    }

    const start = isMobile ? 'top top' : 'top top';
    const scrubValue = isMobile ? 2 : 1.5;
    const shouldPin = !isMobile;

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: start,
        end: isMobile ? '+=1200' : '+=1500', // Increased duration for longer animation
        scrub: scrubValue,
        pin: shouldPin,
        anticipatePin: shouldPin ? 1 : 0,
        refreshPriority: 10,
      },
    });

    // Set initial state - mask is very large (completely off screen), video at normal size
    gsap.set('.hero-masked-video', {
      maskSize: isMobile ? '1200%' : '5500%', // ← CHANGE THIS for initial mask size
      maskPosition: 'center',
      opacity: 1,
    });

    gsap.set('.hero-video-container', {
      scale: 1, // Video starts at normal size
    });

    // Animation sequence - mask comes in first, then video moves back
    const finalMaskSize = isMobile ? '60%' : '40%';
    
    maskTimeline
      .to('.hero-masked-video', { 
        maskSize: finalMaskSize,
        ease: 'power2.inOut',
      }, 0)
      .to('.hero-video-container', {
        scale: 0.85,
        ease: 'power2.inOut',
      }, 0.3); // Starts when mask is 60% complete
  }, [isMobile, prefersReducedMotion]);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Video with Mask */}
      <div className="absolute inset-0 z-0">
        <div 
          className="hero-masked-video w-full h-full will-change-transform"
          style={{
            WebkitMaskImage: `url(${maskingImage})`,
            maskImage: `url(${maskingImage})`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            backgroundColor: 'white',
          }}
        >
          <div className="hero-video-container w-full h-full will-change-transform">
            <Video />
          </div>
        </div>
      </div>

      {/* White background behind mask */}
      <div className="absolute inset-0 bg-white -z-10" />

      {/* Hero Text */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;