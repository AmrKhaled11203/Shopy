"use client";
import Link from "next/link";

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2">
      {pages.map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`px-4 py-2 border rounded ${
            currentPage === page ? "bg-black text-white" : "bg-white"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
