import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto px-6 max-w-3xl py-28 text-center">
        <p className="kicker mb-6">Seite nicht gefunden</p>
        <h1 className="font-serif text-7xl md:text-9xl text-primary">404</h1>
        <p className="mt-6 font-serif italic text-xl text-foreground/70">Diese Ausgabe ist leider vergriffen.</p>
        <Link to="/" className="inline-block mt-10 text-[11px] uppercase tracking-[0.24em] text-secondary border-b border-accent pb-1">Zur Titelseite</Link>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
