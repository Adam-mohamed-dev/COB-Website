'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, Building2, CheckCircle2, Mail, Trash2, User, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useConsultationStore } from '@/store/useConsultationStore';
import { solutionsData } from '@/lib/solutions-data';
import {
  type ConsultationTimeSlot,
  formatSelectedDateTime,
} from '@/lib/consultation-scheduling';
import { FormStepIndicator } from '@/components/consultation/FormStepIndicator';
import { ConsultationSchedulePicker } from '@/components/consultation/ConsultationSchedulePicker';

const ORG_TYPES = ['clinic', 'lab', 'hospital', 'other'] as const;
type OrgType = (typeof ORG_TYPES)[number];

const TOTAL_STEPS = 2;

type ConsultationBookingFormProps = {
  onClose: () => void;
};

export const ConsultationBookingForm = ({ onClose }: ConsultationBookingFormProps) => {
  const f = useTranslations('Hero.Form');
  const locale = useLocale();
  const { selectedSolutions, removeSolution } = useConsultationStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOrgType, setSelectedOrgType] = useState<OrgType>('clinic');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<ConsultationTimeSlot | null>(null);

  const steps = useMemo(
    () => [
      { id: 1, label: f('stepDetails') },
      { id: 2, label: f('stepSchedule') },
    ],
    [f]
  );

  const orgTypeLabel = (id: OrgType) => {
    const key = `org${id.charAt(0).toUpperCase()}${id.slice(1)}` as
      | 'orgClinic'
      | 'orgLab'
      | 'orgHospital'
      | 'orgOther';
    return f(key);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsComplete(false);
    setSelectedOrgType('clinic');
    setFirstName('');
    setLastName('');
    setOrganization('');
    setEmail('');
    setSelectedDate(null);
    setSelectedTime(null);
  };

  useEffect(() => {
    return () => resetForm();
  }, []);

  const handleContinue = () => {
    setCurrentStep(2);
  };

  const handleConfirm = () => {
    setIsComplete(true);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const scheduledLabel =
    selectedDate && selectedTime
      ? formatSelectedDateTime(selectedDate, selectedTime, locale)
      : '';

  return (
    <div className="relative w-full max-w-[650px] bg-[#fcfdfe]/98 backdrop-blur-3xl h-full shadow-[-25px_0_80px_rgba(0,0,0,0.08)] p-12 lg:p-16 overflow-y-auto animate-slide-in-right border-l border-slate-100 z-[110]">
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-8 right-8 p-3 rounded-full bg-slate-100/80 hover:bg-slate-200/80 hover:rotate-90 transition-all duration-300 group cursor-pointer border-0"
        aria-label={f('close')}
      >
        <X className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
      </button>

      {isComplete ? (
        <div className="pt-16 flex flex-col items-center text-center animate-in fade-in duration-300">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10 flex items-center justify-center mb-8">
            <CheckCircle2 className="w-10 h-10 text-brand" />
          </div>
          <h2 className="text-3xl font-black text-slate-950 tracking-tighter mb-4">
            {f('successTitle')}
          </h2>
          <p className="text-slate-500 text-sm font-semibold leading-relaxed max-w-sm mb-3">
            {f('successMessage')}
          </p>
          <p className="text-brand text-sm font-black mb-10">{scheduledLabel}</p>
          <Button
            type="button"
            onClick={handleClose}
            className="w-full max-w-xs bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black h-14 text-[14px] uppercase tracking-wider rounded-2xl"
          >
            {f('successClose')}
          </Button>
        </div>
      ) : (
        <>
          <header className="mb-8 pt-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-5 leading-[1.05]">
              {f.rich('title', {
                free: (chunks) => (
                  <span className="text-brand bg-gradient-to-r from-[#246fb1] to-[#06b6d4] bg-clip-text text-transparent">
                    {chunks}
                  </span>
                ),
              })}
            </h2>
            <p className="text-slate-500 text-sm font-semibold leading-relaxed border-l-2 border-[#06b6d4] pl-5 py-1">
              {f('subtext')}
            </p>
          </header>

          <FormStepIndicator steps={steps} currentStep={currentStep} />

          {currentStep === 1 && (
            <>
              <div className="mb-10 bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  {f('cartTitle', { count: selectedSolutions.length })}
                  {selectedSolutions.length > 0 && (
                    <span className="text-[10px] font-black text-[#246fb1] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {f('cartPriority')}
                    </span>
                  )}
                </h3>

                {selectedSolutions.length === 0 ? (
                  <p className="text-slate-400 font-semibold text-xs leading-relaxed py-2">
                    {f('cartEmpty')}
                  </p>
                ) : (
                  <div className="space-y-3">
                    {selectedSolutions.map((slug) => {
                      const matched = Object.values(solutionsData).find((s) => s.slug === slug);
                      if (!matched) return null;
                      return (
                        <div
                          key={slug}
                          className="flex items-center justify-between gap-4 bg-white border border-slate-100/80 rounded-xl p-3.5 shadow-sm hover:border-[#06b6d4]/30 transition-all group animate-fade-in"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-[9px] font-black">
                              {matched.suiteNumber}
                            </span>
                            <span className="text-xs font-bold text-slate-800">{matched.title}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeSolution(slug)}
                            className="p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50/50 transition-all cursor-pointer border-0 bg-transparent"
                            title={f('removeSolution')}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <form
                className="space-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleContinue();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                      {f('firstName')}
                    </label>
                    <div className="relative group/input">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover/input:text-[#246fb1] group-focus-within/input:text-[#246fb1] transition-colors" />
                      <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={f('firstNamePlaceholder')}
                        className="bg-slate-50 border border-slate-100 h-14 pl-12 pr-6 rounded-2xl text-slate-950 font-bold placeholder:text-slate-300 text-[14px] focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand/40 focus-visible:bg-white transition-all w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                      {f('lastName')}
                    </label>
                    <div className="relative group/input">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover/input:text-[#246fb1] group-focus-within/input:text-[#246fb1] transition-colors" />
                      <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={f('lastNamePlaceholder')}
                        className="bg-slate-50 border border-slate-100 h-14 pl-12 pr-6 rounded-2xl text-slate-950 font-bold placeholder:text-slate-300 text-[14px] focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand/40 focus-visible:bg-white transition-all w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    {f('organization')}
                  </label>
                  <div className="relative group/input">
                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover/input:text-[#246fb1] group-focus-within/input:text-[#246fb1] transition-colors" />
                    <Input
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder={f('organizationPlaceholder')}
                      className="bg-slate-50 border border-slate-100 h-14 pl-12 pr-6 rounded-2xl text-slate-950 font-bold placeholder:text-slate-300 text-[14px] focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand/40 focus-visible:bg-white transition-all w-full"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    {f('organizationType')}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {ORG_TYPES.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedOrgType(item)}
                        className={`py-3 px-4 rounded-xl text-[12px] font-bold border transition-all duration-300 cursor-pointer ${
                          selectedOrgType === item
                            ? 'bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white border-transparent shadow-lg shadow-cyan-500/15'
                            : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100/50'
                        }`}
                      >
                        {orgTypeLabel(item)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    {f('workEmail')}
                  </label>
                  <div className="relative group/input">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover/input:text-[#246fb1] group-focus-within/input:text-[#246fb1] transition-colors" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={f('emailPlaceholder')}
                      className="bg-slate-50 border border-slate-100 h-14 pl-12 pr-6 rounded-2xl text-slate-950 font-bold placeholder:text-slate-300 text-[14px] focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand/40 focus-visible:bg-white transition-all w-full"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black h-16 text-[14px] uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgba(6,182,212,0.2)] mt-4 hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_12px_35px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {f('submit')}
                </Button>
              </form>
            </>
          )}

          {currentStep === 2 && (
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                handleConfirm();
              }}
            >
              <ConsultationSchedulePicker
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelectDate={(date) => {
                  setSelectedDate(date);
                  setSelectedTime(null);
                }}
                onSelectTime={(time) => {
                  setSelectedTime(time);
                }}
              />

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="sm:flex-1 h-14 rounded-2xl border-slate-200 text-slate-700 font-black uppercase text-[13px] tracking-wider gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {f('back')}
                </Button>
                <Button
                  type="submit"
                  className="sm:flex-[2] bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black h-16 text-[14px] uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgba(6,182,212,0.2)] hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_12px_35px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {f('confirmBooking')}
                </Button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
};
