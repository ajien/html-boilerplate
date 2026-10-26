# HTML Boilerplate

A responsive HTML and CSS starter template for learning and experimenting. It includes a custom 12-column grid, portable utility classes, typography examples, and a mobile pop-out menu. No build tools or package installation are required.

## Get started

1. Open this folder in a code editor.
2. Open `index.html` directly in a browser, or use a local web server such as the **Live Server** extension in VS Code.
3. Edit the HTML and CSS, save your changes, and refresh the browser.

Google Fonts and the sample images are loaded from the internet, so those assets need a network connection. The page uses fallback fonts if Google Fonts are unavailable.

## Project files

- `index.html` — example page markup and content.
- `utilities.css` — reusable grid, spacing, color, and typography utilities.
- `styles.css` — page-specific layout, component styles, and responsive details.
- `script.js` — mobile menu open and close behavior.

The HTML loads `utilities.css` before `styles.css`. Keep this order so page-specific rules can build on or override the utilities.

## Adding style overrides

Add project-specific styles and overrides to `styles.css`, not `utilities.css`. Since `styles.css` loads after the utility file, its rules can override utility styles when they have equal or greater specificity:

```css
/* styles.css */
.column-card {
  background: var(--color-1);
}

@media (max-width: 767px) {
  .column-card {
    min-height: 0;
  }
}
```

Prefer a class that describes the component or page section you are changing. You can also override the CSS variables from `utilities.css` in `:root` in `styles.css`. Because `styles.css` loads later, the new values are used by the utility classes throughout the page. For example, changing `--color-1` changes both the background token and any `.bg-color-1` elements:

```css
/* styles.css */
:root {
  --color-1: #fffaf0;
  --color-2: #f2e8d8;
  --color-6: #33291f;
}
```

Use the same approach for spacing and typography tokens when you want a consistent change across the site. You can also define new variables in `:root` and reference them in your own component rules.

Spacing utility classes use `!important` so they work predictably when combined. To change spacing on one element, edit its utility class in `index.html` or add a more specific rule in `styles.css` if an override is necessary.

## Using the grid

Place columns inside a `.row`. The grid has 12 columns and uses gutters between columns:

```html
<div class="container mx-auto">
  <div class="row">
    <div class="col-12 col-md-8">Main content</div>
    <div class="col-12 col-md-4">Sidebar</div>
  </div>
</div>
```

Column classes use the pattern `.col-{number}` or `.col-{breakpoint}-{number}`. Available breakpoints are:

| Prefix | Minimum screen width |
| --- | ---: |
| none | Any width |
| `sm` | 576px |
| `md` | 768px |
| `lg` | 992px |
| `xl` | 1200px |

For example, `col-12 col-md-6 col-lg-4` is full-width on small screens, half-width at the `md` breakpoint, and one-third width at `lg`.

## Spacing utilities

Spacing classes use a property, an optional direction, and a step from `0` to `16`:

- `p-3` — padding on every side.
- `px-3` / `py-3` — horizontal / vertical padding.
- `pt-3`, `pr-3`, `pb-3`, `pl-3` — padding on one side.
- `m-3`, `mx-3`, `my-3`, `mt-3`, `mb-3` — margin utilities.
- `gap-3` — gap between flex or grid items.
- `mx-auto` — center an element horizontally.

Spacing utilities support steps `0` through `16`; gap utilities support steps `1` through `6`. Each step is a multiple of `--space-unit`, set to `0.5rem` in `utilities.css`. Responsive utilities such as `py-mobile-9` (up to 767px) and `py-md-14` (768px and wider) apply spacing at specific screen widths.

## Colors and typography

Change the six `--color-1` through `--color-6` values near the top of `utilities.css` to customize the palette. Use `.bg-color-1` to `.bg-color-6` for backgrounds and `.text-color-1` to `.text-color-6` for text.

The font variables are `--font-body`, `--font-display`, and `--font-mono`. Utility classes include `.font-body`, `.font-display`, `.font-mono`, and text sizes such as `.text-sm`, `.text-base`, and `.text-lg`.

## Mobile navigation

At mobile widths, the header's **Menu** button opens a pop-out navigation panel. It closes when a navigation link is selected, when clicking outside the header, or when pressing Escape. The behavior is in `script.js`; the menu styles are in `styles.css`.

## Making changes

- Add structure and content in `index.html`.
- Prefer utility classes for common grid, spacing, color, and typography needs.
- Put reusable utilities in `utilities.css` and page-specific styling in `styles.css`.
- Add descriptive `alt` text to meaningful images.
- Check your work at multiple viewport widths using your browser's responsive tools.
