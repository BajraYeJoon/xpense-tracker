"use client";

import * as React from "react";

import { useMediaQuery } from "../../hooks/use-media-query";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Currencies, Currency } from "@/lib/currency";

export function CurrencySelector() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedOption, setSelectedOption] = React.useState<Currency | null>(
    null
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-fit justify-start">
            {selectedOption ? (
              <>{selectedOption.label}</>
            ) : (
              <>+ Choose your preferred Currency</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <CurrencyOptionList
            setOpen={setOpen}
            setSelectedOption={setSelectedOption}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {selectedOption ? <>{selectedOption.label}</> : <>+ Set Currency</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <CurrencyOptionList
            setOpen={setOpen}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CurrencyOptionList({
  setOpen,
  setSelectedOption,
}: {
  setOpen: (open: boolean) => void;
  setSelectedOption: (status: Currency | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {Currencies.map(({ value, label }: Currency) => (
            <CommandItem
              key={value}
              value={value}
              onSelect={(value) => {
                setSelectedOption(
                  Currencies.find((priority) => priority.value === value) ||
                    null
                );
                setOpen(false);
              }}
            >
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
