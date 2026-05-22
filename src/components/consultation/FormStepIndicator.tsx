'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FormStepConfig = {
  id: number;
  label: string;
};

type FormStepIndicatorProps = {
  steps: FormStepConfig[];
  currentStep: number;
};

export const FormStepIndicator = ({ steps, currentStep }: FormStepIndicatorProps) => (
  <nav aria-label="Booking progress" className="mb-10">
    <ol className="flex items-center gap-0">
      {steps.map((step, index) => {
        const isComplete = currentStep > step.id;
        const isActive = currentStep === step.id;
        const isLast = index === steps.length - 1;

        return (
          <li key={step.id} className={cn('flex items-center', !isLast && 'flex-1')}>
            <div className="flex flex-col items-center gap-2 min-w-[88px]">
              <span
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-black transition-all duration-300',
                  isComplete &&
                    'border-transparent bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white',
                  isActive &&
                    'border-[#06b6d4] bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white shadow-[0_8px_24px_rgba(6,182,212,0.35)] scale-110',
                  !isComplete &&
                    !isActive &&
                    'border-slate-200 bg-white text-slate-400'
                )}
                aria-current={isActive ? 'step' : undefined}
              >
                {isComplete ? <Check className="w-4 h-4" strokeWidth={3} /> : step.id}
              </span>
              <span
                className={cn(
                  'text-[10px] font-black uppercase tracking-wider text-center leading-tight max-w-[100px]',
                  isActive || isComplete ? 'text-brand' : 'text-slate-400'
                )}
              >
                {step.label}
              </span>
            </div>
            {!isLast && (
              <div
                className={cn(
                  'mx-2 h-0.5 flex-1 min-w-[24px] rounded-full transition-colors duration-300',
                  isComplete
                    ? 'bg-gradient-to-r from-[#246fb1] to-[#06b6d4]'
                    : 'bg-slate-200'
                )}
                aria-hidden
              />
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
