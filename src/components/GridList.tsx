// components/GridList.tsx
import React from "react";

interface GridListProps {
  items: string[];
  columns?: number;
}

const GridList: React.FC<GridListProps> = ({ items, columns = 2 }) => {
  const mdColsClass = `md:grid-cols-${columns}`;

  return (
    <ul
      className={`grid grid-cols-2 ${mdColsClass} gap-1 lg:w-auto w-max mx-auto justify-center`}
    >
      {items.map((item, index) => (
        <li key={index} className="carrot-bullet-item tracking-wider">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default GridList;
