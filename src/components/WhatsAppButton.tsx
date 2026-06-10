import { useState } from 'react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/917863871861?text=Hello%20Arvalli%20BrandPack,%20I%20would%20like%20to%20inquire%20about..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center group transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`bg-white text-green-600 font-semibold px-4 py-2 rounded-l-full shadow-lg border border-gray-100 transition-all duration-300 origin-right ${
          isHovered ? 'opacity-100 scale-100 mr-[-10px]' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        WhatsApp Us
      </div>
      <div className="w-14 h-14 bg-[#25d366] rounded-full shadow-lg flex items-center justify-center text-white z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
    </a>
  );
}
