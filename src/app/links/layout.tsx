import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  description: "Personal Coolify service dashboard",
  title: "Links",
  canonicalUrlRelative: "/links",
  robots: { index: false, follow: false },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
