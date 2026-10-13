import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Contents from "@/components/landing/Contents";
import Pricing from "@/components/landing/Pricing";

export default function Page() {
  return (
    <main className="min-h-screen text-white overflow-hidden">
      <Hero />
      <Benefits />
      <Contents />
      <Pricing />
    </main>
  );
}