import { url } from "@/utils/validations";


export async function getUnicProductsApi(id: string) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}
export async function getProductsApi() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function deleteProductApi(id: string) {
  try {
    const token = localStorage.getItem("token");

    await fetch(`${url}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function createProductApi(
  title: string,
  description: string,
  thumbnail: File | null
) {
  try {
    const token = localStorage.getItem("token");

    if (!thumbnail) throw new Error("Selecione uma imagem antes de enviar");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("thumbnail", thumbnail);

    const response = await fetch(`${url}/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao criar produto");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function editProductApi(
  id: string,
  title: string,
  description: string
) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar produto");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function updateProductThumbnailApi(id: string, thumbnail: File) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("thumbnail", thumbnail);

    const response = await fetch(`${url}/products/thumbnail/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar thumbnail");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
