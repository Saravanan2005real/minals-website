import { Suspense } from 'react';
import ProductsClient, { type ProductCategory } from './products-client';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const raw = params.category;
  const initialCategory: ProductCategory = raw === 'cleaning' || raw === 'food' ? raw : 'all';

  return (
    <Suspense fallback={null}>
      <ProductsClient initialCategory={initialCategory} />
    </Suspense>
  );
}

