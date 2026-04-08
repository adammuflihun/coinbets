"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Camera, LogOut, Pencil, Upload, ChevronDown, Mail, Lock, Copy, Check, CircleCheck, Plus } from "lucide-react";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { ComplaintCard } from "@/components/complaint-card";
import { complaints } from "@/data/complaints";
import { casinoReviews } from "@/data/casino-reviews";
import "flag-icons/css/flag-icons.min.css";

/* Material Design filled icons for tabs */
const tabs = [
  {
    label: "My Profile",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
  },
  {
    label: "My Complaints",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  {
    label: "Rankings",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
      </svg>
    ),
  },
  {
    label: "My Reviews",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
      </svg>
    ),
  },
  {
    label: "Settings",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
      </svg>
    ),
  },
];

const stats = [
  { label: "Threads started", value: 5 },
  { label: "Forum Posts", value: 23 },
  { label: "Likes received", value: 14 },
  { label: "User Reviews", value: 3 },
  { label: "Approved complaints", value: 1 },
  { label: "Tournaments joined", value: 2 },
];

const allCountries = [
  { code: "af", name: "Afghanistan" }, { code: "al", name: "Albania" }, { code: "dz", name: "Algeria" },
  { code: "ad", name: "Andorra" }, { code: "ao", name: "Angola" }, { code: "ag", name: "Antigua and Barbuda" },
  { code: "ar", name: "Argentina" }, { code: "am", name: "Armenia" }, { code: "au", name: "Australia" },
  { code: "at", name: "Austria" }, { code: "az", name: "Azerbaijan" }, { code: "bs", name: "Bahamas" },
  { code: "bh", name: "Bahrain" }, { code: "bd", name: "Bangladesh" }, { code: "bb", name: "Barbados" },
  { code: "by", name: "Belarus" }, { code: "be", name: "Belgium" }, { code: "bz", name: "Belize" },
  { code: "bj", name: "Benin" }, { code: "bt", name: "Bhutan" }, { code: "bo", name: "Bolivia" },
  { code: "ba", name: "Bosnia and Herzegovina" }, { code: "bw", name: "Botswana" }, { code: "br", name: "Brazil" },
  { code: "bn", name: "Brunei" }, { code: "bg", name: "Bulgaria" }, { code: "bf", name: "Burkina Faso" },
  { code: "bi", name: "Burundi" }, { code: "kh", name: "Cambodia" }, { code: "cm", name: "Cameroon" },
  { code: "ca", name: "Canada" }, { code: "cv", name: "Cape Verde" }, { code: "cf", name: "Central African Republic" },
  { code: "td", name: "Chad" }, { code: "cl", name: "Chile" }, { code: "cn", name: "China" },
  { code: "co", name: "Colombia" }, { code: "km", name: "Comoros" }, { code: "cg", name: "Congo" },
  { code: "cr", name: "Costa Rica" }, { code: "hr", name: "Croatia" }, { code: "cu", name: "Cuba" },
  { code: "cy", name: "Cyprus" }, { code: "cz", name: "Czech Republic" }, { code: "dk", name: "Denmark" },
  { code: "dj", name: "Djibouti" }, { code: "dm", name: "Dominica" }, { code: "do", name: "Dominican Republic" },
  { code: "ec", name: "Ecuador" }, { code: "eg", name: "Egypt" }, { code: "sv", name: "El Salvador" },
  { code: "gq", name: "Equatorial Guinea" }, { code: "er", name: "Eritrea" }, { code: "ee", name: "Estonia" },
  { code: "et", name: "Ethiopia" }, { code: "fj", name: "Fiji" }, { code: "fi", name: "Finland" },
  { code: "fr", name: "France" }, { code: "ga", name: "Gabon" }, { code: "gm", name: "Gambia" },
  { code: "ge", name: "Georgia" }, { code: "de", name: "Germany" }, { code: "gh", name: "Ghana" },
  { code: "gr", name: "Greece" }, { code: "gd", name: "Grenada" }, { code: "gt", name: "Guatemala" },
  { code: "gn", name: "Guinea" }, { code: "gw", name: "Guinea-Bissau" }, { code: "gy", name: "Guyana" },
  { code: "ht", name: "Haiti" }, { code: "hn", name: "Honduras" }, { code: "hu", name: "Hungary" },
  { code: "is", name: "Iceland" }, { code: "in", name: "India" }, { code: "id", name: "Indonesia" },
  { code: "ir", name: "Iran" }, { code: "iq", name: "Iraq" }, { code: "ie", name: "Ireland" },
  { code: "il", name: "Israel" }, { code: "it", name: "Italy" }, { code: "jm", name: "Jamaica" },
  { code: "jp", name: "Japan" }, { code: "jo", name: "Jordan" }, { code: "kz", name: "Kazakhstan" },
  { code: "ke", name: "Kenya" }, { code: "ki", name: "Kiribati" }, { code: "kw", name: "Kuwait" },
  { code: "kg", name: "Kyrgyzstan" }, { code: "la", name: "Laos" }, { code: "lv", name: "Latvia" },
  { code: "lb", name: "Lebanon" }, { code: "ls", name: "Lesotho" }, { code: "lr", name: "Liberia" },
  { code: "ly", name: "Libya" }, { code: "li", name: "Liechtenstein" }, { code: "lt", name: "Lithuania" },
  { code: "lu", name: "Luxembourg" }, { code: "mk", name: "North Macedonia" }, { code: "mg", name: "Madagascar" },
  { code: "mw", name: "Malawi" }, { code: "my", name: "Malaysia" }, { code: "mv", name: "Maldives" },
  { code: "ml", name: "Mali" }, { code: "mt", name: "Malta" }, { code: "mh", name: "Marshall Islands" },
  { code: "mr", name: "Mauritania" }, { code: "mu", name: "Mauritius" }, { code: "mx", name: "Mexico" },
  { code: "fm", name: "Micronesia" }, { code: "md", name: "Moldova" }, { code: "mc", name: "Monaco" },
  { code: "mn", name: "Mongolia" }, { code: "me", name: "Montenegro" }, { code: "ma", name: "Morocco" },
  { code: "mz", name: "Mozambique" }, { code: "mm", name: "Myanmar" }, { code: "na", name: "Namibia" },
  { code: "nr", name: "Nauru" }, { code: "np", name: "Nepal" }, { code: "nl", name: "Netherlands" },
  { code: "nz", name: "New Zealand" }, { code: "ni", name: "Nicaragua" }, { code: "ne", name: "Niger" },
  { code: "ng", name: "Nigeria" }, { code: "kp", name: "North Korea" }, { code: "no", name: "Norway" },
  { code: "om", name: "Oman" }, { code: "pk", name: "Pakistan" }, { code: "pw", name: "Palau" },
  { code: "pa", name: "Panama" }, { code: "pg", name: "Papua New Guinea" }, { code: "py", name: "Paraguay" },
  { code: "pe", name: "Peru" }, { code: "ph", name: "Philippines" }, { code: "pl", name: "Poland" },
  { code: "pt", name: "Portugal" }, { code: "qa", name: "Qatar" }, { code: "ro", name: "Romania" },
  { code: "ru", name: "Russia" }, { code: "rw", name: "Rwanda" }, { code: "kn", name: "Saint Kitts and Nevis" },
  { code: "lc", name: "Saint Lucia" }, { code: "vc", name: "Saint Vincent and the Grenadines" },
  { code: "ws", name: "Samoa" }, { code: "sm", name: "San Marino" }, { code: "st", name: "Sao Tome and Principe" },
  { code: "sa", name: "Saudi Arabia" }, { code: "sn", name: "Senegal" }, { code: "rs", name: "Serbia" },
  { code: "sc", name: "Seychelles" }, { code: "sl", name: "Sierra Leone" }, { code: "sg", name: "Singapore" },
  { code: "sk", name: "Slovakia" }, { code: "si", name: "Slovenia" }, { code: "sb", name: "Solomon Islands" },
  { code: "so", name: "Somalia" }, { code: "za", name: "South Africa" }, { code: "kr", name: "South Korea" },
  { code: "ss", name: "South Sudan" }, { code: "es", name: "Spain" }, { code: "lk", name: "Sri Lanka" },
  { code: "sd", name: "Sudan" }, { code: "sr", name: "Suriname" }, { code: "se", name: "Sweden" },
  { code: "ch", name: "Switzerland" }, { code: "sy", name: "Syria" }, { code: "tw", name: "Taiwan" },
  { code: "tj", name: "Tajikistan" }, { code: "tz", name: "Tanzania" }, { code: "th", name: "Thailand" },
  { code: "tl", name: "Timor-Leste" }, { code: "tg", name: "Togo" }, { code: "to", name: "Tonga" },
  { code: "tt", name: "Trinidad and Tobago" }, { code: "tn", name: "Tunisia" }, { code: "tr", name: "Turkey" },
  { code: "tm", name: "Turkmenistan" }, { code: "tv", name: "Tuvalu" }, { code: "ug", name: "Uganda" },
  { code: "ua", name: "Ukraine" }, { code: "ae", name: "United Arab Emirates" }, { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" }, { code: "uy", name: "Uruguay" }, { code: "uz", name: "Uzbekistan" },
  { code: "vu", name: "Vanuatu" }, { code: "va", name: "Vatican City" }, { code: "ve", name: "Venezuela" },
  { code: "vn", name: "Vietnam" }, { code: "ye", name: "Yemen" }, { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" },
];

const genderOptions = ["Male", "Female", "Prefer not to say"];

/* ── Photo Upload Modal ── */
function PhotoUploadDialog({
  open,
  onOpenChange,
  onPhotoChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onPhotoChange: (url: string) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      setPreview(url);
      setProgress(0);
      setUploading(false);
    },
    []
  );

  const handleSave = useCallback(() => {
    if (!preview) return;
    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 25 + 10;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          onPhotoChange(preview);
          setUploading(false);
          setPreview(null);
          setProgress(0);
          onOpenChange(false);
        }, 400);
      }
      setProgress(Math.min(Math.round(current), 100));
    }, 300);
  }, [preview, onPhotoChange, onOpenChange]);

  const handleClose = (v: boolean) => {
    if (!uploading) {
      onOpenChange(v);
      if (!v) {
        setPreview(null);
        setProgress(0);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-section="photo-upload-dialog"
        className="sm:max-w-[440px] p-0 gap-0 overflow-hidden"
      >
        {/* Header */}
        <div data-name="photo-upload-header" className="flex flex-col items-center pt-8 pb-4 px-6">
          <div data-name="photo-upload-icon" className="w-14 h-14 rounded-full bg-[#E6B830]/20 flex items-center justify-center mb-4">
            <Camera className="size-6 text-[#E6B830]" />
          </div>
          <DialogHeader className="items-center">
            <DialogTitle className="text-xl font-bold text-neutral-900">
              Change Profile Photo
            </DialogTitle>
          </DialogHeader>
          <p data-name="photo-upload-desc" className="text-sm text-neutral-500 mt-1">
            Upload a new profile picture
          </p>
        </div>

        {/* Body */}
        <div data-name="photo-upload-body" className="px-6 pb-6">
          {/* Preview area */}
          <div
            data-name="photo-upload-preview"
            className="relative w-full aspect-square max-w-[200px] mx-auto mb-6 rounded-full overflow-hidden border-[3px] border-[#CDD6DD] bg-[#1C1C1C] flex items-center justify-center"
          >
            {preview ? (
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
              />
            ) : (
              <Image
                src="/icons/default-avatar.svg"
                alt="Current avatar"
                width={160}
                height={160}
                className="w-[160px] h-[160px]"
              />
            )}
          </div>

          {/* Upload progress */}
          {uploading && (
            <div data-name="photo-upload-progress" className="mb-5">
              <div data-name="progress-bar-bg" className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  data-name="progress-bar-fill"
                  className="h-full bg-[#E6B830] rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p data-name="progress-label" className="text-xs text-neutral-500 text-center mt-2">
                {progress < 100 ? `Uploading... ${progress}%` : "Upload complete!"}
              </p>
            </div>
          )}

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileSelect}
          />

          {/* Action buttons */}
          <div data-name="photo-upload-actions" className="flex flex-col gap-3">
            {!uploading && (
              <Button
                data-name="photo-select-btn"
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="w-full h-12 rounded-lg text-sm font-semibold gap-2"
              >
                <Upload className="size-4" />
                {preview ? "Choose Different Photo" : "Select Photo"}
              </Button>
            )}

            {preview && !uploading && (
              <Button
                data-name="photo-save-btn"
                onClick={handleSave}
                className="w-full h-12 rounded-lg text-sm font-semibold bg-[#E6B830] hover:bg-[#E6B830]/90 text-black"
              >
                Save Photo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ── Change Email Modal ── */
function ChangeEmailDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-section="change-email-dialog"
        className="sm:max-w-[480px] p-0 gap-0 overflow-hidden"
      >
        {/* Header */}
        <div data-name="change-email-header" className="flex flex-col items-center pt-8 pb-4 px-6">
          <div data-name="change-email-icon" className="w-14 h-14 rounded-full bg-[#E6B830]/20 flex items-center justify-center mb-4">
            <Mail className="size-6 text-[#E6B830]" />
          </div>
          <DialogHeader className="items-center">
            <DialogTitle className="text-2xl font-bold text-neutral-900">
              Change your e-mail address
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Form */}
        <div data-name="change-email-form" className="px-6 pb-6">
          <div data-name="change-email-card" className="border border-neutral-200 rounded-xl p-5 flex flex-col gap-5">
            <div data-name="change-email-new" className="flex flex-col gap-2">
              <label className="text-sm font-bold text-neutral-900">
                New e-mail address
              </label>
              <Input
                type="email"
                placeholder="Confirm new e-mail address"
                className="h-12 rounded-lg border-neutral-200 text-sm"
              />
            </div>
            <div data-name="change-email-confirm" className="flex flex-col gap-2">
              <label className="text-sm font-bold text-neutral-900">
                Confirm new e-mail address
              </label>
              <Input
                type="email"
                placeholder="Confirm new e-mail address"
                className="h-12 rounded-lg border-neutral-200 text-sm"
              />
            </div>
            <div data-name="change-email-password" className="flex flex-col gap-2">
              <label className="text-sm font-bold text-neutral-900">
                Password
              </label>
              <Input
                type="password"
                placeholder="Confirm password"
                className="h-12 rounded-lg border-neutral-200 text-sm"
              />
            </div>
          </div>

          <Button
            data-name="change-email-submit"
            className="w-full h-12 rounded-lg text-sm font-semibold mt-5 bg-[#E6B830] hover:bg-[#E6B830]/90 text-black"
          >
            Change E-mail address
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ── Change Password Modal ── */
function ChangePasswordDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-section="change-password-dialog"
        className="sm:max-w-[480px] p-0 gap-0 overflow-hidden"
      >
        {/* Header */}
        <div data-name="change-password-header" className="flex flex-col items-center pt-8 pb-4 px-6">
          <div data-name="change-password-icon" className="w-14 h-14 rounded-full bg-[#E6B830]/20 flex items-center justify-center mb-4">
            <Lock className="size-6 text-[#E6B830]" />
          </div>
          <DialogHeader className="items-center">
            <DialogTitle className="text-2xl font-bold text-neutral-900">
              Change your password
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Form */}
        <div data-name="change-password-form" className="px-6 pb-6">
          <div data-name="change-password-card" className="border border-neutral-200 rounded-xl p-5 flex flex-col gap-5">
            <div data-name="change-password-old" className="flex flex-col gap-2">
              <div data-name="change-password-old-header" className="flex items-center justify-between">
                <label className="text-sm font-bold text-neutral-900">
                  Old password
                </label>
                <span className="text-xs text-neutral-400">8 character minimumm</span>
              </div>
              <Input
                type="password"
                placeholder="Old password"
                className="h-12 rounded-lg border-neutral-200 text-sm"
              />
            </div>
            <div data-name="change-password-new" className="flex flex-col gap-2">
              <div data-name="change-password-new-header" className="flex items-center justify-between">
                <label className="text-sm font-bold text-neutral-900">
                  New password
                </label>
                <span className="text-xs text-neutral-400">8 character minimumm</span>
              </div>
              <Input
                type="password"
                placeholder="New password"
                className="h-12 rounded-lg border-neutral-200 text-sm"
              />
            </div>
            <div data-name="change-password-confirm" className="flex flex-col gap-2">
              <div data-name="change-password-confirm-header" className="flex items-center justify-between">
                <label className="text-sm font-bold text-neutral-900">
                  Confirm password
                </label>
                <span className="text-xs text-neutral-400">8 character minimumm</span>
              </div>
              <Input
                type="password"
                placeholder="Confirm password"
                className="h-12 rounded-lg border-neutral-200 text-sm"
              />
            </div>
          </div>

          <Button
            data-name="change-password-submit"
            className="w-full h-12 rounded-lg text-sm font-semibold mt-5 bg-[#E6B830] hover:bg-[#E6B830]/90 text-black"
          >
            Change Password
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ── Ranking data ── */
const RATING_COLORS: Record<number, string> = {
  5: "#23BA21", 4: "#9FF11A", 3: "#D8DC00", 2: "#FFB257", 1: "#FF6847",
};

const STAR_BG = "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE = "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

const USER_REVIEWS = [
  { name: "MrRobot", country: "es", points: 8, rating: 2, date: "4 months ago", title: "Slow 3 withdrawal not acceptable", body: "Joined Yeet about a month ago. The site looks good and has plenty of games, but withdrawals took 3 days.", liked: ["Nice site and smooth gameplay", "Good crypto deposit variety"], disliked: ["Withdrawal took 3 days", "Support was slow"], upVotes: 2, downVotes: 0, casinoSlug: "stake" },
  { name: "CryptoKing99", country: "gb", points: 12, rating: 4, date: "2 weeks ago", title: "Great selection of games and fast payouts", body: "Been using this casino for about 3 months now. Huge selection of slots and table games from top providers.", liked: ["Huge game selection", "Fast withdrawal processing", "Good VIP rewards"], disliked: ["Live chat slow during peak hours"], upVotes: 5, downVotes: 1, casinoSlug: "shuffle" },
  { name: "SatoshiBets", country: "jp", points: 15, rating: 5, date: "3 days ago", title: "Best crypto casino I've used so far", body: "I've tried 10+ crypto casinos and this is easily the best one. Provably fair, fast withdrawals.", liked: ["Provably fair and transparent", "Withdrawals under 30 minutes", "Great original games"], disliked: ["Mobile app could use polish"], upVotes: 8, downVotes: 0, casinoSlug: "bitsler" },
];

const newsletterOptions = [
  "What's new on CoinBets",
  "New casino bonuses",
  "New free tournaments",
  "Forum & user reviews monthly summary",
  "Complaints monthly summary",
  "Top picks from new casino games",
  "Gambling news",
];

const notificationOptions = [
  "When someone replies to your post",
  "When someone likes your post",
  "When someone adds a post in a followed thread",
  "Reminders to visit the forum when being inactive",
];

const ranks = [
  { name: "Rookie Bettor", range: "0-30 points", color: "#79a3ce", image: "/ranks/rookie-bettor.png" },
  { name: "Novice Gambler", range: "30-100 points", color: "#fd884b", image: "/ranks/novice-gambler.png" },
  { name: "Sharp Shooter", range: "100-400 points", color: "#9d1e31", image: "/ranks/sharp-shooter.png" },
  { name: "Casino Ace", range: "400-1000 points", color: "#104556", image: "/ranks/casino-ace.png" },
  { name: "High Roller", range: "1000-4000 points", color: "#5164d9", image: "/ranks/high-roller.png" },
  { name: "Administrator", range: "Admin", color: "#003eb6", image: "/ranks/administrator.png" },
];

const pointsEarned = [
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>, label: "Thread created", pts: "2 pts" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>, label: "Post written", pts: "3 pts" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>, label: "Like received", pts: "1 pt" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h12v2H1v-2zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828L5.245 8.07zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66L12.317 1zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657 2.828-2.828z"/></svg>, label: "Approved complaint", pts: "5 pts" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>, label: "Casino rating", pts: "1 pt" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>, label: "Casino review", pts: "5 pts" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2V7h2v10zm4 0h-2v-3h2v3z"/></svg>, label: "Poll vote", pts: "2 pts" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/></svg>, label: "Winning screenshot added", pts: "2 pts" },
];

const latestPosts = [
  { href: "/casino/review/stake", category: "Casino Reviews", title: "Stake vs Shuffle — which crypto casino is better in 2026? My honest comparison after 6 months", replies: 34, newReplies: 5 },
  { href: "/guides/understanding-rtp-house-edge", category: "Provably Fair", title: "My experience with provably fair games — here's how I verified every bet", replies: 18, newReplies: 0 },
  { href: "/complaints/clubhouse-casino-withdrawal-delay", category: "Withdrawals", title: "Roobet withdrawal finally processed after 48 hours — here's what happened", replies: 41, newReplies: 3 },
];

const followedPosts = [
  { href: "/guides/crypto-vs-traditional-gambling", category: "Big Wins", title: "Biggest crypto casino wins this month — April 2026 megathread", replies: 127, newReplies: 12 },
  { href: "/no-kyc-casinos", category: "No KYC Casinos", title: "No KYC casinos that actually pay out — verified list updated weekly by the community", replies: 89, newReplies: 4 },
  { href: "/coinbet-index", category: "General Gambling", title: "CoinBet Index explained — how we rate and rank crypto casinos for safety and fairness", replies: 56, newReplies: 0 },
];

/* ── Forum Post Card ── */
function ForumPostCard({ post, showUnfollow }: { post: typeof latestPosts[0]; showUnfollow?: boolean }) {
  return (
    <Link
      href={post.href}
      data-name="forum-post-card"
      className="bg-white flex items-center justify-between gap-4 px-5 py-4 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50 transition-colors"
    >
      <div data-name="forum-post-info" className="flex-1 min-w-0 flex flex-col gap-1.5">
        <span data-name="forum-post-category" className="inline-flex w-fit bg-neutral-100 rounded-md px-2 py-0.5 text-xs font-medium text-neutral-700">
          {post.category}
        </span>
        <p data-name="forum-post-title" className="text-sm font-bold text-[#122f9b] leading-snug line-clamp-2">
          {post.title}
        </p>
      </div>
      <div data-name="forum-post-meta" className="flex items-center gap-3 shrink-0">
        <div data-name="forum-post-replies" className="flex items-center gap-1.5">
          {/* Material: forum (filled) */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-400 shrink-0">
            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
          </svg>
          <span className="text-xs text-neutral-600">{post.replies} Replies</span>
          {post.newReplies > 0 && (
            <span className="text-xs font-bold text-neutral-900">({post.newReplies} New)</span>
          )}
          {post.newReplies > 0 && (
            <span data-name="forum-post-dot" className="size-1.5 rounded-full bg-[#E6B830]" />
          )}
        </div>
        {showUnfollow && (
          <Button
            data-name="forum-post-unfollow"
            variant="outline"
            className="h-9 px-4 rounded-md border-[#E6B830] text-sm font-medium text-neutral-900 hover:bg-[#E6B830]/10"
            onClick={(e) => e.preventDefault()}
          >
            Unfollow
          </Button>
        )}
      </div>
    </Link>
  );
}

/* ── Settings Tab ── */
function EmailSettingTab() {
  const [newsletter, setNewsletter] = useState<Record<string, boolean>>({});
  const [notifications, setNotifications] = useState<Record<string, boolean>>({});

  return (
    <div data-name="settings-tab" className="flex flex-col gap-8">
      {/* Newsletter settings */}
      <div data-name="newsletter-settings" className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
        <div data-name="newsletter-header" className="flex items-start justify-between mb-6">
          <div data-name="newsletter-text" className="flex-1">
            <h3 data-name="newsletter-title" className="text-xl font-bold text-neutral-900 mb-2">
              Newsletter settings
            </h3>
            <p data-name="newsletter-desc" className="text-sm text-neutral-600 leading-relaxed max-w-lg">
              You are not subscribed to our newsletter. Please, choose the types of e-mails you would like to receive from us. We send max 1 e-mail per week.
            </p>
          </div>
          <div data-name="newsletter-icon" className="shrink-0 w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center ml-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-700">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
            </svg>
          </div>
        </div>
        <div data-name="newsletter-options" className="flex flex-col gap-2">
          {newsletterOptions.map((option) => {
            const isActive = newsletter[option] ?? false;
            return (
              <div key={option} data-name={`newsletter-option-${option.toLowerCase().replace(/\s/g, "-")}`} className="flex items-center justify-between bg-neutral-50 rounded-lg px-4 py-3">
                <label htmlFor={`nl-${option}`} className="text-sm text-neutral-900 cursor-pointer flex-1">
                  {option}
                </label>
                <div data-name="toggle-status" className="flex items-center gap-3">
                  <span className={`text-xs font-semibold ${isActive ? "text-green-600" : "text-neutral-400"}`}>
                    {isActive ? "Active" : "Inactive"}
                  </span>
                  <Switch
                    id={`nl-${option}`}
                    checked={isActive}
                    onCheckedChange={(val) => setNewsletter((prev) => ({ ...prev, [option]: val }))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Email notification settings */}
      <div data-name="notification-settings" className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
        <div data-name="notification-header" className="flex items-start justify-between mb-6">
          <div data-name="notification-text" className="flex-1">
            <h3 data-name="notification-title" className="text-xl font-bold text-neutral-900 mb-2">
              Notification settings
            </h3>
            <p data-name="notification-desc" className="text-sm text-neutral-600">
              Choose when you wish to be notified by e-mail.
            </p>
          </div>
          <div data-name="notification-icon" className="shrink-0 w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center ml-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-700">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
          </div>
        </div>
        <div data-name="notification-options" className="flex flex-col gap-2">
          {notificationOptions.map((option) => {
            const isActive = notifications[option] ?? false;
            return (
              <div key={option} data-name={`notification-option-${option.toLowerCase().replace(/\s/g, "-")}`} className="flex items-center justify-between bg-neutral-50 rounded-lg px-4 py-3">
                <label htmlFor={`notif-${option}`} className="text-sm text-neutral-900 cursor-pointer flex-1">
                  {option}
                </label>
                <div data-name="toggle-status" className="flex items-center gap-3">
                  <span className={`text-xs font-semibold ${isActive ? "text-green-600" : "text-neutral-400"}`}>
                    {isActive ? "Active" : "Inactive"}
                  </span>
                  <Switch
                    id={`notif-${option}`}
                    checked={isActive}
                    onCheckedChange={(val) => setNotifications((prev) => ({ ...prev, [option]: val }))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── My Reviews Tab ── */
function MyReviewsTab() {
  return (
    <div data-name="reviews-tab" className="flex flex-col gap-6">
      <h2 data-name="reviews-title" className="text-3xl font-black text-neutral-900">
        My Reviews
      </h2>
      <div data-name="reviews-list" className="flex flex-col gap-5">
        {USER_REVIEWS.map((review) => {
          const casino = casinoReviews.find((c) => c.slug === review.casinoSlug);
          const ratingColor = RATING_COLORS[Math.min(5, Math.max(1, Math.round(review.rating)))] ?? RATING_COLORS[3];

          return (
            <Link
              key={review.title}
              href={`/casino/review/${review.casinoSlug}`}
              data-name="user-review-card"
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow block"
            >
              {/* Header: Casino + Rating */}
              <div data-name="review-card-header" className="flex items-start justify-between gap-4 mb-4">
                {/* Casino info */}
                {casino && (
                  <div data-name="review-casino" className="flex items-center gap-3">
                    <div data-name="review-casino-logo" className="size-10 bg-[#060D17] rounded-md shrink-0 flex items-center justify-center overflow-hidden">
                      <Image src={casino.logo} alt={casino.name} width={40} height={40} className="object-contain size-full" />
                    </div>
                    <div data-name="review-casino-info" className="flex flex-col">
                      <span className="text-sm font-semibold text-[#060D17]">{casino.name}</span>
                      <div data-name="review-casino-safety" className="flex items-center gap-1.5">
                        <span className="text-xs text-neutral-500">Safety</span>
                        <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold text-[#060D17]" style={{ backgroundColor: casino.safetyIndex === "High" ? "#00DE00" : "#EAEE45" }}>
                          {casino.safetyIndex}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rating */}
                <div data-name="review-rating" className="flex items-center gap-1.5 shrink-0">
                  <span className="text-2xl font-bold" style={{ color: ratingColor }}>{review.rating}</span>
                  <span className="text-xs text-neutral-400">/ 5</span>
                  <div data-name="review-stars" className="flex items-center gap-0.5 ml-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="16" height="16" viewBox="0 0 20 20" fill="none" className="size-4">
                        <path d={STAR_BG} fill={star <= review.rating ? ratingColor : "#E5E7EB"} />
                        <path d={STAR_SHAPE} fill="white" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Title & body */}
              <h3 data-name="review-card-title" className="text-lg font-bold text-[#060D17] mb-2">
                {review.title}
              </h3>
              <p data-name="review-card-body" className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-4">
                {review.body}
              </p>

              {/* Pros/Cons summary */}
              <div data-name="review-card-summary" className="flex flex-wrap gap-2 mb-4">
                {review.liked.slice(0, 2).map((item, i) => (
                  <span key={i} data-name="review-pro-tag" className="inline-flex items-center gap-1 rounded-md bg-green-50 border border-green-100 px-2 py-1 text-xs text-green-800">
                    <Plus className="size-3" />
                    {item}
                  </span>
                ))}
                {review.disliked.slice(0, 1).map((item, i) => (
                  <span key={i} data-name="review-con-tag" className="inline-flex items-center gap-1 rounded-md bg-red-50 border border-red-100 px-2 py-1 text-xs text-red-800">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="2" y="5" width="8" height="2" rx="1"/></svg>
                    {item}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div data-name="review-card-footer" className="flex items-center justify-between pt-3 border-t border-neutral-100">
                <span data-name="review-date" className="text-xs text-neutral-400">{review.date}</span>
                <div data-name="review-votes" className="flex items-center gap-3 text-xs text-neutral-400">
                  <span data-name="review-upvotes" className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
                    {review.upVotes}
                  </span>
                  <span data-name="review-downvotes" className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>
                    {review.downVotes}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ── My Complaints Tab ── */
function MyComplaintsTab() {
  // Show empty state when no user complaints, but also show sample cards
  const userComplaints = complaints.slice(0, 2); // Simulated: first 2 as user's

  if (userComplaints.length === 0) {
    return (
      <div data-name="complaints-tab" className="flex flex-col gap-6">
        <h2 data-name="complaints-title" className="text-3xl font-black text-neutral-900">
          My Complaints
        </h2>
        <div data-name="complaints-empty" className="bg-white rounded-xl p-10 flex flex-col items-center justify-center min-h-[300px]">
          <p data-name="complaints-empty-text" className="text-base text-neutral-500 text-center max-w-lg mb-6">
            If you&apos;ve been unfairly treated by an online casino, submit a public complaint and the CoinBets team will help you take it further.
          </p>
          <Link href="/complaints/submit">
            <Button
              data-name="complaints-submit-btn"
              className="h-11 px-6 rounded-lg text-sm font-semibold bg-[#E6B830] hover:bg-[#E6B830]/90 text-black gap-2"
            >
              Submit a Complaint
              <Plus className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div data-name="complaints-tab" className="flex flex-col gap-6">
      <div data-name="complaints-header" className="flex items-center justify-between">
        <h2 data-name="complaints-title" className="text-3xl font-black text-neutral-900">
          My Complaints
        </h2>
        <Link href="/complaints/submit">
          <Button
            data-name="complaints-submit-btn"
            className="h-11 px-5 rounded-lg text-sm font-semibold bg-[#E6B830] hover:bg-[#E6B830]/90 text-black gap-2"
          >
            Submit a Complaint
            <Plus className="size-4" />
          </Button>
        </Link>
      </div>

      <div data-name="complaints-list" className="flex flex-col gap-4">
        {userComplaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint} />
        ))}
      </div>
    </div>
  );
}

/* ── Rankings Tab ── */
function RankingsTab() {
  return (
    <div data-name="rankings-tab" className="flex flex-col gap-8">
      {/* Hero Banner */}
      <div
        data-name="rankings-hero"
        className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#1a3a6b] to-[#2f5eb3] p-8 sm:p-10"
      >
        <div data-name="rankings-hero-content" className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left text */}
          <div data-name="rankings-hero-text" className="flex-1">
            <p data-name="rankings-hero-label" className="text-xs font-bold uppercase tracking-[3px] text-white/70 mb-2">
              Coinbets Ranking
            </p>
            <h2 data-name="rankings-hero-title" className="text-3xl sm:text-4xl font-black text-white mb-3">
              Ranking System
            </h2>
            <p data-name="rankings-hero-desc" className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
              Do you wonder how the ranking system works on the Coinbet forum? Track your progress, get new ranks, earn new shiny tokens and build your reputation!
            </p>
          </div>

          {/* Right: Rank card */}
          <div
            data-name="rankings-hero-card"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-5 w-full sm:w-[240px] shrink-0 border border-white/15"
          >
            <p data-name="rank-card-label" className="text-xs font-medium text-white/70 mb-1">Your rank</p>
            <div data-name="rank-card-header" className="flex items-center justify-between mb-2">
              <h3 data-name="rank-card-name" className="text-2xl font-black text-white">Rookie</h3>
              <Image src="/ranks/rookie-bettor.png" alt="Rookie" width={44} height={44} className="size-11" />
            </div>
            <p data-name="rank-card-points" className="text-2xl font-black text-white mb-3">
              18 <span className="text-sm font-medium text-white/60">pts</span>
            </p>
            <div data-name="rank-card-divider" className="border-t border-white/15 mb-3" />
            <div data-name="rank-card-progress-info" className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-white/70">Novice</span>
              <span className="text-xs font-medium text-white/70">12 pts left</span>
            </div>
            <div data-name="rank-card-progress-bg" className="w-full h-2 bg-white/15 rounded-full overflow-hidden">
              <div data-name="rank-card-progress-fill" className="h-full bg-[#E6B830] rounded-full" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Content: How Points Earned + Ranks List */}
      <div data-name="rankings-content" className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Left: How Points Earned */}
        <div
          data-name="rankings-points-card"
          className="bg-white rounded-xl p-5 shadow-sm h-fit"
        >
          <h3 data-name="points-title" className="text-sm font-bold text-neutral-900 mb-4">
            How Points Earned
          </h3>
          <div data-name="points-list" className="flex flex-col gap-2">
            {pointsEarned.map((item) => (
              <div
                key={item.label}
                data-name={`points-item-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className="flex items-center justify-between gap-3"
              >
                <div data-name="points-item-label" className="flex items-center gap-2">
                  <span className="text-neutral-600 shrink-0">{item.icon}</span>
                  <span className="text-sm text-neutral-900">{item.label}</span>
                </div>
                <span className="text-xs font-bold text-neutral-900 uppercase shrink-0">{item.pts}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Rank tiers */}
        <div data-name="rankings-tiers" className="flex flex-col gap-4">
          {ranks.map((rank) => (
            <div
              key={rank.name}
              data-name={`rank-tier-${rank.name.toLowerCase().replace(/\s/g, "-")}`}
              className="bg-white rounded-xl shadow-sm flex items-center gap-5 p-5 sm:p-6"
            >
              <div data-name="rank-tier-badge" className="shrink-0">
                <Image
                  src={rank.image}
                  alt={rank.name}
                  width={80}
                  height={80}
                  className="size-[70px] sm:size-20 object-contain"
                />
              </div>
              <div data-name="rank-tier-info" className="flex-1 flex flex-col gap-2">
                <div
                  data-name="rank-tier-label"
                  className="rounded-md px-4 py-2.5 w-full"
                  style={{ backgroundColor: rank.color }}
                >
                  <span className="text-lg font-bold text-white">{rank.name}</span>
                </div>
                <p data-name="rank-tier-range" className="text-sm font-bold text-neutral-900">
                  {rank.range}
                </p>
              </div>
            </div>
          ))}

          {/* About Our Ranking System */}
          <div
            data-name="rankings-about"
            className="bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col lg:flex-row gap-6"
          >
            <div data-name="rankings-about-text" className="flex-1 flex flex-col gap-4">
              <h3 data-name="rankings-about-title" className="text-xl font-bold text-neutral-900">
                About Our Ranking System
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                The coinbet ranking system allows users to accumulate points for their activity and increase their rank by being an active member of the community and helping other users. Increase your rank to gain tokens, stand out from the crowd, and gain recognition of other community members.
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Collect points by creating new threads, adding new posts and responses, receiving likes from other members, and communicating with our Complaint team during the complaint resolution process.
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                You can track your progress in your user profile when logged in.
              </p>
            </div>
            <div data-name="rankings-about-image" className="shrink-0 lg:w-[280px]">
              <Image
                src="/ranks/casino-item-3d.png"
                alt="Casino items"
                width={280}
                height={280}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Account Settings Section ── */
function AccountSettings({
  onEditEmail,
  onEditPassword,
  gender,
  setGender,
  selectedCountry,
  setSelectedCountry,
}: {
  onEditEmail: () => void;
  onEditPassword: () => void;
  gender: string;
  setGender: (v: string) => void;
  selectedCountry: { code: string; name: string };
  setSelectedCountry: (v: { code: string; name: string }) => void;
}) {
  // Profile link / username
  const [username, setUsername] = useState("coinbet-user");
  const [savedUsername, setSavedUsername] = useState("coinbet-user");
  const [editingUsername, setEditingUsername] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [copied, setCopied] = useState(false);

  // Gender dropdown
  const [genderOpen, setGenderOpen] = useState(false);

  // Country dropdown
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const filteredCountries = allCountries.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const profileUrl = `https://coinbets.com/u/${savedUsername}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Debounced username availability check
  const checkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleUsernameChange = useCallback((value: string) => {
    const cleaned = value.toLowerCase().replace(/[^a-z0-9-_]/g, "");
    setUsername(cleaned);
    setUsernameAvailable(null);
    setCheckingUsername(false);
    if (checkTimerRef.current) clearTimeout(checkTimerRef.current);

    if (cleaned.length >= 3 && cleaned !== savedUsername) {
      setCheckingUsername(true);
      checkTimerRef.current = setTimeout(() => {
        // Simulated check — "taken" is the only unavailable username
        setUsernameAvailable(cleaned !== "taken");
        setCheckingUsername(false);
      }, 600);
    }
  }, [savedUsername]);

  const handleSaveUsername = () => {
    if (usernameAvailable && username.length >= 3) {
      setSavedUsername(username);
      setEditingUsername(false);
      setUsernameAvailable(null);
    }
  };

  return (
    <div data-name="account-settings" className="flex flex-col gap-6">
      {/* Account Settings - Personal */}
      <div data-name="account-settings-personal">
        <h2 data-name="account-settings-title" className="text-xl font-bold text-neutral-900 mb-4">
          Account settings
        </h2>
        <div data-name="account-settings-card" className="bg-white rounded-xl p-6 sm:p-8">
          {/* Profile link */}
          <div data-name="account-profile-link" className="flex flex-col gap-2 mb-6">
            <span className="text-sm font-bold text-neutral-900">Profile Link</span>
            <div data-name="profile-link-input" className="relative w-full">
              {editingUsername ? (
                <div data-name="profile-link-edit-wrapper" className="flex flex-col gap-2">
                  <div data-name="profile-link-edit-field" className="flex items-center h-12 rounded-lg border border-neutral-200 bg-white overflow-hidden">
                    <span className="text-sm text-neutral-400 pl-3 shrink-0 select-none">
                      https://coinbets.com/u/
                    </span>
                    <input
                      data-name="profile-link-username-input"
                      type="text"
                      value={username}
                      onChange={(e) => handleUsernameChange(e.target.value)}
                      className="flex-1 h-full text-sm text-neutral-900 font-medium outline-none bg-transparent"
                      autoFocus
                    />
                    <button
                      data-name="profile-link-save-btn"
                      onClick={handleSaveUsername}
                      disabled={!usernameAvailable || username.length < 3}
                      className="h-8 px-3 mr-2 rounded-md bg-[#E6B830] hover:bg-[#E6B830]/90 text-xs font-semibold text-black transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Save
                    </button>
                    <button
                      data-name="profile-link-cancel-btn"
                      onClick={() => { setEditingUsername(false); setUsername(savedUsername); setUsernameAvailable(null); }}
                      className="h-8 px-3 mr-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-600 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                  {/* Availability feedback */}
                  {username.length >= 3 && (
                    <div data-name="username-availability" className="flex items-center gap-1.5 pl-1">
                      {checkingUsername ? (
                        <span className="text-xs text-neutral-400">Checking availability...</span>
                      ) : usernameAvailable === true ? (
                        <>
                          <CircleCheck className="size-3.5 text-green-500" />
                          <span className="text-xs text-green-600 font-medium">Username is available</span>
                        </>
                      ) : usernameAvailable === false ? (
                        <>
                          <span className="text-xs text-red-500 font-medium">Username is taken</span>
                        </>
                      ) : null}
                    </div>
                  )}
                </div>
              ) : (
                <div data-name="profile-link-display" className="flex items-center h-12 rounded-lg border border-neutral-200 bg-white">
                  <span className="flex-1 text-sm text-neutral-900 pl-3 truncate">
                    {profileUrl}
                  </span>
                  <button
                    data-name="profile-link-edit-btn"
                    onClick={() => setEditingUsername(true)}
                    className="h-7 px-2.5 mr-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-600 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Pencil className="size-3" />
                    Edit
                  </button>
                  <button
                    data-name="profile-link-copy-btn"
                    onClick={handleCopy}
                    className="h-7 px-2.5 mr-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-600 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {copied ? <Check className="size-3 text-green-500" /> : <Copy className="size-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Fields grid */}
          <div data-name="account-fields" className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            {/* Email */}
            <div data-name="account-field-email" className="flex flex-col gap-2">
              <span className="text-sm font-bold text-neutral-900">E-mail address</span>
              <div data-name="account-email-input" className="flex items-center h-12 rounded-lg border border-neutral-200 bg-white">
                <span className="flex-1 text-sm text-neutral-900 pl-3 truncate">
                  adambagusm@gmail.com
                </span>
                <button
                  data-name="account-email-edit-btn"
                  onClick={onEditEmail}
                  className="h-7 px-2.5 mr-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Pencil className="size-3" />
                  Edit
                </button>
              </div>
            </div>

            {/* Password */}
            <div data-name="account-field-password" className="flex flex-col gap-2">
              <span className="text-sm font-bold text-neutral-900">Password</span>
              <div data-name="account-password-input" className="flex items-center h-12 rounded-lg border border-neutral-200 bg-white">
                <span className="flex-1 text-sm text-neutral-900 pl-3 tracking-widest">
                  ********
                </span>
                <button
                  data-name="account-password-edit-btn"
                  onClick={onEditPassword}
                  className="h-7 px-2.5 mr-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Pencil className="size-3" />
                  Edit
                </button>
              </div>
            </div>

            {/* Gender */}
            <div data-name="account-field-gender" className="flex flex-col gap-2 relative">
              <span className="text-sm font-bold text-neutral-900">Gender</span>
              <button
                data-name="gender-select-trigger"
                onClick={() => setGenderOpen(!genderOpen)}
                className="flex items-center justify-between h-12 px-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:border-neutral-300 transition-colors"
              >
                <span className={`text-sm ${gender ? "text-neutral-900" : "text-neutral-400"}`}>
                  {gender || "Select gender"}
                </span>
                <ChevronDown className={`size-4 text-neutral-400 transition-transform ${genderOpen ? "rotate-180" : ""}`} />
              </button>
              {genderOpen && (
                <div
                  data-name="gender-dropdown"
                  className="absolute top-full left-0 right-0 z-20 mt-1 bg-white rounded-lg border border-neutral-200 shadow-lg overflow-hidden"
                >
                  {genderOptions.map((option) => (
                    <button
                      key={option}
                      data-name={`gender-option-${option.toLowerCase().replace(/\s/g, "-")}`}
                      onClick={() => { setGender(option); setGenderOpen(false); }}
                      className={`flex items-center justify-between w-full px-3 py-2.5 text-sm hover:bg-neutral-50 transition-colors cursor-pointer ${
                        gender === option ? "text-neutral-900 font-medium bg-neutral-50" : "text-neutral-700"
                      }`}
                    >
                      {option}
                      {gender === option && <Check className="size-4 text-blue-500" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Country */}
            <div data-name="account-field-country" className="flex flex-col gap-2 relative">
              <span className="text-sm font-bold text-neutral-900">Country</span>
              <button
                data-name="country-select-trigger"
                onClick={() => setCountryOpen(!countryOpen)}
                className="flex items-center justify-between h-12 px-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:border-neutral-300 transition-colors"
              >
                <div data-name="country-value" className="flex items-center gap-2">
                  <span className={`fi fi-${selectedCountry.code} fis w-5 h-3.5 rounded-sm`} />
                  <span className="text-sm text-neutral-900">{selectedCountry.name}</span>
                </div>
                <ChevronDown className={`size-4 text-neutral-400 transition-transform ${countryOpen ? "rotate-180" : ""}`} />
              </button>
              {countryOpen && (
                <div
                  data-name="country-dropdown"
                  className="absolute top-full left-0 right-0 z-20 mt-1 bg-white rounded-lg border border-neutral-200 shadow-lg overflow-hidden"
                >
                  <div data-name="country-search" className="p-2 border-b border-neutral-100">
                    <Input
                      placeholder="Search country..."
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="h-9 text-sm"
                      autoFocus
                    />
                  </div>
                  <div data-name="country-list" className="max-h-[240px] overflow-y-auto p-1">
                    {filteredCountries.map((country) => (
                      <button
                        key={country.code}
                        data-name={`country-option-${country.code}`}
                        onClick={() => { setSelectedCountry(country); setCountryOpen(false); setCountrySearch(""); }}
                        className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-md text-sm hover:bg-neutral-50 transition-colors cursor-pointer ${
                          selectedCountry.code === country.code ? "bg-neutral-50 font-medium" : ""
                        }`}
                      >
                        <span className={`fi fi-${country.code} fis w-5 h-3.5 rounded-sm shrink-0`} />
                        <span className="flex-1 text-left text-neutral-900">{country.name}</span>
                        {selectedCountry.code === country.code && <Check className="size-4 text-blue-500" />}
                      </button>
                    ))}
                    {filteredCountries.length === 0 && (
                      <p className="px-2 py-4 text-center text-sm text-neutral-500">No country found.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("My Profile");
  const { logout } = useAuth();
  const router = useRouter();

  // Modal states
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);

  // Shared profile state
  const [avatarUrl, setAvatarUrl] = useState("/icons/default-avatar.svg");
  const [gender, setGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(allCountries.find(c => c.code === "id")!);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <main data-section="profile" className="flex-1">
      {/* Profile content */}
      <section
        data-section="profile-content"
        className="bg-[#f5f5f5] min-h-[60vh]"
      >
        <div
          data-name="profile-content-container"
          className="site-container py-8"
        >
          <div
            data-name="profile-layout"
            className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6"
          >
            {/* Left: Profile Card */}
            <div
              data-name="profile-card"
              className="bg-white rounded-xl p-6 sm:p-8 flex flex-col items-center h-fit"
            >
              {/* Avatar */}
              <div data-name="profile-avatar-wrapper" className="relative mb-4">
                <div
                  data-name="profile-avatar-ring"
                  className="w-[160px] h-[160px] rounded-full border-[3px] border-[#CDD6DD] flex items-center justify-center overflow-hidden bg-[#1C1C1C]"
                >
                  <Image
                    src={avatarUrl}
                    alt="Profile avatar"
                    width={140}
                    height={140}
                    className="w-[140px] h-[140px] object-cover"
                  />
                </div>

                {/* Rank badge */}
                <div
                  data-name="profile-rank-badge"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                >
                  <Image
                    src="/ranks/rookie-bettor.png"
                    alt="Rookie Bettor"
                    width={44}
                    height={44}
                    className="size-11"
                  />
                </div>

                {/* Camera button */}
                <button
                  data-name="profile-camera-btn"
                  onClick={() => setPhotoModalOpen(true)}
                  className="absolute top-1/2 -translate-y-1/2 -right-1 w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <Camera className="size-4 text-neutral-600" />
                </button>
              </div>

              {/* Rank title */}
              <p
                data-name="profile-rank-title"
                className="text-xs font-bold uppercase tracking-wider text-[#00A67E] mb-1"
              >
                Rookie Bettor
              </p>

              {/* Name */}
              <h1
                data-name="profile-name"
                className="text-xl font-bold text-neutral-900 mb-0.5"
              >
                Coinbet User
              </h1>

              {/* Status */}
              <p
                data-name="profile-status"
                className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-6"
              >
                Online
              </p>

              {/* Separator */}
              <div
                data-name="profile-separator"
                className="w-full border-t border-neutral-100 mb-5"
              />

              {/* Details */}
              <div
                data-name="profile-details"
                className="w-full flex flex-col gap-3"
              >
                <div data-name="profile-detail-points" className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Points:
                  </span>
                  <span className="text-sm font-bold text-neutral-900">0pt</span>
                </div>
                <div data-name="profile-detail-gender" className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Gender:
                  </span>
                  <span className="text-sm font-bold text-neutral-900">{gender || "—"}</span>
                </div>
                <div data-name="profile-detail-joined" className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Joined:
                  </span>
                  <span className="text-sm font-bold text-neutral-900">
                    2026-03-23
                  </span>
                </div>
                <div data-name="profile-detail-country" className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Country:
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                    <span className={`fi fi-${selectedCountry.code} fis w-5 h-3.5 rounded-sm`} />
                    {selectedCountry.name}
                  </span>
                </div>
              </div>

              {/* Separator */}
              <div
                data-name="profile-separator-bottom"
                className="w-full border-t border-neutral-100 my-5"
              />

              {/* Logout button */}
              <Button
                data-name="profile-logout-btn"
                variant="destructive"
                onClick={handleLogout}
                className="w-full h-11 rounded-lg text-sm font-semibold gap-2"
              >
                <LogOut className="size-4" />
                Logout
              </Button>
            </div>

            {/* Right column */}
            <div data-name="profile-right" className="flex flex-col gap-6">
              {/* Tab row */}
              <div
                data-name="profile-tab-row"
                className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide"
              >
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.label;
                  return (
                    <button
                      key={tab.label}
                      data-name={`profile-tab-${tab.label.toLowerCase().replace(/\s/g, "-")}`}
                      onClick={() => setActiveTab(tab.label)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                        isActive
                          ? "bg-white text-neutral-900 border border-[#E6B830] shadow-sm"
                          : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      <span className={`${isActive ? "text-neutral-900" : "text-neutral-400"}`}>
                        {tab.icon}
                      </span>
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {activeTab === "My Profile" && (
                <>
                  {/* Stats Grid */}
                  <div
                    data-name="profile-stats-grid"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    {stats.map((stat, idx) => (
                      <div
                        key={idx}
                        data-name={`profile-stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
                        className="bg-white rounded-xl p-6 flex flex-col"
                      >
                        <h3
                          data-name="stat-label"
                          className="text-base font-bold text-neutral-900 mb-3"
                        >
                          {stat.label}
                        </h3>
                        <p
                          data-name="stat-value"
                          className="text-3xl font-bold text-neutral-900"
                        >
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Your Latest Post */}
                  <div data-name="latest-posts-section" className="flex flex-col gap-4">
                    <h2 data-name="latest-posts-title" className="text-xl font-bold text-neutral-900">
                      Your Latest Post
                    </h2>
                    <div data-name="latest-posts-list" className="rounded-xl overflow-hidden border border-neutral-200">
                      {latestPosts.map((post, idx) => (
                        <ForumPostCard key={idx} post={post} />
                      ))}
                    </div>
                  </div>

                  {/* Followed Post */}
                  <div data-name="followed-posts-section" className="flex flex-col gap-4">
                    <div data-name="followed-posts-header" className="flex flex-col gap-1">
                      <h2 data-name="followed-posts-title" className="text-xl font-bold text-neutral-900">
                        Followed Post
                      </h2>
                      <p data-name="followed-posts-desc" className="text-sm text-neutral-600">
                        To stop receiving notifications about followed threads{" "}
                        <button onClick={() => setActiveTab("Settings")} className="font-bold text-[#1433a6] hover:underline cursor-pointer">click here.</button>
                      </p>
                    </div>
                    <div data-name="followed-posts-list" className="rounded-xl overflow-hidden border border-neutral-200">
                      {followedPosts.map((post, idx) => (
                        <ForumPostCard key={idx} post={post} showUnfollow />
                      ))}
                    </div>
                  </div>

                  {/* Website Settings */}
                  <div data-name="account-settings-website">
                    <h2 data-name="account-settings-website-title" className="text-xl font-bold text-neutral-900 mb-4">
                      Account settings
                    </h2>
                    <div data-name="account-settings-website-card" className="bg-white rounded-xl p-6 sm:p-8">
                      <div data-name="account-website-fields" className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                        <div data-name="account-field-language" className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-neutral-900">Website language</span>
                          <span className="text-sm text-neutral-600">English</span>
                        </div>
                        <div data-name="account-field-residence" className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-neutral-900">Country of residence</span>
                          <div data-name="residence-value" className="flex items-center gap-2">
                            <span className={`fi fi-${selectedCountry.code} fis w-5 h-3.5 rounded-sm`} />
                            <span className="text-sm text-neutral-600">{selectedCountry.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "My Complaints" && <MyComplaintsTab />}

              {activeTab === "Rankings" && <RankingsTab />}

              {activeTab === "My Reviews" && <MyReviewsTab />}

              {activeTab === "Settings" && (
                <>
                  <AccountSettings
                    onEditEmail={() => setEmailModalOpen(true)}
                    onEditPassword={() => setPasswordModalOpen(true)}
                    gender={gender}
                    setGender={setGender}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
                  <EmailSettingTab />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <PhotoUploadDialog
        open={photoModalOpen}
        onOpenChange={setPhotoModalOpen}
        onPhotoChange={setAvatarUrl}
      />
      <ChangeEmailDialog
        open={emailModalOpen}
        onOpenChange={setEmailModalOpen}
      />
      <ChangePasswordDialog
        open={passwordModalOpen}
        onOpenChange={setPasswordModalOpen}
      />
    </main>
  );
}
