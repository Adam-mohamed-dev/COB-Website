'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Bot } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useConsultationStore } from '@/store/useConsultationStore';
import { ConsultationBookingForm } from '@/components/consultation/ConsultationBookingForm';

export default function Footer() {
  const tf = useTranslations('Footer');
  const chat = useTranslations('Chatbot');

  const { isFormOpen, setFormOpen, selectedSolutions } = useConsultationStore();

  return (
    <>
      {/* Immersive Footer Section with Vivid Brand Gradient */}
      <footer className="relative bg-gradient-to-br from-[#246fb1] to-[#06b6d4] text-white/80 pt-24 pb-12 border-t border-[#246fb1]/30 overflow-hidden">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-medical-grid opacity-10 mix-blend-overlay" />

        <div className="max-w-[1600px] mx-auto px-10 relative z-10">

          {/* Main Footer Directory Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20 text-sm">
            {/* Column 1: Brand & Identity */}
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-white tracking-tighter">
                  COB
                </span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
              <p className="text-xs text-white/70 font-semibold leading-relaxed max-w-xs">
                {tf('tagline')}
              </p>
              {/* HIPAA / SOC2 Badges */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span className="text-[9px] font-black uppercase tracking-wider text-white">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-wider text-white">SOC2 Type II</span>
                </div>
              </div>
            </div>

            {/* Column 2: Products & Solutions (suites 1-4) */}
            <div className="space-y-5">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                {tf('products')}
              </h4>
              <ul className="space-y-3 text-xs font-semibold text-white/80">
                <li><Link href="/solutions/revenue-maximization-protection" className="hover:text-white transition-colors">{tf('product1')}</Link></li>
                <li><Link href="/solutions/patient-engagement-growth-ecosystem" className="hover:text-white transition-colors">{tf('product2')}</Link></li>
                <li><Link href="/solutions/practice-infrastructure-strategic-operations" className="hover:text-white transition-colors">{tf('product3')}</Link></li>
                <li><Link href="/solutions/cob-innovation-lab-enterprise-solutions" className="hover:text-white transition-colors">{tf('product4')}</Link></li>
              </ul>
            </div>

            {/* Column 3: Services (suites 5-7) */}
            <div className="space-y-5">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                {tf('services')}
              </h4>
              <ul className="space-y-3 text-xs font-semibold text-white/80">
                <li><Link href="/solutions/executive-consulting-tailored-business-development" className="hover:text-white transition-colors">{tf('service1')}</Link></li>
                <li><Link href="/solutions/software-solutions-technology-platform" className="hover:text-white transition-colors">{tf('service2')}</Link></li>
                <li><Link href="/solutions/dedicated-outsourcing-services" className="hover:text-white transition-colors">{tf('service3')}</Link></li>
              </ul>
            </div>

            {/* Column 4: Company (About Us, Resources, Support subsections) */}
            <div className="space-y-5">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                {tf('company')}
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white/50 mb-2">{tf('aboutUs')}</p>
                  <ul className="space-y-2 text-xs font-semibold text-white/80">
                    <li><Link href="/#solutions" className="hover:text-white transition-colors">{tf('ourMission')}</Link></li>
                    <li><Link href="/#achievements" className="hover:text-white transition-colors">{tf('leadershipTeam')}</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white/50 mb-2">{tf('resources')}</p>
                  <ul className="space-y-2 text-xs font-semibold text-white/80">
                    <li><Link href="/#success-stories" className="hover:text-white transition-colors">{tf('caseStudies')}</Link></li>
                    <li><Link href="/#success-stories" className="hover:text-white transition-colors">{tf('blogArticles')}</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white/50 mb-2">{tf('support')}</p>
                  <ul className="space-y-2 text-xs font-semibold text-white/80">
                    <li><Link href="/book-consultation" className="hover:text-white transition-colors">{tf('contactUs')}</Link></li>
                    <li><Link href="/#solutions" className="hover:text-white transition-colors">{tf('clientPortal')}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 font-semibold">
            <span>
              &copy; {new Date().getFullYear()} COB. {tf('rights')}
            </span>
            <div className="flex items-center gap-6">
              <Link href="/book-consultation" className="hover:text-white transition-colors">{tf('privacy')}</Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="hover:text-white transition-colors cursor-pointer">{tf('terms')}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="hover:text-white transition-colors cursor-pointer">{tf('baa')}</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Side-Showing Booking Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity duration-500" onClick={() => setFormOpen(false)} />

          <ConsultationBookingForm onClose={() => setFormOpen(false)} />
        </div>
      )}

      {/* Futuristic Floating Chatbot & Interests Floating Pill */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 ltr:right-8 ltr:flex-row rtl:left-8 rtl:flex-row-reverse animate-in fade-in duration-300">
        
        {/* Floating Interests Pill beside chatbot */}
        {selectedSolutions.length > 0 && (
          <Link
            href="/book-consultation"
            className="flex items-center gap-3 bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-[11px] tracking-wider px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(6,182,212,0.35)] hover:shadow-[0_15px_35px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 animate-bounce cursor-pointer border-0"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#246fb1] text-[9px] font-black animate-pulse">
              {selectedSolutions.length}
            </span>
            <span>Book Selected ({selectedSolutions.length})</span>
          </Link>
        )}

        <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#246fb1] to-[#06b6d4] blur-md opacity-60 animate-pulse pointer-events-none" />

            <button
              type="button"
              className="relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-950 border border-slate-800/80 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-default focus:outline-none"
              aria-label={chat('tooltip')}
            >
              <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-slate-950" />
              </span>

              <Bot className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            </button>
        </div>
      </div>
    </>
  );
}
