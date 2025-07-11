import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";

type Props = {
  href: string;
  className: string;
  variant: VariantProps<typeof buttonVariants>["variant"];
};

export default function BackButton({ href, className, variant }: Props) {
  return (
    <Button variant={variant} className={className} asChild>
      <Link href={href} prefetch={true}>
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>
    </Button>
  );
}
