import { useRef } from "react";
import heroImage from "@/assets/hero-environment.jpg";
import { ArrowRight, ShieldCheck, Recycle } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="hero" className="relative w-full">
      <div
        ref={ref}
        onMouseMove={onMove}
        className="relative h-[100svh] w-full overflow-hidden"
      >
        <img
          src={heroImage}
          alt="Environmental team at a secure hazardous waste facility"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/70" />
        <div className="container relative z-10 flex h-full items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary">Environmental Excellence</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
              Hazardous Waste Management & Site Remediation
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Compliant, cost‑effective solutions across the Middle East, Africa & Central Asia.
              Trusted by government and enterprise.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#services" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center rounded-md border border-input px-5 py-3 text-sm font-semibold transition hover:bg-accent hover:text-accent-foreground">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
