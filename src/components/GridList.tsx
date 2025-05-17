// components/GridList.tsx
import React from "react";

interface GridListProps {
  items: string[];
  minColumnWidth?: number;
}

const GridList: React.FC<GridListProps> = ({ items, minColumnWidth = 160 }) => {
  return (
    <ul
      style={{
        display: "grid",
        // Responsive grid layout with a minimum column width (minimum of 2 & maximum of 4 columns)
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%/3, max(${minColumnWidth}px, 100%/5)), 1fr))`,
      }}
      className="gap-1 mx-auto justify-center"
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="carrot-bullet-item tracking-wider max-w-full"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default GridList;
