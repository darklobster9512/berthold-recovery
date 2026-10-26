# Alle Bilder in den public-Ordner verschieben

Alle 17 Bilder der Seite (8 Fotos + 9 Teamfotos) werden von `src/assets/` nach `public/images/` verschoben. Optisch ändert sich nichts.

## Umsetzung
- `src/assets/*.jpg` → `public/images/*.jpg`
- `src/assets/team/*.jpg` → `public/images/team/*.jpg`
- In allen 20 Dateien, die die Bilder einbinden (Startseite, Partner, Kontakt, Stellenmarkt, Rechtsgebiete, Journal-Artikel, KompetenzLayout, ArticleLayout), die `import ... from "@/assets/..."`-Zeilen entfernen und stattdessen feste Pfade wie `"/images/hero-library.jpg"` verwenden.
- Leeren Ordner `src/assets/` löschen.
- `public/lovable-uploads/` bleibt wie es ist.

## Prüfung
- Suche: kein `@/assets` mehr im Code.
- Build fehlerfrei; Startseite, Partner, Kontakt, ein Rechtsgebiet und ein Journal-Artikel im Browser öffnen und prüfen, dass alle Bilder laden.

## Hinweis
Bilder im public-Ordner werden nicht mehr automatisch optimiert/mit Cache-Namen versehen; bei Bildwechsel kann der Browser kurz die alte Version zeigen.
