import Link from 'next/link';

type ProductCategory = 'all' | 'cleaning' | 'food';

type Product = {
  name: string;
  category: Exclude<ProductCategory, 'all'>;
  image: string;
  price: string;
};

const PRODUCTS: Product[] = [
  { name: 'Sanitizer',        category: 'cleaning', image: '/products/sanitizer.png',        price: '₹ 120' },
  { name: 'Bleaching Powder', category: 'cleaning', image: '/products/bleaching-powder.png', price: '₹ 85'  },
  { name: 'Grammaxin Powder', category: 'cleaning', image: '/products/grammaxin-powder.png', price: '₹ 95'  },
  { name: 'Toilet Cleaner',   category: 'cleaning', image: '/products/toilet-cleaner.png',   price: '₹ 110' },
  { name: 'Bathroom Cleaner', category: 'cleaning', image: '/products/bathroom-cleaner.png', price: '₹ 130' },
  { name: 'Glass Cleaner',    category: 'cleaning', image: '/products/glass-cleaner.png',    price: '₹ 99'  },
  { name: 'Floor Cleaner',    category: 'cleaning', image: '/products/floor-cleaner.png',    price: '₹ 115' },
  { name: 'Dish Washer',      category: 'cleaning', image: '/products/dish-washer.png',      price: '₹ 145' },
  { name: 'Washing Soda',     category: 'cleaning', image: '/products/washing-soda.png',     price: '₹ 75'  },
  { name: 'Essence Mixes',    category: 'food',     image: '/products/essence-mixes.png',    price: '₹ 60'  },
  { name: 'Kesari Powder',    category: 'food',     image: '/products/kesari-powder.png',    price: '₹ 80'  },
  { name: 'Corn Flour',       category: 'food',     image: '/products/corn-flour.png',       price: '₹ 55'  },
  { name: 'Elachi Powder',    category: 'food',     image: '/products/elachi-powder.png',    price: '₹ 140' },
  { name: 'Baking Powder',    category: 'food',     image: '/products/baking-powder.png',    price: '₹ 70'  },
  { name: 'Rose Water',       category: 'food',     image: '/products/rose-water.png',       price: '₹ 90'  },
  { name: 'Onam Water',       category: 'food',     image: '/products/onam-water.png',       price: '₹ 65'  },
  { name: 'Vinegar',          category: 'food',     image: '/products/vinegar.png',          price: '₹ 50'  },
  { name: 'Caster Oil',       category: 'food',     image: '/products/caster-oil.png',       price: '₹ 175' },
  { name: 'Neem Oil',         category: 'food',     image: '/products/neem-oil.png',         price: '₹ 195' },
];

function categoryLabel(c: ProductCategory) {
  if (c === 'all') return 'All Products';
  if (c === 'cleaning') return 'Cleaning Products';
  return 'Food Products';
}

const filterItems: { cat: ProductCategory; icon: string }[] = [
  { cat: 'all',      icon: 'fas fa-layer-group' },
  { cat: 'cleaning', icon: 'fas fa-spray-can-sparkles' },
  { cat: 'food',     icon: 'fas fa-wheat-awn' },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const raw = params.category;
  const activeCategory: ProductCategory =
    raw === 'cleaning' || raw === 'food' ? raw : 'all';

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* ─── Header ─── */}
      <header className="bg-primary text-white px-[5%] py-[15px] flex justify-between items-center sticky top-0 z-[1000]">
        <a href="/" className="flex items-center gap-[15px] no-underline">
          <img src="/logo.png" alt="Minals Logo" className="h-[70px] drop-shadow-md" />
          <div className="flex flex-col items-center border-l border-white/20 pl-5">
            <h1 className="font-playfair text-[32px] tracking-[5px] m-0 leading-none text-white text-center w-full">MINALS</h1>
            <h2 className="font-inter text-[13.5px] font-medium tracking-[0.2px] mt-[2px] uppercase text-white/90 w-full text-center">RAMAIAH ENTERPRISES</h2>
            <div className="flex items-center gap-2 mt-[2px]">
              <span className="w-[25px] h-px bg-secondary" />
              <span className="text-secondary text-[11px] font-semibold tracking-[1px] uppercase">SINCE 1962</span>
              <span className="w-[25px] h-px bg-secondary" />
            </div>
          </div>
        </a>
        <nav>
          <ul className="flex gap-[30px]">
            <li><a href="/" className="text-white text-[14px] font-medium hover:text-accent">Home</a></li>
            <li><Link href="/our-story" className="text-white text-[14px] font-medium hover:text-accent">Our Story</Link></li>
            <li><Link href="/products" className="text-accent text-[14px] font-medium">Products <i className="fas fa-chevron-down text-[10px]" /></Link></li>
            <li><Link href="/dealers" className="text-white text-[14px] font-medium hover:text-accent">Dealers</Link></li>
            <li><Link href="/contact-us" className="text-white text-[14px] font-medium hover:text-accent">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="flex gap-[15px] items-center">
          <Link href="/enquire-now" className="bg-secondary text-white px-5 py-[10px] rounded-[5px] font-semibold flex items-center gap-[10px] no-underline">
            Enquire Now <i className="fas fa-arrow-right" />
          </Link>
          <a href="#" className="border border-white/50 text-white px-5 py-[10px] rounded-[5px] text-[14px] flex items-center gap-[10px] no-underline">
            <i className="fab fa-whatsapp" /> Quick Enquiry via WhatsApp
          </a>
        </div>
      </header>

      {/* ─── Products Hero ─── */}
      <section className="px-[5%] py-[44px] bg-gradient-to-b from-[#fbfdff] to-white border-b border-[#f0f0f0]">
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-[30px] items-center max-w-[1200px] mx-auto">
          <div>
            <p className="font-inter text-[14px] font-bold text-primary/85 tracking-[0.2px] mb-[10px]">Our Product Categories</p>
            <h2 className="font-playfair text-[42px] text-primary leading-[1.25]">
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
                  href={cat === 'all' ? '/products' : `/products?category=${cat}`}
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
            <div className="flex justify-between items-baseline gap-[14px] px-[2px] pb-[14px] pt-[6px] border-b border-black/[0.06] mb-4">
              <h3 className="text-[20px] text-primary font-playfair">{categoryLabel(activeCategory)}</h3>
              <p className="text-[13px] text-[#5a6875]">
                Showing <strong>{filteredProducts.length}</strong> item{filteredProducts.length === 1 ? '' : 's'}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[18px]" role="list">
              {filteredProducts.map((p) => (
                <div key={`${p.category}:${p.name}`} className="rounded-[14px] border border-black/[0.06] bg-white shadow-card hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col" role="listitem">
                  <div className="w-full h-[220px] bg-[#f8f9fa] border-b border-black/[0.04]">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-[18px] flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-[14px]">
                      <span className={`text-[11px] font-extrabold px-[10px] py-[6px] rounded-full border border-black/[0.06] ${p.category === 'cleaning' ? 'bg-[#eef5fa] text-[#0f2f54]' : 'bg-[#f4f6ef] text-[#294014]'}`}>
                        {p.category === 'cleaning' ? 'Cleaning' : 'Food'}
                      </span>
                      <div className="w-10 h-10 rounded-[12px] inline-flex items-center justify-center text-primary bg-primary/[0.06]" aria-hidden="true">
                        <i className={p.category === 'cleaning' ? 'fas fa-bottle-droplet' : 'fas fa-seedling'} />
                      </div>
                    </div>
                    <div className="text-[15px] font-extrabold text-[#12283d] mb-[6px]">{p.name}</div>
                    <div className="text-[17px] font-bold text-secondary mb-[14px] tracking-[0.3px]">{p.price}</div>
                    <Link href="/enquire-now" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-[18px] py-[9px] rounded-[6px] text-[13px] font-semibold no-underline mt-auto hover:bg-secondary hover:-translate-y-px w-full">
                      Enquiry <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-[5%] py-[40px] flex justify-between items-center text-[14px] text-text-light border-t border-[#eee] bg-white">
        <p>© 2024 Minals (Ramaiah Enterprises). All Rights Reserved.</p>
        <div>
          <a href="#" className="text-text-light no-underline ml-5 hover:text-primary">Privacy Policy</a>
          <span className="ml-5">|</span>
          <a href="#" className="text-text-light no-underline ml-5 hover:text-primary">Terms &amp; Conditions</a>
        </div>
      </footer>
    </main>
  );
}
