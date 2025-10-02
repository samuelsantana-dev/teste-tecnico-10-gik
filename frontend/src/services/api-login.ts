import { url } from "@/utils/validations";

export async function registerUser(user: {
  email: string;
  password: string;
}) {
  try {
    console.log("📤 Fazendo request para:", `${url}/auth/register`);
    const response = await fetch(`${url}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

     if (!response.ok) {
      let errorMessage = "Credenciais inválidas";
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        errorMessage = `Erro ${response.status}: ${response.statusText}`;
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
      if (!data.token) {
      throw new Error("Token não recebido do servidor");
    }

     localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function login(email: string, password: string) {
  try {
    
    const response = await fetch(`${url}/auth/login`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      let errorMessage = "Credenciais inválidas";
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        errorMessage = `Erro ${response.status}: ${response.statusText}`;
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (!data.token) {
      throw new Error("Token não recebido do servidor");
    }
    
    localStorage.setItem("token", data.token);
    
    return data;
    
  } catch (error) {
    console.error("💥 Erro completo no login:", error);
    throw error;
  }
}
