import { LeadData } from "@/utils/types";
import { url } from "@/utils/validations";


export async function getUnicLeadApi(id: string) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/listUnic/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching lead:", error);
    throw error;
  }
}
export async function getLeadApi() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching leads:", error);
    throw error;
  }
}

export async function deleteLeadApi(id: string) {
  try {
    const token = localStorage.getItem("token");

    await fetch(`${url}/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    throw error;
  }
}

export async function createLeadApi(data: LeadData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar lead");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating lead:", error);
    throw error;
  }
}

export async function editLeadApi(
  id: string,
  { name, email, phone, job_title, birth_date, message }: LeadData
) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        name, 
        email, 
        phone, 
        job_title, 
        birth_date, 
        message 
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar lead");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating lead:", error);
    throw error;
  }
}

