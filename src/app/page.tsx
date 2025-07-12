import Achievments from "@/components/landing-page/achievments";
import CallCrewLink from "@/components/landing-page/callcrew-link";
import Career from "@/components/landing-page/career";
import HeroSection from "@/components/landing-page/hero-section";

export default function Home() {
  return (
    <section>
      <CallCrewLink />
      <div className="px-4 md:px-20 max-w-6xl mx-auto flex flex-col items-center justify-center gap-y-50 py-20">
        <HeroSection />

        <Achievments />
        {/* <Career /> */}
      </div>
    </section>
  );
}
