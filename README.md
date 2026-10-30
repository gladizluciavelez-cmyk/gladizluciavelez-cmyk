# Gladiz Velez — portfolio

Two-page static site, no build step:
- `index.html` — home (experience, 3 featured projects, publications, hobbies, contact)
- `projects.html` — all projects, grouped by Seminole Tribe / Startup / Cornell Tech / University of Miami
- `styles.css` — shared styles; `site.js` — the dot + cheese cursor

## Editing
- Résumé: replace `assets/Gladiz_Velez_Resume.pdf`
- Add a project: copy an `<article class="proj">` block in `projects.html`
- Feature a different project: edit the three `.pcard` links in `index.html` (they point to `projects.html#id`)

## Publish with GitHub Pages
Settings → Pages → Deploy from branch → `main` / root.
