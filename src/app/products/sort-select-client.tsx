'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SortSelectClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentSort = searchParams.get('sort') || 'name_asc';

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', newSort);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] font-bold text-[#0f2f54] whitespace-nowrap">Sort by:</span>
      <select 
        value={currentSort}
        onChange={handleSortChange}
        className="text-[13px] font-bold text-primary bg-[#eef5fa] border border-transparent rounded-[8px] pl-3 pr-8 py-[7px] outline-none cursor-pointer hover:bg-[#e4eff7] hover:border-primary/20 transition-all shadow-sm focus:ring-2 focus:ring-primary/20 appearance-none"
        style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23004a99%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.6rem top 50%', backgroundSize: '0.65rem auto' }}
      >
        <option value="name_asc">A - Z (Ascending)</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
      </select>
    </div>
  );
}
