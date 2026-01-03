import React, { useEffect, useRef, useState } from 'react';
import { Bot, CreditCard, Sparkles, MessageSquare, Image, TrendingUp, Database, FileText, Lock, Shield, Package, BarChart, DollarSign, Target, Users, Mail, Palette } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
	{
		step: 1,
		title: 'AI Chatbot',
		subtitle: 'Marketing & CRM Solutions',
		description: 'Get instant answers, strategies, and insights 24/7',
		bullets: [
			'Smart conversational AI for customer support',
			'Real-time marketing strategy recommendations',
			'Automated CRM workflow integration',
		],
		icon: Bot,
		mockTitle: 'AI Chatbot Interface',
		mockDescription: 'Configure your AI assistant for marketing automation',
		mockIcons: [
			{ Icon: Bot, color: 'orange' },
			{ Icon: Lock, color: 'white' },
			{ Icon: Shield, color: 'orange' },
		],
		mockButtons: [
			{ label: 'Customer Support', icon: Users, active: true },
			{ label: 'Lead Generation', icon: Target, active: true },
			{ label: 'Sales Assistant', icon: TrendingUp, active: true },
			{ label: 'Analytics Bot', icon: BarChart, disabled: true },
			{ label: 'Email Campaigns', icon: Mail, active: true },
			{ label: 'Social Media', icon: MessageSquare, disabled: true },
		],
	},
	{
		step: 2,
		title: 'Smart Billing',
		subtitle: 'Management System',
		description: 'Complete billing software built right in',
		bullets: [
			'Automated invoice generation and tracking',
			'Multi-currency payment processing',
			'Financial reporting and analytics dashboard',
		],
		icon: CreditCard,
		mockTitle: 'Billing Configuration',
		mockDescription: 'Set up your payment and invoicing preferences',
		mockIcons: [
			{ Icon: DollarSign, color: 'orange' },
			{ Icon: Lock, color: 'white' },
			{ Icon: CreditCard, color: 'orange' },
		],
		mockButtons: [
			{ label: 'Invoice Templates', icon: FileText, active: true },
			{ label: 'Payment Gateway', icon: DollarSign, active: true },
			{ label: 'Tax Settings', icon: BarChart, active: true },
			{ label: 'Subscriptions', icon: Users, disabled: true },
			{ label: 'Reports', icon: TrendingUp, active: true },
			{ label: 'Notifications', icon: Mail, disabled: true },
		],
	},
	{
		step: 3,
		title: 'AI Offers',
		subtitle: 'Generation Engine',
		description: 'Create compelling offers that convert',
		bullets: [
			'AI-powered offer creation and optimization',
			'Personalized deal recommendations',
			'A/B testing and performance tracking',
		],
		icon: Sparkles,
		mockTitle: 'Offer Generator',
		mockDescription: 'Design and deploy personalized marketing offers',
		mockIcons: [
			{ Icon: Sparkles, color: 'orange' },
			{ Icon: Lock, color: 'white' },
			{ Icon: Target, color: 'orange' },
		],
		mockButtons: [
			{ label: 'Discount Offers', icon: Sparkles, active: true },
			{ label: 'Bundle Deals', icon: Package, active: true },
			{ label: 'Seasonal Promos', icon: TrendingUp, active: true },
			{ label: 'Loyalty Rewards', icon: Users, disabled: true },
			{ label: 'Flash Sales', icon: Target, active: true },
			{ label: 'Custom Offers', icon: FileText, disabled: true },
		],
	},
	{
		step: 4,
		title: 'Smart Messaging',
		subtitle: 'Customer Engagement',
		description: 'Automate conversations while keeping the personal touch',
		bullets: [
			'Multi-channel messaging automation',
			'Personalized customer communication',
			'Real-time engagement analytics',
		],
		icon: MessageSquare,
		mockTitle: 'Messaging Hub',
		mockDescription: 'Connect and manage all your communication channels',
		mockIcons: [
			{ Icon: MessageSquare, color: 'orange' },
			{ Icon: Lock, color: 'white' },
			{ Icon: Mail, color: 'orange' },
		],
		mockButtons: [
			{ label: 'Email Campaigns', icon: Mail, active: true },
			{ label: 'SMS Marketing', icon: MessageSquare, active: true },
			{ label: 'Push Notifications', icon: Shield, active: true },
			{ label: 'WhatsApp', icon: MessageSquare, disabled: true },
			{ label: 'In-App Messages', icon: MessageSquare, active: true },
			{ label: 'Chatbots', icon: Bot, disabled: true },
		],
	},
	{
		step: 5,
		title: 'AI Visuals',
		subtitle: 'Poster Generation',
		description: 'Design stunning marketing materials in seconds',
		bullets: [
			'AI-powered graphic design and creation',
			'Brand-consistent visual templates',
			'Multi-format export and optimization',
		],
		icon: Image,
		mockTitle: 'Visual Designer',
		mockDescription: 'Create professional marketing visuals with AI',
		mockIcons: [
			{ Icon: Palette, color: 'orange' },
			{ Icon: Lock, color: 'white' },
			{ Icon: Image, color: 'orange' },
		],
		mockButtons: [
			{ label: 'Social Posts', icon: Image, active: true },
			{ label: 'Banners', icon: Palette, active: true },
			{ label: 'Flyers', icon: FileText, active: true },
			{ label: 'Video Ads', icon: Image, disabled: true },
			{ label: 'Infographics', icon: BarChart, active: true },
			{ label: 'Templates', icon: Package, disabled: true },
		],
	},
	{
		step: 6,
		title: 'Analytics',
		subtitle: 'Business Intelligence',
		description: 'Transform data into actionable insights',
		bullets: [
			'Real-time performance dashboards',
			'Predictive analytics and forecasting',
			'Custom reporting and data visualization',
		],
		icon: TrendingUp,
		mockTitle: 'Analytics Dashboard',
		mockDescription: 'Monitor and analyze your marketing performance',
		mockIcons: [
			{ Icon: BarChart, color: 'orange' },
			{ Icon: Lock, color: 'white' },
			{ Icon: TrendingUp, color: 'orange' },
		],
		mockButtons: [
			{ label: 'Performance', icon: TrendingUp, active: true },
			{ label: 'Revenue', icon: DollarSign, active: true },
			{ label: 'Conversions', icon: Target, active: true },
			{ label: 'Customer Insights', icon: Users, disabled: true },
			{ label: 'ROI Tracking', icon: BarChart, active: true },
			{ label: 'Forecasting', icon: TrendingUp, disabled: true },
		],
	},
];

const GettingStarted = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const featureRefs = useRef([]);
	const [animatedText, setAnimatedText] = useState('व्यापार');
	const [visibleSteps, setVisibleSteps] = useState([1]); // Initially only step 1 is visible

	// Text scramble animation effect
	useEffect(() => {
		const words = [
			'ব্যবসা',      // Bengali - Byabosa (Business)
			'ਕਾਰੋਬਾਰ',     // Punjabi - Karobar (Business)
			'వ్యాపారం',    // Telugu - Vyaparam (Business)
			'வணிகம்',      // Tamil - Vanigam (Business)
			'ವ್ಯಾಪಾರ',     // Kannada - Vyapara (Business)
			'ବ୍ୟବସାୟ',     // Odia - Byabasaya (Business)
			'વેપાર',       // Gujarati - Vepar (Business)
			'Vyapar',      // English
			'व्यापार'      // Hindi/Marathi - Business (Final)
		];
		let currentIndex = 0;
		let loopCount = 0;
		const maxLoops = 1; // Loop twice
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()व्यापारअआइईउऊएऐओऔकखगघचछजझटठडढणతథదధనపఫబభవశషসহবযরলকগঘচછજ఼జఝਕਖਗਘਚਛವಯರಲಶಷసహగଘଚછજવયરલશષસહதథదనపభమಯरलवಶಷಸಹ';
		
		const scrambleText = (start, end) => {
			const startText = start;
			const endText = end;
			const maxLength = Math.max(startText.length, endText.length);
			let frame = 0;
			const totalFrames = 50; // Increased from 30 for smoother animation
			
			const animate = () => {
				if (frame <= totalFrames) {
					let scrambled = '';
					const progress = frame / totalFrames;
					// Use easing function for smoother transition
					const easedProgress = progress < 0.5 
						? 2 * progress * progress 
						: 1 - Math.pow(-2 * progress + 2, 2) / 2;
					
					for (let i = 0; i < maxLength; i++) {
						if (i < endText.length) {
							if (easedProgress * maxLength > i) {
								scrambled += endText[i];
							} else {
								scrambled += chars[Math.floor(Math.random() * chars.length)];
							}
						}
					}
					
					setAnimatedText(scrambled);
					frame++;
					requestAnimationFrame(animate);
				} else {
					setAnimatedText(endText);
				}
			};
			
			animate();
		};
		
		// Intersection Observer to detect when heading is visible
		let interval;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !interval) {
						// Start animation when visible
						interval = setInterval(() => {
							if (currentIndex < words.length - 1) {
								const nextIndex = currentIndex + 1;
								scrambleText(words[currentIndex], words[nextIndex]);
								currentIndex = nextIndex;
								
								// Check if we've completed one full cycle
								if (nextIndex === words.length - 1) {
									loopCount++;
									
									// Stop after 2 complete loops
									if (loopCount >= maxLoops) {
										clearInterval(interval);
									} else {
										// Reset to beginning for next loop
										currentIndex = 0;
									}
								}
							}
						}, 500); // Increased from 500ms to 1200ms for smoother, more visible transitions
					}
				});
			},
			{ threshold: 0.5 } // Trigger when 50% of the heading is visible
		);
		
		if (headingRef.current) {
			observer.observe(headingRef.current);
		}
		
		return () => {
			if (interval) clearInterval(interval);
			if (headingRef.current) observer.unobserve(headingRef.current);
		};
	}, []);

	useEffect(() => {
		const sections = featureRefs.current;
		
		// Calculate sticky header height
		const getStickyHeaderHeight = () => {
			if (headingRef.current) {
				return headingRef.current.offsetHeight;
			}
			return 0;
		};

		// Detect device type and screen size
		const getDeviceConfig = () => {
			const width = window.innerWidth;
			
			// Mobile devices (portrait and landscape)
			if (width < 768) {
				return {
					shouldPin: true,
					endDistance: '+=120%' // Shorter for mobile to keep it smooth
				};
			}
			// Tablets (portrait)
			else if (width >= 768 && width < 1024) {
				return {
					shouldPin: true,
					endDistance: '+=150%'
				};
			}
			// Tablets (landscape) and small laptops
			else if (width >= 1024 && width < 1440) {
				return {
					shouldPin: true,
					endDistance: '+=200%'
				};
			}
			// Large laptops and desktops
			else {
				return {
					shouldPin: true,
					endDistance: '+=250%'
				};
			}
		};

		const initScrollTrigger = () => {
			const config = getDeviceConfig();
			const headerHeight = getStickyHeaderHeight();
			
			sections.forEach((section, index) => {
				if (!section) return;

				// Set initial padding to account for sticky header on all devices
				section.style.paddingTop = `${headerHeight}px`;

				// Pin each section so next one overlaps completely
				ScrollTrigger.create({
					trigger: section,
					start: 'top top',
					end: () => {
						// Last section gets extra scroll distance
						if (index === sections.length - 1) {
							const baseDistance = parseInt(config.endDistance.replace(/[^\d]/g, ''));
							return `+=${baseDistance + 50}%`;
						}
						return config.endDistance;
					},
					pin: true,
					pinSpacing: false,
					markers: false,
					pinnedContainer: section,
					anticipatePin: 1,
					// Smooth scrolling for better performance
					fastScrollEnd: true,
					preventOverlaps: true,
					// Animate step indicator when feature enters viewport
					onEnter: () => {
						const stepNumber = index + 1;
						setVisibleSteps(prev => {
							if (!prev.includes(stepNumber)) {
								return [...prev, stepNumber];
							}
							return prev;
						});
					},
					// Remove step when scrolling back up for smooth reverse animation
					onLeaveBack: () => {
						if (index > 0) {
							const stepNumber = index + 1;
							setVisibleSteps(prev => prev.filter(step => step !== stepNumber));
						}
					},
				});
			});
		};

		// Initialize ScrollTrigger
		initScrollTrigger();

		// Debounced resize handler for better performance
		let resizeTimeout;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				// Kill all existing ScrollTriggers before recreating
				ScrollTrigger.getAll().forEach(trigger => trigger.kill());
				
				// Reinitialize with new device config
				initScrollTrigger();
				
				// Refresh ScrollTrigger
				ScrollTrigger.refresh();
			}, 250); // Debounce for 250ms
		};

		window.addEventListener('resize', handleResize);

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			window.removeEventListener('resize', handleResize);
			if (resizeTimeout) clearTimeout(resizeTimeout);
		};
	}, []);

	const getColorClasses = (color) => {
		const colors = {
			orange: 'bg-orange-500 text-white',
			white: 'bg-white text-orange-500 border-2 border-orange-500',
			gray: 'bg-gray-200 text-gray-600',
			yellow: 'bg-yellow-500 text-white',
			green: 'bg-green-500 text-white',
			blue: 'bg-blue-500 text-white',
			purple: 'bg-purple-500 text-white',
			pink: 'bg-pink-500 text-white',
		};
		return colors[color] || colors.orange;
	};

	const getButtonColorClasses = (disabled) => {
		if (disabled) {
			return 'bg-gray-100 border-gray-200 opacity-40 cursor-not-allowed text-gray-400';
		}
		return 'bg-white hover:bg-orange-50 border-gray-300 hover:border-orange-500 text-black';
	};

	return (
		<section ref={sectionRef} className="relative bg-white text-black py-2 sm:py-12 md:py-16 lg:py-2">
			<div ref={headingRef} className="sticky top-0 z-50 bg-white max-w-10xl mx-auto py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-12">
				<h2 
					className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] mb-2 sm:mb-3 max-w-full text-black leading-tight"
					style={{ fontFamily: 'klaft, sans-serif' }}
				>
					Built for <span className="inline-block min-w-[200px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] 2xl:min-w-[800px] text-orange-500">{animatedText}</span>
				</h2>
			{/* Step Indicators - Fixed Horizontal Navigation */}
			<div className="bg-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-12">
				<div className="max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-hidden">
					{features.map((feature, index) => {
						const isVisible = visibleSteps.includes(feature.step);
						const isActive = visibleSteps[visibleSteps.length - 1] === feature.step;
						
						return (
							<div 
								key={feature.step} 
								className={`flex items-center gap-2 sm:gap-3 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
									isVisible 
										? 'translate-x-0 opacity-100' 
										: 'translate-x-[300%] opacity-0 pointer-events-none'
								}`}
								style={{
									willChange: 'transform, opacity'
								}}
							>
								<div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 ease-out shadow-sm ${
									isActive 
										? 'border-orange-500 bg-orange-500 scale-110 shadow-orange-200' 
										: isVisible 
											? 'border-gray-400 bg-white hover:border-orange-300 hover:scale-105' 
											: 'border-gray-300'
								}`}>
									<span className={`font-semibold text-xs sm:text-sm transition-all duration-300 ${
										isActive ? 'text-white scale-100' : 'text-gray-400 scale-95'
									}`}>
										{feature.step}
									</span>
								</div>
								{index < features.length - 1 && (
									<div 
										className={`hidden sm:block w-8 md:w-12 lg:w-16 h-px transition-all duration-500 ease-out ${
											isVisible && visibleSteps.includes(feature.step + 1)
												? 'bg-gray-300 scale-x-100 opacity-100' 
												: isVisible 
													? 'bg-gray-200 scale-x-50 opacity-50'
													: 'bg-gray-200 scale-x-0 opacity-0'
										}`}
										style={{
											transformOrigin: 'left',
											willChange: 'transform, opacity'
										}}
									></div>
								)}
							</div>
						);
					})}
				</div>
			</div>
			</div>

			{/* Features Content */}
			{features.map((feature, index) => (
				<div 
					key={feature.step} 
					ref={(el) => (featureRefs.current[index] = el)}
					className="min-h-[50vh] lg:min-h-screen overflow-hidden"
				>
					<div className="w-full min-h-[50vh] lg:min-h-[90vh] relative bg-white flex flex-col lg:flex-row">
						{/* Left Section - Stick to top */}
						<div className="w-full lg:w-1/2 flex items-start p-4 sm:p-6 md:p-8 lg:pt-8 lg:pl-16 lg:absolute lg:top-0 lg:left-0 lg:h-full">
							<div className="space-y-4 sm:space-y-6 md:space-y-7 lg:space-y-9 max-w-2xl">
								{/* Main Content */}
								<div>
									<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-2 sm:mb-3 md:mb-4 text-black">
										{feature.title}
									</h1>
									<p className="text-base sm:text-lg md:text-xl text-orange-500 font-light">
										{feature.subtitle}
									</p>
								</div>

								{/* Description */}
								<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
									{feature.description}
								</p>

								{/* Bullet Points */}
								<ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base md:text-lg">
									{feature.bullets.map((bullet, i) => (
										<li key={i} className="flex items-start gap-2 sm:gap-3">
											<span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-1.5 sm:mt-2 shrink-0"></span>
											<span>{bullet}</span>
										</li>
									))}
								</ul>

								{/* CTA
                <div>
                  <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-colors">
                    Explore Feature
                  </button>
                </div> */}
							</div>
						</div>

						{/* Right Section - Stick to top */}
						<div className="w-full lg:w-[55vw] lg:h-auto mt-8 lg:mt-0 lg:absolute lg:top-0 lg:right-4 xl:right-8 p-4 lg:p-0">
							<div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[70vh]">
								<div className="relative bg-white rounded-xl sm:rounded-2xl border border-gray-300 shadow-2xl overflow-hidden w-full h-full">
									{/* Browser Chrome */}
									<div className="bg-gray-100 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border-b border-gray-300 flex items-center gap-1.5 sm:gap-2">
										<div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
											<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500"></div>
											<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500"></div>
											<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500"></div>
										</div>
									</div>

									{/* Modal Content */}
									<div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 pb-1 sm:pb-2 md:pb-3 lg:pb-4 xl:pb-4">
										<div className="bg-orange-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 backdrop-blur-sm border border-orange-200">
											{/* Progress Dots */}
											<div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
												<div
													className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
														feature.step === 1
															? 'bg-orange-500'
															: 'bg-gray-300'
													}`}
												></div>
												<div className="flex-1 h-px bg-gray-300 max-w-[30px] sm:max-w-10 md:max-w-[50px]"></div>
												<div
													className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
														feature.step === 2
															? 'bg-orange-500'
															: 'bg-gray-300'
													}`}
												></div>
												<div className="flex-1 h-px bg-gray-300 max-w-[30px] sm:max-w-10 md:max-w-[50px]"></div>
												<div
													className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
														feature.step >= 3
															? 'bg-orange-500'
															: 'bg-gray-300'
													}`}
												></div>
											</div>

											{/* Icon Row */}
											<div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
												{feature.mockIcons.map((item, i) => (
													<React.Fragment key={i}>
														<div
															className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md sm:rounded-lg flex items-center justify-center ${getColorClasses(
																item.color
															)}`}
														>
															<item.Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
														</div>
														{i < feature.mockIcons.length - 1 && (
															<div className="flex-1 h-px bg-gray-300 max-w-4 sm:max-w-6 md:max-w-8"></div>
														)}
													</React.Fragment>
												))}
											</div>

											{/* Title */}
											<h3 className="text-center text-xs sm:text-sm md:text-base font-medium mb-1 sm:mb-1.5 text-black">
												{feature.mockTitle}
											</h3>
											<p className="text-center text-[10px] sm:text-xs text-gray-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
												{feature.mockDescription}
											</p>

											{/* Feature Buttons Grid */}
											<div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
												{feature.mockButtons.map((button, i) => (
													<button
														key={i}
														className={`${getButtonColorClasses(
															button.disabled
														)} border rounded-md sm:rounded-lg p-2 sm:p-2.5 md:p-3 lg:p-4 transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 ${
															button.disabled
																? ''
																: 'hover:border-orange-500/50'
														}`}
														disabled={button.disabled}
													>
														<button.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" />
														<span className="font-medium text-[10px] sm:text-xs md:text-sm truncate">
															{button.label}
														</span>
													</button>
												))}
											</div>

											{/* Action Buttons */}
											<div className="flex items-center justify-between mt-3 sm:mt-4 md:mt-5 lg:mt-6 pt-3 sm:pt-4 md:pt-5 border-t border-orange-200">
												<button className="text-[10px] sm:text-xs md:text-sm text-gray-600 hover:text-orange-500 transition-colors">
													{feature.step > 1 ? 'Back' : 'Skip'}
												</button>
												<button className="text-[10px] sm:text-xs md:text-sm text-gray-600 hover:text-orange-500 transition-colors">
													{feature.step < features.length
														? 'Continue'
														: 'Finish'}
												</button>
											</div>
										</div>
									</div>

									{/* Ambient Glow */}
									<div className="absolute inset-0 bg-linear-to-tr from-orange-500/10 via-transparent to-orange-500/10 pointer-events-none"></div>
								</div>

								{/* Outer Glow Effect */}
								<div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-orange-500/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl -z-10"></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default GettingStarted;
