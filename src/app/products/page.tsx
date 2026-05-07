import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsGridClient from './products-grid-client';

type ProductCategory = 'all' | 'cleaning' | 'food';

type Product = {
  name: string;
  category: Exclude<ProductCategory, 'all'>;
  image: string;
  price: string;
  desc: string;
};

const PRODUCTS: Product[] = [
  // Cleaning
  { name: 'Ceylon Citronella Sanitizer', category: 'cleaning', image: '/products/ceylon-citronella-sanitizer.png', price: '₹ 150', desc: 'Premium sanitizer infused with natural Ceylon Citronella.\\nKills 99.9% of germs instantly.' },
  { name: 'German Rose Sanitizer', category: 'cleaning', image: '/products/german-rose-sanitizer.png', price: '₹ 150', desc: 'Effective sanitization with a gentle German Rose scent.\\nLeaves hands soft and refreshed.' },
  { name: 'Italian Herbs Sanitizer', category: 'cleaning', image: '/products/italian-herbs-sanitizer.png', price: '₹ 160', desc: 'Refreshing Italian herbs blend for clean, soft hands.\\nLong-lasting protection.' },
  { name: 'London Lavender Sanitizer', category: 'cleaning', image: '/products/london-lavender-sanitizer.png', price: '₹ 155', desc: 'Soothing London Lavender fragrance with powerful protection.\\nGentle on all skin types.' },
  { name: 'Malaysian Sandal Sanitizer', category: 'cleaning', image: '/products/malaysian-sandal-sanitizer.png', price: '₹ 165', desc: 'Exotic Malaysian Sandalwood aroma in a premium sanitizer.\\nProvides complete hygiene.' },
  { name: 'Minals Black Power', category: 'cleaning', image: '/products/minals-black-power.png', price: '₹ 120', desc: 'Ultimate cleaning power for tough stains and surfaces.\\nLeaves areas spotless.' },
  { name: 'Minals Sanitizer Fluid', category: 'cleaning', image: '/products/minals-sanitizer-fluid.png', price: '₹ 95', desc: 'High-quality multi-purpose sanitizing fluid.\\nIdeal for home and office use.' },
  { name: 'Royal Jasmine Sanitizer', category: 'cleaning', image: '/products/royal-jasmine-sanitizer.png', price: '₹ 150', desc: 'Rich and uplifting Royal Jasmine scent.\\nEffectively kills harmful bacteria.' },
  { name: 'Sentol Jasmine Sanitizer', category: 'cleaning', image: '/products/sentol-jasmine-sanitizer.png', price: '₹ 140', desc: 'Reliable germ protection with an elegant Jasmine note.\\nTrusted formula.' },
  { name: 'Sentol Lavender Sanitizer', category: 'cleaning', image: '/products/sentol-lavender-sanitizer.png', price: '₹ 140', desc: 'Relaxing Lavender fragrance infused in our classic formula.\\nPerfect for everyday use.' },
  { name: 'Sentol Lemon Sanitizer', category: 'cleaning', image: '/products/sentol-lemon-sanitizer.png', price: '₹ 135', desc: 'Zesty lemon freshness with maximum germ kill.\\nEliminates odors instantly.' },
  { name: 'Spanish Limon Sanitizer', category: 'cleaning', image: '/products/spanish-limon-sanitizer.png', price: '₹ 155', desc: 'Invigorating Spanish Limon scent for a refreshing feel.\\nPremium germ protection.' },

  // Food & Wellness
  { name: 'Martin Vinegar', category: 'food', image: '/products/martin-vinegar.png', price: '₹ 60', desc: 'Premium quality vinegar for authentic culinary recipes.\\nPerfect acidity.' },
  { name: 'Minals Castor Oil', category: 'food', image: '/products/minals-castor-oil.png', price: '₹ 180', desc: 'Pure, cold-pressed castor oil.\\nMultipurpose use for health and wellness.' },
  { name: 'Minals Neem Oil', category: 'food', image: '/products/minals-neem-oil.png', price: '₹ 190', desc: '100% natural neem oil extract.\\nIdeal for personal care and wellness.' },
  { name: 'Minals Rose Water', category: 'food', image: '/products/minals-rose-water.png', price: '₹ 95', desc: 'Distilled pure rose water for food and personal care.\\nDelicate floral notes.' },
  { name: 'Omum Water', category: 'food', image: '/products/omum-water.png', price: '₹ 85', desc: 'Traditional digestive and refreshing Omum (Ajwain) water.\\nSoothes the stomach.' }
];

function categoryLabel(c: ProductCategory) {
  if (c === 'all') return 'All Products';
  if (c === 'cleaning') return 'Cleaning Products';
  return 'Food Products';
}

const filterItems: { cat: ProductCategory; icon: string }[] = [
  { cat: 'all',      icon: 'fas fa-cubes' },
  { cat: 'cleaning', icon: 'fas fa-pump-soap' },
  { cat: 'food',     icon: 'fas fa-utensils' },
];

const WHATSAPP_PHONE_E164 = '919566002233';

function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_E164}?text=${text}`;
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; sort?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const raw = params.category;
  const activeCategory: ProductCategory =
    raw === 'cleaning' || raw === 'food' ? raw : 'all';
  const sort = params.sort || 'default';

  let filteredProducts =
    activeCategory === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.category === activeCategory);

  if (sort === 'price-asc') {
    filteredProducts.sort((a, b) => Number(a.price.replace(/[^\d]/g, '')) - Number(b.price.replace(/[^\d]/g, '')));
  } else if (sort === 'price-desc') {
    filteredProducts.sort((a, b) => Number(b.price.replace(/[^\d]/g, '')) - Number(a.price.replace(/[^\d]/g, '')));
  }

  const buildUrl = (cat: string, s: string) => {
    const p = new URLSearchParams();
    if (cat !== 'all') p.set('category', cat);
    if (s !== 'default') p.set('sort', s);
    const q = p.toString();
    return q ? `/products?${q}` : `/products`;
  };

  return (
    <main>
      <Header activePage="products" />

      {/* ─── Products Hero ─── */}
      <section className="px-[5%] py-[44px] bg-gradient-to-b from-[#fbfdff] to-white border-b border-[#f0f0f0]">
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-[30px] items-center max-w-[1200px] mx-auto">
          <div>
            <p className="font-inter text-[14px] font-bold text-primary/85 tracking-[0.2px] mb-[10px]">Our Product Categories</p>
            <h2 className="text-[42px] text-primary leading-[1.25]">
              High-performance <span className="text-secondary">solutions</span> for every need
            </h2>
            <p className="mt-[14px] text-[15px] text-text-light max-w-[560px]">
              Browse our complete range of food &amp; cleaning essentials. Filter by category to find exactly what you need.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-full max-w-[520px] rounded-[14px] bg-white border border-black/5 shadow-panel overflow-hidden">
              <img src="/hero.png" alt="" className="w-full h-full block object-cover contrast-105 saturate-105" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Products Section ─── */}
      <section className="px-[5%] pt-[18px] pb-[70px] bg-white" id="products-section">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[280px_1fr] gap-[26px] items-start">

          {/* Filter sidebar */}
          <aside className="products-filter-sticky self-start rounded-[14px] bg-white border border-black/[0.06] shadow-filter overflow-hidden">
            <div className="px-4 py-[14px] bg-gradient-to-r from-[#062e5e] to-primary text-white">
              <span className="font-inter text-[14px] font-bold tracking-[0.2px]">Categories</span>
            </div>
            <div className="flex flex-col" role="tablist" aria-label="Product categories">
              {filterItems.map(({ cat, icon }) => (
                <Link
                  key={cat}
                  href={buildUrl(cat, sort)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`w-full grid grid-cols-[34px_1fr_18px] items-center gap-[10px] px-4 py-3 border-t border-black/[0.06] text-left no-underline text-inherit hover:bg-[#f7fbff] ${activeCategory === cat ? 'bg-[#eef5fa]' : 'bg-white'}`}
                >
                  <span className="w-[34px] h-[34px] rounded-[10px] inline-flex items-center justify-center bg-primary/[0.06] text-primary">
                    <i className={icon} />
                  </span>
                  <span className="text-[14px] font-bold text-[#0f2f54]">{categoryLabel(cat)}</span>
                  <span className="text-primary/55 text-[12px]"><i className="fas fa-chevron-right" /></span>
                </Link>
              ))}
            </div>
          </aside>

          {/* Products grid */}
          <div className="min-w-0">
            {/* Sort / results bar */}
            <div className="flex justify-between items-center bg-white border border-black/[0.07] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] px-5 py-3 mb-5">
              <h3 className="text-[16px] font-bold text-primary">{categoryLabel(activeCategory)}</h3>
              <div className="flex items-center gap-5">
                {/* Sort pill group */}
                <div className="flex items-center gap-1 bg-[#f4f6f9] rounded-[8px] px-2 py-1">
                  <span className="text-[12px] text-[#5a6875] font-semibold pr-2 border-r border-[#dde1e7] mr-1">Sort by</span>
                  {[
                    { label: 'Default',          value: 'default'    },
                    { label: 'Price Low → High', value: 'price-asc'  },
                    { label: 'Price High → Low', value: 'price-desc' },
                  ].map(({ label, value }) => (
                    <Link
                      key={value}
                      href={buildUrl(activeCategory, value)}
                      className={`no-underline text-[12px] px-3 py-[5px] rounded-[6px] font-semibold whitespace-nowrap ${
                        sort === value
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-[#5a6875] hover:bg-white hover:text-primary'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                {/* Count badge */}
                <span className="text-[12px] font-semibold text-[#5a6875] bg-[#f4f6f9] border border-[#dde1e7] rounded-[6px] px-3 py-[5px] whitespace-nowrap">
                  {filteredProducts.length} item{filteredProducts.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>

            <ProductsGridClient products={filteredProducts} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
