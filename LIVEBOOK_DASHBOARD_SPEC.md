# Livebook Performance Console v2.4 - Technical & Design Specification
**Target Audience:** Frontend Developer / AI Agent
**Brand Standard:** Aureus Sigma Capital (Website Mirror)
**Reference:** Matches `uploaded_image_1.png` (Website) & `TearsheetPage.jsx`.
**Date:** November 23, 2025

---

## 1. Executive Summary & Design Critique
The user has provided the **ASC Website** as the ultimate visual standard. The previous "All White" draft was too raw. The correct aesthetic is a **Hybrid Premium** look:
1.  **Website Elegance**: Dark Navy Hero sections with Gold accents and serif typography.
2.  **Tearsheet Clarity**: Clean white cards for data density on a light gray canvas.

**Core Mandate:**
*   **Structure**: **White Nav** -> **Dark Navy Hero** -> **Light Content Body**.
*   **Typography**: **Playfair Display** is the "Voice" of the brand. Use it for all titles and key metrics.
*   **Details**: Gold underlines (`border-b-2 border-[#D4AF37]`) are the signature accent.

---

## 2. Layout & Shell

### 2.1 Global Navigation (Matches Website)
*   **Background**: `bg-white`.
*   **Height**: `h-20` (Tall, elegant).
*   **Border**: `border-b border-slate-100`.
*   **Content**:
    *   **Logo**: ASC Logo (Navy/Gold) on the left.
    *   **Links**: "Home", "What We Do", etc. (DM Sans, Slate-600, Hover: Navy).
    *   **Right**: "Live Console" Badge (Gold/Navy).

### 2.2 Hero Section (The "Premium" Anchor)
*   **Background**: `bg-[#0F172A]` (ASC Navy).
*   **Texture**: Subtle background image (City/Network) with heavy overlay (`bg-slate-900/90`).
*   **Padding**: `py-12 px-8`.
*   **Content**:
    *   **Title**: "Livebook Performance" (Playfair Display, **White**, 48px).
    *   **Subtitle**: "Systematic Alpha • Live Trading" (DM Sans, **Gold #D4AF37**, 14px, Uppercase, Tracking-Widest).
    *   **Controls**: Floating row of inputs *inside* the Hero, styled as **Glassmorphism** (`bg-white/10 text-white border-white/20`).

### 2.3 Main Content Body
*   **Background**: `bg-[#F8FAFC]` (Slate-50).
*   **Layout**: Grid of **White Cards** floating on this light gray surface.
*   **Padding**: `px-8 -mt-8` (Overlap the Hero slightly for depth).

---

## 3. Component Specifications

### 3.1 KPI Cards (The "Tearsheet" Card)
**Design Rule**: White "Paper" cards sitting on the Slate-50 background.
*   **Container**: `bg-white rounded-xl shadow-sm border border-slate-200 p-8`.
*   **Top Accent**: Optional Gold top border (`border-t-4 border-[#D4AF37]`) for the main "Livebook" card.
*   **Typography**:
    *   **Label**: `font-sans text-xs text-slate-400 uppercase tracking-widest`.
    *   **Value**: `font-serif text-5xl text-[#0F172A] mt-2 mb-1`.
    *   **Sub-metrics**: `text-slate-500 font-mono text-sm`.

### 3.2 Charts (Clean & Institutional)
*   **Container**: `bg-white rounded-xl shadow-sm border border-slate-200 p-6`.
*   **Header**:
    *   Title: `font-serif text-2xl text-[#0F172A]`.
    *   **Gold Underline**: Small gold line under the title (`w-12 h-1 bg-[#D4AF37] mt-2`).
*   **Plot**:
    *   **Livebook**: `#D4AF37` (Gold), Solid, Thick.
    *   **Model**: `#0F172A` (Navy), Solid, Medium.
    *   **Benchmark**: `#94A3B8` (Slate), Dashed.

### 3.3 Data Tables
*   **Style**: "Printed Report" look.
*   **Header**: `border-b-2 border-[#0F172A] text-[#0F172A] font-bold uppercase`.
*   **Rows**: White background, `border-b border-slate-100`.
*   **Font**: `font-mono text-slate-600`.

---

## 4. Visual Style Guide (The "Website Mirror")

### Typography
*   **Headings**: **Playfair Display**. Always Navy (`#0F172A`) on light, White on dark.
*   **Body**: **DM Sans**. Slate-600.
*   **Accents**: **Gold (`#D4AF37`)**. Used for subtitles, active states, and underlines.

### Colors
*   **Navy**: `#0F172A` (Primary Brand).
*   **Gold**: `#D4AF37` (Primary Accent).
*   **Slate-50**: `#F8FAFC` (Page Background).
*   **White**: `#FFFFFF` (Card Background).

---

## 5. Prioritized Implementation Plan

1.  **Structure Update**:
    *   Implement the **Three-Layer Layout**: White Nav -> Navy Hero -> Slate Body.
2.  **Hero Polish**:
    *   Add the "City/Network" background image (or CSS gradient approximation) to the Navy Hero.
    *   Style the Title in huge White Playfair Display.
3.  **Card Styling**:
    *   Make cards White with `shadow-sm` and `rounded-xl`.
    *   Add the **Gold Top Border** to the primary KPI card.
