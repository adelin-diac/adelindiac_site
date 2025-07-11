import CallCrewLink from "@/components/landing-page/callcrew-link";
import HeroSection from "@/components/landing-page/hero-section";

export default function Home() {
  return (
    <main>
      <CallCrewLink />
      <HeroSection />
      <div className="text-center text-muted-foreground">
        More coming soon...
      </div>
    </main>
  );
}
