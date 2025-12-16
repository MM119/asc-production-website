# Aureus Sigma Capital - Brand & Design Guidelines
**Version 3.0 (Premium Institutional)**  
**Date:** November 21, 2025

---

## 1. Design Philosophy
**"Institutional, Systematic, Premium."**
The design language of Aureus Sigma Capital (ASC) reflects its identity as a quantitative, research-driven investment firm. It avoids "retail" or "gamified" aesthetics in favor of stability, clarity, and understated luxury.

### Key Principles
*   **Clarity over Clutter**: Use whitespace and structured grids to make complex financial concepts digestible.
*   **Data-Driven Aesthetics**: Visuals should imply precision (grids, abstract charts, clean lines) rather than generic stock photography.
*   **Premium Restraint**: Use gold accents sparingly against deep navy or clean white backgrounds. Avoid bright primary colors (red/blue/green) except for semantic data visualization.

---

## 2. Color System

### Primary Brand Colors
| Name | Hex | Usage |
| :--- | :--- | :--- |
| **ASC Navy** | `#0F172A` | Primary backgrounds, heavy text, footer. (Tailwind `slate-900`) |
| **ASC Gold** | `#D4AF37` | Accents, active states, borders, icons. |
| **ASC Slate** | `#334155` | Secondary text, subheadings. (Tailwind `slate-700`) |
| **White** | `#FFFFFF` | Card backgrounds, text on dark sections. |
| **Off-White** | `#F8FAFC` | Page backgrounds, subtle contrast. (Tailwind `slate-50`) |

### Semantic / Data Visualization Colors
Used for charts and status indicators only.
*   **Success / Growth**: `#047857` (Forest Green)
*   **Error / Loss**: `#DC2626` (Crimson Red)
*   **Warning**: `#F59E0B` (Amber)
*   **Info**: `#0369A1` (Sky Blue)

---

## 3. Typography

### Headings: **Playfair Display**
Used for section titles, hero headlines, and major statements. Adds a "literary" and "established" feel.
*   **Weight**: Medium (500) or Semibold (600).
*   **Tracking**: Tight (`-0.03em`).
*   **Usage**: `font-serif text-slate-900` (or `text-white` on dark).

### Body: **DM Sans**
Used for all paragraph text, navigation, and UI elements. Clean, modern, and highly legible at small sizes.
*   **Weight**: Regular (400) for text, Medium (500) for buttons/nav.
*   **Line Height**: Relaxed (`leading-relaxed`) for readability.
*   **Usage**: `font-sans text-slate-600`.

---

## 4. Iconography
We use **Lucide React** icons with a specific styling treatment to ensure consistency.

### Style Rules
1.  **Stroke Width**: Standard (2px).
2.  **Color**:
    *   **Primary**: ASC Gold (`text-[#d6b16b]`) when acting as a feature icon.
    *   **Secondary**: Slate-400 when used as a UI utility (e.g., breadcrumbs).
3.  **Container**: Often placed inside a rounded square with a subtle background.
    ```jsx
    <div className="h-12 w-12 rounded-xl bg-slate-900/5 flex items-center justify-center text-slate-900 group-hover:bg-[#d6b16b] group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
    </div>
    ```

---

## 5. Imagery & Visuals

### The "Institutional Abstract" Style
Avoid generic "people shaking hands" stock photos. Use imagery that suggests:
*   **Scale & Stability**: Cityscapes (HCMC skyline), bridges, architecture.
*   **Precision & Data**: Abstract charts, trading screens, geometric patterns.
*   **Calmness**: Still water, ships navigating smoothly (metaphor for risk management).

### Treatment
*   **Overlays**: Images often have a dark overlay (`bg-slate-900/50` to `90`) to ensure text readability.
*   **Corners**: Rounded corners (`rounded-2xl`) on standalone images.
*   **Shadows**: Deep, soft shadows (`shadow-2xl`) to create depth.

---

## 6. UI Components & Patterns

### Feature Cards
Used for "Principles", "Roles", "Risk Factors".
*   **Background**: White (`bg-white`) or Off-White (`bg-slate-50`).
*   **Border**: Thin slate border (`border-slate-200`).
*   **Accent**: **Gold Top Border** (`border-t-4 border-[#d6b16b]`) or hover reveal.
*   **Interaction**: Slight lift (`-translate-y-1`) and shadow increase on hover.

### Buttons
*   **Primary**: Navy background, White text.
    ```jsx
    className="bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors"
    ```
*   **Secondary / Text Link**: Gold text, no background.
    ```jsx
    className="text-[#d6b16b] font-medium hover:text-[#b59355] inline-flex items-center gap-2"
    ```

### Navigation
*   **Header**: Clean white background, sticky. Links are `text-slate-600` turning `text-slate-900` on hover.
*   **Active State**: Underlined or bolded in Navy.

---

## 7. Layout Grid
*   **Max Width**: `max-w-6xl` (1152px) for standard content containers.
*   **Spacing**: Generous vertical spacing (`space-y-12` or `py-24`) to create breathing room.
*   **Columns**: Standard 12-column grid, often used as `grid-cols-1 md:grid-cols-2` or `md:grid-cols-3`.

---

## 8. Implementation Checklist
When adding new pages or sections:
- [ ] Are headings using **Playfair Display**?
- [ ] Is the primary action color **Navy** (buttons) or **Gold** (links/icons)?
- [ ] Do images have the correct **overlay** and **rounding**?
- [ ] Are icons consistent with the **Lucide** set?
- [ ] Is the content width aligned to **max-w-6xl**?
