"use client";
import { useState } from "react";

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colors = ["red", "blue", "black"];

  return (
    <div className="space-y-2">
      <h2 className="font-medium text-lg">Select Color:</h2>
      <div className="flex gap-4">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`
              w-8 h-8 rounded-full cursor-pointer border-2 
              ${
                color === selectedColor
                  ? "ring-2 ring-offset-2 ring-gray-800"
                  : "border-gray-300"
              }
            `}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      {selectedColor && (
        <p className="text-gray-600">
          Selected color: <strong>{selectedColor}</strong>
        </p>
      )}
    </div>
  );
}
