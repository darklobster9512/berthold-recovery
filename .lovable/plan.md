# Handy-Ansicht optimieren

Auf dem Handy (393 px breit) läuft nichts über den Rand, aber die Seiten sind sehr lang und luftig. Die Startseite ist etwa 14.000 px hoch, also rund 17 Bildschirme.

## Startseite
- **Titel:** Überschrift etwas kleiner, kürzere Einleitung. Das Foto rückt unter den Text, damit Titel und Button sofort sichtbar sind.
- **"In dieser Ausgabe":** Die Liste mit 8 Rechtsgebieten wird auf dem Handy ausgeblendet. Sie steht ohnehin im Menü und in den Rubriken.
- **Telefon-Kasten und Justitia-Bild:** Das Bild wird auf dem Handy kleiner, nicht mehr im Hochformat.
- **Leitartikel:** Weniger Abstand, Zitat kleiner.
- **Rubriken:** Die Bildkarten werden flacher (Cybercrime ca. 260 px statt 320 px, die anderen 200 px).
- **Journal:** Der erste Beitrag bleibt groß, die anderen beiden werden kompakte Zeilen mit kleinem Bild links und Titel rechts.
- **Team:** Statt 6 bildschirmfüllender Porträts kommt ein 2-Spalten-Raster mit kleineren Fotos.
- **Ablauf und Abschluss:** Weniger Abstand oben und unten.

## Rechtsgebiet- und Artikelseiten
- Titel und Einleitung etwas kleiner, Foto flacher.
- Die Liste "Weitere Rechtsgebiete" wird auf dem Handy ausgeblendet, weil der Fußbereich dieselben Links zeigt.
- Weniger Abstand zwischen den Kapiteln I–IV.

## Fußbereich
- Rechtsgebiete in zwei Spalten statt einer langen Liste.
- "Mehr lesen" und Adresse nebeneinander.
- Insgesamt kompakter.

## Allgemein
- Abschnittsabstände auf dem Handy von etwa 80 auf 48 px reduzieren.
- Buttons über die volle Breite und gut tippbar (mind. 44 px hoch).
- Desktop bleibt unverändert, alle Anpassungen gelten nur für kleine Bildschirme.

Ziel: Die Startseite wird auf dem Handy etwa 40 % kürzer, ohne Inhalte zu verlieren.

## Technisch
Nur Tailwind-Responsive-Klassen (Basis = Handy, `md:`/`lg:` = bisherige Werte). Betroffen sind `Index.tsx`, `KompetenzLayout.tsx`, `ArticleLayout.tsx`, `EditorialHero.tsx` und `Footer.tsx`. Prüfung per Screenshot bei 393 px und 1280 px.
