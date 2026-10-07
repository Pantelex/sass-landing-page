# SASS - Landing Page

A modern, responsive landing page built with semantic HTML5, modular Sass (SCSS) architecture, and clean vanilla JavaScript.

[View Live Demo](https://pantelex.github.io/sass-landing-page/)

## 🚀 Key Features

- **Mobile-First Responsive Design:** Fully optimized across mobile devices, tablets, and high-resolution desktop screens.
- **Modular Sass/SCSS Architecture:** Clean folder structure using partials (`_variables.scss`, `_mixins.scss`, `_layout.scss`) for maintainable, scalable styling.
- **Interactive UI (Vanilla JavaScript):** Smooth client-side interactions [e.g., mobile hamburger navigation, modal triggers, FAQ accordion] built without external libraries.
- **Semantic HTML5:** Structured for accessibility (a11y) standards and clean SEO indexing.
- **BEM Methodology:** Predictable, maintainable CSS class naming conventions to prevent style inheritance conflicts.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic document structure
- **Sass (SCSS):** CSS preprocessor utilizing variables, mixins, nesting, and modular imports
- **JavaScript (ES6+):** Client-side DOM manipulation and event handling
- **Git & GitHub:** Version control and remote repository hosting

---

## 📁 Sass Architecture

```text
scss/
├── abstracts/
│   ├── _variables.scss    # Color palette, font definitions, spacing scale
│   └── _mixins.scss       # Responsive breakpoints and reusable mixins
├── base/
│   ├── _reset.scss        # Reset rules and box-sizing normalization
│   └── _typography.scss   # Global font weights, line heights, and headings
├── components/
│   ├── _buttons.scss      # Button components and interactive states
│   └── _navbar.scss       # Navigation bar and mobile menu styling
├── layout/
│   ├── _header.scss       # Hero banner and layout sections
│   └── _footer.scss       # Footer layout and links
└── main.scss              # Primary entry file importing all partials
