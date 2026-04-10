"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/components/auth-provider";

type View = "login" | "signup" | "forgot";

function AppleIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function BrandedPanel() {
  return (
    <div
      data-name="login-branded-panel"
      className="hidden md:flex flex-col items-center justify-between w-[52%] shrink-0 rounded-l-xl overflow-hidden relative pt-[54px] pb-10 px-10"
      style={{
        backgroundImage: "url(/login-graphic/coinbet-login-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div
        data-name="login-brand-logo"
        className="flex items-center gap-2.5 z-10"
      >
        <Image
          src="/icons/logo-white.svg"
          alt="CoinBets"
          width={150}
          height={31}
          className="w-[150px]"
        />
      </div>

      {/* 3D Coin Icon */}
      <div
        data-name="login-brand-icon"
        className="z-10 flex-1 flex items-center justify-center"
      >
        <Image
          src="/login-graphic/coinbet-login.png"
          alt=""
          width={150}
          height={150}
          className="w-[150px] h-auto drop-shadow-2xl"
        />
      </div>

      {/* Tagline */}
      <div
        data-name="login-brand-tagline"
        className="z-10 text-center flex flex-col gap-1.5"
      >
        <p className="text-xs font-medium text-white leading-[1.4]">
          No affiliate links. No paid rankings. No casino Influence.
        </p>
        <p className="text-xs font-normal text-white/70 leading-[1.4]">
          Just honest reviews, verified data, and a community exposing what
          others won&apos;t.
        </p>
      </div>
    </div>
  );
}

function SocialButtons({ onLogin }: { onLogin: () => void }) {
  return (
    <div data-name="social-buttons" className="flex flex-col gap-3">
      <Button
        variant="default"
        className="w-full h-12 gap-3 rounded-lg text-sm font-medium"
        onClick={onLogin}
      >
        <AppleIcon />
        Continue with Apple
      </Button>
      <Button
        variant="outline"
        className="w-full h-12 gap-3 rounded-lg text-sm font-medium"
        onClick={onLogin}
      >
        <GoogleIcon />
        Continue with Google
      </Button>
    </div>
  );
}

function Divider({ text }: { text: string }) {
  return (
    <div data-name="form-divider" className="relative flex items-center py-2">
      <div
        data-name="divider-line-left"
        className="flex-1 border-t border-neutral-200"
      />
      <span className="px-3 text-xs text-neutral-400">{text}</span>
      <div
        data-name="divider-line-right"
        className="flex-1 border-t border-neutral-200"
      />
    </div>
  );
}

function LoginView({
  onForgot,
  onSignup,
  onLogin,
}: {
  onForgot: () => void;
  onSignup: () => void;
  onLogin: () => void;
}) {
  return (
    <div data-name="login-view" className="flex flex-col gap-3.5">
      <SocialButtons onLogin={onLogin} />
      <Divider text="or Continue with your email or user" />

      <Input
        type="text"
        placeholder="Email or Username"
        className="h-12 rounded-lg border-neutral-200 text-sm"
      />
      <Input
        type="password"
        placeholder="Password"
        className="h-12 rounded-lg border-neutral-200 text-sm"
      />

      <div
        data-name="login-remember-row"
        className="flex items-center justify-between pt-1"
      >
        <div data-name="login-remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label
            htmlFor="remember"
            className="text-sm font-semibold text-neutral-900 cursor-pointer"
          >
            Remember me
          </Label>
        </div>
        <button
          onClick={onForgot}
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Forgot password
        </button>
      </div>

      <Button
        onClick={onLogin}
        className="w-full h-12 rounded-lg text-sm font-semibold mt-1 bg-[#003EB6] hover:bg-[#003EB6]/90 text-white"
      >
        Log in
      </Button>

      <p className="text-center text-sm text-neutral-500 pt-1">
        Don&apos;t have an account?{" "}
        <button
          onClick={onSignup}
          className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Sign Up.
        </button>
      </p>
    </div>
  );
}

function SignupView({ onLogin, onSocialLogin }: { onLogin: () => void; onSocialLogin: () => void }) {
  return (
    <div data-name="signup-view" className="flex flex-col gap-3.5">
      <SocialButtons onLogin={onSocialLogin} />
      <Divider text="or sign up with your email" />

      <Input
        type="email"
        placeholder="Email"
        className="h-12 rounded-lg border-neutral-200 text-sm"
      />
      <Input
        type="text"
        placeholder="Username"
        className="h-12 rounded-lg border-neutral-200 text-sm"
      />
      <Input
        type="password"
        placeholder="Password"
        className="h-12 rounded-lg border-neutral-200 text-sm"
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        className="h-12 rounded-lg border-neutral-200 text-sm"
      />

      <Button className="w-full h-12 rounded-lg text-sm font-semibold mt-1 bg-[#003EB6] hover:bg-[#003EB6]/90 text-white">
        Create Account
      </Button>

      <p className="text-center text-sm text-neutral-500 pt-1">
        Already have an account?{" "}
        <button
          onClick={onLogin}
          className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Log in.
        </button>
      </p>
    </div>
  );
}

function ForgotView({ onLogin }: { onLogin: () => void }) {
  return (
    <div data-name="forgot-view" className="flex flex-col gap-4">
      <button
        onClick={onLogin}
        className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-700 transition-colors w-fit"
      >
        <ArrowLeft className="size-4" />
        Back to Login
      </button>

      <div data-name="forgot-description" className="flex flex-col gap-2">
        <p className="text-sm text-neutral-600 leading-relaxed">
          Enter the email address associated with your account and we&apos;ll
          send you a link to reset your password.
        </p>
      </div>

      <Input
        type="email"
        placeholder="Email address"
        className="h-12 rounded-lg border-neutral-200 text-sm"
      />

      <Button className="w-full h-12 rounded-lg text-sm font-semibold bg-[#003EB6] hover:bg-[#003EB6]/90 text-white">
        Send Reset Link
      </Button>
    </div>
  );
}

const VIEW_TITLES: Record<View, string> = {
  login: "Login to Your Account",
  signup: "Create Your Account",
  forgot: "Reset Your Password",
};

export function useLoginDialog() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}

export function LoginDialogContent({
  open,
  onOpenChange,
  redirectTo,
}: {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  redirectTo?: string;
}) {
  const [view, setView] = useState<View>("login");
  const router = useRouter();
  const { login } = useAuth();

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
    if (!isOpen) setView("login");
  };

  const handleLogin = () => {
    login();
    onOpenChange(false);
    router.push(redirectTo ?? "/profile");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        data-section="login-dialog"
        className="sm:max-w-[860px] p-0 gap-0 overflow-hidden"
      >
        <div data-name="login-layout" className="flex min-h-[560px]">
          {/* Left branded panel */}
          <BrandedPanel />

          {/* Right form panel */}
          <div
            data-name="login-form-panel"
            className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto"
          >
            <DialogHeader className="items-center pb-5">
              <DialogTitle className="text-xl font-bold text-neutral-900">
                {VIEW_TITLES[view]}
              </DialogTitle>
            </DialogHeader>

            {view === "login" && (
              <LoginView
                onForgot={() => setView("forgot")}
                onSignup={() => setView("signup")}
                onLogin={handleLogin}
              />
            )}
            {view === "signup" && (
              <SignupView onLogin={() => setView("login")} onSocialLogin={handleLogin} />
            )}
            {view === "forgot" && (
              <ForgotView onLogin={() => setView("login")} />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function LoginDialog() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <Link
        href="/profile"
        data-name="nav-user-avatar"
        className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-neutral-100 transition-colors"
      >
        <Image
          src="/icons/default-avatar.svg"
          alt="Profile"
          width={32}
          height={32}
          className="size-8 rounded-full"
        />
        <span className="hidden sm:block text-sm font-semibold text-neutral-900">
          Coinbet User
        </span>
      </Link>
    );
  }

  return (
    <>
      <ShimmerButton
        data-section="login-trigger"
        onClick={() => setOpen(true)}
        shimmerColor="#e6b830"
        shimmerSize="0.05em"
        shimmerDuration="3s"
        borderRadius="8px"
        background="rgba(23, 23, 23, 1)"
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium"
      >
        <span>Login</span>
        <Image
          src="/icons/login.svg"
          alt=""
          width={16}
          height={16}
          className="shrink-0"
        />
      </ShimmerButton>

      <LoginDialogContent open={open} onOpenChange={setOpen} />
    </>
  );
}
