export default function Home() {
  console.log("The home page is fetched...");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>Hello. This is the new version of my website.</p>
      <p>
        For now, see my old version:{" "}
        <a className="underline" href="https://adelindiac.site" target="_blank">
          adelindiac.site
        </a>
      </p>
    </main>
  );
}
