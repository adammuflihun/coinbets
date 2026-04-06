"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  Check,
  Lock,
  ImageIcon,
  Upload,
  X,
  FileText,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { casinoReviews } from "@/data/casino-reviews";
import "flag-icons/css/flag-icons.min.css";

const currencies = [
  { code: "us", symbol: "USD", name: "US Dollar" },
  { code: "eu", symbol: "EUR", name: "Euro" },
  { code: "gb", symbol: "GBP", name: "British Pound" },
  { code: "jp", symbol: "JPY", name: "Japanese Yen" },
  { code: "au", symbol: "AUD", name: "Australian Dollar" },
  { code: "ca", symbol: "CAD", name: "Canadian Dollar" },
  { code: "ch", symbol: "CHF", name: "Swiss Franc" },
  { code: "cn", symbol: "CNY", name: "Chinese Yuan" },
  { code: "in", symbol: "INR", name: "Indian Rupee" },
  { code: "br", symbol: "BRL", name: "Brazilian Real" },
  { code: "kr", symbol: "KRW", name: "Korean Won" },
  { code: "tr", symbol: "TRY", name: "Turkish Lira" },
];

const countries = [
  { code: "mt", name: "Malta" },
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "es", name: "Spain" },
  { code: "it", name: "Italy" },
  { code: "nl", name: "Netherlands" },
  { code: "au", name: "Australia" },
  { code: "ca", name: "Canada" },
  { code: "br", name: "Brazil" },
  { code: "jp", name: "Japan" },
  { code: "kr", name: "South Korea" },
  { code: "in", name: "India" },
  { code: "ru", name: "Russia" },
  { code: "tr", name: "Turkey" },
  { code: "id", name: "Indonesia" },
  { code: "se", name: "Sweden" },
  { code: "no", name: "Norway" },
  { code: "fi", name: "Finland" },
];

/* Material Design icon paths (filled, 24x24 viewBox) */
function MIcon({ d }: { d: string }) {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d={d} />
    </svg>
  );
}

const TOOLBAR_ACTIONS = [
  { path: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z", command: "bold", label: "Bold" },
  { path: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z", command: "italic", label: "Italic" },
  { path: "M5 4v3h5.5v12h3V7H19V4z", command: "formatBlock", arg: "h1", label: "Heading 1" },
  { path: "M5 4v3h5.5v12h3V7H19V4z", command: "formatBlock", arg: "h2", label: "Heading 2" },
  { path: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z", command: "formatBlock", arg: "blockquote", label: "Quote" },
  { path: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z", command: "createLink", label: "Link" },
  { path: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z", command: "insertImage", label: "Image" },
  { path: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z", command: "insertUnorderedList", label: "Bullet list" },
  { path: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z", command: "insertOrderedList", label: "Numbered list" },
];

export function SubmitComplaintForm() {
  const [formData, setFormData] = useState({
    disputedAmount: "",
    complaintTitle: "",
    fullName: "",
    username: "",
    email: "",
  });

  const [casinoSearch, setCasinoSearch] = useState("");
  const [casinoOpen, setCasinoOpen] = useState(false);
  const [selectedCasino, setSelectedCasino] = useState<string | null>(null);

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currencySearch, setCurrencySearch] = useState("");

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const [wordCount, setWordCount] = useState(0);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const editorRef = useRef<HTMLDivElement>(null);

  const filteredCasinos = casinoReviews.filter((c) =>
    c.name.toLowerCase().includes(casinoSearch.toLowerCase())
  );

  const filteredCurrencies = currencies.filter(
    (c) =>
      c.name.toLowerCase().includes(currencySearch.toLowerCase()) ||
      c.symbol.toLowerCase().includes(currencySearch.toLowerCase())
  );

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleEditorInput = useCallback(() => {
    if (editorRef.current) {
      const text = editorRef.current.innerText || "";
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      setWordCount(words);
    }
  }, []);

  function execToolbarCommand(command: string, arg?: string) {
    if (command === "createLink") {
      const url = prompt("Enter URL:");
      if (url) document.execCommand(command, false, url);
    } else if (command === "insertImage") {
      const url = prompt("Enter image URL:");
      if (url) document.execCommand(command, false, url);
    } else if (arg) {
      document.execCommand(command, false, arg);
    } else {
      document.execCommand(command, false);
    }
    editorRef.current?.focus();
  }

  return (
    <div data-name="submit-complaint-form-section" className="site-container">
      <div
        data-name="submit-complaint-form-wrapper"
        className="mx-auto flex max-w-[720px] flex-col gap-6"
      >
        {/* Title */}
        <h2
          data-name="form-title"
          className="text-center text-[34px] font-bold text-[#060d17]"
        >
          Submit Your Complaint
        </h2>

        {/* Form card */}
        <div
          data-name="form-card"
          className="flex flex-col gap-5 rounded-lg border border-[#e2e2e2] bg-white p-5 sm:p-6"
        >
          <form
            data-name="complaint-form"
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Search Casino */}
            <div data-name="field-search-casino" className="flex flex-col gap-3">
              <div
                data-name="field-header"
                className="flex items-center justify-between"
              >
                <Label className="text-xl font-bold text-[#060d17]">
                  Search Casino
                </Label>
              </div>
              <div
                data-name="search-casino-input"
                className="relative flex items-center rounded-lg border border-[#d1d5db] bg-white"
              >
                {selectedCasino ? (
                  <div
                    data-name="selected-casino-logo"
                    className="ml-3 flex size-8 shrink-0 items-center justify-center rounded bg-[#060d17]"
                  >
                    <Image
                      src={
                        casinoReviews.find((c) => c.name === selectedCasino)
                          ?.logo || ""
                      }
                      alt={selectedCasino}
                      width={24}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <Search className="ml-3 size-5 shrink-0 text-neutral-400" />
                )}
                <Input
                  placeholder="Search Casino"
                  value={casinoSearch}
                  onChange={(e) => {
                    setCasinoSearch(e.target.value);
                    setSelectedCasino(null);
                  }}
                  className="h-[52px] border-0 bg-transparent text-base ring-0 focus-visible:border-0 focus-visible:ring-0 placeholder:text-[#1c1c1c]/60"
                />
              </div>
              {/* Inline search results */}
              {casinoSearch.length > 0 && !selectedCasino && (
                <div
                  data-name="casino-results"
                  className="max-h-[280px] overflow-y-auto rounded-lg border border-neutral-200 bg-white p-1"
                >
                  {filteredCasinos.length === 0 ? (
                    <p
                      data-name="casino-empty"
                      className="px-3 py-4 text-center text-sm text-neutral-500"
                    >
                      No casinos found
                    </p>
                  ) : (
                    filteredCasinos.map((casino) => (
                      <button
                        key={casino.slug}
                        type="button"
                        onClick={() => {
                          setSelectedCasino(casino.name);
                          setCasinoSearch(casino.name);
                        }}
                        className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-neutral-100"
                      >
                        <div
                          data-name="casino-logo"
                          className="flex size-8 shrink-0 items-center justify-center rounded bg-[#060d17]"
                        >
                          <Image
                            src={casino.logo}
                            alt={casino.name}
                            width={24}
                            height={16}
                            className="object-contain"
                          />
                        </div>
                        <span className="flex-1 text-left font-medium text-neutral-900">
                          {casino.name}
                        </span>
                        {selectedCasino === casino.name && (
                          <Check className="size-4 text-blue-500" />
                        )}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Disputed Amount */}
            <div
              data-name="field-disputed-amount"
              className="flex flex-col gap-3"
            >
              <div
                data-name="field-header"
                className="flex items-center justify-between"
              >
                <Label className="text-xl font-bold text-[#060d17]">
                  Disputed Amount
                </Label>
              </div>
              <div
                data-name="disputed-amount-input"
                className="relative flex items-center rounded-lg border border-[#d1d5db] bg-white"
              >
                <Input
                  name="disputedAmount"
                  inputMode="numeric"
                  placeholder={`${selectedCurrency.symbol} 0`}
                  value={formData.disputedAmount}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    if (raw === "") {
                      setFormData((prev) => ({ ...prev, disputedAmount: "" }));
                      return;
                    }
                    const num = parseInt(raw, 10);
                    const formatted = new Intl.NumberFormat("en-US").format(num);
                    setFormData((prev) => ({
                      ...prev,
                      disputedAmount: `${selectedCurrency.symbol} ${formatted}`,
                    }));
                  }}
                  className="h-[52px] border-0 bg-transparent text-base ring-0 focus-visible:border-0 focus-visible:ring-0 placeholder:text-[#1c1c1c]/60"
                />
                <Popover open={currencyOpen} onOpenChange={setCurrencyOpen}>
                  <PopoverTrigger
                    data-name="currency-selector"
                    className="mr-3 flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-sm text-[#1c1c1c]/60 transition-colors hover:bg-neutral-100"
                  >
                    <span>Currency</span>
                    <span
                      className={`fi fi-${selectedCurrency.code} fis overflow-hidden rounded-full`}
                      style={{ width: 20, height: 20 }}
                    />
                    <ChevronDown className="size-4 text-neutral-400" />
                  </PopoverTrigger>
                  <PopoverContent
                    data-name="currency-dropdown"
                    align="end"
                    className="w-[var(--radix-popover-trigger-width)] min-w-[260px] p-0"
                  >
                    <div
                      data-name="currency-search"
                      className="border-b border-neutral-100 p-2"
                    >
                      <Input
                        placeholder="Search currency..."
                        value={currencySearch}
                        onChange={(e) => setCurrencySearch(e.target.value)}
                        className="h-8 text-sm"
                      />
                    </div>
                    <div
                      data-name="currency-list"
                      className="max-h-[280px] overflow-y-auto p-1"
                    >
                      {filteredCurrencies.map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setCurrencyOpen(false);
                            setCurrencySearch("");
                          }}
                          className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors hover:bg-neutral-100"
                        >
                          <span
                            className={`fi fi-${currency.code} fis overflow-hidden rounded-full`}
                            style={{ width: 22, height: 22 }}
                          />
                          <span className="flex-1 text-left font-medium text-neutral-900">
                            {currency.symbol}
                          </span>
                          <span className="text-neutral-500">
                            {currency.name}
                          </span>
                          {selectedCurrency.code === currency.code && (
                            <Check className="size-4 text-blue-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Where do you Live */}
            <div data-name="field-location" className="flex flex-col gap-3">
              <div
                data-name="field-header"
                className="flex items-center justify-between"
              >
                <Label className="text-xl font-bold text-[#060d17]">
                  Where do you Live
                </Label>
              </div>
              <div
                data-name="location-input"
                className="relative flex items-center gap-2.5 rounded-lg border border-[#d1d5db] bg-white px-3"
              >
                <span
                  className={`fi fi-${selectedCountry.code} fis shrink-0 overflow-hidden rounded-full`}
                  style={{ width: 22, height: 22 }}
                />
                <Input
                  placeholder="Search country"
                  value={countrySearch || selectedCountry.name}
                  onChange={(e) => {
                    setCountrySearch(e.target.value);
                    setCountryOpen(true);
                  }}
                  onFocus={() => {
                    setCountrySearch("");
                    setCountryOpen(true);
                  }}
                  className="h-[52px] border-0 bg-transparent text-base ring-0 focus-visible:border-0 focus-visible:ring-0 placeholder:text-[#1c1c1c]/60"
                />
                <ChevronDown className="size-5 shrink-0 text-neutral-400" />
              </div>
              {/* Inline country results */}
              {countryOpen && (
                <div
                  data-name="country-results"
                  className="max-h-[280px] overflow-y-auto rounded-lg border border-neutral-200 bg-white p-1"
                >
                  {filteredCountries.length === 0 ? (
                    <p
                      data-name="country-empty"
                      className="px-3 py-4 text-center text-sm text-neutral-500"
                    >
                      No countries found
                    </p>
                  ) : (
                    filteredCountries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country);
                          setCountryOpen(false);
                          setCountrySearch("");
                        }}
                        className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-neutral-100"
                      >
                        <span
                          className={`fi fi-${country.code} fis overflow-hidden rounded-full`}
                          style={{ width: 22, height: 22 }}
                        />
                        <span className="flex-1 text-left font-medium text-neutral-900">
                          {country.name}
                        </span>
                        {selectedCountry.code === country.code && (
                          <Check className="size-4 text-blue-500" />
                        )}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Complaint Title */}
            <div
              data-name="field-complaint-title"
              className="flex flex-col gap-3"
            >
              <div
                data-name="field-header"
                className="flex items-center justify-between"
              >
                <Label className="text-xl font-bold text-[#060d17]">
                  Complaint Title
                </Label>
              </div>
              <Input
                name="complaintTitle"
                placeholder="Provide a one-sentence title that summarizes your complaint."
                value={formData.complaintTitle}
                onChange={handleChange}
                className="h-[52px] rounded-lg border border-[#d1d5db] bg-white text-base placeholder:text-[#1c1c1c]/60"
              />
            </div>

            {/* Describe your problem — Rich text editor */}
            <div
              data-name="field-description"
              className="flex flex-col gap-3"
            >
              <div
                data-name="field-header"
                className="flex items-center justify-between"
              >
                <Label className="text-xl font-bold text-[#060d17]">
                  Describe your problem*
                </Label>
                <span className="text-sm text-[#1c1c1c]/60">
                  {wordCount}/10 words minimum
                </span>
              </div>
              <div
                data-name="description-editor"
                className="flex flex-col overflow-hidden rounded-lg border border-[#d1d5db] bg-white"
              >
                {/* Toolbar */}
                <div
                  data-name="editor-toolbar"
                  className="flex items-center gap-1 border-b border-[#e2e2e2] px-3 py-2"
                >
                  {TOOLBAR_ACTIONS.map((action) => (
                    <button
                      key={action.command + (action.arg || "")}
                      type="button"
                      title={action.label}
                      data-name="toolbar-btn"
                      onClick={() =>
                        execToolbarCommand(action.command, action.arg)
                      }
                      className="rounded p-1.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                    >
                      <MIcon d={action.path} />
                    </button>
                  ))}
                </div>
                {/* Editable area */}
                <div
                  ref={editorRef}
                  data-name="editor-content"
                  contentEditable
                  role="textbox"
                  aria-multiline="true"
                  onInput={handleEditorInput}
                  className="min-h-[400px] px-3 py-3 text-base leading-relaxed outline-none empty:before:text-[#1c1c1c]/60 empty:before:content-['State_accurate_facts_and_be_objective'] [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-bold [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6"
                />
              </div>
              <p
                data-name="description-hint"
                className="text-sm text-[#1c1c1c]/60"
              >
                Don&apos;t use explicit language and insults
              </p>
            </div>

            {/* Divider */}
            <div data-name="divider" className="h-px bg-[#e2e2e2]" />

            {/* Private Information */}
            <div
              data-name="private-info-section"
              className="flex items-start gap-2"
            >
              <Lock className="mt-0.5 size-5 shrink-0 text-[#060d17]" />
              <div
                data-name="private-info-text"
                className="flex flex-col gap-1"
              >
                <span className="text-xl font-bold text-[#060d17]">
                  Private Information
                </span>
                <p className="text-sm text-[#1c1c1c]/60">
                  This information will help us when resolving the complaint with
                  the casino. It will not be published on our website.
                </p>
              </div>
            </div>

            {/* Full Name + Username */}
            <div
              data-name="field-row-name-username"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <div
                data-name="field-full-name"
                className="flex flex-col gap-4"
              >
                <Label className="text-base font-medium text-[#060d17]">
                  Your Full Name
                </Label>
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-[56px] rounded-lg border border-[#b0b0b0] bg-[#f9f9f9] px-4 text-base placeholder:text-[#060d17]"
                />
              </div>
              <div
                data-name="field-username"
                className="flex flex-col gap-4"
              >
                <Label className="text-base font-medium text-[#060d17]">
                  Username used in Casino
                </Label>
                <Input
                  name="username"
                  placeholder="@username"
                  value={formData.username}
                  onChange={handleChange}
                  className="h-[56px] rounded-lg border border-[#b0b0b0] bg-[#f9f9f9] px-4 text-base placeholder:text-[#060d17]"
                />
              </div>
            </div>

            {/* Email */}
            <div data-name="field-email" className="flex flex-col gap-4 py-4">
              <Label className="text-base font-medium text-[#060d17]">
                Your email address used in casino
              </Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="h-[56px] rounded-lg border border-[#b0b0b0] bg-[#f9f9f9] px-4 text-base"
              />
            </div>

            {/* Upload Attachments */}
            <div
              data-name="field-attachments"
              className="flex flex-col gap-3"
            >
              <div
                data-name="attachments-header"
                className="flex items-center gap-3"
              >
                <ImageIcon className="size-5 text-[#060d17]" />
                <span className="text-xl font-bold text-[#060d17]">
                  Upload attachments
                </span>
              </div>
              <p
                data-name="attachments-privacy"
                className="text-sm text-[#1c1c1c]/60"
              >
                Only CoinBets sees this
              </p>
              <p
                data-name="attachments-label"
                className="text-sm font-bold text-[#1c1c1c]"
              >
                Attach photos or screenshot
              </p>
              <label
                data-name="file-drop-zone"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#003eb6] bg-white px-6 py-6 transition-colors hover:bg-neutral-50"
              >
                <Upload className="size-5 text-neutral-400" />
                <span className="text-sm text-[#1c1c1c]/60">
                  Click to select file(s) or drag &amp; drop here
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      setAttachedFiles((prev) => [
                        ...prev,
                        ...Array.from(e.target.files!),
                      ]);
                    }
                    e.target.value = "";
                  }}
                />
              </label>
              {/* Selected files list */}
              {attachedFiles.length > 0 && (
                <div
                  data-name="attached-files"
                  className="flex flex-col gap-2"
                >
                  {attachedFiles.map((file, i) => (
                    <div
                      key={`${file.name}-${i}`}
                      data-name="attached-file"
                      className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2"
                    >
                      {file.type.startsWith("image/") ? (
                        <ImageIcon className="size-4 shrink-0 text-neutral-500" />
                      ) : (
                        <FileText className="size-4 shrink-0 text-neutral-500" />
                      )}
                      <span className="flex-1 truncate text-sm text-[#1c1c1c]">
                        {file.name}
                      </span>
                      <span className="shrink-0 text-xs text-neutral-400">
                        {(file.size / 1024).toFixed(0)} KB
                      </span>
                      <button
                        type="button"
                        data-name="remove-file"
                        onClick={() =>
                          setAttachedFiles((prev) =>
                            prev.filter((_, idx) => idx !== i)
                          )
                        }
                        className="shrink-0 rounded p-0.5 text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-700"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <button
          data-name="submit-complaint-btn"
          type="submit"
          className="flex h-[50px] w-full items-center justify-center rounded-lg bg-[#e6b830] text-base font-bold text-[#1c1c1c] transition-colors hover:bg-[#f0c840]"
        >
          Submit your complaint
        </button>
      </div>
    </div>
  );
}
