# Rubriken-Sektion: dichteres Layout

Problem: Die Karten ohne Bild stehen in derselben Reihe wie Karten mit hohem Foto und werden auf deren Höhe gestreckt, darunter bleibt viel leere Fläche.

## Neues Layout (magazinartig, zweigeteilt)

```text
+---------------------------+  +------------------------------+
| Bild-Feature Cybercrime   |  | I.   Kryptonachverfolgung  ->|
| (groß, Text auf Bild)     |  | II.  Kapitalmarktrecht     ->|
+-------------+-------------+  | III. Prozessführung        ->|
| Bild Private| Bild Gesell.|  | IV.  Immobilienrecht       ->|
| Clients     | schaftsrecht|  | V.   Datenschutz & Compl.  ->|
+-------------+-------------+  +------------------------------+
```

- Links (ca. 7/12): die 3 Rubriken mit Foto. Eine große Karte oben, zwei kleinere darunter. Titel und Kurztext liegen auf dem Bild (dunkler Verlauf von unten), deshalb gibt es keinen leeren Kasten mehr.
- Rechts (ca. 5/12): die 5 Rubriken ohne Foto als kompakte Inhaltsliste. Jede Zeile hat eine römische Nummer, den Namen als Überschrift, den Kurztext und einen Pfeil, getrennt durch feine Linien. Die Liste füllt die Höhe gleichmäßig.
- Mobil: alles untereinander, erst die Bildkarten, dann die Liste.
- Texte, Links und Farben bleiben gleich, alles nur über die Farb-Tokens der Seite.

## Technisch
- Nur `src/pages/Index.tsx`, Abschnitt "Rubriken": `rubriken` in `withImg` / `withoutImg` aufteilen, `span`-Felder entfernen und das Grid durch ein `lg:grid-cols-12` mit zwei Spalten ersetzen.
