# Customizing the site

All edits can be made on the GitHub website: open a file, click the pencil icon, edit, then **Commit changes**.

| To change | Open this file | Look for |
|---|---|---|
| Colors | `assets/style.css` | `--primary`, `--accent`, `--bg` at the top (light) and under `[data-theme=dark]` (dark) |
| Fonts | `assets/style.css` | `--font-display` and `--font-body` |
| Name, tagline, text | `index.html` | The hero section near the top |
| A project | `index.html` | The `<article class="card">` for that project. Copy one to add another |
| Page title and description | `index.html` | `<title>` and `<meta name="description">` |
| Icon | `favicon.svg` | Replace the file |

Keep text contrast readable: very light text on a light background fails accessibility checks.
