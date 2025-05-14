// components/GridList.tsx
import React from "react";

const GridList = ({ items }: { items: string[] }) => {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:w-auto w-max mx-auto justify-center">
      {items.map((item, index) => (
        <li
          key={index}
          className="carrot-bullet-item whitespace-nowrap tracking-wider text-base"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default GridList;
