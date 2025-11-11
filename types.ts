
import type React from 'react';

export interface Indicator {
  id: string;
  name: string;
  description: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  formatAsCurrency?: boolean;
  Icon: React.ComponentType<{ className?: string }>;
}
