"use client";

import { useRouter } from "next/navigation";
import { userStore } from "@/store/authStore";

export default function LogoutButton() {
  const router = useRouter();
  const clearUser = userStore((state) => state.clearUser);

  function handleLogout() {
    clearUser(); 
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
    >
      Sair
    </button>
  );
}
