export const CONSULTATION_TIME_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
] as const;

export type ConsultationTimeSlot = (typeof CONSULTATION_TIME_SLOTS)[number];

export const isWeekday = (date: Date): boolean => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

export const isSelectableConsultationDate = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const candidate = new Date(date);
  candidate.setHours(0, 0, 0, 0);
  return candidate >= today && isWeekday(candidate);
};

export const getCalendarDays = (year: number, month: number): (Date | null)[] => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const leadingEmpty = firstDay.getDay();
  const days: (Date | null)[] = Array.from({ length: leadingEmpty }, () => null);

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    days.push(new Date(year, month, day));
  }

  return days;
};

export const formatTimeSlotLabel = (slot: string, locale: string): string => {
  const [hours, minutes] = slot.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(date);
};

export const formatSelectedDateTime = (
  date: Date,
  timeSlot: string,
  locale: string
): string => {
  const [hours, minutes] = timeSlot.split(':').map(Number);
  const scheduled = new Date(date);
  scheduled.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(scheduled);
};
