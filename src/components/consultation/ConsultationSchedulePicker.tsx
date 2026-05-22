'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  CONSULTATION_TIME_SLOTS,
  type ConsultationTimeSlot,
  formatTimeSlotLabel,
  getCalendarDays,
  isSelectableConsultationDate,
} from '@/lib/consultation-scheduling';

type ConsultationSchedulePickerProps = {
  selectedDate: Date | null;
  selectedTime: ConsultationTimeSlot | null;
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: ConsultationTimeSlot) => void;
};

export const ConsultationSchedulePicker = ({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: ConsultationSchedulePickerProps) => {
  const f = useTranslations('Hero.Form');
  const locale = useLocale();
  const today = useMemo(() => new Date(), []);

  const [viewDate, setViewDate] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const calendarDays = useMemo(() => getCalendarDays(year, month), [year, month]);

  const monthLabel = new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  }).format(viewDate);

  const weekdayLabels = useMemo(() => {
    const base = new Date(2024, 0, 7);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(d);
    });
  }, [locale]);

  const goToPrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-black text-slate-950 tracking-tight mb-1">
          {f('scheduleTitle')}
        </h3>
        <p className="text-sm font-semibold text-slate-500">{f('scheduleSubtitle')}</p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
        <div className="flex items-center justify-between mb-5">
          <button
            type="button"
            onClick={goToPrevMonth}
            className="p-2 rounded-xl text-slate-500 hover:text-brand hover:bg-white transition-colors cursor-pointer border-0 bg-transparent"
            aria-label={f('prevMonth')}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-black text-slate-900 uppercase tracking-wider">
            {monthLabel}
          </span>
          <button
            type="button"
            onClick={goToNextMonth}
            className="p-2 rounded-xl text-slate-500 hover:text-brand hover:bg-white transition-colors cursor-pointer border-0 bg-transparent"
            aria-label={f('nextMonth')}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdayLabels.map((label) => (
            <div
              key={label}
              className="text-center text-[10px] font-black uppercase tracking-wider text-slate-400 py-1"
            >
              {label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} className="aspect-square" aria-hidden />;
            }

            const selectable = isSelectableConsultationDate(day);
            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;

            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={!selectable}
                onClick={() => onSelectDate(day)}
                className={cn(
                  'aspect-square rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer border-0',
                  selectable && !isSelected && 'text-slate-700 hover:bg-white hover:text-brand',
                  !selectable && 'text-slate-300 cursor-not-allowed',
                  isSelected &&
                    'bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white shadow-md'
                )}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
          {f('timeSlotsLabel')}
        </p>
        {!selectedDate ? (
          <p className="text-sm font-semibold text-slate-400">{f('selectDateFirst')}</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CONSULTATION_TIME_SLOTS.map((slot) => {
              const isSelected = selectedTime === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onSelectTime(slot)}
                  className={cn(
                    'py-3 px-4 rounded-xl text-[12px] font-bold border transition-all duration-300 cursor-pointer',
                    isSelected
                      ? 'bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white border-transparent shadow-lg shadow-cyan-500/15'
                      : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100/50'
                  )}
                >
                  {formatTimeSlotLabel(slot, locale)}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
