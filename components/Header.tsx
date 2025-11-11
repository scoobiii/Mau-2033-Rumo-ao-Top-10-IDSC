
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Visão Mauá 2033
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
          Projeção de Mauá no ranking Top 10 do Índice de Desenvolvimento Sustentável das Cidades (IDSC).
        </p>
      </div>
    </header>
  );
};

export default Header;
