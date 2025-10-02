import { Button as HeroButton } from "@heroui/react";

interface ButtonProps {
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "default";
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "bordered" | "flat" | "ghost";
  onClick?: () => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  color = "primary",
  size = "md",
  variant = "solid",
  onClick,
  children,
  isDisabled = false,
  isLoading = false,
  type = "button",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  return (
    <HeroButton
      color={color}
      size={size}
      variant={variant}
      onPress={onClick}
      isDisabled={isDisabled}
      isLoading={isLoading}
      type={type}
      fullWidth={fullWidth}
      className={className}
    >
      {children}
    </HeroButton>
  );
}