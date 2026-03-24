"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import "flag-icons/css/flag-icons.min.css";

const countries = [
  { code: "us", name: "English" },
  { code: "id", name: "Indonesia" },
  { code: "br", name: "Português" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "jp", name: "日本語" },
  { code: "kr", name: "한국어" },
  { code: "cn", name: "中文" },
  { code: "in", name: "India" },
  { code: "ru", name: "Русский" },
  { code: "tr", name: "Türkçe" },
  { code: "hk", name: "Hong Kong" },
  { code: "hu", name: "Hungary" },
  { code: "is", name: "Iceland" },
  { code: "hn", name: "Honduras" },
];

export function CountrySelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const [search, setSearch] = useState("");

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <div data-name="country-trigger" className="flex items-center gap-1.5 bg-neutral-100 rounded-lg px-3 py-1.5 hover:bg-neutral-200 transition-colors cursor-pointer">
          <span className={`fi fi-${selected.code} fis rounded-full overflow-hidden`} style={{ width: 18, height: 18 }} />
          <span className="text-sm font-medium text-neutral-900">
            {selected.name}
          </span>
          <ChevronDown className="size-4 text-neutral-500" />
        </div>
      </PopoverTrigger>
      <PopoverContent data-name="country-dropdown" align="end" className="w-[240px] p-0">
        <div data-name="country-search" className="p-2 border-b border-neutral-100">
          <p className="text-xs font-medium text-neutral-500 px-2 pb-2">
            Your Country of Residence
          </p>
          <Input
            placeholder="Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 text-sm"
          />
        </div>
        <div data-name="country-list" className="max-h-[280px] overflow-y-auto p-1">
          {filtered.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                setSelected(country);
                setOpen(false);
                setSearch("");
              }}
              className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-neutral-100 transition-colors"
            >
              <span className={`fi fi-${country.code} fis rounded-full overflow-hidden`} style={{ width: 20, height: 20 }} />
              <span className="flex-1 text-left font-medium text-neutral-900">
                {country.name}
              </span>
              {selected.code === country.code && (
                <Check className="size-4 text-blue-500" />
              )}
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="px-2 py-4 text-center text-sm text-neutral-500">
              No country found.
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
