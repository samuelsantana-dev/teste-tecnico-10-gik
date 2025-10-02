"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", products: 4 },
  { month: "Feb", products: 6 },
  { month: "Mar", products: 2 },
  { month: "Apr", products: 9 },
  { month: "May", products: 5 },
  { month: "Jun", products: 7 },
  { month: "Jul", products: 3 },
  { month: "Aug", products: 8 },
  { month: "Sep", products: 6 },
  { month: "Oct", products: 10 },
  { month: "Nov", products: 4 },
  { month: "Dec", products: 11 },
];


export default function metrics() {
  return (
    <ProtectedRoute>
    <div className="w-full h-screen p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Produtos Criados por Mês
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4861eb" />
          <XAxis dataKey="month" stroke="#635bd6" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="products" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </ProtectedRoute>
  );
}
