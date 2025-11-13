import React from 'react';

export const LoadingDots: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="h-3 w-3 animate-bounce rounded-full [animation-delay:-0.3s]" style={{ backgroundColor: '#A3B18A' }}></div>
      <div className="h-3 w-3 animate-bounce rounded-full [animation-delay:-0.15s]" style={{ backgroundColor: '#A3B18A' }}></div>
      <div className="h-3 w-3 animate-bounce rounded-full" style={{ backgroundColor: '#A3B18A' }}></div>
    </div>
  );
};
