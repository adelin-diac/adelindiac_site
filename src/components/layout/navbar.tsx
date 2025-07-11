import Link from "next/link";

import { Button } from "../ui/button";
import { Newspaper } from "lucide-react";
import NavDropdown from "./nav-dropdown";

export default function Navbar() {
  return (
    <nav className="bg-background backdrop-blur-md border-b border-foreground/10 sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-bold text-foreground">
              Adelin Diac
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              className="cursor-pointer hover:scale-102 transition-all duration-100"
              asChild
            >
              <Link href="/news" className="flex items-center gap-2">
                <span className="hidden md:block">Press Coverage</span>
                <Newspaper />
              </Link>
            </Button>
            {/* TODO: Add NavDropdown */}
            {/* <NavDropdown /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
