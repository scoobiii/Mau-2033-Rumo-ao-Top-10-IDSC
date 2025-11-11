
import React from 'react';
import type { Indicator } from '../types';
import IndicatorCard from './IndicatorCard';

interface IndicatorGridProps {
  indicators: Indicator[];
}

const IndicatorGrid: React.FC<IndicatorGridProps> = ({ indicators }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {indicators.map((indicator) => (
        <IndicatorCard key={indicator.id} indicator={indicator} />
      ))}
    </div>
  );
};

export default IndicatorGrid;
