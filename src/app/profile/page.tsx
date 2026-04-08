"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Camera, LogOut, Pencil, Upload, ChevronDown, Mail, Lock, Copy, Check, CircleCheck } from "lucide-react";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import "flag-icons/css/flag-icons.min.css";

const tabs = [
  {
    label: "My Profile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "My Complaints",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Rankings",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    label: "My Reviews",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Email Setting",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const stats = [
  { label: "Threads started", value: 0 },
  { label: "Forum Posts", value: 0 },
  { label: "Threads started", value: 0 },
  { label: "User Reviews", value: 0 },
  { label: "Approved complaints", value: 0 },
  { label: "Tournaments joined", value: 0 },
];

function RankBadgeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L17.09 5.09L21.5 4.5L22 8.91L26 11L24.18 14L26 17L22 19.09L21.5 23.5L17.09 22.91L14 26L10.91 22.91L6.5 23.5L6 19.09L2 17L3.82 14L2 11L6 8.91L6.5 4.5L10.91 5.09L14 2Z" fill="#1B4D7A" stroke="#1B4D7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14L12 17L19 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

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

/* ── Account Settings Section ── */
function AccountSettings({
  onEditEmail,
  onEditPassword,
}: {
  onEditEmail: () => void;
  onEditPassword: () => void;
}) {
  // Profile link / username
  const [username, setUsername] = useState("coinbet-user");
  const [savedUsername, setSavedUsername] = useState("coinbet-user");
  const [editingUsername, setEditingUsername] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [copied, setCopied] = useState(false);

  // Gender
  const [gender, setGender] = useState("");
  const [genderOpen, setGenderOpen] = useState(false);

  // Country
  const [selectedCountry, setSelectedCountry] = useState(allCountries.find(c => c.code === "id")!);
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

      {/* Account Settings - Website */}
      <div data-name="account-settings-website">
        <h2 data-name="account-settings-website-title" className="text-xl font-bold text-neutral-900 mb-4">
          Account settings
        </h2>
        <div data-name="account-settings-website-card" className="bg-white rounded-xl p-6 sm:p-8">
          <div data-name="account-website-fields" className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            {/* Website language */}
            <div data-name="account-field-language" className="flex flex-col gap-1">
              <span className="text-sm font-bold text-neutral-900">Website language</span>
              <span className="text-sm text-neutral-600">English</span>
            </div>

            {/* Country of residence */}
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

  // Avatar state
  const [avatarUrl, setAvatarUrl] = useState("/icons/default-avatar.svg");

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <main data-section="profile" className="flex-1">
      {/* Hero section with dark background */}
      <section
        data-section="profile-hero"
        className="relative bg-[#020202] overflow-hidden"
      >
        {/* Blurred SVG background */}
        <div data-name="profile-hero-bg" className="absolute inset-0">
          <Image
            src="/hero/all-casino.svg"
            alt=""
            fill
            className="object-cover object-top opacity-80"
            priority
          />
        </div>

        {/* Tabs */}
        <div
          data-name="profile-tabs"
          className="relative z-10 site-container py-6 sm:py-8"
        >
          <div
            data-name="profile-tab-row"
            className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.label;
              return (
                <button
                  key={tab.label}
                  data-name={`profile-tab-${tab.label.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-white text-neutral-900 border-2 border-[#E6B830] shadow-md"
                      : "bg-white text-neutral-700 border-2 border-transparent hover:border-neutral-200"
                  }`}
                >
                  <span className={`${isActive ? "text-neutral-900" : "text-neutral-500"}`}>
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

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
                  className="absolute bottom-2 left-6"
                >
                  <RankBadgeIcon />
                </div>

                {/* Camera button */}
                <button
                  data-name="profile-camera-btn"
                  onClick={() => setPhotoModalOpen(true)}
                  className="absolute bottom-2 right-4 w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm hover:bg-neutral-50 transition-colors cursor-pointer"
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
                  <span className="text-sm font-bold text-neutral-900"></span>
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
                    <span className="fi fi-id fis w-5 h-3.5 rounded-sm" />
                    Indonesia
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

              {/* Account Settings */}
              <AccountSettings
                onEditEmail={() => setEmailModalOpen(true)}
                onEditPassword={() => setPasswordModalOpen(true)}
              />
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
