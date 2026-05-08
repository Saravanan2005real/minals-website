import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsGridClient from './products-grid-client';
import CategoryPanelClient from './category-panel-client';

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
  { name: 'Omum Water', category: 'food', image: '/products/omum-water.png', desc: 'A traditional, highly refreshing Ajwain (Omum) water preparation. Known for its soothing digestive benefits and naturally uplifting flavor profile.' },

  // Premier Cleaning Products
  { name: 'Premier Bleaching Powder', category: 'cleaning', image: '/products/premier-bleaching-powder.png', desc: 'High-quality bleaching powder designed for effective stain removal and surface disinfection.' },
  { name: 'Premier Ant Powder', category: 'cleaning', image: '/products/premier-ant-powder.png', desc: 'A highly effective ant repellent powder ensuring a pest-free and clean environment.' },
  { name: 'Premier Toilet Cleaner', category: 'cleaning', image: '/products/premier-toilet-cleaner.png', desc: 'Powerful toilet cleaner from Premier for thorough hygiene and spotless ceramics.' },
  { name: 'Premier Liquid Soap', category: 'cleaning', image: '/products/premier-liquid-soap.png', desc: 'Multi-purpose liquid soap suitable for a variety of deep cleaning and maintenance tasks.' },
  { name: 'Premier Lemon Floor Cleaner', category: 'cleaning', image: '/products/premier-lemon-floor-cleaner.png', desc: 'Citrus-infused floor cleaner that leaves a lingering lemon fragrance and a spotless shine.' },
  { name: 'Premier Floral Floor Cleaner', category: 'cleaning', image: '/products/premier-floral-floor-cleaner.png', desc: 'Pleasantly scented floral floor cleaner offering superior dirt removal and lasting freshness.' },
  { name: 'Premier Neem Floor Cleaner', category: 'cleaning', image: '/products/premier-neem-floor-cleaner.png', desc: 'Natural neem-based floor cleaner combining traditional antimicrobial properties with powerful cleaning.' },
  { name: 'Premier Bathroom Cleaner', category: 'cleaning', image: '/products/premier-bathroom-cleaner.png', desc: 'A specialized bathroom cleaner that effortlessly removes tough water stains and soap scum.' },
  { name: 'Premier Power Plus Toilet Cleaner', category: 'cleaning', image: '/products/premier-power-plus-toilet-cleaner.png', desc: 'Advanced Power Plus formula for ultimate toilet sanitation and stubborn stain eradication.' },
  { name: 'Premier Dishwash', category: 'cleaning', image: '/products/premier-dishwash.png', desc: 'Premium dishwashing liquid formulated to cut through grease and leave utensils sparkling clean.' },
  { name: 'Premier Super Washing Soda', category: 'cleaning', image: '/products/premier-super-washing-soda.png', desc: 'Household cleaner and laundry booster designed to tackle the most stubborn dirt and stains.' },
  { name: 'Premier Glass Cleaner', category: 'cleaning', image: '/products/premier-glass-cleaner.png', desc: 'Advanced formula glass cleaner that provides a streak-free, sparkling clear finish for windows and mirrors.' },

  // Wellness
  { name: 'Sri Lakshmi Sandal Scented Tablet & Powder', category: 'wellness', image: '/products/sri-lakshmi-sandal-scented-tablet.png', desc: 'Traditional Sandal scented tablets and powder for spiritual, aromatic, and wellness applications.' },
  { name: 'Lion Kesari Colour (Cloth Bag)', category: 'wellness', image: '/products/lion-kesari-cloth-bag.png', desc: 'Premium Lion Kesari Colour elegantly packaged in a traditional cloth bag. Perfect for gifting and holistic wellness applications.' },
  { name: 'Lion Lemon Yellow Colour (Cloth Bag)', category: 'wellness', image: '/products/lion-lemon-yellow-cloth-bag.png', desc: 'Vibrant Lion Lemon Yellow Colour beautifully presented in a traditional cloth bag. Adds a touch of tradition and wellness.' },
  { name: 'Lion Orange Red Colour (Cloth Bag)', category: 'wellness', image: '/products/lion-orange-red-cloth-bag.png', desc: 'Rich Lion Orange Red Colour securely packed in a classic cloth bag. Ideal for traditional ceremonies and personal wellness.' },

  // Lion Food Products
  { name: 'Lion Artificial Flavouring Agents', category: 'food', image: '/products/lion-artificial-flavouring-agents.png', desc: 'A classic collection of high-quality artificial flavouring agents including Vanilla, Rose, and Pine Apple. Perfect for baking and desserts.' },
  { name: 'Lion Soft Drink Concentrates', category: 'food', image: '/products/lion-soft-drink-concentrates.png', desc: 'Delicious synthetic soft drink concentrates in popular flavors like Rose Milk, Grape, Almond, and Pista. Easy to mix and incredibly refreshing.' },
  { name: 'Lion Biryani Flavouring Agent', category: 'food', image: '/products/lion-biryani-flavouring.png', desc: 'A special blend of natural spices formulated as a convenient flavouring agent to bring authentic, aromatic biryani taste to your kitchen.' },
  { name: 'Lion Milk Mix Badam', category: 'food', image: '/products/lion-milk-mix-badam.png', desc: 'A rich, creamy synthetic soft drink concentrate infused with the authentic taste of almonds (Badam). Perfect for a refreshing beverage.' },
  { name: 'Lion Milk Mix Pista Elachi', category: 'food', image: '/products/lion-milk-mix-pista-elachi.png', desc: 'A delightful synthetic soft drink concentrate combining the nutty goodness of pistachio with the aromatic essence of cardamom (Elachi). A true classic.' },
  { name: 'Lion Milk Mix Rose', category: 'food', image: '/products/lion-milk-mix-rose.png', desc: 'A vibrant synthetic soft drink concentrate bursting with the sweet, floral flavor of fresh roses. A delicious and colorful treat.' },
  { name: 'Lion Special Food Colors', category: 'food', image: '/products/lion-food-colors-special.png', desc: 'High-quality special synthetic food colours in large jars for commercial and frequent culinary use.' },
  { name: 'Lion Cardamom Powder', category: 'food', image: '/products/lion-cardamom-powder.png', desc: 'Finely ground, aromatic cardamom powder made from superior quality seeds. Enhances the flavor of desserts and beverages.' },
  { name: 'Lion Pachai Karpooram', category: 'food', image: '/products/lion-pachai-karpooram.png', desc: 'Premium quality edible camphor (Pachai Karpooram) traditionally used to flavor sweets and for spiritual offerings.' },
  { name: 'Lion Corn Flour', category: 'food', image: '/products/lion-corn-flour.png', desc: '100% pure corn flour made from selected seeds. Excellent for thickening soups, sauces, and preparing crispy fried dishes.' },
  { name: 'Lion Baking Powder', category: 'food', image: '/products/lion-baking-powder.png', desc: 'Fine quality baking powder ensuring perfectly risen, fluffy cakes and baked goods. Enjoy the true taste of baking.' }
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

  return (
    <main>
      <Header activePage="products" />

      {/* ─── Refined Products Header ─── */}
      <section className="px-[5%] pt-[30px] lg:pt-[45px] pb-[60px] lg:pb-[80px] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center max-w-[1200px] mx-auto text-center lg:text-left">
          <div className="relative z-10">

            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] text-primary leading-[1.2] mb-6">
              High-performance <span className="text-secondary">solutions</span> for every need
            </h2>
            <p className="text-[16px] text-[#555] max-w-[520px] leading-relaxed">
              Browse our complete range of food &amp; cleaning essentials. Filter by category to find exactly what you need.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px] aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
              <Image 
                src="/hero.png" 
                alt="Products Hero" 
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Products Section ─── */}
      <section className="px-[5%] pt-[18px] pb-[70px] bg-white" id="products-section">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-[20px] items-start">

          {/* Category panel — collapsible sidebar on desktop, bottom sheet on mobile */}
          <CategoryPanelClient activeCategory={activeCategory} />

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

