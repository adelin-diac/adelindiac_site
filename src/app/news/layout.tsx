import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  description: "Adelin Diac News",
  title: "News | Adelin Diac",
  canonicalUrlRelative: "/news",
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
