import Link from 'next/link';

type ProductCategory = 'all' | 'cleaning' | 'food';

type Product = {
  name: string;
  category: Exclude<ProductCategory, 'all'>;
  image: string;
};

const PRODUCTS: Product[] = [
  // Cleaning products
  { name: 'Sanitizer', category: 'cleaning', image: '/products/sanitizer.png' },
  { name: 'Bleaching Powder', category: 'cleaning', image: '/products/bleaching-powder.png' },
  { name: 'Grammaxin Powder', category: 'cleaning', image: '/products/grammaxin-powder.png' },
  { name: 'Toilet Cleaner', category: 'cleaning', image: '/products/toilet-cleaner.png' },
  { name: 'Bathroom Cleaner', category: 'cleaning', image: '/products/bathroom-cleaner.png' },
  { name: 'Glass Cleaner', category: 'cleaning', image: '/products/glass-cleaner.png' },
  { name: 'Floor Cleaner', category: 'cleaning', image: '/products/floor-cleaner.png' },
  { name: 'Dish Washer', category: 'cleaning', image: '/products/dish-washer.png' },
  { name: 'Washing Soda', category: 'cleaning', image: '/products/washing-soda.png' },

  // Food products
  { name: 'Essence Mixes', category: 'food', image: '/products/essence-mixes.png' },
  { name: 'Kesari Powder', category: 'food', image: '/products/kesari-powder.png' },
  { name: 'Corn Flour', category: 'food', image: '/products/corn-flour.png' },
  { name: 'Elachi Powder', category: 'food', image: '/products/elachi-powder.png' },
  { name: 'Baking Powder', category: 'food', image: '/products/baking-powder.png' },
  { name: 'Rose Water', category: 'food', image: '/products/rose-water.png' },
  { name: 'Onam Water', category: 'food', image: '/products/onam-water.png' },
  { name: 'Vinegar', category: 'food', image: '/products/vinegar.png' },
  { name: 'Caster Oil', category: 'food', image: '/products/caster-oil.png' },
  { name: 'Neem Oil', category: 'food', image: '/products/neem-oil.png' },
];

function categoryLabel(category: ProductCategory) {
  if (category === 'all') return 'All Products';
  if (category === 'cleaning') return 'Cleaning Products';
  return 'Food Products';
}

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

  const filterItems: { cat: ProductCategory; icon: string }[] = [
    { cat: 'all', icon: 'fas fa-layer-group' },
    { cat: 'cleaning', icon: 'fas fa-spray-can-sparkles' },
    { cat: 'food', icon: 'fas fa-wheat-awn' },
  ];

  return (
    <main>
      <header>
        <a href="/" className="logo-container" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Minals Logo" className="brand-logo-img" />
          <div className="logo-text">
            <h1>MINALS</h1>
            <h2>RAMAIAH ENTERPRISES</h2>
            <div className="since-box">
              <span className="line"></span>
              <span className="since-text">SINCE 1962</span>
              <span className="line"></span>
            </div>
          </div>
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link href="/our-story">Our Story</Link>
            </li>
            <li>
              <Link href="/products" className="active">
                Products <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i>
              </Link>
            </li>
            <li>
              <Link href="/dealers">Dealers</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="header-btns">
          <Link href="/enquire-now" className="btn-enquire">
            Enquire Now <i className="fas fa-arrow-right"></i>
          </Link>
          <a href="#" className="btn-whatsapp">
            <i className="fab fa-whatsapp"></i> Quick Enquiry via WhatsApp
          </a>
        </div>
      </header>

      <section className="products-hero">
        <div className="products-hero-inner">
          <div className="products-hero-copy">
            <p className="products-hero-eyebrow">Our Product Categories</p>
            <h2>
              High-performance <span>solutions</span> for every need
            </h2>
            <p className="products-hero-sub">
              Browse our complete range of food &amp; cleaning essentials. Filter by category to
              find exactly what you need.
            </p>
          </div>

          <div className="products-hero-art" aria-hidden="true">
            <div className="products-hero-art-card">
              <img src="/hero.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="products-section" id="products-section">
        <div className="products-shell">
          <aside className="products-filter">
            <div className="products-filter-head">
              <span className="products-filter-title">Categories</span>
            </div>

            <div className="products-filter-list" role="tablist" aria-label="Product categories">
              {filterItems.map(({ cat, icon }) => (
                <Link
                  key={cat}
                  href={cat === 'all' ? '/products' : `/products?category=${cat}`}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`products-filter-item ${activeCategory === cat ? 'active' : ''}`}
                >
                  <span className="products-filter-icon">
                    <i className={icon}></i>
                  </span>
                  <span className="products-filter-label">{categoryLabel(cat)}</span>
                  <span className="products-filter-chevron">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </Link>
              ))}
            </div>
          </aside>

          <div className="products-main">
            <div className="products-grid-head">
              <h3>{categoryLabel(activeCategory)}</h3>
              <p>
                Showing <strong>{filteredProducts.length}</strong> item
                {filteredProducts.length === 1 ? '' : 's'}
              </p>
            </div>

            <div className="products-grid" role="list">
              {filteredProducts.map((p) => (
                <div key={`${p.category}:${p.name}`} className="product-card" role="listitem">
                  <div className="product-card-image">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="product-card-content">
                    <div className="product-card-top">
                      <div className={`product-pill ${p.category}`}>
                        {p.category === 'cleaning' ? 'Cleaning' : 'Food'}
                      </div>
                      <div className="product-icon" aria-hidden="true">
                        <i
                          className={
                            p.category === 'cleaning' ? 'fas fa-bottle-droplet' : 'fas fa-seedling'
                          }
                        ></i>
                      </div>
                    </div>
                    <div className="product-name">{p.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Minals (Ramaiah Enterprises). All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </footer>
    </main>
  );
}
