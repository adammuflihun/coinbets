"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const countries = [
  { code: "US", name: "English", flag: "🇺🇸" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "BR", name: "Português", flag: "🇧🇷" },
  { code: "ES", name: "Español", flag: "🇪🇸" },
  { code: "DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "FR", name: "Français", flag: "🇫🇷" },
  { code: "JP", name: "日本語", flag: "🇯🇵" },
  { code: "KR", name: "한국어", flag: "🇰🇷" },
  { code: "CN", name: "中文", flag: "🇨🇳" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "RU", name: "Русский", flag: "🇷🇺" },
  { code: "TR", name: "Türkçe", flag: "🇹🇷" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰" },
  { code: "HU", name: "Hungary", flag: "🇭🇺" },
  { code: "IS", name: "Iceland", flag: "🇮🇸" },
  { code: "HN", name: "Honduras", flag: "🇭🇳" },
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
        <div className="flex items-center gap-1.5 bg-neutral-100 rounded-lg px-3 py-1.5 hover:bg-neutral-200 transition-colors cursor-pointer">
          <span className="text-base leading-none">{selected.flag}</span>
          <span className="text-sm font-medium text-neutral-900">
            {selected.name}
          </span>
          <ChevronDown className="size-4 text-neutral-500" />
        </div>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[240px] p-0">
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
              <span className="text-lg leading-none">{country.flag}</span>
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
