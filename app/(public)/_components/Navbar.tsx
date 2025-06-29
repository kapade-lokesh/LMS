"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/public/logic_looms_logo.svg";
import { ThemeToggle } from "@/components/ui/themeToggel";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import UserDropdown from "./UserDropdown";

const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdorp-blur-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex items-center min-h-16 px-4 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center space-x-2 mr-4">
          <Image src={logo} alt="" className="size-9" />
          <span className="font-bold">Logic Looms.</span>
        </Link>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-2">
            {navigationItems.map((navitem, index) => (
              <Link
                key={navitem.name}
                href={navitem.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {navitem.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            {isPending ? null : session ? (
              <UserDropdown
                name={
                  session?.user?.name && session?.user?.name.length > 0
                    ? session?.user?.name
                    : session?.user?.email.split("@")[0]
                }
                email={session.user.email}
                image={ session?.user?.image ??
                      `https://avatar.vercel.sh/${session?.user.email}`}
              />
            ) : (
              <>
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>

                <Link href="/login" className={buttonVariants()}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
