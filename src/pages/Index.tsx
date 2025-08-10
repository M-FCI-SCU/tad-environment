import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import { CheckCircle2, Globe2, Leaf, Recycle, ShieldCheck } from "lucide-react";
import svcInternational from "@/assets/service-international.jpg";
import svcConsulting from "@/assets/service-consulting.jpg";
import svcHazardous from "@/assets/service-hazardous-mgmt.jpg";
import svcRemediation from "@/assets/service-remediation.jpg";
import imgSolutions from "@/assets/solutions-overview.jpg";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-primary"/><span>{children}</span></li>
);

const Index = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />

        <section id="about" className="py-20">
          <div className="container grid gap-10 md:grid-cols-2">
            <article>
              <h2 className="text-3xl font-bold">About TAD Environment</h2>
              <p className="mt-4 text-muted-foreground">
                TAD Environement provide a wide rango of services and cost effective solutions for hazardous waste and site remediation. With solid reputation for service excellence, TAD Environement is contracted by the US Army and operates in 17 countries spanning across the Middle East, Africa and Central Asia.
              </p>
              <p className="mt-4 text-muted-foreground">
                TAD Environment meets the challenges of protecting our environment directly, with state of the art facilities, highly experienced and dedicated personnel and skilled international partners all working together to package, transport and recycle most types of hazardous waste.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><Globe2 className="h-5 w-5 text-primary"/>17+ countries</div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/>US Army contracted</div>
              </div>
            </article>
            <aside className="rounded-xl border p-6 elev-card">
              <h3 className="text-xl font-semibold">Why choose us</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <Bullet>Compliance with Basel Convention & international regulations</Bullet>
                <Bullet>Cost‑effective solutions tailored to each project</Bullet>
                <Bullet>End‑to‑end services: packaging, transport, recycling, disposal</Bullet>
                <Bullet>Experienced teams and global partners</Bullet>
              </ul>
            </aside>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container">
            <header className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-bold">Services</h2>
              <p className="mt-3 text-muted-foreground">International hazardous waste management, consulting, site remediation and more.</p>
            </header>
          </div>
        </section>

        {/* International Hazardous Waste Management */}
        <section className="py-20">
          <div className="container grid gap-10 md:grid-cols-2 md:items-center">
            <article>
              <h3 className="text-2xl font-semibold">International Hazardous Waste Management</h3>
              <p className="mt-4 text-muted-foreground">
                TAD Environment specializes in International hazardous waste management services and disposal. We have successfully shipped and properly disposed more than 20,000 tons of hazardous waste from 17 countries all over the world.
              </p>
              <p className="mt-4 text-muted-foreground">
                TAD Environement currently accepts all classes of hazardous waste (with the exception of explosive and radioactive materials). We are fully insured and will accept full liability once the waste is transferred to our control. Your waste will be managed, shipped, and disposed of in accordance with local and international regulations such as the Basel Convention.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3">
                <Bullet>PCB and Pesticide Disposal</Bullet>
                <Bullet>Profiling and Sampling</Bullet>
                <Bullet>Packaging / Repackaging</Bullet>
                <Bullet>Interim storage</Bullet>
                <Bullet>Obtaining approvals and permits for the transportation of waste including export, import and transit</Bullet>
                <Bullet>Shipping with International Maritime Organization standards</Bullet>
                <Bullet>Final disposal, in accordance with the European Union regulations</Bullet>
              </ul>
            </article>
            <div className="overflow-hidden">
              <img
                src={svcInternational}
                alt="International hazardous waste logistics and compliance"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Consulting */}
        <section className="py-20">
          <div className="container grid gap-10 md:grid-cols-2 md:items-center">
            <div className="order-2 overflow-hidden md:order-1">
              <img
                src={svcConsulting}
                alt="Environmental consulting, compliance review, and staff training"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <article className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold">Consulting</h3>
              <p className="mt-3 text-muted-foreground">
                For many companies, environmental management can be expensive, time‑consuming and even a baffling proposition. Our long experience in hazardous waste management allows us to interpret both local and international law to ensure that your company is safe in the knowledge that we will treat your needs according to the best cost and environmental options available. We will work closely with you at each stage to ensure satisfaction and adherence to best practices, including education and training of your staff.
              </p>
              <p className="mt-3 text-muted-foreground">
                We know your business is unique. By building and developing a long relationship with you, we can develop a strategic plan on how your business can benefit from an environmental audit that informs a comprehensive environmental and safety policy.
              </p>
              <h4 className="mt-4 font-semibold">Areas of Consulting</h4>
              <ul className="mt-3 space-y-2">
                <Bullet>Hazardous Waste Management</Bullet>
                <Bullet>Track Hazardous Waste</Bullet>
                <Bullet>Sampling</Bullet>
                <Bullet>Cradle‑to‑Grave</Bullet>
                <Bullet>Segregation</Bullet>
                <Bullet>Packaging and labeling</Bullet>
              </ul>
            </article>
          </div>
        </section>

        {/* Hazardous Waste Management */}
        <section className="py-20">
          <div className="container grid gap-10 md:grid-cols-2 md:items-center">
            <article>
              <h3 className="text-2xl font-semibold">Hazardous Waste Management</h3>
              <p className="mt-3 text-muted-foreground">
                Working with our strategic partners in Europe, TAD Environment specializes in hazardous waste removal and disposal. We perform waste identification, packaging, sorting, loading, shipping and final disposal. All materials are processed, shipped, and disposed of in accordance with local and international regulations.
              </p>
              <h4 className="mt-4 font-semibold">Waste management services include</h4>
              <ul className="mt-3 space-y-2">
                <Bullet>Waste Profiling and Sampling (including unknown waste)</Bullet>
                <Bullet>Packaging / Repackaging Hazardous Waste</Bullet>
                <Bullet>Interim Storage</Bullet>
                <Bullet>Obtaining necessary approvals and permits</Bullet>
                <Bullet>Shipping under the International Maritime Organization standards</Bullet>
                <Bullet>Final disposal, in accordance with the European Union regulations</Bullet>
                <Bullet>PCB and Pesticide Disposal</Bullet>
              </ul>
            </article>
            <div className="overflow-hidden">
              <img
                src={svcHazardous}
                alt="Safe handling and packaging of hazardous waste barrels in a compliant facility"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Site Remediation */}
        <section className="py-20">
          <div className="container grid gap-10 md:grid-cols-2 md:items-center">
            <div className="order-2 overflow-hidden md:order-1">
              <img
                src={svcRemediation}
                alt="Site remediation and soil cleanup operations with containment"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <article className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold">Site Remediation</h3>
              <p className="mt-3 text-muted-foreground">
                TAD Environment remediates contaminated sites so they are once again ready for safe commercial use. Starting with a thorough site assessment, carefully gathered analytical data is reviewed to determine the extent of contamination. With decades of collective experience, our teams operate in harsh environments to deliver practical, high‑quality solutions throughout every project phase.
              </p>
            </article>
          </div>
        </section>

        <section id="solutions" className="py-20">
          <div className="container">
            <header className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-bold">Solutions</h2>
              <p className="mt-3 text-muted-foreground">Our solutions, your peace of mind.</p>
            </header>
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <article className="prose max-w-none prose-headings:mt-0 prose-p:my-4 prose-li:my-1 dark:prose-invert">
                <p>As environmental accountability moves to the forefront, regulations and repercussions become increasingly stringent. Our focus is to accurately interpret both local and international regulations and provide compliant, cost‑effective solutions.</p>
                <p>Corporations and government agencies rely on our expertise to continue operations while meeting all laws. We currently operate in 17 countries across the Middle East, Africa, and SW/Central Asia, maintaining strong relationships with local authorities to deliver uninterrupted services for over five years.</p>
              </article>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={imgSolutions}
                  alt="Overview of environmental solutions across the Middle East, Africa, and Central Asia"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-8">
              <a href="#hero" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90">Back to top</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} TAD Environment. All rights reserved.</p>
          <div className="flex items-center gap-6 text-foreground/70">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
