// components/Indicators.tsx
"use client";

interface IndicatorsProps<T> {
  items: T[];
  currentIndex: number;
  onSelect: (index: number) => void;
  activeColorClass?: string;
  inactiveColorClass?: string;
}

export default function Indicators<T>({
  items,
  currentIndex,
  onSelect,
  activeColorClass = "bg-primary w-6",
  inactiveColorClass = "bg-gray-300",
}: IndicatorsProps<T>) {
  return (
    <div
      className={`
        flex justify-center mt-6 gap-2
        md:fixed md:bottom-6 md:left-1/2 md:-translate-x-1/2
      `}
    >
      {items.map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`h-4 w-4 rounded-full transition-all duration-300 ${
            i === currentIndex ? activeColorClass : inactiveColorClass
          }`}
        />
      ))}
    </div>
  );
}
