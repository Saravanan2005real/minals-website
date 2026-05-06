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
  { name: 'Sanitizer',        category: 'cleaning', image: '/products/sanitizer.png',        price: '₹ 120', desc: 'Kills 99.9% of germs instantly.\nGentle on hands with added moisturizers.' },
  { name: 'Bleaching Powder', category: 'cleaning', image: '/products/bleaching-powder.png', price: '₹ 85',  desc: 'Powerful stain remover and disinfectant.\nIdeal for bathrooms and tough stains.' },
  { name: 'Grammaxin Powder', category: 'cleaning', image: '/products/grammaxin-powder.png', price: '₹ 95',  desc: 'Effective pest and insect control powder.\nLong-lasting protection for homes.' },
  { name: 'Toilet Cleaner',   category: 'cleaning', image: '/products/toilet-cleaner.png',   price: '₹ 110', desc: 'Removes stubborn stains and kills bacteria.\nLeaves a fresh, lingering fragrance.' },
  { name: 'Bathroom Cleaner', category: 'cleaning', image: '/products/bathroom-cleaner.png', price: '₹ 130', desc: 'Cuts through soap scum and hard water stains.\nSafe for all bathroom surfaces.' },
  { name: 'Glass Cleaner',    category: 'cleaning', image: '/products/glass-cleaner.png',    price: '₹ 99',  desc: 'Streak-free shine for windows and mirrors.\nFast-drying formula leaves no residue.' },
  { name: 'Floor Cleaner',    category: 'cleaning', image: '/products/floor-cleaner.png',    price: '₹ 115', desc: 'Deep cleans floors while killing germs.\nInfused with a refreshing floral scent.' },
  { name: 'Dish Washer',      category: 'cleaning', image: '/products/dish-washer.png',      price: '₹ 145', desc: 'Tough on grease but gentle on hands.\nLeaves dishes sparkling clean.' },
  { name: 'Washing Soda',     category: 'cleaning', image: '/products/washing-soda.png',     price: '₹ 75',  desc: 'Heavy-duty cleaner for tough laundry stains.\nBoosts the power of your detergent.' },
  { name: 'Essence Mixes',    category: 'food',     image: '/products/essence-mixes.png',    price: '₹ 60',  desc: 'Premium food flavoring for baking and desserts.\nAuthentic taste in every drop.' },
  { name: 'Kesari Powder',    category: 'food',     image: '/products/kesari-powder.png',    price: '₹ 80',  desc: 'High-quality food coloring for sweet dishes.\nProvides rich color and aroma.' },
  { name: 'Corn Flour',       category: 'food',     image: '/products/corn-flour.png',       price: '₹ 55',  desc: 'Fine texture, perfect for thickening sauces.\n100% pure and unadulterated.' },
  { name: 'Elachi Powder',    category: 'food',     image: '/products/elachi-powder.png',    price: '₹ 140', desc: 'Finely ground cardamom for authentic sweets.\nPacked to retain natural aroma.' },
  { name: 'Baking Powder',    category: 'food',     image: '/products/baking-powder.png',    price: '₹ 70',  desc: 'Ensures perfect rise for cakes and breads.\nDouble-acting formula for best results.' },
  { name: 'Rose Water',       category: 'food',     image: '/products/rose-water.png',       price: '₹ 90',  desc: 'Pure distilled rose water for culinary use.\nAdds a delicate floral note to sweets.' },
  { name: 'Onam Water',       category: 'food',     image: '/products/onam-water.png',       price: '₹ 65',  desc: 'Traditional scented water for special occasions.\nPrepared with high-quality ingredients.' },
  { name: 'Vinegar',          category: 'food',     image: '/products/vinegar.png',          price: '₹ 50',  desc: 'Synthetic white vinegar for cooking and pickling.\nPerfect acidity for all recipes.' },
  { name: 'Caster Oil',       category: 'food',     image: '/products/caster-oil.png',       price: '₹ 175', desc: 'Cold-pressed, pure castor oil.\nMultipurpose use for health and wellness.' },
  { name: 'Neem Oil',         category: 'food',     image: '/products/neem-oil.png',         price: '₹ 195', desc: '100% natural neem oil extract.\nIdeal for organic farming and pest control.' },
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
