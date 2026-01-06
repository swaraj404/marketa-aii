import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const ctaRef = useRef(null);
  const bgRef = useRef(null);
  const lastScrollY = useRef(0);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Hide/Show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide navbar at the very top
      if (currentScrollY < 100) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down - hide navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // Scrolling up - show navbar
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar animations with useGSAP
  useGSAP(() => {
    if (!navRef.current) return;

    // Background fade on scroll
    gsap.to(bgRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '+=200',
        scrub: 0.5,
      }
    });

    // Entrance animation - delayed to appear after LogoIntro
    const entranceTl = gsap.timeline({ delay: 2 });
    
    gsap.set([logoRef.current, ...linksRef.current, ctaRef.current], {
      opacity: 0,
      y: -30
    });

    entranceTl
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
      .to(linksRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'back.out(1.5)'
      }, '-=0.3');

  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      ref={navRef} 
      className={`fixed top-0 left-0 right-0 z-100 pointer-events-none transition-transform duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Background with blur - only active on content area */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-black/50 backdrop-blur-lg border-b border-white/5 opacity-0 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pointer-events-auto">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            ref={logoRef}
            href="#home" 
            className="relative flex items-center gap-1.5 z-10 group opacity-0"
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            <span className="text-2xl lg:text-3xl font-[unbounded] font-black text-[#FF6B35] tracking-tight group-hover:scale-105 transition-transform duration-300">
              Marketa
            </span>
            <span className="text-2xl lg:text-3xl font-[unbounded] font-black text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
              Ai
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                ref={el => linksRef.current[index] = el}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-300 group opacity-0"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#FF6B35] to-[#E65100] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="hidden lg:block opacity-0">
            <a
              href="https://marketa-ai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF6B35] to-[#E65100] text-white rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95"
            >
              <span className="relative z-10 tracking-wide">Get Started</span>
              <svg 
                className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-linear-to-r from-[#E65100] to-[#C43C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-10 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-7 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-8'}`} />
            <span className={`w-7 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`w-7 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-8'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/97 backdrop-blur-2xl border-b border-white/5 shadow-2xl transition-all duration-500 ease-out pointer-events-auto ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium py-3 px-4 rounded-lg transition-all duration-300"
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://marketa-ai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3.5 bg-linear-to-r from-[#FF6B35] to-[#E65100] text-white rounded-full font-semibold text-sm shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 active:scale-95 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}