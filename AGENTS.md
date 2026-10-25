# Project rules

- Static React + Vite frontend only; no backend or database in this project — the contact form posts to an external endpoint.
- Practice-area pages render through `KompetenzLayout` and journal articles through `ArticleLayout`; subpage openers use `EditorialHero` — change shared look there, not per page.
- The practice-area list (`kompetenzen`) lives in `Header.tsx` and is reused by footer, home and sidebars, so menus stay in sync.
- Colors come only from semantic tokens in `src/index.css`; no hardcoded color utilities in components, so the theme can be swapped centrally.
