import { BrowseCategory } from "@/constants";
import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 mx-auto items-center gap-4 my-4">
      {BrowseCategory.map((item) => (
        <CategoryItem key={item.route} href={item.route} label={item.label} />
      ))}
    </div>
  );
};

export default Category;
