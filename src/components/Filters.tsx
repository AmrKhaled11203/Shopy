// components/Filters.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", e.target.value);
    router.push("?" + params.toString());
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("maxPrice", e.target.value);
    router.push("?" + params.toString());
  };

  return (
    <div className="space-y-6 w-full max-w-xs p-4 border rounded-md">
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <select
          onChange={handleCategoryChange}
          defaultValue={searchParams.get("category") || ""}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Max Price: {searchParams.get("maxPrice") || 100}
        </h3>
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          defaultValue={searchParams.get("maxPrice") || 100}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>
    </div>
  );
}
