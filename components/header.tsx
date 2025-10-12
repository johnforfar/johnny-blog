import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold">
          Johnny's Blog
        </Link>
      </div>
      <nav className="flex items-center space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/posts">Posts</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/about">About</Link>
        </Button>
      </nav>
    </header>
  );
}
