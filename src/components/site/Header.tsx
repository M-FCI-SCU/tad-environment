import { Link } from "react-router-dom";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-3" aria-label="TAD Environment home">
          <img
            src="/images/logo.svg"
            alt="TAD Environment logo"
            className="h-12 w-auto"
            loading="lazy"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="#services" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition">
            Our Services
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
