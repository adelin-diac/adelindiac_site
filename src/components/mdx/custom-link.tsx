import Link from "next/link";

// TODO: Proper way to implement this link (or better)
// TODO: Fetch blogs info from a file (to display links author date etc)
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  noopener?: boolean;
  noreferrer?: boolean;
}

const CustomLink = ({
  href,
  children,
  noopener = true,
  noreferrer = true,
}: CustomLinkProps) => {
  const className =
    "text-blue-500 underline hover:cursor-pointer hover:no-underline";

  const rel = [noopener && "noopener", noreferrer && "noreferrer"]
    .filter(Boolean)
    .join(" ");

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel={rel} className={className}>
      {children}
    </a>
  );
};

export default CustomLink;
