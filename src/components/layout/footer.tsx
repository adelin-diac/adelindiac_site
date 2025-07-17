import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground mt-auto">
      <p>© 2025 Adelin Diac</p>
      <a
        href="https://github.com/adelin-diac/adelindiac_site"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 transition-colors"
      >
        See the code
      </a>
    </footer>
  );
}
