import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="realtive flex min-h-svh flex-col items-center justify-center">
      <Link href="/" className={buttonVariants({
        variant:"outline",
        className:"absolute top-4 left-4"
      })}>
        <ArrowLeft />
        Back
      </Link>

      <div className="flex w-full flex-col max-w-sm gap-6">{children}</div>
    </div>
  );
};

export default layout;
