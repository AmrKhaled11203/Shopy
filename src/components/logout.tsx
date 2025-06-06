"use client";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.refresh(); // Refresh to reflect logged-out state
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("Failed to log out: " + err.message);
      } else {
        alert("Failed to log out");
      }
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
    >
      Log Out
    </button>
  );
}
