'use client';

import { useMemo, useState } from 'react';
import { submitToGoogleSheets } from '../utils/googleSheets';

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

  const [isEnquiring, setIsEnquiring] = useState(false);
  const [qty, setQty] = useState('1');

  return (
    <div
      key={key}
      className="rounded-[14px] border border-black/[0.06] bg-white shadow-card hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col"
      role="listitem"
    >
      <div className="w-full h-[220px] bg-[#f8f9fa] border-b border-black/[0.04] p-4 flex items-center justify-center">
        <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
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

        <div className="mt-auto">
          {!isEnquiring ? (
            <button
              onClick={() => setIsEnquiring(true)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-[18px] py-[9px] rounded-[6px] text-[13px] font-semibold no-underline hover:bg-secondary w-full transition-colors cursor-pointer border-none"
            >
              <i className="fab fa-whatsapp" /> Enquiry on WhatsApp
            </button>
          ) : (
            <div className="flex items-center justify-between bg-[#f8f9fa] border border-black/[0.08] rounded-[6px] p-1 h-[37px]">
              <div className="flex items-center gap-2 px-2 flex-1">
                <label className="text-[12px] font-bold text-[#5a6875] whitespace-nowrap">Qty:</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={qty}
                  autoFocus
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => setQty(e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full text-[13px] font-bold text-[#12283d] bg-transparent focus:outline-none"
                  placeholder="1"
                />
              </div>
              <div className="flex items-center gap-1 pr-1">
                <button
                  onClick={() => {
                    const finalQty = Math.max(1, parseInt(qty || '1', 10));
                    
                    // Fire-and-forget submission to Google Sheets
                    submitToGoogleSheets({
                      type: 'Product Enquiry',
                      name: 'WhatsApp User', // Name unknown at this point
                      contact: 'Via WhatsApp',
                      productInfo: `${p.name} (Qty: ${finalQty})`,
                      message: 'Clicked WhatsApp Enquiry Button'
                    });

                    const message = `Hello, I am interested in purchasing ${p.name} (Quantity: ${finalQty}). Could you please provide more details regarding pricing and availability? Thank you.`;
                    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
                    setIsEnquiring(false);
                    setQty('1');
                  }}
                  className="bg-[#25D366] text-white px-3 py-1 rounded-[4px] text-[12px] font-bold hover:bg-[#1ebe5b] transition-colors flex items-center gap-1"
                >
                  <i className="fab fa-whatsapp" /> Send
                </button>
                <button
                  onClick={() => setIsEnquiring(false)}
                  className="text-[#5a6875] w-[24px] h-[24px] flex items-center justify-center rounded-full hover:bg-black/[0.05] hover:text-red-500 transition-colors"
                  aria-label="Cancel"
                >
                  <i className="fas fa-times text-[12px]"></i>
                </button>
              </div>
            </div>
          )}
        </div>
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
