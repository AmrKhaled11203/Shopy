"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  name: string;
  slug: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const router = useRouter();

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return setResults([]);
      const { data } = await supabase
        .from("products")
        .select("name, slug")
        .ilike("name", `%${query}%`);
      setResults(data || []);
      setHighlightedIndex(0);
    };

    const debounce = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounce);
  }, [query, supabase]);

  const handleSelect = (slug: string) => {
    setQuery("");
    setResults([]);
    router.push(`/product/${slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[highlightedIndex]) {
      handleSelect(results[highlightedIndex].slug);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        placeholder="Search products..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <AnimatePresence>
        {results.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-50 mt-1 w-full bg-white shadow-lg border rounded"
          >
            {results.map((product, index) => (
              <li
                key={product.slug}
                onClick={() => handleSelect(product.slug)}
                className={`px-4 py-2 cursor-pointer ${
                  index === highlightedIndex ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                {product.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
