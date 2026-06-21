# Urban Brew Donuts - Web Development Project (Part 2)

Welcome to the digital frontend platform for **Urban Brew Donuts**. This repository contains the complete frontend architecture designed to meet the strict module requirements for Part 2 - Designing the Visuals: CSS Styling and Responsive Design.

---

## 🛠️ Design & Implementation Highlights
- **CSS Reset Integration:** Implemented a full elements reset at the top of the stylesheet to bypass default browser behaviors and ensure design consistency across Chrome, Edge, and Safari (Section 2.2).
- **Typography Scales:** Structured using high-contrast typography scaling, combining classic serif fonts (`Georgia`) for bold brand headings with highly readable sans-serif system layouts for body content (Section 2.3).
- **Responsive Fluid Layouts:** Replaced static layouts with fluid percentage widths, relative spacing dimensions, and viewport-adaptive units (`rem`, `em`, `%`) (Section 3.2).
- **Breakpoints & Grids:** Configured a multi-column CSS Grid structure for desktop and laptop environments, which seamlessly collapses into a single-column block system on mobile and tablet devices under a `40rem` media query breakpoint (Section 3.1).
- **Visual Optimization & Interactive Form Elements:** Implemented rich coffee-themed branding palettes (`#faf8f5`, `#ebdcd0`, `#be7546`) complete with dynamic focus highlights, transition smoothings, and interactive pseudo-class selectors (`:hover`, `:focus`, `:active`) (Section 2.5).

---

## 🎨 Color Palette Inspiration & Schemes
To establish a cozy, welcoming, and high-end aesthetic reflecting a modernized urban coffee culture in Johannesburg, the design palette was structured around specific organic coffee blends:
- **Base Cream Latte (#f7f2eb & #faf8f5):** Sourced from foundational cafe design layout guidelines to serve as a warm, low-contrast canvas that reduces reader eye strain compared to harsh stock browser whites.
- **Deep Espresso Roast (#241911 & #3d312a):** Selected to represent premium ground coffee beans. This rich, dark tone serves as our dominant text header and navigation background, providing a professional contrast ratio.
- **Warm Caramel Glaze (#be7546 & #df9463):** Inspired by artisanal donut glazing treatments. Used exclusively as an accent signal color to draw prompt attention to interactive elements, focus states, and the primary "Order Now" call-to-action button.

---

## 📝 Part 1 Feedback & Correction Changelog
As required by Section 1 evaluation directives, below is the comprehensive changelog tracking the granular structural corrections implemented to fix defects identified during the Part 1 review cycle:

| Scope Location | Identified Defect / Anomaly from Part 1 | Remediation Action Enacted for Part 2 |
| :--- | :--- | :--- |
| `index.html` | Syntax breakage inside `<!DOCTYPE html>` declaration container. | Corrected syntax structure to strict structural HTML5 layout definition specifications. |
| `index.html` | Missing semantic opening `<header>` tag wrapping navigational space; dangling `</header>`. | Rebuilt complete semantic structural link blocks safely within integrated opening and closing headers. |
| `index.html` | Syntax truncation error on secondary spot `<img>` element (missing closing layout angle bracket `>`). | Properly structuralized active element closure bounds to restore source mapping cleanliness. |
| `index.html` | Broken component hierarchy rules (Business Bio description block situated below `<footer>` section boundaries). | Shifted complete context arrays smoothly up into main body view, guaranteeing footer elements rest absolutely at the baseline layout. |
| `enquiry.html` / `index.html` | Incorporation of illegitimate non-standard markup tag formats (`<P1>`). | Migrated semantic contents safely back into standardized paragraph text block structures managed dynamically via global `.footer-note` layout design systems. |
| `products.html` | Entry of currency pricing metrics inside invalid tag formats (`<R32 class="00">`). | Extracted plain string values cleanly into descriptive `.item-price` and `.item-name` tracking modules. |

---

## 📂 Source Directory Architecture
- 📁 `images/` - Optimized asset repository housing system images.
- 📄 `index.html` - Primary introductory landing gateway interface.
- 📄 `about.html` - Local business narrative workspace tracking history and vision.
- 📄 `products.html` - Structured product offerings and pricing layout listings (Renamed from services).
- 📄 `enquiry.html` - Primary user feedback collection field matrix.
- 📄 `contact.html` - Core communication directory listing physical operational landmarks.
- 📄 `style.css` - Centralized cascading stylesheet managing global design layouts.
- 📄 `README.md` - Technical execution analysis and feedback documentation.

---

## 📚 Academic References (IIE Harvard Style)

### Textbooks & Module Material
* The Independent Institute of Education (The IIE). 2026. *Web Development Module Manual (WEDE5020)*. IIE: Varsity College / Rosebank College.

### Digital Technical Documentation & Color Guidelines
* Adobe Color. 2026. *Café culture warm trend palette exploration map*. Available at: https://color.adobe.com [Accessed 29 May 2026].
* MDN Web Docs. 2026. *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 29 May 2026].
* MDN Web Docs. 2026. *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout [Accessed 29 May 2026].
* MDN Web Docs. 2026. *Using Media Queries for Responsive Design*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 29 May 2026].
* W3Schools. 2026. *Responsive Web Design - Media Queries*. Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp [Accessed 29 May 2026].

### Graphic Asset & Imagery Citations
* Unsplash. 2026. *Artisanal coffee brewing macro photography collection*. Available at: https://unsplash.com [Accessed 29 May 2026]. *(Source for Coffee3.jpeg and Coffee5.jpg asset structures)*.
* Pexels. 2026. *Gourmet bakery and handcrafted donut stock captures*. Available at: https://pixels.com [Accessed 29 May 2026]. *(Source for Image2.jpg and Donut3.jpeg asset structures)*.

### AI Consultation Tracking (Where Applicable for Code Remediation)
* OpenAI / Google. 2026. *Gemini / ChatGPT AI Assistant architectural layout consultation tracking session: Implementation of responsive multi-column grid layouts and relative design unit compliance*. Prompted by student on 29 May 2026.

---

## 🚀 Part 3 Advanced Functionality Implementation (WEDE5020)

This final iteration introduces advanced interactivity, client-side data validation, external integrations, and search engine optimization best practices:

### 🧠 1. Client-Side JavaScript Interactivity (`script.js`)
- **Interactive Form Validation:** Developed a tailored script linked to the `enquiry.html` form layout. It captures submission events, checks user inputs using `.trim()`, and provides dynamic error messages or success updates dynamically inserted into the DOM without refreshing the page.
- **Dynamic DOM Elements & Animations:** Created dynamic event listeners (`mouseenter`, `mouseleave`) across the image galleries. It manipulates properties like `transform: scale()` and `filter: brightness()` to provide responsive, smooth hover effects.

### 🗺️ 2. External Service Integration
- Embedded a functional location tracker via a styled Google Maps `<iframe>` container on `contact.html` to give users a clear geographical view of our main office branch in Johannesburg.

### 🔍 3. Search Engine Optimization (SEO)
- Integrated custom `<meta name="description">` tags into the `<head>` block of all five distinct webpages to ensure accurate and concise content snippets appear on search engine results pages.