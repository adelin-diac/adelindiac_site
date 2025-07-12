import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  description: "Adelin Diac Projects",
  title: "Projects | Adelin Diac",
  canonicalUrlRelative: "/projects",
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
