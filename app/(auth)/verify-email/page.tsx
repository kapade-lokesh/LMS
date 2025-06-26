"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader2, Send } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [emailPending, startEmailTransition] = useTransition();
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") as string;
  const isOtpComplete = otp.length === 6;

  const verifyOTP = () => {
    startEmailTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            toast.success("Otp veryfied");
          },
          onError: () => {
            toast.error("Please Provide valid Otp");
          },
        },
      });
    });
  };

  return (
    <>
      <Card className="w-full max-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Please Check Your Email</CardTitle>
          <CardDescription>
            We send verification email code to your email address. Please open
            the email and submit code below
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex flex-col items-center space-y-2">
            <InputOTP
              value={otp}
              onChange={(value) => setOtp(value)}
              maxLength={6}
              className="gap-2"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            <p className="text-sm text-muted-foreground">
              Enter 6 digit code sent to your email
            </p>
          </div>

          <Button
            onClick={verifyOTP}
            className="w-full"
            disabled={emailPending || !isOtpComplete}
          >
            {emailPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                verifying...
              </>
            ) : (
              <>
                <Send className="size-4" />
                Verify Account
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default VerifyEmail;
