"use client";
import { useState } from "react";

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="space-y-2 mt-6">
      <h2 className="font-medium text-lg">Select Size:</h2>
      <div className="flex gap-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-4 py-2 border rounded-full font-medium 
              ${
                size === selectedSize
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-700"
              }
              hover:border-black transition-all duration-200
            `}
          >
            {size}
          </button>
        ))}
      </div>
      {selectedSize && (
        <p className="text-gray-600">
          Selected size: <strong>{selectedSize}</strong>
        </p>
      )}
    </div>
  );
}
