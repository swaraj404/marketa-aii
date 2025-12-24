import React, { useEffect, useRef } from 'react';
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

	useEffect(() => {
		const sections = featureRefs.current;

		// Animate heading moving up and vanishing when scrolling to first feature
		if (headingRef.current && sections[0]) {
			gsap.to(headingRef.current, {
				scrollTrigger: {
					trigger: sections[0],
					start: 'top 40%',
					end: 'top top',
					scrub: 0,
					markers: false,
                    
				},
				y: -300,
				opacity: 0,
				ease: 'none',
			});
		}

		sections.forEach((section, index) => {
			if (!section) return;

			// Pin each section so next one overlaps
			ScrollTrigger.create({
				trigger: section,
				start: 'top top',
				end: '+=100%',
				pin: true,
				pinSpacing: false,
				markers: false,
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
		<section ref={sectionRef} className="relative bg-white text-black py-20">
			<div ref={headingRef} className="max-w-1xl mx-auto py-1 px-1 ">
				<h2 className="text-[10rem] lg:text-8xl font-mono mb-3 max-w-4xl text-black">
					Getting Started is Easy
				</h2>
			</div>
			{features.map((feature, index) => (
				<div 
					key={feature.step} 
					ref={(el) => (featureRefs.current[index] = el)}
					className="min-h-screen overflow-hidden"
				>
					<div className="w-full h-screen relative bg-white">
						{/* Left Section - Absolute positioned at top-left */}
						<div className="absolute top-0 left-0 w-1/2 h-full flex items-start pt-16 pl-16">
							<div className="space-y-9 max-w-2xl">
								{/* Step Indicator */}
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center">
										<span className="text-orange-500 font-semibold">
											{feature.step}
										</span>
									</div>
									<div className="flex-1 h-px bg-gray-300 max-w-[100px]"></div>
									<div className="text-xs uppercase tracking-wider text-gray-600 font-semibold">
										Step {feature.step} of {features.length}
									</div>
								</div>

								{/* Main Content */}
								<div>
									<h1 className="text-5xl lg:text-6xl font-light leading-tight mb-4 text-black">
										{feature.title}
									</h1>
									<p className="text-xl text-orange-500 font-light">
										{feature.subtitle}
									</p>
								</div>

								{/* Description */}
								<p className="text-xl text-gray-700 leading-relaxed">
									{feature.description}
								</p>

								{/* Bullet Points */}
								<ul className="space-y-3 text-gray-700">
									{feature.bullets.map((bullet, i) => (
										<li key={i} className="flex items-start gap-3">
											<span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
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

						{/* Right Section - Absolute positioned at bottom-right corner */}
						<div className="absolute bottom-8 right-8 w-[55vw] h-[70vh]">
							<div className="relative w-full h-full">
								<div className="relative bg-white rounded-2xl border border-gray-300 shadow-2xl overflow-hidden w-full h-full">
									{/* Browser Chrome */}
									<div className="bg-gray-100 px-4 py-3 border-b border-gray-300 flex items-center gap-2">
										<div className="flex items-center gap-2">
											<div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
											<div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
											<div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
										</div>
									</div>

									{/* Modal Content */}
									<div className="p-12">
										<div className="bg-orange-50 rounded-xl p-6 backdrop-blur-sm border border-orange-200">
											{/* Progress Dots */}
											<div className="flex items-center justify-center gap-2 mb-6">
												<div
													className={`w-2 h-2 rounded-full ${
														feature.step === 1
															? 'bg-orange-500'
															: 'bg-gray-300'
													}`}
												></div>
												<div className="flex-1 h-px bg-gray-300 max-w-[50px]"></div>
												<div
													className={`w-2 h-2 rounded-full ${
														feature.step === 2
															? 'bg-orange-500'
															: 'bg-gray-300'
													}`}
												></div>
												<div className="flex-1 h-px bg-gray-300 max-w-[50px]"></div>
												<div
													className={`w-2 h-2 rounded-full ${
														feature.step >= 3
															? 'bg-orange-500'
															: 'bg-gray-300'
													}`}
												></div>
											</div>

											{/* Icon Row */}
											<div className="flex items-center justify-center gap-3 mb-6">
												{feature.mockIcons.map((item, i) => (
													<React.Fragment key={i}>
														<div
															className={`w-14 h-14 rounded-lg flex items-center justify-center ${getColorClasses(
																item.color
															)}`}
														>
															<item.Icon className="w-7 h-7" />
														</div>
														{i < feature.mockIcons.length - 1 && (
															<div className="flex-1 h-px bg-gray-300 max-w-8"></div>
														)}
													</React.Fragment>
												))}
											</div>

											{/* Title */}
											<h3 className="text-center text-base font-medium mb-1.5 text-black">
												{feature.mockTitle}
											</h3>
											<p className="text-center text-xs text-gray-600 mb-6">
												{feature.mockDescription}
											</p>

											{/* Feature Buttons Grid */}
											<div className="grid grid-cols-2 gap-3">
												{feature.mockButtons.map((button, i) => (
													<button
														key={i}
														className={`${getButtonColorClasses(
															button.disabled
														)} border rounded-lg p-4 transition-all duration-200 flex items-center justify-center gap-2 ${
															button.disabled
																? ''
																: 'hover:border-orange-500/50'
														}`}
														disabled={button.disabled}
													>
														<button.icon className="w-5 h-5" />
														<span className="font-medium text-sm">
															{button.label}
														</span>
													</button>
												))}
											</div>

											{/* Action Buttons */}
											<div className="flex items-center justify-between mt-6 pt-5 border-t border-orange-200">
												<button className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
													{feature.step > 1 ? 'Back' : 'Skip'}
												</button>
												<button className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
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
								<div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-2xl -z-10"></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default GettingStarted;
