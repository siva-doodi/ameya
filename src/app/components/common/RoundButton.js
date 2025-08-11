'use client';

export default function RoundButton({ 
  text, 
  className = '', 
  onClick 
}) {
  return (
    <button 
      className="cursor-pointer bg-primary-text hover:bg-[#a21c4b] text-white px-6 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105" 
      onClick={onClick}
    >
      {text}
    </button>
  );
}
