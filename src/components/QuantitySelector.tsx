"use client";
import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className="px-3 py-1 text-black font-bold hover:bg-gray-200"
      >
        –
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button
        onClick={increment}
        className="px-3 py-1 text-black font-bold hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
}
