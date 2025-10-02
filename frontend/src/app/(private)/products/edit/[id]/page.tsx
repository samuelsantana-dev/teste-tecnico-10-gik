/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import InputText from "@/components/forms/InputText";
import { editProductApi, getUnicProductsApi, updateProductThumbnailApi } from "@/services/api-products";
import { Loading } from "@/components/ui/Loading";
import { productEditSchema } from "@/utils/validations";
import ProtectedRoute from "@/components/ProtectedRoute";
export default function EditProduct() {
  const router = useRouter();
  const {id}= useParams<{id: string}>()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 const [thumbnail, setThumbnail] = useState<File | null | any>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setError(null);

  const parsed = productEditSchema.safeParse({ title, description });
  if (!parsed.success) {
    setError(parsed.error.issues[0].message);
    return;
  }

  try {
    setLoading(true);

    await editProductApi(id, title, description);

    if (thumbnail) {
      await updateProductThumbnailApi(id, thumbnail);
    }

    router.push("/products");
  } catch (err: any) {
    setError(err.message || "Erro ao editar produto");
  } finally {
    setLoading(false);
  }
}



  useEffect(() => {
    async function fetchProduct(){
        try {
            const responseProduct = await getUnicProductsApi(id);
            setTitle(responseProduct.data.title);
            setDescription(responseProduct.data.description);
            setPreview(responseProduct.data.thumbnail.url);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }

    fetchProduct();
  }, []);

   if (loading) {
      return (
       <Loading />
      );
    }
  return (
    <ProtectedRoute>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Editar um produto
        </h1>

        {error && (
          <p className="mb-3 text-sm text-red-500 text-center">{error}</p>
        )}

        <InputText 
        label="Titulo do produto"
        placeholder="Digite o titulo"
        type="title"
        size="md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <InputText 
        label="Descrição do produto"
        placeholder="Digite a descrição"
        type="description"
        size="md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="thumbnail">Clique aqui para enviar o arquivo</label>
        <input
        className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        type="file"
        id="thumbnail"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files ? e.target.files[0] : null)}
      />

     {preview && (
      <img
        src={thumbnail ? URL.createObjectURL(thumbnail) : preview}
        alt="Preview"
        className="mb-4 rounded-lg"
      />
    )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Editando..." : "Editar produto"}
        </button>
      </form>
    </div>
    </ProtectedRoute>
  );
}
