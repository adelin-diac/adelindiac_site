import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  description: "Adelin Diac Blogs",
  title: "Blogs | Adelin Diac",
  canonicalUrlRelative: "/blogs",
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
