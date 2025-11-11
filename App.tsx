
import React from 'react';
import Header from './components/Header';
import IndicatorGrid from './components/IndicatorGrid';
import { INDICATOR_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <IndicatorGrid indicators={INDICATOR_DATA} />
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Dados de indicadores baseados no IDSC e metas projetadas para 2033.</p>
        <p>&copy; 2024 Projeção de Desenvolvimento Sustentável de Mauá.</p>
      </footer>
    </div>
  );
};

export default App;
