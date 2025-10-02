"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [router]);

  if (isAuth === null) return null;
  if (!isAuth) return null;

  return <>{children}</>;
}
