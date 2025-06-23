"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggel";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const { data: session } = authClient.useSession();

  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("sign out sucessfully");
          router.push("/login");
        },
      },
    });
  };
  return (
    <div className=" relative flex flex-col min-h-svh items-center justify-center">
      <ThemeToggle />
      <div>
        {" "}
        {session ? (
          <>
            {session.user.name}
            <Button onClick={handleSignOut}>Logout</Button>
          </>
        ) : (
          <Button>Login</Button>
        )}
      </div>
    </div>
  );
}
