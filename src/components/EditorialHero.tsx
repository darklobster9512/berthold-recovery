import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

export interface HeroBreadcrumbItem {
  label: string;
  href?: string;
}

interface EditorialHeroProps {
  eyebrow: string;
  breadcrumb?: HeroBreadcrumbItem[];
  title: ReactNode;
  lead?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
  centered?: boolean;
  minHeight?: string;
  withHeader?: boolean;
  image?: string;
}

/** Magazine-style page opener used on all subpages. */
export const EditorialHero = ({
  eyebrow,
  breadcrumb,
  title,
  lead,
  meta,
  children,
  withHeader = true,
  image,
}: EditorialHeroProps) => {
  return (
    <>
      {withHeader && <Header />}
      <section className="bg-background">
        <div className="container mx-auto px-6 max-w-5xl pt-14 pb-12 text-center">
          {breadcrumb && breadcrumb.length > 0 && (
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-6">
              {breadcrumb.map((b, i) => {
                const last = i === breadcrumb.length - 1;
                return (
                  <span key={i}>
                    {b.href && !last ? <Link to={b.href} className="hover:text-secondary">{b.label}</Link> : <span className={last ? "text-secondary" : ""}>{b.label}</span>}
                    {!last && <span className="mx-2">/</span>}
                  </span>
                );
              })}
            </p>
          )}
          <p className="kicker mb-6">{eyebrow}</p>
          <h1 className="font-serif text-[2rem] md:text-6xl leading-[1.1] text-primary">{title}</h1>
          {lead && <p className="mt-8 font-serif italic text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">{lead}</p>}
          {meta && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{meta}</div>
          )}
          {children && <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">{children}</div>}
        </div>
        {image ? (
          <figure className="container mx-auto px-6 max-w-7xl">
            <img src={image} alt="" className="w-full h-[220px] md:h-[440px] object-cover" />
          </figure>
        ) : (
          <div className="container mx-auto px-6 max-w-7xl"><div className="border-t-4 border-double border-primary" /></div>
        )}
      </section>
    </>
  );
};
