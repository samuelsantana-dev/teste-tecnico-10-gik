import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  token: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
};

type UserStore = {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const userStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        token: null,
        name: null,
        email: null,
        phone: null,
      },
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: { token: null, name: null, email: null, phone: null },
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
