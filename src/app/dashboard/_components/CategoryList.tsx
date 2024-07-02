import { Category } from "@prisma/client";
import React from "react";

function CategoryList({ category }: { category: Category }) {
  return (
    <div className="flex items-center gap-2">
      <span role="img">{category?.icon}</span>
      <span>{category?.name}</span>
    </div>
  );
}

export default CategoryList;
