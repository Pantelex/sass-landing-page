# Sass Landing Page

A modern, responsive landing page crafted with semantic HTML5, modular Sass/SCSS architecture, and clean JavaScript.

🔗 **Live Demo:** [https://pantelex.github.io/sass-landing-page/](https://pantelex.github.io/sass-landing-page/)  
📁 **Repository:** [https://github.com/pantelex/sass-landing-page](https://github.com/pantelex/sass-landing-page)

---

## 🚀 Key Features

- **Responsive Mobile-First Design:** Fluid layout optimized for smartphones, tablets, laptops, and desktop screens.
- **Modular SCSS Architecture:** Structured stylesheet hierarchy using partials, variables, mixins, and functions for scalable and maintainable CSS.
- **Modern Layout Systems:** Built using Flexbox and CSS Grid for layout precision and alignment.
- **Interactive UI:** Smooth transitions, interactive states, and mobile navigation built with lightweight Vanilla JavaScript.
- **Clean & Accessible Code:** Semantic HTML structure ensuring accessibility (a11y) and SEO best practices.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic structure and content layout
- **Sass / SCSS:** Preprocessing with variables, nesting, partials, and responsive mixins
- **JavaScript (ES6+):** Client-side interactivity and DOM manipulation
- **Git & GitHub Pages:** Version control and live deployment

---

## 📁 Sass Architecture

```text
scss/
├── abstracts/
│   ├── _variables.scss    # Color palette, fonts, spacing
│   └── _mixins.scss       # Breakpoints & reusable utility mixins
├── base/
│   ├── _reset.scss        # Reset & box-sizing rules
│   └── _typography.scss   # Global typography
├── components/
│   ├── _buttons.scss      # Buttons & call-to-action styles
│   └── _navbar.scss       # Navigation bar & mobile menu
├── layout/
│   ├── _header.scss       # Hero section & navigation
│   └── _footer.scss       # Footer styling
└── main.scss              # Main entry file importing all partials
