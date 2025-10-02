export interface ItemList {
  id: string;
  title: string;
  description: string;
  status: boolean;
  updatedAt: string;
  createdAt: string;
};

export interface AuthResponse {
  token: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED"; 
  emailStatus: "VERIFIED" | "NOT_VERIFIED"; 
  platformRole: "USER" | "ADMIN" | "MODERATOR"; 
  createdAt: string; 
  updatedAt: string; 
  street: string | null;
  number: string | null;
  complement: string | null;
  district: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zip: string | null;
  renewalsNumber: number;
  avatar: Avatar[];
  phone: Phone;
}

export interface Avatar {
  id: string;
  url: string;
}

export interface Phone {
  country: string;
  ddd: string;
  number: string;
}

export interface AuthStore {
  user: User | null;
  phone: Phone | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
}