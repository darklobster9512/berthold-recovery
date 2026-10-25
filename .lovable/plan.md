# Neues Design: Espresso & Creme, Magazin-Stil

Ziel: Die Seite soll für eine andere Kanzlei komplett neu wirken. Die Themen bleiben gleich, aber Farben, Schriften, Aufbau, Texte und Bilder werden neu. Name, Adresse, Telefon und Domain bleiben vorerst wie sie sind.

## Look
- Farben: Espresso #2B1D14, Mokka #5C3D2E, Karamell/Gold #C8A97E, Creme #F5EDE0. Der Blauton fällt überall weg, auch beim dunklen Kopfbereich der Rechtsseiten (dort künftig Espresso).
- Schriften: Libre Baskerville für Überschriften, IBM Plex Sans für Fließtext.
- Stil: Magazin-Look mit Rubrik-Labels, feinen Linien, großen Serifen-Überschriften, Pull-Quotes, Spalten-Layouts und viel Creme-Fläche.

## Neue Struktur der Startseite (Magazin)
1. Titelseite: große Leitgeschichte mit Bild, daneben eine Spalte mit „In dieser Ausgabe“ (Kompetenzbereiche als Inhaltsverzeichnis)
2. Leitartikel: Haltung der Kanzlei als redaktioneller Text mit Pull-Quote
3. Rubriken-Raster: Kompetenzbereiche als Magazinkacheln in unterschiedlicher Größe
4. Zahlen und Fakten als schmale Leiste
5. Aktuelles: neuer Artikel-Teaser im Zeitungsraster (ersetzt das Karussell)
6. Ablauf eines Mandats in nummerierten Kapiteln
7. Kontakt-Aufruf auf Espresso-Hintergrund

## Weitere Seiten
- Kopf- und Fußbereich: neu gestaltet (Masthead-Stil oben, Fußbereich in Spalten, weiterhin ohne Social-Media-Icons).
- Kompetenz-Unterseiten (8) und Blogartikel (4): gemeinsamer neuer Artikel-Aufbau (Rubrik, Titel, Vorspann, Zweispalten-Text, Infokasten), alle Texte neu formuliert.
- Blog, Partner, Stellenangebote, Kontakt: neuer Aufbau und neue Texte. Das Kontaktformular bleibt in Funktion und Pflichtfeldern gleich, sieht aber neu aus.
- Impressum, Datenschutz, AGB, Haftungsausschluss: neues Design. Die rechtlichen Inhalte bleiben sinngemäß bestehen und werden nur behutsam angepasst.
- Seitentitel und Beschreibungen für Suchmaschinen werden neu formuliert.

## Bilder
Alle 6 Fotos werden durch neue, warm gestaltete Bilder ersetzt (Kanzlei-Interieur, Leder, Holz, Dokumente, Besprechung). Dazu kommen ein paar zusätzliche Bilder für die Titelseite und die Rubriken.

## Technische Details
- Die Farbwerte kommen in `src/index.css` und `tailwind.config.ts`, die Schriften per Google Fonts in `index.html`. Fest eingetragene Blau- und Hex-Klassen in Komponenten werden durch die neuen Design-Werte ersetzt.
- Header, HeaderWithDarkBg, Footer, EditorialHero, NewsCarousel und KompetenzLayout werden neu geschrieben. Index und die übrigen Seiten werden umgebaut.
- Die Pfade (Adressen der Unterseiten) bleiben gleich, damit nichts kaputtgeht.
- Die Speicher-Notiz zum Blau bei den Rechtsseiten wird auf Espresso umgestellt.
- Zum Schluss werden die wichtigsten Seiten auf Desktop und Handy mit Screenshots geprüft.
