// components/DarkBox.tsx
import { ReactNode } from "react";

type DarkBoxProps = {
  children: ReactNode;
  className?: string;
};

export default function DarkBox({ children, className = "" }: DarkBoxProps) {
  return (
    <div
      className={`p-4 rounded-lg bg-[var(--box-background)] text-[var(--box-text)] ${className}`}
    >
      {children}
    </div>
  );
}
