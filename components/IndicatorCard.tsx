
import React from 'react';
import type { Indicator } from '../types';

interface IndicatorCardProps {
  indicator: Indicator;
}

const formatValue = (value: number, isCurrency: boolean, unit: string): string => {
  const options: Intl.NumberFormatOptions = isCurrency
    ? { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }
    : { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 1 };

  const formattedNumber = new Intl.NumberFormat('en-US', options).format(value);
  
  if (isCurrency) {
    return formattedNumber;
  }
  
  return `${formattedNumber} ${unit}`;
};


const IndicatorCard: React.FC<IndicatorCardProps> = ({ indicator }) => {
  const { name, description, currentValue, targetValue, unit, formatAsCurrency = false, Icon } = indicator;

  const progressPercentage = (currentValue / targetValue) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-bold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-500 mt-1">{description}</p>
          </div>
          <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-baseline">
            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase font-semibold">Hoje</p>
              <p className="text-2xl font-bold text-slate-600">
                {formatValue(currentValue, formatAsCurrency, unit)}
              </p>
            </div>
            <div className="text-3xl text-slate-300 font-light mx-2">&rarr;</div>
            <div className="text-right">
              <p className="text-xs text-teal-600 uppercase font-semibold">Meta 2033</p>
              <p className="text-2xl font-bold text-teal-500">
                {formatValue(targetValue, formatAsCurrency, unit)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 px-6 py-4">
        <p className="text-xs text-slate-500 font-medium mb-1">Progresso para a Meta</p>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div 
            className="bg-teal-500 h-2.5 rounded-full" 
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorCard;
