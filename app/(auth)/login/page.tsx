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
import { GithubIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Welcome Back !</CardTitle>
          <CardDescription>Login with your Github Account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button className="w-full" variant="outline">
            <GithubIcon className="size-4" />
            Sign in with Github
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

export default page;
