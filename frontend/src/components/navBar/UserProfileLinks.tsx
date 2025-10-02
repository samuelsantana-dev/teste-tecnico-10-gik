"use client";

interface UserProfileLinksProps {
  href: string;
  text: string;
}

export default function UserProfileLinks({ href, text }: UserProfileLinksProps) {
  return (
    <a
      href={href}                 
      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
