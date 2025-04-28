import React from 'react';
export function Logo() {
  return <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center transform transition-all duration-500 hover:rotate-12 hover:scale-110 shadow-lg">
        <span className="text-white font-bold text-lg animate-pulse">K</span>
      </div>
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        kiruiz
      </span>
    </div>;
}