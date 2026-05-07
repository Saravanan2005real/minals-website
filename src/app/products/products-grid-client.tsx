'use client';

import { useMemo, useState } from 'react';

type Product = {
  name: string;
  category: 'sanitizers' | 'cleaning' | 'wellness' | 'food';
  image: string;
  desc: string;
};

const WHATSAPP_PHONE_E164 = '918220012671';

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(message)}`;
}

function ProductCard({ p }: { p: Product }) {
  const key = `${p.category}:${p.name}`;

  // committed numeric quantity — used in the WhatsApp message
  const [qty, setQty] = useState(1);
  // raw string shown in the input while the user is typing
  const [raw, setRaw] = useState('1');

  const message = `Hello sir, I want details about this product: ${p.name} (Qty: ${qty})`;

  return (
    <div
      key={key}
      className="rounded-[14px] border border-black/[0.06] bg-white shadow-card hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col"
      role="listitem"
    >
      <div className="w-full h-[220px] bg-[#f8f9fa] border-b border-black/[0.04]">
        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-[18px] flex flex-col flex-1">
        <div className="flex justify-between items-center mb-[14px]">
          <span
            className={`text-[11px] font-extrabold px-[10px] py-[6px] rounded-full border border-black/[0.06] ${
              p.category === 'sanitizers' ? 'bg-[#e8f4fa] text-[#0d4a70]' :
              p.category === 'cleaning' ? 'bg-[#eef5fa] text-[#0f2f54]' :
              p.category === 'wellness' ? 'bg-[#eef8ed] text-[#1c5c16]' :
              'bg-[#fdf4e6] text-[#7d4808]'
            }`}
          >
             {p.category === 'sanitizers' ? 'Sanitizers' :
              p.category === 'cleaning' ? 'Cleaning' :
              p.category === 'wellness' ? 'Wellness' : 'Food'}
          </span>
          <div className="w-10 h-10 rounded-[12px] inline-flex items-center justify-center text-primary bg-primary/[0.06]" aria-hidden="true">
            <i className={
              p.category === 'sanitizers' ? 'fas fa-hands-wash' :
              p.category === 'cleaning' ? 'fas fa-broom' :
              p.category === 'wellness' ? 'fas fa-leaf' :
              'fas fa-utensils'
            } />
          </div>
        </div>

        <div className="text-[15px] font-extrabold text-[#12283d] mb-[6px]">{p.name}</div>
        <div className="text-[12px] text-[#5a6875] mb-[12px] leading-[1.6] whitespace-pre-line">{p.desc}</div>

        <div className="mt-auto flex items-center justify-end gap-3 mb-[14px]">
          <label className="flex items-center gap-2 text-[12px] font-bold text-[#5a6875]">
            Qty
            <input
              type="text"
              inputMode="numeric"
              value={raw}
              onFocus={(e) => e.target.select()}
              onChange={(e) => {
                // allow only digits (and empty string while backspacing)
                const val = e.target.value.replace(/[^0-9]/g, '');
                setRaw(val);
                const n = parseInt(val, 10);
                if (!isNaN(n) && n >= 1) setQty(n);
              }}
              onBlur={() => {
                // when focus leaves, clamp to at least 1 and clean up display
                const n = parseInt(raw, 10);
                const clamped = isNaN(n) || n < 1 ? 1 : n;
                setQty(clamped);
                setRaw(String(clamped));
              }}
              className="w-[70px] px-2 py-1 border border-black/[0.12] rounded-[6px] text-[12px] font-bold text-[#12283d] focus:outline-none focus:border-secondary text-center"
            />
          </label>
        </div>

        <a
          href={buildWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white px-[18px] py-[9px] rounded-[6px] text-[13px] font-semibold no-underline hover:bg-secondary w-full"
        >
          <i className="fab fa-whatsapp" /> Enquiry on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function ProductsGridClient({ products }: { products: Product[] }) {
  // useMemo keeps the key stable; actual qty state lives inside each ProductCard
  const keys = useMemo(() => products.map((p) => `${p.category}:${p.name}`), [products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]" role="list">
      {products.map((p, i) => (
        <ProductCard key={keys[i]} p={p} />
      ))}
    </div>
  );
}
