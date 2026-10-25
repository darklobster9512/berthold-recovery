# Datenbank-Verbindung und Admin-Bereich entfernen

## Ausgangslage
- Eine /admin-Seite existiert im Code bereits nicht mehr (keine Route, keine Admin-Dateien).
- Übrig sind nur Reste der alten Datenbank-Verbindung: eine ungenutzte Verbindungsdatei und eine Projekt-Konfigurationsdatei.

## Änderungen
1. Ungenutzte Datenbank-Verbindungsdatei löschen (`src/integrations/supabase/`).
2. Datenbank-Konfiguration löschen (`supabase/config.toml` bzw. Ordner `supabase/`).
3. Paket `@supabase/supabase-js` entfernen, falls installiert.
4. Prüfen, dass nirgends mehr auf `/admin` verlinkt wird; ggf. Links entfernen.

## Bleibt unverändert
- Das Kontaktformular sendet weiterhin an das externe Recovery-Panel (eigene Adresse, keine Verbindung dieses Projekts).

## Hinweis
Die Verknüpfung im Lovable-Panel selbst (Einstellungen → Integrationen / Cloud) kann ich nicht per Code trennen. Falls dort noch eine Verbindung angezeigt wird, bitte unter Projekt-Einstellungen trennen.
