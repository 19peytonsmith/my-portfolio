// components/IconWrapper.tsx
import React from "react";
import type { LucideIcon } from "lucide-react";

interface IconWrapperProps {
  Icon: LucideIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  Icon,
  className = "md:w-7 md:h-7 w-10 h-10",
  size = 28,
  strokeWidth = 1.5,
}) => {
  return <Icon className={className} size={size} strokeWidth={strokeWidth} />;
};

export default IconWrapper;
