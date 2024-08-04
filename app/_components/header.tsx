import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full px-4 lg:px-12 py-6 border-b select-none">
      <h1 className="text-xl">
        <Link href="#">Bronto</Link>
      </h1>
      <div className="hidden lg:flex justify-center w-full lg:w-auto gap-6 text-sm">
        <Link href="#" className="hover:text-accent-foreground transition-colors">Features</Link>
        <Link href="#" className="hover:text-accent-foreground transition-colors">Documentation</Link>
        <Link href="#" className="hover:text-accent-foreground transition-colors">Contribute</Link>
        <Link href="#" className="hover:text-accent-foreground transition-colors">Community</Link>
      </div>

      <div className="flex justify-between gap-2">
        <Button size="sm" className="primary-button group inline-flex transition ease-in-out duration-150 hover:bg-secondary text-primary border border-accent">
          Deploy now
          <span className="mx-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">→</span>
        </Button>
      </div>
    </div>
  );
}