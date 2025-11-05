import React from 'react'
import Video from './Video'
import HomeHeroText from './HomeHeroText'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background – NOW IN FLOW */}
      <div className="absolute inset-0 z-0 blur-lg">
        <Video />
      </div>

      {/* Optional: Blur overlay */}
      <div className="absolute inset-0 bg-black/20 blur-sm z-0"></div>

      {/* Hero Text – On Top */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <HomeHeroText />
      </div>
    </section>
  )
}

export default Hero
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import HomeHeroText from './HomeHeroText';
// import person1 from '../../assets/person1.png';
// import person2 from '../../assets/person2.png';

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const leftPersonRef = useRef(null);
//   const rightPersonRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate left person to slide out left
//       gsap.to(leftPersonRef.current, {
//         x: '-100%',
//         opacity: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1,
//         }
//       });

//       // Animate right person to slide out right
//       gsap.to(rightPersonRef.current, {
//         x: '100%',
//         opacity: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1,
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden"
//     >
//       {/* Background with white and orange shades */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-orange-100 z-0"></div>

//       {/* Left Person Image */}
//       <div 
//         ref={leftPersonRef}
//         className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-96 h-auto z-0"
//       >
//         {/* Replace the src with your actual image path */}
//         <img 
//           src={person1}
//           alt="Person Left"
//           className="w-full h-auto object-contain"
//         />
//       </div>

//       {/* Right Person Image */}
//       <div 
//         ref={rightPersonRef}
//         className="absolute right-0 top-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-96 h-auto z-0"
//       >
//         {/* Replace the src with your actual image path */}
//         <img 
//           src={person2}
//           alt="Person Right"
//           className="w-full h-auto object-contain"
//         />
//       </div>

//       {/* Hero Text - On Top with same spacing */}
//       <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
//         <HomeHeroText />
//       </div>
//     </section>
//   );
// };

// export default Hero;