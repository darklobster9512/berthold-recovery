# Journal: Korrektur, neue Daten, 3 neue Artikel

## 1. 8,69 statt 869 Bitcoin
- Startseite (Bereich "Aus dem Journal"): Titel wird zu "8,69 Bitcoin zurück beim Geschädigten".
- Alle weiteren Stellen, an denen "869" als Zahl im Text steht, werden geprüft und angepasst. Die Web-Adresse des Artikels bleibt unverändert, damit bestehende Links weiter funktionieren.

## 2. Aktuellere Daten
Die bisherigen Beiträge bekommen neue Daten aus den letzten Wochen:
- 8,69 Bitcoin: 2. Oktober 2026
- Gefälschte Chefanweisung: 9. Oktober 2026
- Kreditgebühr: 21. September 2026

Die Daten werden in der Übersicht und auf den Artikelseiten gleich angezeigt. Zeitangaben im Artikeltext wie "Juli 2025" passe ich passend an.

## 3. Drei neue Artikel (mit eigener Seite)
- **"Phishing per SMS: Haftet die Bank?"** (Rechtsprechung · Bankrecht), 16. Oktober 2026
- **"Falsche Krypto-Plattformen erkennen"** (Ratgeber · Krypto), 23. Oktober 2026
- **"NIS2: Was Geschäftsführer jetzt wissen müssen"** (Compliance), 12. Oktober 2026

Jeder Artikel bekommt im gleichen Stil wie die bestehenden: Einleitung, Zwischenüberschriften, Zitat, Infokasten "Auf einen Blick" und einen passenden Stockfoto-Ausschnitt aus den vorhandenen Bildern. Die Texte sind allgemein gehalten und erfinden keine konkreten Mandantenfälle.

Die Journal-Übersicht zeigt danach 6 Beiträge, neueste zuerst. Auf der Startseite stehen die 3 neuesten.

## Technisch
- Neue Seiten `BlogPostSmsPhishing.tsx`, `BlogPostFakePlattformen.tsx` und `BlogPostNis2.tsx` über `ArticleLayout` bauen und die Routen in `App.tsx` ergänzen.
- `journalPosts` in `ArticleLayout.tsx`, die Liste in `Blog.tsx` und die Liste `journal` in `Index.tsx` aktualisieren (sortiert nach Datum).
