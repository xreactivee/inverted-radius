# Smooth Tab Component (Inverted Border Radius)

Ever tried creating those sleek, concave tab corners using the traditional `box-shadow` hack, only to end up with glitchy, pixelated edges? Yeah, me too. 

This repository provides a pixel-perfect, SVG-based solution for inverted border radius components. No CSS hacks, no weird anti-aliasing issues—just pure math (Quadratic Bezier curves) and Tailwind CSS.

## 🚀 Features

- **Pixel-Perfect:** Uses inline SVG paths instead of CSS pseudo-elements for flawless rendering at any zoom level.
- **Tailwind Ready:** Styled completely with standard Tailwind CSS utility classes.
- **Responsive & Clean:** Easy to integrate into any Next.js/React project.

## 📸 Preview

*(Buraya projenin ekran görüntüsünü eklersin: `![Preview](./public/preview.png)`)*

## 💻 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Inline SVG

## 🛠️ Usage

You don't need to install any heavy npm packages. Just grab the code and drop it into your project.

1. Copy the SVG component from `app/page.tsx` (or wherever you placed it).
2. Adjust the Tailwind colors (`bg-slate-900`, `text-white`, etc.) to match your theme.
3. If you're modifying the layout size, remember to tweak the SVG `viewBox` and path coordinates accordingly.

## 🧠 Why not CSS Box-Shadow?

The classic `::before` / `::after` with `box-shadow` hack is great for solid colors, but it often struggles with:
- Sub-pixel rendering (resulting in white/glitchy lines between the shapes).
- Complex backgrounds (like gradients or images).

Using an SVG `<path>` ensures the cutout is genuinely transparent and the curves are mathematically perfect.

---

### License
MIT - Do whatever you want with it.