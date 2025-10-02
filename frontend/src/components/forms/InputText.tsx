import { Input } from "@heroui/react";

interface InputTextProps {
  label?: string;
  placeholder?: string;
  type?: string;
  size?: "sm" | "md" | "lg";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({
  label = "Email",
  placeholder = "Digite seu email",
  type = "text",
  size = "md",
  value,
  onChange,
}: InputTextProps) {
  return (
    <>
    <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <Input
      id={label}
      placeholder={placeholder}
      type={type}
      size={size}
      value={value}
      onChange={onChange}
      className="w-full mb-4"
      classNames={{
          inputWrapper: "bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg",
          input: "focus:outline-none focus:ring-0",
      }}
    />
    </>
  );
}
