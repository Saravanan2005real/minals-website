import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsGridClient from './products-grid-client';

type ProductCategory = 'all' | 'sanitizers' | 'cleaning' | 'wellness' | 'food';

type Product = {
  name: string;
  category: Exclude<ProductCategory, 'all'>;
  image: string;
  desc: string;
};

const PRODUCTS: Product[] = [
  // Sanitizers
  { name: 'Ceylon Citronella Sanitizer', category: 'sanitizers', image: '/products/ceylon-citronella-sanitizer.png', desc: 'A premium hand sanitizer infused with the natural, uplifting essence of Ceylon Citronella. Offers fast-acting protection while leaving hands feeling soft and remarkably fresh.' },
  { name: 'German Rose Sanitizer', category: 'sanitizers', image: '/products/german-rose-sanitizer.png', desc: 'Experience superior hand hygiene with the delicate and romantic aroma of German Rose. Formulated to effectively kill germs while providing a soothing, floral touch.' },
  { name: 'Italian Herbs Sanitizer', category: 'sanitizers', image: '/products/italian-herbs-sanitizer.png', desc: 'A unique and refreshing sanitizer enriched with a blend of Italian herbs. Protects against bacteria while leaving a crisp, herbaceous fragrance on your hands.' },
  { name: 'London Lavender Sanitizer', category: 'sanitizers', image: '/products/london-lavender-sanitizer.png', desc: 'Calm your senses with the classic scent of London Lavender. This high-grade sanitizer provides maximum protection and a deeply relaxing aroma for everyday use.' },
  { name: 'Malaysian Sandal Sanitizer', category: 'sanitizers', image: '/products/malaysian-sandal-sanitizer.png', desc: 'Infused with the rich, woody notes of exotic Malaysian Sandalwood. Delivers a luxurious hand sanitization experience with robust germ-killing efficacy.' },
  { name: 'Minals Sanitizer Fluid', category: 'sanitizers', image: '/products/minals-sanitizer-fluid.png', desc: 'Our classic, high-performance sanitizing fluid designed for versatile use. Perfect for both personal hygiene and ensuring safe, germ-free surfaces in any environment.' },
  { name: 'Royal Jasmine Sanitizer', category: 'sanitizers', image: '/products/royal-jasmine-sanitizer.png', desc: 'Indulge in the regal fragrance of Royal Jasmine. A fast-drying formula that eliminates harmful bacteria while leaving an elegant, lingering floral scent.' },
  { name: 'Sentol Jasmine Sanitizer', category: 'sanitizers', image: '/products/sentol-jasmine-sanitizer.png', desc: 'A trusted sanitization formula enhanced with a pure Jasmine note. Provides uncompromising hygiene and an uplifting fragrance for your daily needs.' },
  { name: 'Sentol Lavender Sanitizer', category: 'sanitizers', image: '/products/sentol-lavender-sanitizer.png', desc: 'Combines our reliable germ-fighting power with the timeless relaxation of Lavender. Keeps your hands clean, moisturized, and beautifully scented.' },
  { name: 'Sentol Lemon Sanitizer', category: 'sanitizers', image: '/products/sentol-lemon-sanitizer.png', desc: 'A burst of zesty lemon freshness packed into a powerful hand sanitizer. Instantly eliminates germs and odors, leaving you feeling revitalized and protected.' },
  { name: 'Spanish Limon Sanitizer', category: 'sanitizers', image: '/products/spanish-limon-sanitizer.png', desc: 'Invigorating Spanish Limon scent paired with premium sanitization. Designed to kill 99.9% of germs while delivering an intensely refreshing citrus aroma.' },

  // Cleaning
  { name: 'Minals Black Power', category: 'cleaning', image: '/products/minals-black-power.png', desc: 'The ultimate heavy-duty cleaning solution for your toughest stains and grime. Specially formulated to restore pristine cleanliness to all treated surfaces.' },

  // Wellness
  { name: 'Minals Castor Oil', category: 'wellness', image: '/products/minals-castor-oil.png', desc: 'Pure, cold-pressed castor oil revered for its versatile benefits. Excellent for nourishing hair, deeply moisturizing skin, and supporting overall personal care routines.' },
  { name: 'Minals Neem Oil', category: 'wellness', image: '/products/minals-neem-oil.png', desc: 'A 100% natural, potent neem oil extract packed with botanical goodness. Widely used for its remarkable protective and restorative properties in holistic wellness.' },
  { name: 'Minals Rose Water', category: 'wellness', image: '/products/minals-rose-water.png', desc: 'Finely distilled, pure rose water offering a delicate floral essence. A revitalizing toner for skin care, and a beautiful aromatic addition to select culinary creations.' },

  // Food
  { name: 'Martin Vinegar', category: 'food', image: '/products/martin-vinegar.png', desc: 'High-quality, distinctively crafted vinegar perfect for enhancing your culinary masterpieces. Brings the ideal balance of acidity to dressings, marinades, and pickling.' },
  { name: 'Omum Water', category: 'food', image: '/products/omum-water.png', desc: 'A traditional, highly refreshing Ajwain (Omum) water preparation. Known for its soothing digestive benefits and naturally uplifting flavor profile.' }
];

function categoryLabel(c: ProductCategory) {
  switch(c) {
    case 'all': return 'All Products';
    case 'sanitizers': return 'Sanitizers';
    case 'cleaning': return 'Cleaning Products';
    case 'wellness': return 'Wellness & Care';
    case 'food': return 'Food Products';
  }
}

const filterItems: { cat: ProductCategory; icon: string }[] = [
  { cat: 'all',      icon: 'fas fa-cubes' },
  { cat: 'sanitizers', icon: 'fas fa-hands-wash' },
  { cat: 'cleaning', icon: 'fas fa-broom' },
  { cat: 'wellness', icon: 'fas fa-leaf' },
  { cat: 'food',     icon: 'fas fa-utensils' },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const raw = params.category as ProductCategory;
  const activeCategory: ProductCategory =
    ['sanitizers', 'cleaning', 'wellness', 'food'].includes(raw) ? raw : 'all';

  const filteredProducts =
    activeCategory === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const buildUrl = (cat: string) => {
    const p = new URLSearchParams();
    if (cat !== 'all') p.set('category', cat);
    const q = p.toString();
    return q ? `/products?${q}` : `/products`;
  };

  return (
    <main>
      <Header activePage="products" />

      {/* ─── Products Hero ─── */}
      <section className="px-[5%] py-[44px] bg-gradient-to-b from-[#fbfdff] to-white border-b border-[#f0f0f0]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[30px] items-center max-w-[1200px] mx-auto text-center lg:text-left">
          <div>
            <p className="font-inter text-[14px] font-bold text-primary/85 tracking-[0.2px] mb-[10px]">Our Product Categories</p>
            <h2 className="text-[42px] text-primary leading-[1.25]">
              High-performance <span className="text-secondary">solutions</span> for every need
            </h2>
            <p className="mt-[14px] text-[15px] text-text-light max-w-[560px]">
              Browse our complete range of wellness, food &amp; cleaning essentials. Filter by category to find exactly what you need.
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
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-[26px] items-start">

          {/* Filter sidebar */}
          <aside className="products-filter-sticky self-start rounded-[14px] bg-white border border-black/[0.06] shadow-filter overflow-hidden">
            <div className="px-4 py-[14px] bg-gradient-to-r from-[#062e5e] to-primary text-white">
              <span className="font-inter text-[14px] font-bold tracking-[0.2px]">Categories</span>
            </div>
            <div className="flex flex-col" role="tablist" aria-label="Product categories">
              {filterItems.map(({ cat, icon }) => (
                <Link
                  key={cat}
                  href={buildUrl(cat)}
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
            {/* Results bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-black/[0.07] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] px-5 py-3 mb-5 gap-3 sm:gap-0">
              <h3 className="text-[16px] font-bold text-primary">{categoryLabel(activeCategory)}</h3>
              <div className="flex items-center gap-5">
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
