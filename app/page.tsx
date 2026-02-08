'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Brain,
  Zap,
  Target,
  Phone,
  MoreVertical,
  CheckCircle,
  BarChart3,
  Sparkles,
  Send,
  MessageCircle,
  XCircle,
  Clock,
  ArrowRight,
  Check,
  Headphones,
  Calendar,
  Menu,
  X,
  Users,
  FileText,
  Bell,
  TrendingDown,
  AlertTriangle,
  ChevronDown,
} from 'lucide-react';

/* ─── Owl Logo ─── */
const OwlLogo = ({ className = "w-full h-full", animated = false }: { className?: string; animated?: boolean }) => (
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
    <path d="M128 34 C100 34 76 50 66 74 C52 74 42 88 42 104 C42 136 58 154 68 162 C72 199 96 226 128 226 C160 226 184 199 188 162 C198 154 214 136 214 104 C214 88 204 74 190 74 C180 50 156 34 128 34Z" fill="url(#owlBody)"/>
    <path d="M78 74 L64 52 L92 66 Z" fill="#0E6B4E"/>
    <path d="M178 74 L192 52 L164 66 Z" fill="#0E6B4E"/>
    <path d="M128 98 C102 98 86 118 86 142 C86 175 104 202 128 202 C152 202 170 175 170 142 C170 118 154 98 128 98Z" fill="url(#owlBelly)"/>
    <circle cx="96" cy="108" r="30" fill="#FFFFFF"/>
    <circle cx="160" cy="108" r="30" fill="#FFFFFF"/>
    <circle cx="96" cy="108" r="30" fill="none" stroke="#0E6B4E" strokeWidth="6" opacity="0.4"/>
    <circle cx="160" cy="108" r="30" fill="none" stroke="#0E6B4E" strokeWidth="6" opacity="0.4"/>
    <g>
      <circle cx="96" cy="112" r="10" fill="#0F172A">
        {animated && <animate attributeName="cx" values="96;102;96;90;96" dur="3s" repeatCount="indefinite" />}
        {animated && <animate attributeName="cy" values="112;108;112;116;112" dur="4s" repeatCount="indefinite" />}
      </circle>
      <circle cx="160" cy="112" r="10" fill="#0F172A">
        {animated && <animate attributeName="cx" values="160;166;160;154;160" dur="3s" repeatCount="indefinite" />}
        {animated && <animate attributeName="cy" values="112;108;112;116;112" dur="4s" repeatCount="indefinite" />}
      </circle>
      <circle cx="92" cy="108" r="3.5" fill="#FFFFFF">
        {animated && <animate attributeName="cx" values="92;98;92;86;92" dur="3s" repeatCount="indefinite" />}
        {animated && <animate attributeName="cy" values="108;104;108;112;108" dur="4s" repeatCount="indefinite" />}
      </circle>
      <circle cx="156" cy="108" r="3.5" fill="#FFFFFF">
        {animated && <animate attributeName="cx" values="156;162;156;150;156" dur="3s" repeatCount="indefinite" />}
        {animated && <animate attributeName="cy" values="108;104;108;112;108" dur="4s" repeatCount="indefinite" />}
      </circle>
    </g>
    <path d="M128 120 C122 120 116 126 116 132 C116 140 124 146 128 150 C132 146 140 140 140 132 C140 126 134 120 128 120Z" fill="#F4C430"/>
    <path d="M92 220 C92 206 112 206 112 220" fill="none" stroke="#F4C430" strokeWidth="8" strokeLinecap="round"/>
    <path d="M144 220 C144 206 164 206 164 220" fill="none" stroke="#F4C430" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

/* ─── Navigation ─── */
const Navigation = ({ calLink, whatsappLink }: { calLink: string; whatsappLink: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/70 backdrop-blur-xl border-b border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8"><OwlLogo animated={false} /></div>
            <span className="text-xl font-bold tracking-[-0.04em] text-gray-900 font-display">SAL</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[13px] text-gray-400 hover:text-gray-900 transition-colors duration-200 font-medium tracking-[-0.01em]">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={calLink} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 bg-[#020617] text-white text-[13px] font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
              Book a Demo
            </a>
          </div>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-black/[0.04] bg-white/80 backdrop-blur-xl">
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <a href={calLink} target="_blank" rel="noopener noreferrer" className="block text-center px-5 py-2.5 bg-[#020617] text-white text-sm font-semibold rounded-full">
                    Book a Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

/* ─── Chat Scenarios ─── */
const chatScenarios = [
  {
    id: 'task-management', label: 'Task Management', icon: CheckCircle,
    messages: [
      { type: 'user', text: "Tell Mia to deep clean station 3 before her 2pm client", time: '12:15' },
      { type: 'sal', text: "Got it. Messaging Mia now on WhatsApp.", time: '12:15' },
      { type: 'sal', text: "Mia confirmed she'll do it by 1:30 ✓", time: '12:18' },
      { type: 'user', text: "Also remind Ahmed about the towel delivery at 4", time: '12:19' },
      { type: 'sal', text: "Done! I'll follow up with both and let you know when complete.", time: '12:19' }
    ]
  },
  {
    id: 'proactive-alert', label: 'Proactive Alerts', icon: Bell,
    messages: [
      { type: 'sal', text: "Heads up: Tuesday bookings are down 23% vs last month. This is the 3rd week in a row.", time: '08:00' },
      { type: 'user', text: "That's not good. Any idea why?", time: '08:05' },
      { type: 'sal', text: "Your top Tuesday stylist (Noor) has been off sick. Her regulars aren't rebooking with others.", time: '08:05' },
      { type: 'user', text: "Can we do anything?", time: '08:06' },
      { type: 'sal', text: "I can message Noor's clients offering 15% off with another stylist this Tuesday. Want me to?", time: '08:06' },
      { type: 'user', text: "Yes do it", time: '08:07' },
      { type: 'sal', text: "Sent to 18 clients ✓ I'll update you on responses.", time: '08:07' }
    ]
  },
  {
    id: 'revenue', label: 'Revenue Insights', icon: BarChart3,
    messages: [
      { type: 'user', text: "How are we doing this month?", time: '14:20' },
      { type: 'sal', text: "Great news! You're at 82,000 AED, that's 15% above target 🔥", time: '14:20' },
      { type: 'user', text: "Nice! What's driving that?", time: '14:21' },
      { type: 'sal', text: "Nails are up 40%, the new gel collection is a hit!\n\nBut heads up: Tuesdays are slow. Want me to draft a report?", time: '14:21' },
      { type: 'user', text: "Yes, send me the full breakdown", time: '14:22' },
      { type: 'sal', text: "Here's your February report ✓\n\n• Revenue: 82K (target 71K)\n• Top service: Gel nails (+40%)\n• Weak day: Tuesday (-23%)\n• Top performer: Mia (18K)", time: '14:22' }
    ]
  },
  {
    id: 'attendance', label: 'Attendance', icon: Clock,
    messages: [
      { type: 'sal', text: "Ahmed clocked in at 10:22 AM. He was due at 10:00.", time: '10:23' },
      { type: 'sal', text: "This is the 3rd time this week. Pattern detected.", time: '10:23' },
      { type: 'user', text: "Thanks for flagging. Send him a warning?", time: '10:30' },
      { type: 'sal', text: "Drafted a formal message referencing the 3 late arrivals. Want to review before I send?", time: '10:30' },
      { type: 'user', text: "Send it as is", time: '10:31' },
      { type: 'sal', text: "Sent to Ahmed ✓ I'll track his attendance going forward.", time: '10:31' }
    ]
  },
  {
    id: 'review', label: 'Review Recovery', icon: Sparkles,
    messages: [
      { type: 'user', text: "Ugh Sara left us a 1-star review 😩", time: '11:05' },
      { type: 'sal', text: "I saw it. Let me check what happened...", time: '11:05' },
      { type: 'sal', text: "Found it. She waited 25 mins on Jan 15th. Short-staffed that day.", time: '11:06' },
      { type: 'user', text: "Can we fix this?", time: '11:07' },
      { type: 'sal', text: "Already drafted an apology + 20% off her next visit. Send it?", time: '11:07' },
      { type: 'user', text: "Yes please", time: '11:08' },
      { type: 'sal', text: "Sent! I'll let you know when she responds ✓", time: '11:08' }
    ]
  },
  {
    id: 'performance', label: 'Team Performance', icon: Users,
    messages: [
      { type: 'user', text: "How's the team doing this week?", time: '17:55' },
      { type: 'sal', text: "Here's the breakdown:", time: '17:55' },
      { type: 'sal', text: "⭐ Mia: 23 clients, 4.9★, 12K revenue\n📈 Noor: 19 clients, 4.7★, 9K revenue\n⚠️ Ahmed: Late 3x, 2 client complaints", time: '17:56' },
      { type: 'user', text: "What happened with Ahmed's complaints?", time: '17:57' },
      { type: 'sal', text: "Two clients said he rushed their cuts. Both on days he arrived late. I can pull up the full details.", time: '17:57' },
      { type: 'user', text: "Send me a full report on Ahmed this month", time: '17:58' },
      { type: 'sal', text: "Report sent ✓ Includes attendance, revenue, client ratings, and complaints.", time: '17:58' }
    ]
  }
];

/* ─── FAQ Accordion ─── */
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.06] last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-6 text-left group">
        <span className="text-[15px] font-semibold text-gray-900 pr-8 group-hover:text-emerald-600 transition-colors duration-200 tracking-[-0.02em]">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-gray-300 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="pb-6 text-[#64748b] text-sm leading-[1.7] tracking-[-0.01em]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Main ─── */
export default function Home() {
  const whatsappNumber = '+9715643333073';
  const email = 'hello@sal.com';
  const calLink = 'https://cal.com/anas-uddin-eoitvu/sal-demo';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20SAL`;

  const [activeScenario, setActiveScenario] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => setActiveScenario((p) => (p + 1) % chatScenarios.length), 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const ease = [0.25, 0.4, 0.25, 1] as const;

  const blur = {
    initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease },
  };

  return (
    <main className="min-h-screen overflow-x-hidden noise-overlay">
      <Navigation calLink={calLink} whatsappLink={whatsappLink} />

      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-200/25 blur-[100px]" style={{ animation: 'meshMove 12s ease-in-out infinite' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-100/20 blur-[120px]" style={{ animation: 'meshMove 16s ease-in-out infinite reverse' }} />
          <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-amber-100/10 blur-[100px]" style={{ animation: 'meshMove 10s ease-in-out infinite 2s' }} />
        </div>
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="max-w-[1080px] mx-auto px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-black/[0.06] mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-600 text-xs font-medium tracking-[-0.01em]">World&apos;s First AI Operations Agent for Beauty & Wellness</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.1, duration: 0.9, ease }}
            className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] font-semibold mb-6 tracking-[-0.03em] text-gray-900"
          >
            The Operations Manager
            <br />
            <span className="gradient-text">You Never Had to Hire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.25, duration: 0.7, ease }}
            className="text-[#64748b] text-lg sm:text-xl max-w-[540px] mx-auto leading-[1.6] mb-10 tracking-[-0.02em]"
          >
            SAL manages your entire salon through WhatsApp. Team communication, task management, business intelligence, and proactive monitoring. Autonomously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6, ease }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          >
            <a href="#see-sal"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#020617] text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-all duration-300 tracking-[-0.01em] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]">
              See SAL in Action <ArrowRight className="w-4 h-4" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/70 backdrop-blur-sm text-gray-600 rounded-full font-semibold text-sm border border-black/[0.08] hover:bg-white hover:border-black/[0.12] transition-all duration-300 tracking-[-0.01em]">
              <MessageCircle className="w-4 h-4" /> Message Us on WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400 font-medium tracking-[-0.01em]">
            {['Fresha Integration', '1-3 Day Setup', 'Runs Autonomously 24/7'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500/70" />{t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="py-5 bg-white/50 border-y border-black/[0.04]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              { icon: MessageCircle, text: 'Runs Inside WhatsApp' },
              { icon: Zap, text: 'Setup in 1-3 Days' },
              { icon: Target, text: 'Connects to Fresha' },
              { icon: Calendar, text: 'Cancel Anytime' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-500 font-medium tracking-[-0.01em]">
                <item.icon className="w-3.5 h-3.5 text-emerald-600/60" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-[1080px] mx-auto px-6">
          <motion.div {...blur} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-gray-900 mb-4">
              You didn&apos;t open a salon to drown in admin
            </h2>
            <p className="text-[#94a3b8] text-sm tracking-[-0.01em]">Sound familiar?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MessageCircle, title: 'Drowning in Messages', desc: 'Team, clients, suppliers, all hitting your phone at once. Hours spent reacting instead of leading.', color: 'text-red-500', bg: 'bg-red-50' },
              { icon: XCircle, title: 'Things Slip Through', desc: 'The VIP you forgot to follow up with. The supplies you forgot to reorder. The schedule change nobody communicated.', color: 'text-orange-500', bg: 'bg-orange-50' },
              { icon: Clock, title: 'No Time to Grow', desc: 'Too busy putting out fires. Marketing, strategy, and growth stay permanently on the back burner.', color: 'text-amber-500', bg: 'bg-amber-50' },
              { icon: BarChart3, title: 'No Operational Visibility', desc: 'Data exists in multiple systems but nobody is connecting the dots. You have no real-time view of what is actually happening.', color: 'text-purple-500', bg: 'bg-purple-50' },
            ].map((item, i) => (
              <motion.div key={i} {...blur} transition={{ delay: i * 0.1, duration: 0.7, ease }}
                className="premium-card p-7">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-base font-semibold mb-2 text-gray-900 tracking-[-0.02em]">{item.title}</h3>
                <p className="text-sm text-[#64748b] leading-[1.7] tracking-[-0.01em]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mid-page CTA after pain */}
          <motion.div {...blur} className="text-center mt-14">
            <a href={calLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#020617] text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-all duration-300 tracking-[-0.01em] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]">
              See SAL in Action <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHATSAPP MOCKUP ═══ */}
      <section id="see-sal" className="py-24 sm:py-32 bg-cream relative">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div {...blur} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] mb-3 text-gray-900">
              See SAL in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-[#94a3b8] max-w-md mx-auto text-sm tracking-[-0.01em]">
              Message SAL like a team member. Watch it handle real scenarios.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center"
            onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {/* Scenario Selection */}
            <div className="w-full lg:w-auto order-2 lg:order-1">
              <div className="grid grid-cols-3 gap-2 lg:hidden mb-4">
                {chatScenarios.map((s, i) => (
                  <button key={s.id} onClick={() => setActiveScenario(i)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all duration-200 ${i === activeScenario ? 'glass-card' : ''}`}>
                    <s.icon className={`w-5 h-5 ${i === activeScenario ? 'text-emerald-600' : 'text-gray-400'}`} />
                    <p className={`text-[10px] font-medium ${i === activeScenario ? 'text-gray-900' : 'text-gray-400'}`}>{s.label.split(' ')[0]}</p>
                  </button>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-col gap-1">
                {chatScenarios.map((s, i) => (
                  <button key={s.id} onClick={() => setActiveScenario(i)}
                    className={`flex items-center gap-4 px-5 py-3.5 rounded-xl text-left transition-all duration-200 min-w-[220px] ${i === activeScenario ? 'glass-card' : 'hover:bg-white/40'}`}>
                    <s.icon className={`w-5 h-5 ${i === activeScenario ? 'text-emerald-600' : 'text-gray-400'}`} />
                    <span className={`text-sm font-medium tracking-[-0.01em] ${i === activeScenario ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* iPhone Mockup */}
            <div className="relative w-full flex justify-center order-1 lg:order-2">
              <motion.div className="relative transform scale-[0.85] sm:scale-90 md:scale-100 origin-top"
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}>
                <div className="relative bg-[#1a1a1a] rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-[0_8px_32px_rgba(0,0,0,0.2),0_32px_64px_rgba(0,0,0,0.1)]">
                  <div className="hidden sm:block absolute -left-[3px] top-28 w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
                  <div className="hidden sm:block absolute -left-[3px] top-40 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                  <div className="hidden sm:block absolute -left-[3px] top-56 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                  <div className="hidden sm:block absolute -right-[3px] top-36 w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />
                  <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-2 sm:pt-3">
                      <div className="w-20 sm:w-28 h-5 sm:h-7 bg-black rounded-full flex items-center justify-center gap-1 sm:gap-2">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#1a1a1a] ring-1 ring-gray-800" />
                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#0a0a0a] ring-1 ring-gray-800" />
                      </div>
                    </div>
                    <div className="w-[280px] sm:w-[300px] md:w-[320px] h-[560px] sm:h-[600px] md:h-[640px] overflow-hidden">
                      <div className="bg-emerald-600 pt-12 pb-0">
                        <div className="flex justify-between items-center px-6 py-1 text-white text-xs">
                          <span className="font-medium">9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="flex gap-[2px]">{[1,2,3,4].map(i => (<div key={i} className="w-[3px] rounded-sm bg-white" style={{ height: `${i * 2 + 2}px`, opacity: i <= 3 ? 1 : 0.5 }} />))}</div>
                            <span className="ml-1">5G</span>
                            <div className="w-6 h-3 border border-white rounded-sm ml-1 relative">
                              <div className="absolute inset-[2px] right-1 bg-white rounded-sm" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-emerald-600 px-4 pb-3 flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-white rotate-180" />
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
                          <OwlLogo animated={true} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-sm">SAL</p>
                          <p className="text-[11px] text-emerald-100">online</p>
                        </div>
                        <div className="flex gap-5 text-white"><Phone className="w-5 h-5" /><MoreVertical className="w-5 h-5" /></div>
                      </div>
                      <div className="bg-[#ece5dd] h-[460px] overflow-y-auto p-3" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
                        <AnimatePresence mode="wait">
                          <motion.div key={activeScenario} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="space-y-2">
                            {chatScenarios[activeScenario].messages.map((msg, i) => (
                              <motion.div key={`${activeScenario}-${i}`} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`} initial={{ opacity: 0, y: 8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: i * 0.1, duration: 0.2 }}>
                                <div className={`max-w-[85%] rounded-lg px-3 py-2 shadow-sm relative ${msg.type === 'user' ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                                  <div className={`absolute top-0 w-2 h-2 ${msg.type === 'user' ? '-right-1 bg-[#d9fdd3]' : '-left-1 bg-white'}`} style={{ clipPath: msg.type === 'user' ? 'polygon(0 0, 0% 100%, 100% 0)' : 'polygon(100% 0, 0 0, 100% 100%)' }} />
                                  <p className="text-[13px] leading-[1.4] whitespace-pre-line text-gray-800">{msg.text}</p>
                                  <p className="text-[10px] text-gray-400 text-right mt-1 flex items-center justify-end gap-1">
                                    {msg.time}
                                    {msg.type === 'user' && <svg className="w-4 h-3 text-blue-500" viewBox="0 0 16 11" fill="currentColor"><path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.14-.317l-.387-.33z"/><path d="M14.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.2-1.136-.406.433 1.886 1.886a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.14-.317l-.387-.33z" fillOpacity=".4"/></svg>}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      <div className="bg-[#f0f0f0] px-2 py-2 flex gap-2 items-center">
                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-500">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400">Message</div>
                        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white"><Send className="w-4 h-4" /></div>
                      </div>
                      <div className="bg-[#f0f0f0] pb-2 pt-1 flex justify-center"><div className="w-32 h-1 bg-black/20 rounded-full" /></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROACTIVE ALERTS ═══ */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-[1080px] mx-auto px-6">
          <motion.div {...blur} className="text-center mb-16">
            <p className="text-emerald-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-4">Autonomous</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] mb-4 text-gray-900">
              SAL Spots Problems Before You Do
            </h2>
            <p className="text-[#94a3b8] text-sm max-w-lg mx-auto tracking-[-0.01em]">
              Connected to Fresha. Monitors 24/7. Surfaces issues the moment they appear.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: TrendingDown, iconBg: 'bg-orange-50', iconColor: 'text-orange-500', title: 'Booking Decline', message: '"Tuesdays down 23% this month. Launch a flash promo?"', actions: ['Run it', 'More data'] },
              { icon: AlertTriangle, iconBg: 'bg-amber-50', iconColor: 'text-amber-500', title: 'Staff Pattern', message: '"Ahmed late 3x this week. Send a formal warning?"', actions: ['Send', "I'll handle it"] },
              { icon: Users, iconBg: 'bg-blue-50', iconColor: 'text-blue-500', title: 'VIP Going Dormant', message: '"Mrs. Ahmad hasn\'t visited in 45 days. Re-engage?"', actions: ['Send offer', 'Later'] },
              { icon: Bell, iconBg: 'bg-purple-50', iconColor: 'text-purple-500', title: 'Revenue Opportunity', message: '"3 clients today haven\'t tried keratin. +1,200 AED potential."', actions: ['Send offers', 'Skip'] },
            ].map((alert, i) => (
              <motion.div key={i} {...blur} transition={{ delay: i * 0.08, duration: 0.7, ease }}
                className="premium-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${alert.iconBg}`}>
                    <alert.icon className={`w-4 h-4 ${alert.iconColor}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-[-0.02em]">{alert.title}</h3>
                </div>
                <p className="text-sm text-[#64748b] mb-4 tracking-[-0.01em]">{alert.message}</p>
                <div className="flex gap-2">
                  <button className="px-3.5 py-1.5 bg-[#020617] text-white rounded-full text-xs font-medium shadow-[0_1px_2px_rgba(0,0,0,0.1)]">{alert.actions[0]}</button>
                  <button className="px-3.5 py-1.5 bg-white text-gray-500 rounded-full text-xs font-medium border border-black/[0.08]">{alert.actions[1]}</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-24 sm:py-32 bg-cream relative">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="max-w-[1080px] mx-auto px-6 relative z-10">
          <motion.div {...blur} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] mb-3 text-gray-900">
              Everything SAL Does for You
            </h2>
            <p className="text-[#94a3b8] text-sm max-w-lg mx-auto tracking-[-0.01em]">
              Not a dashboard you log into. An autonomous partner you message on WhatsApp.
            </p>
          </motion.div>

          {/* Live Now */}
          <motion.div {...blur} className="mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-700 text-xs font-semibold tracking-[-0.01em]">Live Now</span>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              { icon: MessageCircle, title: 'Team Task Management', desc: 'Tell SAL what needs to be done. It messages the right staff, follows up, reminds, and confirms completion. All through WhatsApp.', bg: 'bg-sky-50', color: 'text-sky-600' },
              { icon: Brain, title: 'Proactive Alerts', desc: 'SAL monitors your data 24/7 and alerts you to issues, opportunities, and patterns before they become problems.', bg: 'bg-emerald-50', color: 'text-emerald-600' },
              { icon: FileText, title: 'Smart Reports', desc: 'Ask SAL for any report: revenue, staff performance, client retention. Generated instantly through conversation.', bg: 'bg-blue-50', color: 'text-blue-600' },
              { icon: BarChart3, title: 'Business Intelligence', desc: 'Connected to Fresha. Analyzes revenue, performance, and operations data. Knows your top clients, peak hours, and trends.', bg: 'bg-orange-50', color: 'text-orange-600' },
              { icon: Users, title: 'Biometrics Integration', desc: 'Connected to your attendance system. Auto-messages staff when they are late. Tracks patterns with real data.', bg: 'bg-purple-50', color: 'text-purple-600' },
              { icon: Sparkles, title: 'Review Management', desc: 'Monitors Google and Fresha reviews. Alerts you to new reviews. Helps draft responses and recovery offers.', bg: 'bg-red-50', color: 'text-red-500' },
            ].map((f, i) => (
              <motion.div key={i} {...blur} transition={{ delay: i * 0.06, duration: 0.7, ease }}
                className="premium-card p-7">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${f.bg}`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2 tracking-[-0.02em]">{f.title}</h3>
                <p className="text-sm text-[#64748b] leading-[1.7] tracking-[-0.01em]">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div {...blur} className="mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 mb-6">
              <Clock className="w-3 h-3 text-amber-600" />
              <span className="text-amber-700 text-xs font-semibold tracking-[-0.01em]">Coming Soon</span>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Calendar, title: 'Smart Scheduling', desc: 'Automatic appointment booking, rescheduling, and staff optimization. No double-bookings.', bg: 'bg-emerald-50', color: 'text-emerald-600' },
              { icon: Phone, title: 'Client Communication', desc: 'Automated reminders, follow-ups, and personalized messages to your customers.', bg: 'bg-sky-50', color: 'text-sky-600' },
              { icon: Target, title: 'Staff Management', desc: 'Auto-handle sick days, shift reassignments, and coverage finding.', bg: 'bg-purple-50', color: 'text-purple-600' },
              { icon: Bell, title: 'Inventory Alerts', desc: 'Track supplies, get alerts when running low, auto-reorder suggestions.', bg: 'bg-orange-50', color: 'text-orange-600' },
            ].map((f, i) => (
              <motion.div key={i} {...blur} transition={{ delay: i * 0.06, duration: 0.7, ease }}
                className="premium-card p-7 border-dashed border-gray-200">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${f.bg} opacity-70`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[15px] font-semibold text-gray-900 tracking-[-0.02em]">{f.title}</h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold leading-none">Coming Soon</span>
                </div>
                <p className="text-sm text-[#64748b] leading-[1.7] tracking-[-0.01em]">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mid-page CTA after value */}
          <motion.div {...blur} className="text-center mt-14">
            <a href={calLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#020617] text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-all duration-300 tracking-[-0.01em] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]">
              See SAL in Action <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ FAHIM QUOTE ═══ */}
      <section className="py-24 sm:py-32 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.96, filter: 'blur(14px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1, ease }}>
            <div className="text-8xl text-emerald-500/10 mb-4 select-none leading-none font-bold">&ldquo;</div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl leading-[1.4] text-white mb-8 -mt-10 font-display font-semibold tracking-[-0.03em]">
              Every chatbot calls itself an &lsquo;assistant.&rsquo; The word has{' '}
              <span className="text-emerald-400">lost all meaning.</span>{' '}
              We built something different: an autonomous partner that monitors, alerts, and acts.{' '}
              <span className="text-emerald-400">That&apos;s not an assistant. That&apos;s a partner.</span>
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <img src="/fahim.jpg" alt="Fahim - CTO & Co-founder" className="w-10 h-10 rounded-full object-cover border border-emerald-500/20" />
              <div className="text-left">
                <p className="text-white font-semibold text-sm tracking-[-0.01em]">Fahim</p>
                <p className="text-gray-500 text-xs">CTO & Co-founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ OUR STORY (moved up for credibility) ═══ */}
      <section id="our-story" className="py-24 sm:py-32 bg-cream relative">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-[1080px] mx-auto px-6 relative z-10">
          <motion.div {...blur} className="text-center mb-12">
            <p className="text-emerald-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-4">Our Story</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] mb-4 text-gray-900">
              Built by Salon Owners, for Salon Owners
            </h2>
            <p className="text-[#94a3b8] text-sm max-w-lg mx-auto tracking-[-0.01em]">
              SAL started as an internal tool we built for our own salon. Now it&apos;s available for everyone.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div {...blur} transition={{ delay: 0.1, duration: 0.8 }} className="max-w-3xl mx-auto mb-12">
            <div className="rounded-2xl overflow-hidden bg-black shadow-[0_8px_32px_rgba(0,0,0,0.15),0_32px_64px_rgba(0,0,0,0.05)]">
              <video className="w-full" controls playsInline preload="metadata">
                <source src="/founders-video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Founders */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            {[
              { name: 'Anas', role: 'CEO & Founder', line: 'Salon owner. Built SAL from the problem.', photo: '/anas.jpg', initial: 'A' },
              { name: 'Fahim', role: 'CTO & Co-founder', line: 'AI engineer. Built the intelligence.', photo: '/fahim.jpg', initial: 'F' },
            ].map((f, i) => (
              <motion.div key={i} {...blur} transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                className="flex items-center gap-4 glass-card rounded-2xl px-6 py-5 w-full sm:w-auto">
                {f.photo ? (
                  <img src={f.photo} alt={`${f.name} - ${f.role}`} className="w-11 h-11 rounded-full object-cover border border-emerald-100 flex-shrink-0" />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-base font-bold text-emerald-600">{f.initial}</span>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm tracking-[-0.02em]">{f.name}</h3>
                  <p className="text-emerald-600 text-[11px] font-medium">{f.role}</p>
                  <p className="text-gray-400 text-[11px] mt-0.5 tracking-[-0.01em]">{f.line}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-[1080px] mx-auto px-6 relative z-10">
          <motion.div {...blur} className="text-center mb-20">
            <p className="text-emerald-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-4">How it works</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-gray-900">
              Live in 1-3 Days
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 sm:gap-16 mb-16">
            {[
              { num: '01', title: 'Connect', desc: 'We sync SAL with your WhatsApp and Fresha. Your data, clients, and schedule, connected instantly.', icon: MessageCircle },
              { num: '02', title: 'Train', desc: 'SAL learns your services, staff, pricing, and your way of communicating. Custom-trained on your business.', icon: Brain },
              { num: '03', title: 'Launch', desc: 'SAL runs your operations 24/7. You focus on clients, growth, and the work you actually enjoy.', icon: Zap },
            ].map((step, i) => (
              <motion.div key={i} {...blur} transition={{ delay: i * 0.15, duration: 0.8, ease }} className="text-center">
                <div className="relative inline-flex mb-8">
                  <div className="w-20 h-20 rounded-2xl border border-black/[0.06] flex items-center justify-center bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <step.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#020617] flex items-center justify-center text-[11px] font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.2)]">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 tracking-[-0.03em]">{step.title}</h3>
                <p className="text-[#64748b] text-sm max-w-xs mx-auto tracking-[-0.01em] leading-[1.7]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...blur} className="text-center">
            <a href={calLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#020617] text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-all duration-300 tracking-[-0.01em] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]">
              Book Your Free Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-24 sm:py-32 bg-cream relative">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-[1080px] mx-auto px-6 text-center relative z-10">
          <motion.div {...blur}>
            <p className="text-emerald-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-4">Pricing</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-[#94a3b8] text-sm max-w-md mx-auto tracking-[-0.01em] mb-12">
              Priced by team size. No hidden fees. No long-term contracts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto items-end mb-10">
            {[
              { tier: 'Small', team: '5-10 staff', setup: '15,000', monthly: '1,500', popular: false },
              { tier: 'Medium', team: '10-20 staff', setup: '20,000', monthly: '2,000', popular: true },
              { tier: 'Large', team: '20+ staff', setup: '25,000', monthly: '2,500', popular: false },
            ].map((plan, i) => (
              <motion.div key={i} {...blur} transition={{ delay: i * 0.1, duration: 0.7, ease }}
                className={`relative text-center rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#020617] p-8 sm:p-10 shadow-[0_8px_32px_rgba(2,6,23,0.25),0_32px_64px_rgba(2,6,23,0.1)]'
                    : 'premium-card p-7 sm:p-8'
                }`}>
                {plan.popular && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-bold tracking-[0.06em] uppercase">Most Popular</span>
                  </div>
                )}
                <h3 className={`text-xl font-bold tracking-[-0.03em] mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.tier}</h3>
                <p className={`text-xs mb-6 ${plan.popular ? 'text-gray-400' : 'text-[#94a3b8]'}`}>{plan.team}</p>

                <p className={`text-3xl font-bold tracking-[-0.04em] mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.monthly}
                  <span className={`text-sm font-medium ml-1 ${plan.popular ? 'text-gray-400' : 'text-[#94a3b8]'}`}>AED/mo</span>
                </p>
                <p className={`text-xs mb-6 ${plan.popular ? 'text-gray-500' : 'text-[#94a3b8]'}`}>
                  + {plan.setup} AED one-time setup
                </p>

                <div className={`h-px w-full mb-6 ${plan.popular ? 'bg-white/[0.08]' : 'bg-black/[0.06]'}`} />

                <div className="space-y-3 mb-7 text-left">
                  {['All features included', '24/7 support', 'Custom training', 'WhatsApp integration', '1-3 day setup'].map((feat, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                      <span className={`text-sm tracking-[-0.01em] ${plan.popular ? 'text-gray-300' : 'text-[#64748b]'}`}>{feat}</span>
                    </div>
                  ))}
                </div>

                <a href={calLink} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 tracking-[-0.01em] ${
                    plan.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_2px_8px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_16px_rgba(16,185,129,0.4)]'
                      : 'bg-white text-gray-700 border border-black/[0.08] hover:border-black/[0.15] hover:bg-gray-50'
                  }`}>
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p {...blur} transition={{ delay: 0.2 }} className="text-xs text-gray-400 tracking-[-0.01em]">
            No long-term contracts. Cancel anytime. Book a free demo to see SAL in action.
          </motion.p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-24 sm:py-32 bg-white">
        <div className="max-w-[680px] mx-auto px-6">
          <motion.div {...blur} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-gray-900">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div {...blur} transition={{ delay: 0.1 }}>
            {[
              { question: 'How does SAL integrate with WhatsApp?', answer: 'Through the official WhatsApp Business API. Setup takes 1-3 days. We handle everything technical.' },
              { question: 'Does SAL work with Fresha?', answer: 'Yes. Direct integration: booking data, client history, service analytics, and more. No manual data entry. Everything syncs automatically.' },
              { question: 'What does "autonomous" actually mean?', answer: "SAL doesn't wait for you to ask. It monitors your Fresha data 24/7 and proactively alerts you to booking declines, dormant clients, staff patterns, and revenue opportunities. You approve actions with one tap." },
              { question: 'Is my data secure?', answer: 'Bank-level encryption on all data. We never share your data with third parties. Your business information stays yours.' },
              { question: 'How long does setup take?', answer: '1-3 days. We handle the technical setup, connect your Fresha account, customize SAL for your business, and train it on your operations.' },
              { question: 'What if my staff doesn\'t want to use it?', answer: 'They already use WhatsApp every day. There is literally nothing new to learn. No app to download, no login to remember, no training needed.' },
              { question: 'Do I need to change my Fresha setup?', answer: 'No. SAL connects to Fresha as-is. Zero changes to your existing workflow. Everything stays exactly the same, SAL just makes it smarter.' },
              { question: 'How much does SAL cost?', answer: 'SAL is priced by team size. Small salons (5-10 staff): 15,000 AED setup + 1,500 AED/month. Medium (10-20 staff): 20,000 AED setup + 2,000 AED/month. Large (20+ staff): 25,000 AED setup + 2,500 AED/month. All plans include every feature, 24/7 support, and no long-term contracts.' },
              { question: 'Can I try SAL before committing?', answer: 'Yes! We offer a free demo where you can see SAL in action with your actual business scenarios. No commitment required. Book a 15-minute call and we will show you exactly how SAL would work for your salon.' },
              { question: 'What if I want to cancel?', answer: 'Cancel anytime. No contracts, no lock-in, no cancellation fees. We earn your business every month.' },
              { question: 'What makes SAL different from other salon software?', answer: "SAL isn't a dashboard you log into. It's an autonomous AI partner you message on WhatsApp, the app your team already uses. No training needed, no learning curve. And it doesn't just respond. It thinks ahead." },
            ].map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
          </motion.div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 sm:py-32 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/15 rounded-full blur-[120px]" />
          <div className="absolute inset-0 dot-grid opacity-20" />
        </div>
        <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
          <motion.h2 {...blur} className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-5 text-gray-900">
            Stop Managing.
            <span className="block gradient-text mt-1">Start Growing.</span>
          </motion.h2>
          <motion.p {...blur} transition={{ delay: 0.1 }} className="text-[#64748b] text-base sm:text-lg mb-10 max-w-md mx-auto tracking-[-0.01em]">
            See how SAL works for your specific business. Free demo, no commitment, setup in 1-3 days.
          </motion.p>
          <motion.div {...blur} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <a href={calLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#020617] text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-all duration-300 tracking-[-0.01em] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]">
              Book Your Free Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/70 backdrop-blur-sm text-gray-600 rounded-full font-semibold text-sm border border-black/[0.08] hover:bg-white hover:border-black/[0.12] transition-all duration-300 tracking-[-0.01em]">
              <MessageCircle className="w-4 h-4" /> Message Us on WhatsApp
            </a>
          </motion.div>
          <motion.div {...blur} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-8 sm:gap-10 text-xs text-gray-400 font-medium tracking-[-0.01em]">
            {[
              { icon: Zap, text: '1-3 Day Setup' },
              { icon: Headphones, text: '24/7 Support' },
              { icon: Calendar, text: 'No Lock-in' },
              { icon: CheckCircle, text: 'Free Demo' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 text-emerald-500/70" /><span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#020617] text-white py-12 sm:py-16 pb-24 md:pb-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8"><OwlLogo animated={true} /></div>
                <span className="text-xl font-bold tracking-[-0.04em] font-display">SAL</span>
              </div>
              <p className="text-gray-500 text-sm leading-[1.7] tracking-[-0.01em]">Autonomous AI operations partner for salons, spas, and barbershops.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[11px] mb-4 text-gray-400 tracking-[0.15em] uppercase">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href={`mailto:${email}`} className="hover:text-white transition-colors duration-200">{email}</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">{whatsappNumber}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[11px] mb-4 text-gray-400 tracking-[0.15em] uppercase">Company</h4>
              <p className="text-sm text-gray-500 tracking-[-0.01em]">Dubai, UAE</p>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-6 text-center text-xs text-gray-600">
            <p>&copy; 2026 SAL. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ═══ FLOATING MOBILE CTA ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-white/90 backdrop-blur-xl border-t border-black/[0.06] px-4 py-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
          <a href={calLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-[#020617] text-white rounded-full font-semibold text-sm shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
            See SAL in Action <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
