# Mathew Design System

A brand-foundations design system extracted from the Figma file **`Mathew.fig`** (page "Page-1"). The source is a set of documentation frames — a **Colour System**, a **Typography System**, and an **Icon System** — plus 15 individual icon vectors. It defines a brand identity, a color token set, an editorial type scale, and a Phosphor-style icon library. It does **not** define UI component families (no Button/Input/Card sets), so this system is intentionally foundations-first.

The aesthetic reads as an **editorial portfolio**: a high-energy chartreuse/lime brand accent against a true-grey neutral scale, serif display type (Playfair Display) over a serif reading face (Crimson Text), and a clean sans/mono (Geist / Geist Mono / Inter) for interface chrome. A signature move is the **neon chartreuse glow** used to light up interactive icons on dark surfaces.

## Sources
- **Figma:** `Mathew.fig` (mounted virtual file), page `Page-1` (guid `0:1`). Frames: `Colour System` (3:4), `Typography System` (9:4), `Icon System` (8:2), and 15 icon frames.
- **Figma Variables:** one collection, **Colours** (20 color variables → `--brand-100…1000`, `--neutral-100…1000`).
- No logo or wordmark exists in the source — see *Brand mark* below.

---

## CONTENT FUNDAMENTALS

How copy is written across the source frames:

- **Voice:** authoritative, documentation-style, third-person/impersonal. It describes the system, not the reader — "The core identifier of the brand…", "Used for primary buttons, active states…". No "I", rare "you" (only in imperative guidance like "Use these values to maintain consistent visual language").
- **Casing:** Title Case for headings and labels ("Main Brand Colour", "Icon Sizes & Touch Targets"). Sentence case for descriptions. ALL-CAPS reserved for overlines, state tags (`HOVER`, `ACTIVE`, `DISABLED`, `FOCUSED`) and footer nav (`GUIDELINES  ACCESSIBILITY  ASSET LIBRARY`).
- **Spelling:** British — "Colour", "optimised", "Centre"-style usage. Keep this if extending the system.
- **Tone words:** "high visibility, high energy", "high-contrast", "comprehensive", "foundational". Confident and precise.
- **Technical framing:** color usage is always paired with token references in two syntaxes — `Sass: $color-brand` and `CSS: --brand-400` — and with WCAG contrast ratios ("AAA 16.7:1", "AA 3.1:1").
- **Emoji:** none. Not used anywhere. Do not introduce them.
- **Punctuation motif:** a middle dot `·` separates metadata ("Playfair Display Bold · 56/64 · 1.5px tracking", "© 2024 Brand Design System · v1.2.0").
- **Vibe:** a polished personal portfolio treated with the rigor of a product design system.

---

## VISUAL FOUNDATIONS

- **Color:** the hero is a chartreuse/lime — `--brand-400 #DAE586` (main) with `--brand-500 #C7D74E` as the active/interactive accent. A full 10-step brand ramp (`100 #FBFCF3` → `1000 #1D2009`) and a 10-step true-grey neutral ramp (`100 #F7F7F7` → `1000 #141414`). Text sits on a slate hierarchy (`#111827 → #4B5563 → #6B7280 → #9CA3AF`). Semantic green `#1A8C33` for positive/links, red `#EF4444` for danger.
- **Type:** dual system. Editorial content uses **Playfair Display Bold** for H1–H5 (56/42/32/24/20px, tightening tracking as size grows: 1.5 → 0px) and **Crimson Text Regular** for body/caption (20/18/16/14px), with a **Crimson Text Bold** overline at 12px / 3px tracking / uppercase. Interface chrome uses **Geist** (titles 28 Bold, section headers 24 SemiBold, labels 14 Medium), **Inter** (descriptions 14–16 Regular), and **Geist Mono** (hex, tokens, meta at 10–12px).
- **Spacing:** generous. Page frames pad 80px; section gaps 60–80px; content gaps step 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48px. Not strictly 8px-gridded — exact figures are kept.
- **Corner radii:** small and restrained — 4px (code chips), 6px (header logo tile), 8px (color swatches), 12px (cards / the dark container). Nothing more rounded.
- **Borders / dividers:** hairline `1px` in `--border-subtle #E5E7EB` on light; `#374151` on dark. Swatches use an *inset* 1px border (`box-shadow: inset 0 0 0 1px`) rather than an outer stroke, so fills stay edge-true.
- **Shadows:** minimal on light surfaces (a barely-there card shadow). The signature effect is the **neon glow** on dark: `0 0 20px rgba(199,215,78,0.6)` — brand-500 at 60% — applied to active/interactive icons on the `#141414` container.
- **Backgrounds:** flat and clean — white `#FFFFFF` / near-white `#F9FAFB` on light; solid `#141414` / `#1A1A1A` on dark. No gradients, no photography, no textures or patterns.
- **Cards:** white fill, 12px radius, hairline border or the faint card shadow — never heavy elevation, never colored left-border accents.
- **Transparency / blur:** used sparingly — brand accent at low alpha for hover fills on dark, no backdrop blur in the source.
- **Imagery:** none in the source; the system is type-, color-, and icon-driven.
- **Animation & states (documented intent):** hover = brand accent color (light) / accent + soft glow (dark); active = filled accent with full glow; disabled = drop to a low-contrast neutral (`#606060` dark, `#C5C5C5` light); focused = accent ring. No motion curves are specified — keep transitions subtle (color/opacity fades).
- **Accessibility:** contrast ratios are documented per step; the system targets WCAG AA (≥4.5:1) minimum, and interactive icons require a 40–48px touch target (1.5× the icon size).

---

## ICONOGRAPHY

- The system ships a **custom Phosphor-style icon set** — 15 outline glyphs at **regular weight**, traced on a 24×24 grid with optical insets. They are line icons (not filled), single-path, `fill="currentColor"`.
- **Inventory (15):** `HouseSimple`, `Hamburger`, `XCircle`, `ArrowBendUpRight`, `ArrowBendUpLeft`, `Link`, `LinkedinLogo`, `EnvelopeSimple`, `FigmaLogo`, `Eye`, `PaintBrush`, `FolderOpen`, `MagnifyingGlass`, `Sliders`, `DownloadSimple`.
- **Delivery:** two forms in `assets/icons/` — (1) the `Icon` React component backed by `icon-data.js` (recommended: inherits `currentColor`, sizeable), and (2) the raw source SVGs verbatim in `assets/icons/svg/`.
- **Sizes:** standard 16 / 20 / 24px. Interactive icons get a 40–48px touch target.
- **Color rules:** icons default to the text color; the brand accent (`--color-brand-strong`) is applied **only** for interactive/hover/active states. On dark, active icons take the neon `--glow-brand`. Never mix filled and outline styles, never distort aspect ratio, never rely on color alone for meaning.
- **Emoji / unicode as icons:** not used. Do not substitute them.
- Icons are Phosphor-*style* (matching the regular weight look); the exact vectors are the file's own traces and are copied in verbatim — nothing was redrawn.

### Brand mark
The source contains **no logo or wordmark** — the doc headers use a plain rounded brand-color tile (32×32, 4–6px radius) beside a Geist text title. Accordingly this system has **no logo asset**. Render the brand/portfolio name in Geist Bold type (or the small brand-color tile as a placeholder mark) wherever a logo would go. Do not invent or reconstruct a mark.

### Intentional additions
- **`Icon` component** (`assets/icons/`) — a thin React wrapper over the 15 source glyphs. Added because the source delivers icons as loose vectors with no component; the wrapper gives a single typed API (`name`, `size`, `color`) and centers each glyph in a 24×24 box. No visual invention — paths are verbatim.

---

## INDEX

**Root**
- `styles.css` — global CSS entry point (import list only).
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` — webfont loading (Geist, Geist Mono, Inter, Playfair Display, Crimson Text via Google Fonts).
- `fig-tokens.css` — the 20 Figma color variables verbatim (`--brand-*`, `--neutral-*`).
- `semantic.css` — semantic aliases (text, surface, border, brand, status).
- `typography.css` — font families, weights, editorial + UI type scales and `.ds-*` specimen classes.
- `spacing.css` — spacing scale, radii, shadows (incl. the neon glow).

**Components** (`assets/icons/`)
- `Icon` — the 15-glyph icon set. Files: `Icon.jsx`, `Icon.d.ts`, `Icon.prompt.md`, `icon-data.js`, `icons.card.html`, plus raw `svg/`.

**Guidelines** (`guidelines/`) — foundation specimen cards shown in the Design System tab: brand & neutral scales, text colors, surfaces, display / editorial / UI type, spacing, radii, shadows, brand identity, dark-mode glow.

---

## FONT NOTE
All five families (Geist, Geist Mono, Inter, Playfair Display, Crimson Text) are loaded from Google Fonts — each is a genuine match for the source, so **no substitution was needed**. If you want self-hosted binaries, replace the `@import` in `tokens/fonts.css` with `@font-face` rules.
