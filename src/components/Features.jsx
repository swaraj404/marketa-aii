import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, Sparkles, MessageSquare, Image, TrendingUp, Bot, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "AI CHATBOT",
    subtitle: "Marketing & CRM",
    description: "Get instant answers, strategies, and insights 24/7. Your intelligent copilot.",
  },
  {
    icon: CreditCard,
    title: "SMART BILLING",
    subtitle: "Management System",
    description: "Complete billing software. Manage invoices and payments effortlessly.",
  },
  {
    icon: Sparkles,
    title: "AI OFFERS",
    subtitle: "Generation Engine",
    description: "Create compelling offers that convert with personalized deals.",
  },
  {
    icon: MessageSquare,
    title: "SMART MESSAGING",
    subtitle: "Customer Engagement",
    description: "Automate conversations while keeping the personal touch.",
  },
  {
    icon: Image,
    title: "AI VISUALS",
    subtitle: "Poster Generation",
    description: "Design stunning marketing materials in seconds.",
  },
  {
    icon: TrendingUp,
    title: "ANALYTICS",
    subtitle: "Business Intelligence",
    description: "Transform data into actionable insights and predictions.",
  },
];

const Features = () => {
  const [gsapReady, setGsapReady] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const leftPanelRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsapScript2 = document.createElement('script');
      gsapScript2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      gsapScript2.async = true;
      
      gsapScript2.onload = () => {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          setGsapReady(true);
        }
      };
      
      document.body.appendChild(gsapScript2);
    };
    
    document.body.appendChild(script);

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      if (window.gsap) {
        window.gsap.killTweensOf("*");
      }
    };
  }, []);

  useEffect(() => {
    if (!gsapReady || !window.gsap || !window.ScrollTrigger || hasAnimated) return;

    const { gsap } = window;
    const { ScrollTrigger } = window;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => setHasAnimated(true),
      }
    });

    if (leftPanelRef.current) {
      const elements = leftPanelRef.current.querySelectorAll('.animate-element');
      
      gsap.set(elements, { opacity: 0, y: 30 });
      
      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }

  }, [gsapReady, hasAnimated]);

  useEffect(() => {
    let ticking = false;
    let lastFeature = currentFeature;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }
          
          const section = sectionRef.current;
          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;
          
          const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)));
          const featureIndex = Math.min(Math.floor(progress * features.length), features.length - 1);
          
          if (featureIndex !== lastFeature) {
            lastFeature = featureIndex;
            setCurrentFeature(featureIndex);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openApp = () => {
    window.open('https://app.marketa.space', '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} className="relative bg-gray-50" style={{ height: `${features.length * 100}vh` }}>
      
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl" />
      </div>

      <div className="sticky top-0 h-screen flex items-start lg:items-center overflow-hidden pt-8 lg:pt-0" style={{ zIndex: 1 }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-0">
            
            {/* Left Panel - Fixed Content */}
            <div ref={leftPanelRef} className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-1">
              <div className="animate-element inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 rounded-full">
                <span className="text-xs sm:text-xs font-bold tracking-widest text-orange-600 uppercase">
                  Solutions
                </span>
              </div>
              
              <h1 className="animate-element text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                THE FUTURE<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-600">
                  OF MARKETING
                </span>
              </h1>

              <p className="animate-element text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                The Marketing AI platform for <span className="text-orange-600 font-medium">quickly & securely</span> bringing AI into your business.
              </p>

              <div className="animate-element flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="space-y-2">
                  <div className="h-1 w-20 bg-linear-to-r from-orange-500 to-orange-600 rounded-full" />
                  <div className="text-sm text-gray-500 font-medium tracking-wider">
                    {String(currentFeature + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
                  </div>
                </div>
                
                <button 
                  onClick={openApp}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 group"
                >
                  Explore Features
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Panel - Animated Cards */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0">
              <div className="relative w-full h-full flex items-center justify-center">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isActive = currentFeature === index;
                  const distance = index - currentFeature;
                  
                  let translateX = 0;
                  let translateY = 0;
                  let scale = 1;
                  let rotation = 0;
                  let opacity = 1;
                  let blurAmount = 0;
                  
                  if (isMobile) {
                    translateY = distance * 50;
                    scale = isActive ? 1 : 0.8;
                    opacity = isActive ? 1 : 0.3;
                    blurAmount = Math.abs(distance) === 0 ? 0 : Math.abs(distance) === 1 ? 3 : 8;
                  } else {
                    const totalCards = features.length;
                    const anglePerCard = (Math.PI * 2) / totalCards;
                    const currentAngle = distance * anglePerCard;
                    
                    const radius = window.innerWidth < 1024 ? 180 : 260;
                    
                    translateX = Math.sin(currentAngle) * radius;
                    translateY = Math.cos(currentAngle) * radius * 0.3;
                    scale = isActive ? 1 : 0.6;
                    rotation = currentAngle * (180 / Math.PI) * 0.08;
                    opacity = Math.abs(distance) > 2 ? 0 : (isActive ? 1 : 0.25);
                    blurAmount = Math.abs(distance) === 0 ? 0 : Math.abs(distance) === 1 ? 8 : 15;
                  }
                  
                  return (
                    <div
                      key={index}
                      className="absolute flex items-center justify-center"
                      style={{
                        opacity: opacity,
                        transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
                        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s ease',
                        willChange: 'opacity, transform, filter',
                        pointerEvents: isActive ? 'auto' : 'none',
                        zIndex: isActive ? 10 : Math.max(1, 10 - Math.abs(distance)),
                        filter: `blur(${blurAmount}px)`,
                      }}
                    >
                      <div className="relative w-[260px] sm:w-[300px] lg:w-[320px] bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-7 shadow-2xl border border-gray-100 transform-gpu"
                           style={{
                             aspectRatio: '3/4',
                           }}>
                        
                        {/* Top accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 to-orange-600 rounded-t-2xl lg:rounded-t-3xl" />
                        
                        {/* Icon */}
                        <div className="mb-3 lg:mb-5">
                          <div className="w-11 h-11 lg:w-14 lg:h-14 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                            <Icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-2.5 lg:space-y-4">
                          <div className="space-y-1">
                            <div className="font-bold inline-block px-2.5 py-0.5 bg-linear-to-r from-orange-500 to-orange-600 text-white text-[10px] tracking-widest rounded-full">
                              {feature.title}
                            </div>
                            <h3 className="text-base lg:text-xl font-semibold text-gray-900 leading-tight">
                              {feature.subtitle}
                            </h3>
                          </div>

                          <p className="text-xs lg:text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>

                        {/* Bottom section */}
                        <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 flex items-end justify-between">
                          <div className="text-3xl lg:text-5xl font-black text-orange-500/10 select-none">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <button 
                            onClick={openApp}
                            className="w-9 h-9 lg:w-12 lg:h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group transform-gpu"
                          >
                            <ArrowUpRight className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                          </button>
                        </div>

                        {/* Decorative blurs */}
                        <div className="absolute -bottom-6 lg:-bottom-8 -right-6 lg:-right-8 w-20 lg:w-24 h-20 lg:h-24 bg-orange-300/20 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute top-1/2 -left-4 lg:-left-6 w-16 lg:w-20 h-16 lg:h-20 bg-orange-200/20 rounded-full blur-xl pointer-events-none" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Features;
