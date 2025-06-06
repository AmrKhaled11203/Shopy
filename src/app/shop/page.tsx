import ProductCard from "@/components/ProductCard";
import { Pagination } from "@/components/Pagination";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Filters from "@/components/Filters";

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  slug: string;
}

const ITEMS_PER_PAGE = 9;

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const page = Number(searchParams?.page) || 1;
  const from = (page - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  const supabase = createServerComponentClient({ cookies });

  const category = searchParams?.category;
  const maxPrice = searchParams?.maxPrice;

  let query = supabase.from("products").select("*", { count: "exact" });

  if (category) {
    query = query.eq("category", category);
  }

  if (maxPrice) {
    query = query.lte("price", Number(maxPrice));
  }

  const { data: products, count } = await query.range(from, to);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
      <div className="lg:col-span-1">
        <Filters />
      </div>

      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product: Product) => (
          <ProductCard
            key={product.id}
            image={product.image_url}
            name={product.name}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
      <div className="md:col-span-4 mt-6  flex justify-center">
        <Pagination
          currentPage={page}
          totalPages={Math.ceil((count || 0) / ITEMS_PER_PAGE)}
        />
      </div>
    </div>
  );
}
