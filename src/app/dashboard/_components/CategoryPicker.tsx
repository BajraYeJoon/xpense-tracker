"use client";

import { TransactionType } from "@/lib/types";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import CategoryList from "./CategoryList";
import { PopoverContent } from "@radix-ui/react-popover";
import { Command, CommandInput } from "@/components/ui/command";

interface CategoryPickerProps {
  type: TransactionType;
}

const CategoryPicker = ({ type }: CategoryPickerProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const categoriesQuery = useQuery({
    queryKey: ["categories", type],
    queryFn: () =>
      fetch(`/api/categories?type=${type}`).then((res) => res.json()),
  });

  const selectedCategory = categoriesQuery.data?.find(
    (category: Category) => category.name === value
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          role="combobox"
          aria-expanded={open}
          className="w-48 justify-between"
        >
          {selectedCategory ? (
            <CategoryList category={selectedCategory} />
          ) : (
            "Select a category"
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0">
        <Command
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <CommandInput placeholder="Search Category..." />
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryPicker;
