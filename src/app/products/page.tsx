import { Suspense } from 'react';
import ProductsClient, { type ProductCategory } from './products-client';

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const raw = searchParams?.category;
  const initialCategory: ProductCategory = raw === 'cleaning' || raw === 'food' ? raw : 'all';

  return (
    <Suspense fallback={null}>
      <ProductsClient initialCategory={initialCategory} />
    </Suspense>
  );
}

