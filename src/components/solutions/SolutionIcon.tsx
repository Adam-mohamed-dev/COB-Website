import {
  Activity,
  Building2,
  Dna,
  FlaskConical,
  Heart,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import { isSolutionIconName } from '@/lib/solution-utils';

const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Heart,
  Building2,
  FlaskConical,
  Stethoscope,
  Dna,
};

interface SolutionIconProps {
  name: string;
  className?: string;
}

export const SolutionIcon = ({ name, className = 'w-6 h-6' }: SolutionIconProps) => {
  const Icon = isSolutionIconName(name) ? ICON_MAP[name] : Activity;
  return <Icon className={className} />;
};
