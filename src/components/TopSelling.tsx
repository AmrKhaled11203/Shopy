"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  slug: string;
}

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      const { data, error } = await supabase.rpc("get_random_products", {
        limit_count: 4,
      });

      if (error) {
        console.error("Error fetching random products:", error);
        return;
      }

      setProducts(data || []);
    };

    fetchRandomProducts();
  }, []);

  return (
    <section className="text-center my-10">
      <h2 className="text-4xl font-bold mb-6">Top Selling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center mx-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image_url}
            name={product.name}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
}
