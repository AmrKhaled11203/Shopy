"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../lib/store";
import { removeFromCart, updateQuantity } from "../../lib/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
      setLoading(false);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser();
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("./login");
    }
  }, [user, loading, router]);
  if (loading || !user) return null; // Or show a loading spinner

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col md:flex-row gap-8 justify-center mx-40 my-10">
      {/* Cart Items */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl font-bold mb-4">YOUR CART</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="mt-1 font-bold">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: parseInt(e.target.value),
                      })
                    )
                  }
                  className="w-16 px-2 py-1 border rounded-md text-center"
                />
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-1/3 bg-white rounded-xl p-6 shadow space-y-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-red-500">
          <span>Discount (-20%)</span>
          <span>-${discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          Go to Checkout →
        </button>
      </div>
    </div>
  );
};

export default CartPage;
