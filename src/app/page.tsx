import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Home page test</div>
      <Link
        href={"/dashboard"}
        className={buttonVariants({ variant: "outline" })}
      >
        Dashboard
      </Link>
    </main>
  );
}
