"use client";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/themeToggel";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Ifeature {
  title: string;
  description: string;
  icon: string;
}

const features: Ifeature[] = [
  {
    title: "Comprehensive Courses",
    description:
      "Access a wide range of carefully curated cources designed by industry experts",
    icon: "📗",
  },

  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content , quizzes, and assigments to enhance your learings",
    icon: "🤖",
  },

  {
    title: "Progress Traking",
    description:
      "Monitor your progress with and achievements with detailed analytics and personalized dashboards.",
    icon: "📊",
  },

  {
    title: "Community Support",
    description:
      "Joined a vibrant community of learners and instructors to collaborate and share knowledge",
    icon: "👥",
  },
];

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
    <>
      <section className="relative p-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge>The Future Of Online Education </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevet Your Learning Experience
          </h1>

          <p className="max-w-[700px] md:text-xl text-muted-foreground">
            Discover a new way to learn with our morden, interactive learning
            management sysyem. Access hig-quality cources anytime, anyware.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link
              href="/courses"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Explore Courses
            </Link>

            <Link
              href="/login"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hove:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
