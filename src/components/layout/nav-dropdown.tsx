"use client";

import Link from "next/link";
import { ChevronDown, FileText, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  {
    label: "Blog",
    href: "/blogs",
    icon: FileText,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: Briefcase,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-100"
        >
          <span className="hidden md:block">More</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {NAV_LINKS.map((link) => (
          <DropdownMenuItem asChild key={link.label} className="cursor-pointer">
            <Link href={link.href} className="flex items-center gap-2 w-full">
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
