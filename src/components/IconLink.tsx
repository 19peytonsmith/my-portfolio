// components/IconLink.tsx
import React from "react";

interface IconLinkProps {
  href: string;
  children: React.ReactNode;
  title?: string;
  ariaLabel?: string;
}

const IconLink: React.FC<IconLinkProps> = ({
  href,
  children,
  title,
  ariaLabel,
}) => {
  const baseClasses =
    "text-secondary hover:text-primary duration-300 ease-in transform transition hover:-translate-y-1";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={ariaLabel}
      className={baseClasses}
    >
      {children}
    </a>
  );
};

export default IconLink;
