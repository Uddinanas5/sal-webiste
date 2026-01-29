'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Brain,
  Zap,
  Target,
  Phone,
  MoreVertical,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Sparkles,
  Send,
  MessageCircle,
  XCircle,
  Clock,
  ArrowRight,
  Check,
  Shield,
  Headphones,
  Calendar,
  Menu,
  X,
  ChevronDown,
  Users,
  Star,
  Quote,
  CalendarCheck,
  PieChart,
  Bell,
  FileText,
  Repeat,
  TrendingDown
} from 'lucide-react';

// Animated Owl Logo Component with moving eyes
const OwlLogo = ({ className = "w-full h-full", animated = false }: { className?: string; animated?: boolean }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label="SAL Owl Mascot" className={className}>
      <defs>
        <linearGradient id="owlBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1FA971"/>
          <stop offset="1" stopColor="#0E6B4E"/>
        </linearGradient>
        <linearGradient id="owlBelly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFF2E4"/>
          <stop offset="1" stopColor="#9EDBC6"/>
        </linearGradient>
      </defs>
      {/* Body */}
      <path d="M128 34 C100 34 76 50 66 74 C52 74 42 88 42 104 C42 136 58 154 68 162 C72 199 96 226 128 226 C160 226 184 199 188 162 C198 154 214 136 214 104 C214 88 204 74 190 74 C180 50 156 34 128 34Z" fill="url(#owlBody)"/>
      {/* Ears */}
      <path d="M78 74 L64 52 L92 66 Z" fill="#0E6B4E"/>
      <path d="M178 74 L192 52 L164 66 Z" fill="#0E6B4E"/>
      {/* Belly */}
      <path d="M128 98 C102 98 86 118 86 142 C86 175 104 202 128 202 C152 202 170 175 170 142 C170 118 154 98 128 98Z" fill="url(#owlBelly)"/>
      {/* Eyes - white part */}
      <circle cx="96" cy="108" r="30" fill="#FFFFFF"/>
      <circle cx="160" cy="108" r="30" fill="#FFFFFF"/>
      <circle cx="96" cy="108" r="30" fill="none" stroke="#0E6B4E" strokeWidth="6" opacity="0.4"/>
      <circle cx="160" cy="108" r="30" fill="none" stroke="#0E6B4E" strokeWidth="6" opacity="0.4"/>
      {/* Pupils - animated */}
      <g className={animated ? "owl-pupils" : ""}>
        <circle cx="96" cy="112" r="10" fill="#0F172A">
          {animated && (
            <animate
              attributeName="cx"
              values="96;102;96;90;96"
              dur="3s"
              repeatCount="indefinite"
            />
          )}
          {animated && (
            <animate
              attributeName="cy"
              values="112;108;112;116;112"
              dur="4s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        <circle cx="160" cy="112" r="10" fill="#0F172A">
          {animated && (
            <animate
              attributeName="cx"
              values="160;166;160;154;160"
              dur="3s"
              repeatCount="indefinite"
            />
          )}
          {animated && (
            <animate
              attributeName="cy"
              values="112;108;112;116;112"
              dur="4s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        {/* Eye highlights */}
        <circle cx="92" cy="108" r="3.5" fill="#FFFFFF">
          {animated && (
            <animate
              attributeName="cx"
              values="92;98;92;86;92"
              dur="3s"
              repeatCount="indefinite"
            />
          )}
          {animated && (
            <animate
              attributeName="cy"
              values="108;104;108;112;108"
              dur="4s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        <circle cx="156" cy="108" r="3.5" fill="#FFFFFF">
          {animated && (
            <animate
              attributeName="cx"
              values="156;162;156;150;156"
              dur="3s"
              repeatCount="indefinite"
            />
          )}
          {animated && (
            <animate
              attributeName="cy"
              values="108;104;108;112;108"
              dur="4s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      </g>
      {/* Beak */}
      <path d="M128 120 C122 120 116 126 116 132 C116 140 124 146 128 150 C132 146 140 140 140 132 C140 126 134 120 128 120Z" fill="#F4C430"/>
      {/* Feet */}
      <path d="M92 220 C92 206 112 206 112 220" fill="none" stroke="#F4C430" strokeWidth="8" strokeLinecap="round"/>
      <path d="M144 220 C144 206 164 206 164 220" fill="none" stroke="#F4C430" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
};

// Navigation Component
const Navigation = ({ whatsappLink }: { whatsappLink: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10">
              <OwlLogo className="w-full h-full" animated={false} />
            </div>
            <span className="font-display text-2xl font-black text-gray-900">SAL</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-2xl shadow-xl mb-4 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-700 hover:text-emerald-600 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold"
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Chat scenarios for the slideshow - natural conversations
const chatScenarios = [
  {
    id: 'rescheduling',
    label: 'Smart Rescheduling',
    icon: '📅',
    messages: [
      { type: 'user', text: "Fatina just called, she's sick and can't come in today", time: '09:12' },
      { type: 'sal', text: "Oh no! Let me check her schedule... she has 6 appointments today.", time: '09:12' },
      { type: 'sal', text: "I've already handled it ✓\n\n• Moved 4 clients to Mia\n• Rescheduled 2 to tomorrow\n• All clients notified", time: '09:13' },
      { type: 'user', text: "Wow that was fast! Did anyone complain?", time: '09:14' },
      { type: 'sal', text: "Nope! Mrs. Ahmad actually thanked us for the quick heads up. She preferred tomorrow anyway 😊", time: '09:14' }
    ]
  },
  {
    id: 'revenue',
    label: 'Revenue Insights',
    icon: '📊',
    messages: [
      { type: 'user', text: "How are we doing this month?", time: '14:20' },
      { type: 'sal', text: "Great news! You're at 82,000 AED — that's 15% above target 🔥", time: '14:20' },
      { type: 'user', text: "Nice! What's driving that?", time: '14:21' },
      { type: 'sal', text: "Nails are up 40% — the new gel collection is a hit!\n\nBut heads up: Tuesdays are slow. Want me to run a promo?", time: '14:21' },
      { type: 'user', text: "Yes do it, 20% off Tuesdays", time: '14:22' },
      { type: 'sal', text: "Done! I'll send it to your 847 subscribers now ✓", time: '14:22' }
    ]
  },
  {
    id: 'review',
    label: 'Review Recovery',
    icon: '⭐',
    messages: [
      { type: 'user', text: "Ugh Sara left us a 1-star review 😩", time: '11:05' },
      { type: 'sal', text: "I saw it. Let me check what happened...", time: '11:05' },
      { type: 'sal', text: "Found it — she waited 25 mins on Jan 15th. We were short-staffed that day.", time: '11:06' },
      { type: 'user', text: "Can we fix this?", time: '11:07' },
      { type: 'sal', text: "Already drafted an apology + 20% off her next visit. Want me to send it?", time: '11:07' },
      { type: 'user', text: "Yes please", time: '11:08' },
      { type: 'sal', text: "Sent! I'll let you know when she responds ✓", time: '11:08' }
    ]
  },
  {
    id: 'inventory',
    label: 'Inventory Alerts',
    icon: '📦',
    messages: [
      { type: 'user', text: "Anything I should know about before the weekend?", time: '08:30' },
      { type: 'sal', text: "Yes! Running low on Olaplex — only 3 days of stock left", time: '08:30' },
      { type: 'user', text: "Oh shoot, can you order more?", time: '08:31' },
      { type: 'sal', text: "Already drafted an order for 12 units from your usual supplier. 2,400 AED total.\n\nApprove?", time: '08:31' },
      { type: 'user', text: "Approved 👍", time: '08:32' },
      { type: 'sal', text: "Order placed! Delivery expected Tuesday ✓", time: '08:32' }
    ]
  },
  {
    id: 'upsell',
    label: 'Smart Upsells',
    icon: '💰',
    messages: [
      { type: 'user', text: "Who's coming in today?", time: '09:40' },
      { type: 'sal', text: "14 clients booked! Here's something interesting...", time: '09:40' },
      { type: 'sal', text: "3 of them haven't tried our new keratin treatment yet. Want me to text them a 15% intro offer?", time: '09:41' },
      { type: 'user', text: "Good idea, do it", time: '09:42' },
      { type: 'sal', text: "Messages sent! That's potentially 1,200 AED extra revenue today 💪", time: '09:42' }
    ]
  },
  {
    id: 'performance',
    label: 'Team Performance',
    icon: '👥',
    messages: [
      { type: 'user', text: "How's the team doing this week?", time: '17:55' },
      { type: 'sal', text: "Mixed results! Here's the breakdown:", time: '17:55' },
      { type: 'sal', text: "⭐ Mia is crushing it — 23 clients, 4.9★ rating, 12K revenue", time: '17:56' },
      { type: 'sal', text: "⚠️ Ahmed is struggling — 3 no-shows this week", time: '17:56' },
      { type: 'user', text: "What's going on with Ahmed?", time: '17:57' },
      { type: 'sal', text: "His clients keep forgetting appointments. Want me to set up automatic reminders for his bookings?", time: '17:57' },
      { type: 'user', text: "Yes, and check in with him tomorrow", time: '17:58' },
      { type: 'sal', text: "Done! Reminders enabled + I'll message you after I chat with him ✓", time: '17:58' }
    ]
  }
];

export default function Home() {
  const whatsappNumber = '+971523228314';
  const email = 'hello@sal.com';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi!%20I'd%20like%20to%20see%20SAL%20in%20action`;

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Chat slideshow state
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through scenarios (7s to allow reading longer conversations)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % chatScenarios.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main ref={containerRef} className="min-h-screen overflow-x-hidden">
      {/* NAVIGATION */}
      <Navigation whatsappLink={whatsappLink} />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 py-12"
        >
          <div className="text-center">
            {/* Floating Owl Logo - fits in viewport */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Owl logo - responsive size */}
                <motion.div
                  className="w-20 h-20 md:w-28 md:h-28"
                  animate={{ 
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <OwlLogo className="w-full h-full drop-shadow-2xl" animated={true} />
                </motion.div>
                {/* Sparkle effects */}
                <motion.div
                  className="absolute -top-3 -right-3 w-5 h-5 bg-gold rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0.3, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-3 w-4 h-4 bg-emerald-400 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -right-4 w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0.3, 0.7],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Main Headline - responsive sizes */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-[0.95] tracking-tight px-2"
            >
              <span className="block text-gray-900">Your Entire</span>
              <span className="block gradient-text">Business</span>
              <span className="block text-gray-900">In One Chat</span>
            </motion.h1>

            {/* Subheadline - smaller on mobile */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto font-light leading-relaxed px-4"
            >
              SAL is the AI operations partner that runs your salon, spa, or barbershop through{' '}
              <span className="font-semibold text-emerald-700">WhatsApp</span>, so you can focus on growth,{' '}
              <span className="italic">not admin</span>.
            </motion.p>

            {/* CTA Buttons - compact */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center mb-8 sm:mb-10 px-4"
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl font-bold text-base sm:text-lg shadow-2xl overflow-hidden text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  See SAL in Action
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                href={`mailto:${email}`}
                className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 glass border-2 border-emerald-600 text-emerald-700 rounded-2xl font-bold text-base sm:text-lg text-center"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(5, 150, 105, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>

            {/* Social Proof - compact */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-3 sm:gap-5 glass px-4 sm:px-8 py-3 sm:py-4 rounded-full"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img
                    key={i}
                    src={`/avatar${i}.png`}
                    alt={`Customer ${i}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg object-cover"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    style={{ zIndex: 4 - i }}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Trusted by 30+ salons - Dubai</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* WHATSAPP MOCKUP SECTION */}
      <section className="py-16 sm:py-24 bg-[#fafafa] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
              It feels like <span className="gradient-text">magic</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
              Just message SAL like you'd message a team member. Watch how it handles real scenarios.
            </p>
          </motion.div>

          {/* Main Content - Scenario List + iPhone */}
          <div
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left: Scenario Selection */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-auto order-2 lg:order-1"
            >
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                {chatScenarios.map((scenario, i) => (
                  <motion.button
                    key={scenario.id}
                    onClick={() => setActiveScenario(i)}
                    className={`relative flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 min-w-[160px] sm:min-w-[200px] lg:min-w-[240px] flex-shrink-0 ${
                      i === activeScenario
                        ? 'bg-white shadow-lg shadow-gray-200/50'
                        : 'bg-transparent hover:bg-white/50'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active indicator */}
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-emerald-500 rounded-full hidden lg:block"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: i === activeScenario ? 32 : 0,
                        opacity: i === activeScenario ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Icon */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl transition-all flex-shrink-0 ${
                      i === activeScenario
                        ? 'bg-emerald-50'
                        : 'bg-gray-100'
                    }`}>
                      {scenario.icon}
                    </div>

                    {/* Label */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold transition-colors text-sm sm:text-base truncate ${
                        i === activeScenario ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {scenario.label}
                      </p>
                      {i === activeScenario && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 5, ease: 'linear' }}
                          className="h-0.5 bg-emerald-500/30 rounded-full mt-1 sm:mt-2"
                          key={activeScenario}
                        />
                      )}
                    </div>

                    {/* Arrow indicator */}
                    {i === activeScenario && (
                      <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden lg:block"
                      >
                        <ArrowRight className="w-4 h-4 text-emerald-500" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}

                {/* More capabilities indicator */}
                <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 text-gray-400 flex-shrink-0 min-w-[160px] sm:min-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200 flex-shrink-0">
                    <span className="text-base sm:text-lg">+</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-500 text-sm sm:text-base">20+ more</p>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">Book a demo</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full flex justify-center order-1 lg:order-2"
            >
              {/* iPhone Frame - scales on mobile */}
              <div className="relative transform scale-[0.85] sm:scale-90 md:scale-100 origin-top">
                {/* Phone outer frame */}
                <div className="relative bg-[#1a1a1a] rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl shadow-black/30">
                  {/* Side buttons - Volume - hidden on mobile for cleaner look */}
                  <div className="hidden sm:block absolute -left-[3px] top-28 w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
                  <div className="hidden sm:block absolute -left-[3px] top-40 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                  <div className="hidden sm:block absolute -left-[3px] top-56 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                  {/* Side button - Power */}
                  <div className="hidden sm:block absolute -right-[3px] top-36 w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />

                  {/* Inner screen bezel */}
                  <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-2 sm:pt-3">
                      <div className="w-20 sm:w-28 h-5 sm:h-7 bg-black rounded-full flex items-center justify-center gap-1 sm:gap-2">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#1a1a1a] ring-1 ring-gray-800" />
                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#0a0a0a] ring-1 ring-gray-800" />
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="w-[280px] sm:w-[300px] md:w-[320px] h-[560px] sm:h-[600px] md:h-[640px] overflow-hidden">
                      {/* Status bar */}
                      <div className="bg-emerald-600 pt-12 pb-0">
                        <div className="flex justify-between items-center px-6 py-1 text-white text-xs">
                          <span className="font-medium">9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="flex gap-[2px]">
                              {[1,2,3,4].map(i => (
                                <div key={i} className={`w-[3px] rounded-sm ${i <= 3 ? 'h-2 bg-white' : 'h-1 bg-white/50'}`} style={{ height: `${i * 2 + 2}px` }} />
                              ))}
                            </div>
                            <span className="ml-1">5G</span>
                            <div className="w-6 h-3 border border-white rounded-sm ml-1 relative">
                              <div className="absolute inset-[2px] right-1 bg-white rounded-sm" />
                              <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1 bg-white rounded-r-sm" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp Header */}
                      <div className="bg-emerald-600 px-4 pb-3 flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-white rotate-180" />
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
                          <OwlLogo className="w-full h-full" animated={true} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-sm">SAL</p>
                          <p className="text-[11px] text-emerald-100">online</p>
                        </div>
                        <div className="flex gap-5 text-white">
                          <Phone className="w-5 h-5" />
                          <MoreVertical className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Chat Area */}
                      <div className="bg-[#ece5dd] h-[460px] overflow-y-auto p-3" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                      }}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeScenario}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-2"
                          >
                            {chatScenarios[activeScenario].messages.map((msg, i) => (
                              <motion.div
                                key={`${activeScenario}-${i}`}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.2 }}
                              >
                                <div
                                  className={`max-w-[85%] rounded-lg px-3 py-2 shadow-sm relative ${
                                    msg.type === 'user'
                                      ? 'bg-[#d9fdd3] rounded-tr-none'
                                      : 'bg-white rounded-tl-none'
                                  }`}
                                >
                                  {/* Message tail */}
                                  <div className={`absolute top-0 w-2 h-2 ${
                                    msg.type === 'user'
                                      ? '-right-1 bg-[#d9fdd3]'
                                      : '-left-1 bg-white'
                                  }`} style={{
                                    clipPath: msg.type === 'user'
                                      ? 'polygon(0 0, 0% 100%, 100% 0)'
                                      : 'polygon(100% 0, 0 0, 100% 100%)'
                                  }} />
                                  <p className="text-[13px] leading-[1.4] whitespace-pre-line text-gray-800">{msg.text}</p>
                                  <p className="text-[10px] text-gray-400 text-right mt-1 flex items-center justify-end gap-1">
                                    {msg.time}
                                    {msg.type === 'user' && (
                                      <svg className="w-4 h-3 text-blue-500" viewBox="0 0 16 11" fill="currentColor">
                                        <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.14-.317l-.387-.33z"/>
                                        <path d="M14.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.2-1.136-.406.433 1.886 1.886a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.14-.317l-.387-.33z" fillOpacity=".4"/>
                                      </svg>
                                    )}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Input Bar */}
                      <div className="bg-[#f0f0f0] px-2 py-2 flex gap-2 items-center">
                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-500">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400">
                          Message
                        </div>
                        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                          <Send className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Home indicator */}
                      <div className="bg-[#f0f0f0] pb-2 pt-1 flex justify-center">
                        <div className="w-32 h-1 bg-black/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reflection/glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-[4rem] -z-10 blur-xl" />
              </div>
            </motion.div>
          </div>

          {/* Bottom features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {[
              { icon: Brain, text: 'Perfect memory' },
              { icon: Zap, text: 'Instant responses' },
              { icon: Target, text: 'Learns your voice' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 px-2">
              Everything SAL Can{' '}
              <span className="gradient-text">Do For You</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From scheduling to inventory, SAL handles all your daily operations so you can focus on what matters most.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: CalendarCheck,
                title: 'Smart Scheduling',
                desc: 'Automatic appointment booking, rescheduling, and staff optimization. No more double-bookings.',
                color: 'emerald'
              },
              {
                icon: MessageCircle,
                title: 'Client Communication',
                desc: 'Automated reminders, follow-ups, and personalized messages. Keep clients engaged 24/7.',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Staff Management',
                desc: 'Track performance, manage schedules, and handle sick days automatically.',
                color: 'purple'
              },
              {
                icon: PieChart,
                title: 'Revenue Analytics',
                desc: 'Real-time insights on sales, top performers, and growth opportunities.',
                color: 'orange'
              },
              {
                icon: Bell,
                title: 'Inventory Alerts',
                desc: 'Never run out of stock. SAL tracks supplies and reorders when needed.',
                color: 'red'
              },
              {
                icon: Star,
                title: 'Review Management',
                desc: 'Monitor reviews, respond to feedback, and protect your reputation.',
                color: 'yellow'
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 ${
                  feature.color === 'emerald' ? 'bg-emerald-100' :
                  feature.color === 'blue' ? 'bg-blue-100' :
                  feature.color === 'purple' ? 'bg-purple-100' :
                  feature.color === 'orange' ? 'bg-orange-100' :
                  feature.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'
                }`}>
                  <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${
                    feature.color === 'emerald' ? 'text-emerald-600' :
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'purple' ? 'text-purple-600' :
                    feature.color === 'orange' ? 'text-orange-600' :
                    feature.color === 'red' ? 'text-red-600' : 'text-yellow-600'
                  }`} />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: '15+', label: 'Hours Saved Weekly', icon: Clock },
              { number: '40%', label: 'Fewer No-Shows', icon: TrendingDown },
              { number: '24/7', label: 'Always Available', icon: Zap },
              { number: '30+', label: 'Salons Trust Us', icon: Users },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-200" />
                </div>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-emerald-100 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16 lg:mb-20"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
              Running a salon shouldn't feel like{' '}
              <span className="gradient-text italic">running a circus</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600">Sound familiar?</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: MessageCircle,
                title: 'Drowning in Messages',
                desc: 'Your WhatsApp is chaos—team questions, customer inquiries, supplier messages. You spend 3+ hours a day just replying.',
              },
              {
                icon: XCircle,
                title: 'Tasks Falling Through Cracks',
                desc: 'You meant to follow up with that VIP client. You forgot to order supplies. The new hire wasn\'t told about the schedule change.',
              },
              {
                icon: Clock,
                title: 'No Time to Grow',
                desc: 'You\'re so busy firefighting that you can\'t work ON your business. Marketing? Strategy? Forget it.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
                  <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-500" />
                  </motion.div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        {/* Elegant gradient orbs */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-gold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-24"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-emerald-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              How it works
            </motion.p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight px-2">
              Meet SAL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold">
                Your AI Partner
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto px-4">
              Three simple steps to transform your operations
            </p>
          </motion.div>

          {/* Steps - Horizontal Timeline */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-[1px] bg-gradient-to-r from-emerald-500/50 via-emerald-400/50 to-gold/50" />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              {[
                {
                  num: '01',
                  title: 'Connect',
                  subtitle: 'WhatsApp',
                  desc: 'We set up SAL on your WhatsApp Business account. Fully configured in 24 hours.',
                  icon: MessageCircle
                },
                {
                  num: '02',
                  title: 'Train',
                  subtitle: 'SAL',
                  desc: 'We customize SAL to know your business, services, team, pricing, and voice.',
                  icon: Brain
                },
                {
                  num: '03',
                  title: 'Launch',
                  subtitle: '& Grow',
                  desc: 'SAL handles operations 24/7 while you focus on what actually matters.',
                  icon: Zap
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Step number circle */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-[#252525] border border-gray-700/50 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/50 transition-colors duration-500">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-gold/0 group-hover:from-emerald-500/10 group-hover:to-gold/10 transition-all duration-500" />
                        <step.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-400 relative z-10" />
                      </div>
                      {/* Number badge */}
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-500/30">
                        {step.num}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-white">
                      {step.title}
                    </h3>
                    <p className="text-emerald-400 font-medium mb-3 sm:mb-4 text-base sm:text-lg">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Demo
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>
            <p className="text-gray-500 text-sm mt-6">
              Free consultation • No commitment required
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16 lg:mb-20"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-gray-900 px-2">
              One AI Assistant.{' '}
              <span className="gradient-text">Unlimited Possibilities.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: 'Small', employees: '5-10 employees', setup: '15,000 AED', monthly: '1,500 AED', popular: false },
              { name: 'Medium', employees: '10-20 employees', setup: '20,000 AED', monthly: '2,000 AED', popular: true },
              { name: 'Large', employees: '20+ employees', setup: '25,000 AED', monthly: '2,500 AED', popular: false },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-yellow-600 text-emerald-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-black text-xs sm:text-sm shadow-lg z-10">
                    POPULAR
                  </div>
                )}
                <motion.div
                  className={`p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl h-full ${
                    plan.popular
                      ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-600/50 sm:scale-105'
                      : 'bg-white border-2 border-gray-200 text-gray-900'
                  }`}
                  whileHover={{ scale: plan.popular ? 1.08 : 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{plan.name}</h3>
                  <p className={`text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>{plan.employees}</p>

                  <div className="mb-4 sm:mb-6">
                    <div className={`text-xs sm:text-sm mb-1 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>Setup Fee</div>
                    <div className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black">{plan.setup}</div>
                  </div>

                  <div className="mb-6 sm:mb-8 lg:mb-10">
                    <div className={`text-xs sm:text-sm mb-1 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>Monthly</div>
                    <div className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black">{plan.monthly}</div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm">
                    {[
                      { icon: Sparkles, text: 'All features' },
                      { icon: Headphones, text: '24/7 support' },
                      { icon: Brain, text: 'Custom training' },
                      { icon: MessageCircle, text: 'WhatsApp integration' },
                      { icon: Calendar, text: '24h delivery' },
                    ].map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-white/20' : 'bg-emerald-100'}`}>
                          <Check className={`w-3 h-3 sm:w-4 sm:h-4 ${plan.popular ? 'text-white' : 'text-emerald-600'}`} />
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base ${
                      plan.popular
                        ? 'bg-white text-emerald-700 hover:bg-gray-100'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 px-2">
              Loved by{' '}
              <span className="gradient-text">Salon Owners</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              See what business owners are saying about their experience with SAL.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: 'Sarah Al-Rashid',
                role: 'Owner, Luxe Beauty Lounge',
                quote: 'SAL has completely transformed how I run my salon. I used to spend hours on WhatsApp managing appointments. Now it\'s all automatic.',
                avatar: '/avatar1.png',
                rating: 5
              },
              {
                name: 'Ahmed Hassan',
                role: 'Founder, Gents Grooming',
                quote: 'The staff management feature alone saves me 10+ hours a week. When someone calls in sick, SAL handles everything before I even wake up.',
                avatar: '/avatar2.png',
                rating: 5
              },
              {
                name: 'Fatima Khalid',
                role: 'Director, Serenity Spa',
                quote: 'Our no-show rate dropped by 45% in the first month. SAL\'s reminders and follow-ups are game-changers.',
                avatar: '/avatar3.png',
                rating: 5
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-cream rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 relative"
              >
                <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 text-emerald-200" />
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-emerald-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 px-2">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Everything you need to know about SAL.
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: 'How does SAL integrate with my WhatsApp?',
                answer: 'SAL connects to your WhatsApp Business account through the official WhatsApp Business API. Setup takes less than 24 hours, and we handle everything for you.'
              },
              {
                question: 'Is my data secure?',
                answer: 'Absolutely. We use bank-level encryption and never share your data with third parties. All conversations are private and secure.'
              },
              {
                question: 'What happens if SAL makes a mistake?',
                answer: 'SAL is designed to ask for confirmation on important decisions. You can also set approval rules for things like discounts or rescheduling. Plus, you can always override any action.'
              },
              {
                question: 'How long does setup take?',
                answer: 'Most salons are up and running within 24 hours. We handle the technical setup, customize SAL for your business, and train your team on how to use it.'
              },
              {
                question: 'Can I try SAL before committing?',
                answer: 'Yes! We offer a free demo where you can see SAL in action with your actual business scenarios. Plus, we have a 7-day money-back guarantee.'
              },
              {
                question: 'What if I need help?',
                answer: 'Our support team is available 24/7 via WhatsApp (of course!). You\'ll also get a dedicated account manager for the first month.'
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-display text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-start gap-2 sm:gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-100 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold text-xs sm:text-sm">Q</span>
                  </span>
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-8 sm:pl-11">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #059669 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          {/* Corner accents */}
          <div className="absolute top-20 left-20 w-32 h-32 border-l-2 border-t-2 border-emerald-500/20 rounded-tl-3xl hidden md:block" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-r-2 border-b-2 border-emerald-500/20 rounded-br-3xl hidden md:block" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs sm:text-sm font-medium">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Start your journey today
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-4 sm:mb-6 text-gray-900 leading-[1.1] px-2"
          >
            Ready to Take Back
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
              Your Time?
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            Join 30+ salons already running on SAL. Setup takes 24 hours. Results last forever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-4"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-gray-900 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/30 transition-shadow"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See SAL in Action
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </motion.a>

            <motion.a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 bg-white text-gray-900 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Call
            </motion.a>
          </motion.div>

          {/* Trust badges - high contrast cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4"
          >
            {[
              { icon: Shield, text: '7-Day Money-Back', subtext: 'Guarantee' },
              { icon: Zap, text: '24-Hour', subtext: 'Setup' },
              { icon: Headphones, text: '24/7', subtext: 'Support' },
              { icon: Calendar, text: 'No Long-Term', subtext: 'Contracts' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-100 transition-all text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-emerald-50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-sm">{item.text}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">{item.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-center sm:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                  <OwlLogo className="w-full h-full drop-shadow-lg" animated={true} />
                </div>
                <span className="font-display text-2xl sm:text-3xl font-black">SAL</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">AI Operations Partner for Service Businesses</p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href={`mailto:${email}`} className="hover:text-emerald-400 transition-colors">
                    {email}
                  </a>
                </li>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    {whatsappNumber}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Company</h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Dubai, UAE<br />
                Founders: Anas & Fahim
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-500">
            <p>&copy; 2026 SAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
