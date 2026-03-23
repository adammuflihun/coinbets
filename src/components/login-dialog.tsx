"use client";

import Image from "next/image";
import { useState } from "react";
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

export function LoginDialog() {
  const [open, setOpen] = useState(false);

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
          src="/icon-login.svg"
          alt=""
          width={16}
          height={16}
          className="shrink-0"
        />
      </ShimmerButton>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          data-section="login-dialog"
          className="sm:max-w-[420px] p-6 gap-0"
        >
          <DialogHeader className="items-center pb-5">
            <DialogTitle className="text-xl font-bold text-neutral-900">
              Login to Your Account
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3.5">
            {/* Continue with Apple */}
            <Button
              variant="default"
              className="w-full h-12 gap-3 rounded-lg text-sm font-medium"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              Continue with Apple
            </Button>

            {/* Continue with Google */}
            <Button
              variant="outline"
              className="w-full h-12 gap-3 rounded-lg text-sm font-medium"
            >
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
              Continue with Google
            </Button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-1 border-t border-neutral-200" />
              <span className="px-3 text-xs text-neutral-400">
                or Continue with your email or user
              </span>
              <div className="flex-1 border-t border-neutral-200" />
            </div>

            {/* Email Input */}
            <Input
              type="text"
              placeholder="Email or Username"
              className="h-12 rounded-lg border-neutral-200 text-sm"
            />

            {/* Password Input */}
            <Input
              type="password"
              placeholder="Password"
              className="h-12 rounded-lg border-neutral-200 text-sm"
            />

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-sm font-semibold text-neutral-900 cursor-pointer"
                >
                  Remember me
                </Label>
              </div>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password
              </button>
            </div>

            {/* Log in Button */}
            <Button className="w-full h-12 rounded-lg text-sm font-semibold mt-1 bg-[#003EB6] hover:bg-[#003EB6]/90 text-white">
              Log in
            </Button>

            {/* Sign Up */}
            <p className="text-center text-sm text-neutral-500 pt-1">
              Don&apos;t have an account?{" "}
              <button className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
                Sign Up.
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
