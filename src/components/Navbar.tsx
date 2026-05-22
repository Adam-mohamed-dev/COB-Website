'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link, usePathname } from '@/i18n/routing';
import { useConsultationStore } from '@/store/useConsultationStore';
import { Phone } from 'lucide-react';
import { COB_PHONE_TEL } from '@/lib/contact-info';
import { cn } from '@/lib/utils';
import {
  companyMenu,
  getNavSolutionColumns,
  industriesMenu,
  isAnySolutionMenuActive,
  isHashHrefActive,
  isServiceRouteActive,
  isSuiteOverviewActive,
  PRODUCTS_SOLUTION_SUITE_NUMBERS,
  SERVICES_MENU_SUITE_NUMBERS,
  type NavSolutionColumn,
  type NavSimpleLink,
} from '@/lib/nav-menu';

const productsColumns = getNavSolutionColumns(PRODUCTS_SOLUTION_SUITE_NUMBERS);
const servicesColumns = getNavSolutionColumns(SERVICES_MENU_SUITE_NUMBERS);

const suiteHeaderClass = (active: boolean) =>
  cn(
    'text-[12px] font-black uppercase border-b pb-3 mb-3 block transition-colors rounded-t-lg px-2 -mx-2 pt-1',
    active
      ? 'text-brand border-[#06b6d4]/40 bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10'
      : 'text-brand border-slate-100 hover:text-cyan-500 hover:bg-slate-50/80'
  );

const serviceLinkClass = (active: boolean) =>
  cn(
    'block py-2 px-2 -mx-2 rounded-lg transition-all duration-300 group/item',
    active
      ? 'translate-x-1 bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10 border-l-2 border-[#06b6d4]'
      : 'hover:translate-x-1 hover:bg-slate-50'
  );

const serviceTitleClass = (active: boolean) =>
  cn(
    'text-[13px] font-bold transition-colors leading-tight',
    active ? 'text-brand' : 'text-slate-800 group-hover/item:text-brand'
  );

const simpleLinkClass = (active: boolean) =>
  cn(
    'block py-2 px-2 -mx-2 rounded-lg transition-all duration-300 group/item',
    active
      ? 'translate-x-1 bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10 border-l-2 border-[#06b6d4]'
      : 'hover:translate-x-1 hover:bg-slate-50'
  );

const simpleTitleClass = (active: boolean) =>
  cn(
    'text-[13px] font-bold transition-colors leading-none',
    active ? 'text-brand' : 'text-slate-800 group-hover/item:text-brand'
  );

const dropdownTriggerClass = (active: boolean) =>
  cn(
    'text-[15px] uppercase tracking-normal font-bold transition-all flex items-center gap-2 cursor-pointer',
    active ? 'text-brand' : 'text-slate-400 hover:text-brand'
  );

function SolutionColumn({
  column,
  pathname,
}: {
  column: NavSolutionColumn;
  pathname: string;
}) {
  const suiteActive = isSuiteOverviewActive(pathname, column.slug);

  return (
    <div className="flex flex-col gap-2">
      <Link href={`/solutions/${column.slug}`} className={suiteHeaderClass(suiteActive)}>
        {column.title}
      </Link>
      {column.services.map((service) => {
        const serviceActive = isServiceRouteActive(pathname, column.slug, service.slug);
        return (
          <Link
            key={service.slug}
            href={`/solutions/${column.slug}/${service.slug}`}
            className={serviceLinkClass(serviceActive)}
          >
            <div className={serviceTitleClass(serviceActive)}>{service.title}</div>
            {service.description && (
              <p className="text-[11px] font-medium text-slate-400 mt-1 leading-normal">
                {service.description}
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
}

function SimpleColumn({
  heading,
  links,
  pathname,
  currentHash,
  highlightActive = false,
  onContactClick,
}: {
  heading: string;
  links: NavSimpleLink[];
  pathname: string;
  currentHash: string;
  highlightActive?: boolean;
  onContactClick?: (label: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[12px] font-black uppercase text-brand border-b border-slate-100 pb-3 mb-3 block px-2 -mx-2">
        {heading}
      </div>
      {links.map((link) => {
        const isActive =
          highlightActive && isHashHrefActive(pathname, currentHash, link.href);

        if (link.label === 'Contact Us' && onContactClick) {
          return (
            <button
              key={link.label}
              type="button"
              onClick={() => onContactClick(link.label)}
              className={cn(simpleLinkClass(false), 'w-full text-left cursor-pointer')}
            >
              <div className={simpleTitleClass(false)}>{link.label}</div>
            </button>
          );
        }
        return (
          <Link key={link.label} href={link.href} className={simpleLinkClass(isActive)}>
            <div className={simpleTitleClass(isActive)}>{link.label}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const n = useTranslations('Navbar');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const { setFormOpen } = useConsultationStore();

  const productsActive = isAnySolutionMenuActive(pathname, productsColumns);
  const servicesActive = isAnySolutionMenuActive(pathname, servicesColumns);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const syncHash = () => {
      setCurrentHash(window.location.hash);
    };

    handleScroll();
    syncHash();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', syncHash);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', syncHash);
    };
  }, []);

  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[60] transition-all duration-500',
        isScrolled
          ? 'py-4 bg-white/70 backdrop-blur-xl border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
          : 'py-8 bg-transparent'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link
            href="/"
            className="relative block w-20 h-20 transition-transform duration-500 hover:scale-105 cursor-pointer"
          >
            <Image
              src="/logos/logo.png"
              alt="COB Logo"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden xl:flex items-center gap-10" aria-label={n('solutions')}>
            {/* Products & Solutions */}
            <div className="relative group py-2">
              <span className={dropdownTriggerClass(productsActive)}>
                {n('productsSolutions')}
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-[20%] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-[70] pointer-events-auto">
                <div className="w-[1000px] bg-white/98 backdrop-blur-2xl border border-slate-100/80 rounded-3xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] grid grid-cols-4 gap-8">
                  {productsColumns.map((column) => (
                    <SolutionColumn key={column.slug} column={column} pathname={pathname} />
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="relative group py-2">
              <span className={dropdownTriggerClass(servicesActive)}>
                {n('services')}
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-[70] pointer-events-auto">
                <div className="w-[800px] bg-white/98 backdrop-blur-2xl border border-slate-100/80 rounded-3xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] grid grid-cols-3 gap-8">
                  {servicesColumns.map((column) => (
                    <SolutionColumn key={column.slug} column={column} pathname={pathname} />
                  ))}
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="relative group py-2">
              <span className={dropdownTriggerClass(false)}>
                {n('industries')}
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-[70] pointer-events-auto">
                <div className="w-[1000px] bg-white/98 backdrop-blur-2xl border border-slate-100/80 rounded-3xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] grid grid-cols-4 gap-8">
                  {industriesMenu.map((group) => (
                    <SimpleColumn
                      key={group.heading}
                      heading={group.heading}
                      links={group.links}
                      pathname={pathname}
                      currentHash={currentHash}
                      highlightActive={false}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="relative group py-2">
              <span className={dropdownTriggerClass(false)}>
                {n('company')}
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-[80%] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-[70] pointer-events-auto">
                <div className="w-[800px] bg-white/98 backdrop-blur-2xl border border-slate-100/80 rounded-3xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] grid grid-cols-3 gap-8">
                  {companyMenu.map((group) => (
                    <SimpleColumn
                      key={group.heading}
                      heading={group.heading}
                      links={group.links}
                      pathname={pathname}
                      currentHash={currentHash}
                      highlightActive
                      onContactClick={() => setFormOpen(true)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="flex items-center gap-5">
          <a
            href={`tel:${COB_PHONE_TEL}`}
            className="flex items-center gap-2 text-[15px] font-bold text-slate-400 hover:text-brand transition-all whitespace-nowrap"
            aria-label={n('phoneAria')}
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden />
            {n('phone')}
          </a>
          <Button
            onClick={() => setFormOpen(true)}
            className="bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white rounded-full px-10 py-7 text-[13px] uppercase tracking-normal font-black transition-all duration-300 shadow-[0_4px_20px_rgba(26,86,219,0.15)] hover:from-[#1b5588] hover:to-[#048fa6] h-auto"
          >
            {n('bookMeeting')}
          </Button>
        </div>
      </div>
    </header>
  );
}
