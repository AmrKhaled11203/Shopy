"use client";

import { ShoppingCart, User as UserIcon, Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { User } from "@supabase/supabase-js";

import SearchBar from "../components/SearchBar";
import LogoutButton from "../components/logout";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
      else setUser(null);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser(); // refresh user on login/logout
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 h-20 border-b border-gray-200 font-sans relative">
      <Link href="/" className="text-3xl font-bold cursor-pointer">
        SHOPY
      </Link>

      <ul className="hidden md:flex gap-8 font-medium cursor-pointer">
        <Link href="/shop">
          <li className="hover:text-gray-500">Shop</li>
        </Link>
        <li className="hover:text-gray-500">On Sale</li>
        <li className="hover:text-gray-500">New Arrivals</li>
        <li className="hover:text-gray-500">Brands</li>
      </ul>

      <div className="hidden md:flex items-center border rounded px-2 py-1 ml-4">
        <SearchBar />
      </div>

      <div className="flex items-center gap-4 text-gray-700">
        <Link href="/cart">
          <ShoppingCart size={24} />
        </Link>

        <div className="relative">
          <UserIcon
            size={24}
            onClick={() => setShowUser((prev) => !prev)}
            className="cursor-pointer"
          />

          {showUser && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-50">
              {user ? (
                <LogoutButton />
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm hover:font-bold"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm hover:font-bold"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center gap-4 py-4 md:hidden z-50 shadow-md">
          <li className="hover:text-gray-500">Shop</li>
          <li className="hover:text-gray-500">On Sale</li>
          <li className="hover:text-gray-500">New Arrivals</li>
          <li className="hover:text-gray-500">Brands</li>
        </ul>
      )}
    </nav>
  );
}
