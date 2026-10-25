import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Section } from "@/components/ui/section";
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, Star, ArrowRight, AlertTriangle, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSettings } from "@/hooks/useSettings";
import { EditorialHero } from "@/components/EditorialHero";
import heroImage from "@/assets/contact-hero-bg.jpg";

// recovery-panel backend (public/publishable key)
const RECOVERY_PANEL_URL = "https://pcfmaslrlferrnoopgqn.supabase.co";
const RECOVERY_PANEL_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZm1hc2xybGZlcnJub29wZ3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3NTI1NTAsImV4cCI6MjEwNDMyODU1MH0.bQgDplht-2xDpEwkEjn6ihON8yMxMMun78t9Hjm0Pgc";

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(1, 'Telefonnummer ist erforderlich'),
  topic: z.string().min(1, 'Bitte wählen Sie ein Thema aus'),
  damage_amount: z.string().optional(),
  message: z.string().min(1, 'Bitte geben Sie eine Nachricht ein'),
  consent: z.boolean().refine((val) => val === true, 'Sie müssen der Datenschutzerklärung zustimmen'),
  honeypot: z.string().max(0, 'Bot detected'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Kontakt() {
  const { toast } = useToast();
  const { phone, phoneEnabled } = useSettings();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStartTime, setSubmitStartTime] = useState<number>(0);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      topic: '',
      damage_amount: '',
      message: '',
      consent: false,
      honeypot: '',
    },
  });

  // Set page title and handle job parameter
  useEffect(() => {
    document.title = 'Kontakt | Berthold & Partner';
    
    // Check for job query parameter and prefill message
    const searchParams = new URLSearchParams(location.search);
    const jobParam = searchParams.get('job');
    
    if (jobParam && !form.getValues('message')) {
      let messageText = '';
      
      switch (jobParam) {
        case 'initiativbewerbung':
        case 'initiativbewerbung':
          messageText = `Initiativbewerbung

Sehr geehrte Damen und Herren,

hiermit möchte ich mich initiativ bei Ihrer Kanzlei bewerben.

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
        case 'ra-gesellschaftsrecht':
          messageText = `Bewerbung: Rechtsanwalt (m/w/d) Gesellschafts- und Unternehmensrecht

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Rechtsanwalt (m/w/d) für Gesellschafts- und Unternehmensrecht.

Kurz zu mir:
- 
- 
- 

Gerne stelle ich mich Ihnen in einem persönlichen Gespräch vor.

Mit freundlichen Grüßen`;
          break;
        case 'ra-prozessfuehrung':
          messageText = `Bewerbung: Rechtsanwalt (m/w/d) Prozessführung/Litigation

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Rechtsanwalt (m/w/d) für Prozessführung/Litigation.

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
        case 'ra-datenschutz':
          messageText = `Bewerbung: Rechtsanwalt (m/w/d) Datenschutz & Compliance

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Rechtsanwalt (m/w/d) für Datenschutz & Compliance.

Kurz zu mir:
- 
- 
- 

Gerne stelle ich mich Ihnen in einem persönlichen Gespräch vor.

Mit freundlichen Grüßen`;
          break;
        case 'referendar':
          messageText = `Bewerbung: Referendar / Wissenschaftlicher Mitarbeiter (m/w/d)

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Referendar / Wissenschaftlicher Mitarbeiter (m/w/d).

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
        case 'paralegal':
          messageText = `Bewerbung: Rechtsanwaltsfachangestellte / Paralegal (m/w/d)

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Rechtsanwaltsfachangestellte / Paralegal (m/w/d).

Kurz zu mir:
- 
- 
- 

Gerne stelle ich mich Ihnen in einem persönlichen Gespräch vor.

Mit freundlichen Grüßen`;
          break;
        case 'legal-tech-werkstudent':
          messageText = `Bewerbung: Werkstudent:in Legal Tech / IT (m/w/d)

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Werkstudent:in Legal Tech / IT (m/w/d).

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
        default:
          // For any other job parameter
          messageText = `Bewerbung: ${jobParam}

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position.

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
      }
      
      if (messageText) {
        form.setValue('message', messageText);
        form.setValue('topic', 'Bewerbung/Karriere');
      }
    }
  }, [location.search, form]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const nameParts = data.name.trim().split(/\s+/);
      const lastNamePart = nameParts.length > 1 ? nameParts.pop() : undefined;
      const last_name = lastNamePart ?? '-';
      const first_name = nameParts.join(' ');

      const response = await fetch(`${RECOVERY_PANEL_URL}/functions/v1/contact-submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: RECOVERY_PANEL_ANON_KEY,
          Authorization: `Bearer ${RECOVERY_PANEL_ANON_KEY}`,
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email: data.email,
          phone: data.phone || null,
          topic: data.topic,
          damage_amount: data.damage_amount || null,
          message: data.message,
          source: 'berthold-partner.de',
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error('Error submitting form:', response.status, errorBody);
        toast({
          title: "Fehler",
          description: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Nachricht gesendet",
        description: "Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns innerhalb von 60 Minuten bei Ihnen.",
      });

      form.reset();
      
    } catch (err) {
      console.error('Submission error:', err);
      toast({
        title: "Fehler",
        description: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormStart = () => {
    if (submitStartTime === 0) setSubmitStartTime(Date.now());
  };

  const field = "rounded-none border-0 border-b border-primary/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-secondary";
  const label = "text-[11px] uppercase tracking-[0.2em] text-secondary";

  const faqs = [
    ["Was kostet das erste Gespräch?", "Nichts. Im Erstgespräch klären wir, ob und wie wir helfen können. Erst wenn Sie uns beauftragen, entstehen Kosten — und die nennen wir Ihnen vorher schriftlich."],
    ["Wie schnell melden Sie sich?", "In der Regel am selben Werktag. Bei akuten Betrugsfällen rufen wir Sie so schnell wie möglich zurück, weil jede Stunde zählt."],
    ["Welche Unterlagen soll ich bereithalten?", "Alles, was den Ablauf zeigt: Kontoauszüge, Transaktions-IDs, Wallet-Adressen, E-Mails, Chatverläufe und Screenshots. Unvollständig ist besser als gar nicht."],
    ["Behandeln Sie meine Daten vertraulich?", "Selbstverständlich. Wir unterliegen der anwaltlichen Schweigepflicht. Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet."],
  ];

  return (
    <div className="min-h-screen bg-background">
      <EditorialHero
        eyebrow="Kontakt"
        breadcrumb={[{ label: "Titelseite", href: "/" }, { label: "Kontakt" }]}
        title={<>Schreiben Sie uns.<br /><em className="text-secondary">Wir hören zu.</em></>}
        lead="Schildern Sie Ihr Anliegen in wenigen Sätzen. Wir melden uns persönlich — vertraulich und für Sie zunächst kostenfrei."
        image={heroImage}
      />

      <section id="kontakt-form" className="container mx-auto px-6 max-w-7xl py-16 grid lg:grid-cols-12 gap-14">
        <aside className="lg:col-span-4 space-y-10">
          <div>
            <p className="kicker mb-5">Die Kanzlei</p>
            <address className="not-italic font-serif text-2xl leading-snug text-primary">Berthold &amp; Partner<br />Friedrichstraße 186<br />10117 Berlin</address>
          </div>
          <div className="border-t border-border pt-8 space-y-4">
            {phoneEnabled && (
              <div><p className={label}>Telefon</p><a href={`tel:${phone}`} className="font-serif text-xl text-primary hover:text-secondary">{phone}</a></div>
            )}
            <div><p className={label}>E-Mail</p><a href="mailto:info@berthold-partner.de" className="font-serif text-xl text-primary hover:text-secondary">info@berthold-partner.de</a></div>
            <div><p className={label}>Erreichbarkeit</p><p className="text-foreground/80">Montag bis Freitag, 8 – 19 Uhr</p></div>
          </div>
          <div className="bg-primary text-primary-foreground p-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-3">Akuter Betrugsfall?</p>
            <p className="text-sm leading-relaxed text-primary-foreground/80">Überweisen Sie kein weiteres Geld, sichern Sie alle Nachrichten und melden Sie sich sofort. Je früher wir handeln, desto mehr lässt sich sichern.</p>
          </div>
        </aside>

        <div className="lg:col-span-8 bg-card border border-border p-8 md:p-12">
          <p className="kicker mb-4">Anfrage</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-10">Ihr Anliegen in wenigen Zeilen.</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} onFocus={handleFormStart} className="space-y-8">
              <FormField control={form.control} name="honeypot" render={({ field: f }) => (
                <FormItem className="hidden"><FormControl><Input {...f} tabIndex={-1} autoComplete="off" /></FormControl></FormItem>
              )} />

              <FormField control={form.control} name="name" render={({ field: f }) => (
                <FormItem><FormLabel className={label}>Name *</FormLabel><FormControl><Input className={field} placeholder="Vor- und Nachname" {...f} /></FormControl><FormMessage /></FormItem>
              )} />

              <div className="grid md:grid-cols-2 gap-8">
                <FormField control={form.control} name="email" render={({ field: f }) => (
                  <FormItem><FormLabel className={label}>E-Mail *</FormLabel><FormControl><Input className={field} type="email" placeholder="name@beispiel.de" {...f} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field: f }) => (
                  <FormItem><FormLabel className={label}>Telefon *</FormLabel><FormControl><Input className={field} type="tel" placeholder="Für einen schnellen Rückruf" {...f} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <FormField control={form.control} name="topic" render={({ field: f }) => (
                  <FormItem><FormLabel className={label}>Betreff *</FormLabel><FormControl><Input className={field} placeholder="Worum geht es?" {...f} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="damage_amount" render={({ field: f }) => (
                  <FormItem><FormLabel className={label}>Schadenshöhe (optional)</FormLabel><FormControl><Input className={field} placeholder="z. B. 25.000 EUR" {...f} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <FormField control={form.control} name="message" render={({ field: f }) => (
                <FormItem><FormLabel className={label}>Nachricht *</FormLabel><FormControl><Textarea className="rounded-none border-primary/30 bg-background min-h-[160px] focus-visible:ring-0 focus-visible:border-secondary" placeholder="Was ist passiert? Wann? Welche Beträge sind betroffen?" {...f} /></FormControl><FormMessage /></FormItem>
              )} />

              <FormField control={form.control} name="consent" render={({ field: f }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl><Checkbox checked={f.value} onCheckedChange={f.onChange} className="rounded-none" /></FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Angaben zu. *</FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )} />

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
                <Button type="submit" disabled={isSubmitting} className="rounded-none bg-primary text-primary-foreground hover:bg-secondary h-14 px-10 text-[12px] tracking-[0.2em] uppercase">
                  {isSubmitting ? "Wird gesendet …" : "Anfrage absenden"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
                <p className="text-sm text-muted-foreground">Kostenfrei, unverbindlich, vertraulich.</p>
              </div>
            </form>
          </Form>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container mx-auto px-6 max-w-4xl py-20">
          <div className="text-center mb-12">
            <p className="kicker mb-5">Leserfragen</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Was Mandanten vorab wissen wollen.</h2>
          </div>
          <Accordion type="single" collapsible className="border-t-4 border-double border-primary">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`f${i}`} className="border-border">
                <AccordionTrigger className="font-serif text-lg text-left text-primary hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
