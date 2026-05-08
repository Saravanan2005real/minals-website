'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const OPTIONS = [
  { value: 'name_asc', label: 'A - Z (Ascending)' },
  { value: 'price_asc', label: 'Price (Low to High)' },
  { value: 'price_desc', label: 'Price (High to Low)' },
];

export default function SortSelectClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentSort = searchParams.get('sort') || 'name_asc';
  const currentLabel = OPTIONS.find(o => o.value === currentSort)?.label || OPTIONS[0].label;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-3 relative" ref={dropdownRef}>
      <span className="text-[13px] font-bold text-[#0f2f54] whitespace-nowrap">Sort by:</span>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between min-w-[160px] text-[13px] font-bold text-primary bg-[#eef5fa] border border-transparent rounded-[8px] pl-3 pr-3 py-[7px] outline-none cursor-pointer hover:bg-[#e4eff7] hover:border-primary/20 transition-all shadow-sm focus:ring-2 focus:ring-primary/20"
      >
        {currentLabel}
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-[11px] ml-2 text-primary`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-[180px] bg-white border border-[#dde1e7] rounded-[8px] shadow-lg z-50 overflow-hidden py-1">
          {OPTIONS.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`px-4 py-[10px] text-[13px] font-bold cursor-pointer transition-colors ${
                currentSort === option.value
                  ? 'bg-[#eef5fa] text-primary' /* Active: light blue bg, primary text */
                  : 'bg-white text-[#0f2f54] hover:bg-[#eef5fa] hover:text-primary' /* Hover: light blue bg, primary text */
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
