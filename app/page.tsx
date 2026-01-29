'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  Calendar
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

  return (
    <main ref={containerRef} className="min-h-screen overflow-x-hidden">
      {/* HERO SECTION - fits in viewport */}
      <section className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-emerald-50/30 to-cream">
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
          className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12"
        >
          <div className="text-center">
            {/* Floating Owl Logo - fits in viewport */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center justify-center mb-4 md:mb-6"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Owl logo - responsive size */}
                <motion.div
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
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
                  className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-gold rounded-full"
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
                  className="absolute -bottom-1 -left-2 w-4 h-4 md:w-5 md:h-5 bg-emerald-400 rounded-full"
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
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-[0.95] tracking-tight"
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
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed px-4"
            >
              SAL is the AI operations partner that runs your salon, spa, or barbershop through{' '}
              <span className="font-semibold text-emerald-700">WhatsApp</span>—so you can focus on growth,{' '}
              <span className="italic">not admin</span>.
            </motion.p>

            {/* CTA Buttons - compact */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8"
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-2xl overflow-hidden"
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
                className="px-6 py-3 md:px-10 md:py-5 glass border-2 border-emerald-600 text-emerald-700 rounded-xl md:rounded-2xl font-bold text-base md:text-lg"
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
              className="inline-flex items-center gap-4 glass px-5 py-3 md:px-6 md:py-3 rounded-full"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-3 border-white shadow-lg"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    style={{ zIndex: 4 - i }}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-sm md:text-base">Trusted by 30+ salons</p>
                <p className="text-xs md:text-sm text-gray-600">across Dubai</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-emerald-600 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-2 h-2 bg-emerald-600 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* WHATSAPP MOCKUP SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-6xl font-bold mb-6 leading-tight">
                It feels like{' '}
                <span className="gradient-text">magic</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Just message SAL like you'd message a team member. It understands context, 
                remembers everything, and handles complex requests instantly.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Brain, text: 'Perfect memory of every conversation' },
                  { icon: Zap, text: 'Responds in seconds, 24/7' },
                  { icon: Target, text: 'Learns your business and voice' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: WhatsApp Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="glass rounded-3xl shadow-2xl overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* WhatsApp Header */}
                <div className="bg-emerald-600 p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                    <OwlLogo className="w-full h-full" animated={true} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg">SAL</p>
                    <p className="text-xs text-emerald-100">Online • AI Partner</p>
                  </div>
                  <div className="flex gap-3 text-white">
                    <Phone className="w-5 h-5" />
                    <MoreVertical className="w-5 h-5" />
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="bg-[#ece5dd] p-6 space-y-4 h-[500px] overflow-auto">
                  {[
                    { type: 'user', text: 'Hey SAL, send a reminder to the team about tomorrow\'s meeting at 10am', time: '13:15' },
                    { type: 'sal', text: '✓ Done! I\'ve sent a reminder to all 8 team members about tomorrow\'s meeting at 10am.', time: '13:15' },
                    { type: 'user', text: 'How many appointments this week?', time: '13:16' },
                    { type: 'sal', text: 'This week\'s appointments:\n\n• Mon: 12 appointments\n• Tue: 15 appointments\n• Wed: 18 appointments\n• Thu: 14 appointments\n• Fri: 16 appointments\n\nTotal: 75 appointments\n+12% vs last week', time: '13:16', hasIcons: true },
                  ].map((msg, i) => (
                    <motion.div
                      key={i}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 shadow-md ${
                          msg.type === 'user'
                            ? 'bg-[#dcf8c6] rounded-br-none'
                            : 'bg-white rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line mb-1">{msg.text}</p>
                        <p className="text-[10px] text-gray-500 text-right">{msg.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input Bar */}
                <div className="bg-gray-100 p-4 flex gap-3 items-center">
                  <div className="flex-1 bg-white rounded-full px-5 py-3 text-sm text-gray-400">
                    Message SAL...
                  </div>
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-emerald-700 transition-colors">
                    <Send className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-6xl md:text-7xl font-bold mb-6">
              Running a salon shouldn't feel like{' '}
              <span className="gradient-text italic">running a circus</span>
            </h2>
            <p className="text-2xl text-gray-600">Sound familiar?</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-10 h-10 text-red-500" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-32 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{ backgroundImage: 'linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px' }}
            animate={{ backgroundPosition: ['0 0', '60px 60px'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Meet SAL—Your{' '}
              <span className="text-gold">AI Operations Partner</span>
            </h2>
            <p className="text-2xl text-emerald-100">The brain of your business, with superpowers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { num: '1', title: 'Connect WhatsApp', desc: 'We set up SAL on your WhatsApp Business account—fully configured in 24 hours.' },
              { num: '2', title: 'Train SAL', desc: 'We customize SAL to know your business, services, team, pricing, and voice.' },
              { num: '3', title: 'Let SAL Run', desc: 'SAL handles operations 24/7 while you focus on what actually matters.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute -top-8 -left-4 w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-2xl flex items-center justify-center text-emerald-900 font-black text-4xl shadow-xl rotate-6">
                  {step.num}
                </div>
                <div className="glass bg-white/10 backdrop-blur-lg p-10 rounded-2xl pt-16 h-full border border-white/20">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-emerald-100 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-14 py-7 bg-gold hover:bg-yellow-500 text-emerald-900 rounded-2xl font-black text-2xl shadow-2xl shadow-gold/50"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-6xl md:text-7xl font-bold mb-4 text-gray-900">
              One AI Assistant.{' '}
              <span className="gradient-text">Unlimited Possibilities.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-yellow-600 text-emerald-900 px-6 py-2 rounded-full font-black text-sm shadow-lg">
                    POPULAR
                  </div>
                )}
                <motion.div
                  className={`p-10 rounded-3xl h-full ${
                    plan.popular
                      ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-600/50 scale-105'
                      : 'bg-white border-2 border-gray-200 text-gray-900'
                  }`}
                  whileHover={{ scale: plan.popular ? 1.08 : 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-display text-4xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-8 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>{plan.employees}</p>
                  
                  <div className="mb-6">
                    <div className={`text-sm mb-1 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>Setup Fee</div>
                    <div className="font-display text-5xl font-black">{plan.setup}</div>
                  </div>

                  <div className="mb-10">
                    <div className={`text-sm mb-1 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>Monthly</div>
                    <div className="font-display text-5xl font-black">{plan.monthly}</div>
                  </div>

                  <ul className="space-y-3 mb-10 text-sm">
                    {[
                      { icon: Sparkles, text: 'All features' },
                      { icon: Headphones, text: '24/7 support' },
                      { icon: Brain, text: 'Custom training' },
                      { icon: MessageCircle, text: 'WhatsApp integration' },
                      { icon: Calendar, text: '24h delivery' },
                    ].map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white/20' : 'bg-emerald-100'}`}>
                          <Check className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-emerald-600'}`} />
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-4 rounded-xl font-bold ${
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

      {/* FINAL CTA */}
      <section className="py-40 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-7xl md:text-8xl font-black mb-8 leading-tight"
          >
            Ready to Take Back Your Time?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl mb-14 text-emerald-100 font-light"
          >
            Join 30+ salons already running on SAL. Setup takes 24 hours. Results last forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-14 py-7 bg-white text-emerald-700 rounded-2xl font-black text-2xl shadow-2xl"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              See SAL in Action
              <ArrowRight className="w-6 h-6" />
            </motion.a>

            <motion.a
              href={`mailto:${email}`}
              className="px-14 py-7 glass bg-white/20 backdrop-blur border-2 border-white rounded-2xl font-black text-2xl"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.a>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { icon: Shield, text: '7-Day Money-Back Guarantee' },
              { icon: Zap, text: '24-Hour Setup' },
              { icon: Headphones, text: '24/7 Support' },
              { icon: Calendar, text: 'No Long-Term Contracts' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 glass bg-white/10 backdrop-blur px-6 py-3 rounded-full"
              >
                <item.icon className="w-5 h-5 text-emerald-300" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 flex items-center justify-center">
                  <OwlLogo className="w-full h-full drop-shadow-lg" animated={true} />
                </div>
                <span className="font-display text-3xl font-black">SAL</span>
              </div>
              <p className="text-gray-400 leading-relaxed">AI Operations Partner for Service Businesses</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
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

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <p className="text-gray-400 leading-relaxed">
                Dubai, UAE<br />
                Founders: Anas & Fahim
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 SAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
