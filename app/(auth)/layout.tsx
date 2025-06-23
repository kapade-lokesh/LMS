import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import logo from "@/public/logic_looms_logo.svg";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="realtive flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft />
        Back
      </Link>

      <div className="flex w-full flex-col max-w-sm gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src={logo} alt="logo" width={36} height={36} />
          Logic Looms.
        </Link>
        {children}

        <div className="text-balance text-xs text-center text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <span className="hover:text-primary hover:underline">
            Terms of service
          </span>{" "}
          and{" "}
          <span className="hover:text-primary hover:underline">
            Privacy policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default layout;
