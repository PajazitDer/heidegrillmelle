# Imbiss Heide Grill Website

This repository contains the source code for the **Imbiss Heide Grill** website, built with [Hugo](https://gohugo.io/) (using the Ananke theme) and hosted on Netlify (or any static host).

---

## 🗂️ Project Structure

```
├── archetypes/                  # Hugo archetypes (page templates)
├── assets/                      # SCSS, JS sources (if any)
├── config.toml                  # Hugo configuration (menus, params)
├── content/                     # Markdown content (e.g. blog posts)
├── data/
│   └── menu.yaml               # Speisekarte definitions
├── layouts/                     # Custom layouts & partials               
│   ├── _default/
│   │   └── baseof.html         # Base template
│   └── partials/
│       ├── header.html
│       ├── footer.html
│       ├── menu-categories.html
│       ├── speisekarte.html
│       ├── getraenke.html
│       ├── kontakt.html
│       └── reservierungen.html
├── static/                      # Static assets (images, css, js)
│   ├── css/custom.css
│   ├── js/submenu.js
│   └── img/                     # Photos for menu & drinks
└── README.md
```

---

## 🚀 Local Development

### Prerequisites

- **Hugo** v0.113+ installed. ([Install guide](https://gohugo.io/getting-started/installing/))
- **Git**
- **Node.js & npm** (optional, for Netlify CLI)
- **Docker & docker-compose** (optional, for containerized Hugo)

### 1. Clone the repository

```bash
git clone https://github.com/your-org/heidegrillmelle.git
cd heidegrillmelle
```

### 2. Install dependencies

If using Hugo directly:
```bash
# (no extra dependencies for pure Hugo)
```

If using Netlify CLI for previews:
```bash
npm install -g netlify-cli
```

If using Docker:
```bash
docker-compose up --build
```

### 3. Run the development server

#### Native Hugo
```bash
hugo server -D
# Visit http://localhost:1313
```

#### Docker
```bash
docker-compose up
# Hugo will serve at http://localhost:1313
```

### 4. Edit & Preview

- **Layouts:** `layouts/partials/` & `layouts/_default/baseof.html` for HTML structure
- **Styles:** `static/css/custom.css`
- **Scripts:** `static/js/submenu.js`
- **Content:** `data/menu.yaml`, `content/`, and any static images under `static/img/`

Changes auto‐reload in your browser.

---

## 📦 Build & Deploy

Generate a production build:
```bash
hugo --minify
```
Outputs to `public/`. Deploy `public/` to your static host (Netlify, Vercel, AWS S3, etc.).

---

## 🤝 Contributing

1. Fork repo
2. Create a feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -am 'Add feature'`)
4. Push to branch (`git push origin feature/name`)
5. Open a Pull Request

---

© 2025 Imbiss Heide Grill. All rights reserved.
