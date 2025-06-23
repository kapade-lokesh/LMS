"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { GithubIcon, Loader } from "lucide-react";
import React, { useTransition } from "react";
import { toast } from "sonner";

const LoginFrom = () => {
  const [githubPending, startGitubTransition] = useTransition();

  const signinWithGitHub = async () => {
    startGitubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signin with GitHub");
          },
          onError: () => {
            toast.error("Internal server error");
          },
        },
      });
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Welcome Back !</CardTitle>
          <CardDescription>Login with your Github Account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button
            onClick={signinWithGitHub}
            className="w-full"
            variant="outline"
          >
            {githubPending ? (
              <>
                <Loader className="size-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <GithubIcon className="size-4" />
                Sign in with Github
              </>
            )}
          </Button>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative bg-card px-2 z-10 text-muted-foreground">
              Or continue with
            </span>
          </div>

          <div className="grid grid-3 gap-3">
            <div className="grid grid-2 gap-3">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="lms@gmail.com" />
            </div>
            <Button>Continue with Email</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginFrom;
