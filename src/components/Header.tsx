import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, Menu } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";

export const kompetenzen = [
  { to: "/kompetenz/cybercrime", label: "Cybercrime" },
  { to: "/kompetenz/datenschutz-und-compliance", label: "Datenschutz & Compliance" },
  { to: "/kompetenz/gesellschafts-und-unternehmensrecht", label: "Gesellschafts- & Unternehmensrecht" },
  { to: "/kompetenz/immobilienrecht", label: "Immobilienrecht" },
  { to: "/kompetenz/private-clients-family-offices", label: "Private Clients & Family Offices" },
  { to: "/kompetenz/prozessfuhrung", label: "Prozessführung" },
  { to: "/kompetenz/wertpapier-und-kapitalmarktrecht", label: "Kapitalmarktrecht" },
  { to: "/kompetenz/kryptonachverfolgung-und-mittelherkunftsnachweis", label: "Kryptonachverfolgung" },
];

const today = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export const Header = () => {
  const { phone, phoneEnabled } = useSettings();
  const link = "text-[13px] tracking-wide text-foreground/75 hover:text-secondary transition-colors";

  return (
    <header className="bg-background">
      {/* Top strip */}
      <div className="bg-primary text-primary-foreground/80">
        <div className="container mx-auto max-w-7xl px-6 h-9 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase">
          <span className="hidden sm:inline">{today}</span>
          <span className="sm:hidden">Hamburg</span>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">Domstraße 15 · Hamburg</span>
            {phoneEnabled && <a href={`tel:${phone}`} className="hover:text-accent transition-colors">{phone}</a>}
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 lg:py-8 border-b border-border">
          <span className="hidden lg:block w-48 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Rechtsanwälte · Seit 2014</span>
          <Link to="/" className="text-center">
            <span className="block font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-primary">
              Korte <span className="italic text-secondary">&amp;</span> Partner
            </span>
            <span className="hidden md:block mt-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Wirtschaft · Vermögen · Digitales Recht</span>
          </Link>
          <div className="hidden lg:flex w-48 justify-end">
            <Link to="/kontakt">
              <Button className="rounded-none bg-secondary text-secondary-foreground hover:bg-primary h-10 px-5 text-[11px] tracking-[0.2em] uppercase">
                Termin vereinbaren
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-none border-primary/30" aria-label="Menü öffnen">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-background border-l border-border">
                <div className="flex flex-col gap-6 mt-8">
                  <SheetClose asChild><Link to="/" className="font-serif text-2xl">Korte <span className="italic text-secondary">&amp;</span> Partner</Link></SheetClose>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="rub" className="border-border">
                      <AccordionTrigger className="text-sm">Rechtsgebiete</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3 pl-2 text-sm">
                          {kompetenzen.map((k) => (
                            <SheetClose asChild key={k.to}><Link to={k.to}>{k.label}</Link></SheetClose>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex flex-col gap-3 text-sm">
                    <SheetClose asChild><Link to="/blog">Journal</Link></SheetClose>
                    <SheetClose asChild><Link to="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck">Fallberichte</Link></SheetClose>
                    <SheetClose asChild><Link to="/unsere-partner">Netzwerk</Link></SheetClose>
                    <SheetClose asChild><Link to="/stellenangebote">Karriere</Link></SheetClose>
                    <SheetClose asChild><Link to="/kontakt">Kontakt</Link></SheetClose>
                  </div>
                  <SheetClose asChild>
                    <Link to="/kontakt">
                      <Button className="w-full rounded-none bg-secondary text-secondary-foreground hover:bg-primary">Termin vereinbaren</Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Section nav */}
        <nav className="hidden lg:flex items-center justify-center gap-10 h-12 border-b-4 border-double border-primary/80">
          <Link to="/" className={link}>Titelseite</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className={`${link} flex items-center gap-1`}>
              Rechtsgebiete <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 min-w-[280px] rounded-none border-border bg-card">
              {kompetenzen.map((k) => (
                <DropdownMenuItem key={k.to} asChild><Link to={k.to} className="w-full">{k.label}</Link></DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/blog" className={link}>Journal</Link>
          <Link to="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck" className={link}>Fallberichte</Link>
          <Link to="/unsere-partner" className={link}>Netzwerk</Link>
          <Link to="/stellenangebote" className={link}>Karriere</Link>
          <Link to="/kontakt" className={link}>Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};
