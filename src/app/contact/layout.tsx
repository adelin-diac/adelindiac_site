import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  description: "Adelin Diac Contact",
  title: "Contact | Adelin Diac",
  canonicalUrlRelative: "/contact",
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
