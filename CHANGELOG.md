# Changelog - ASC Website

All notable changes to the Aureus Sigma Capital website will be documented in this file.

## [Unreleased] - 2025-10-06

### Changed
- **Upgraded to Color Palette v2.0** (production-ready)
  - Added comprehensive `ASC_COLORS` object with semantic colors
  - Implemented data visualization color palette (8 colors)
  - Added threshold/risk level colors
  - Maintained backward compatibility with existing `BRAND` constant
  
### Added
- **Semantic Color System**
  - Info: Sky Blue `#0369A1`
  - Success: Forest Green `#047857`
  - Warning: Caution Gold `#F59E0B`
  - Error: Crimson Red `#DC2626`
  
- **Helper Functions**
  - `getSemanticColor(type)` - Get semantic colors by name
  - `getChartColor(index)` - Get chart colors with automatic cycling
  
- **Data Visualization Palette**
  - 8-color palette optimized for categorical separation
  - WCAG AAA compliant
  - Colorblind-optimized
  - Professionally reviewed

### Technical Details
- File updated: `src/App.jsx` (lines 43-98)
- Based on: `Brand_Guidelines/2025-09-29_asc_color_palette.md`
- Accessibility: WCAG AAA compliant
- No breaking changes - existing code continues to work

### Migration Notes
- Existing `BRAND.charcoal` and `BRAND.gold` references work unchanged
- New semantic colors available via `ASC_COLORS.semantic.*`
- Chart colors available via `ASC_COLORS.primary[]` or `getChartColor(index)`

### Benefits
✅ Production-ready color system
✅ Better accessibility (WCAG AAA)
✅ Consistent semantic colors across UI
✅ Ready for data visualization implementation
✅ Colorblind-friendly palette

### Next Steps
- [ ] Optional: Implement semantic colors in UI components (success/error messages)
- [ ] Optional: Re-enable charts with new color palette
- [ ] Optional: Add CSS variables for easier color access
- [ ] Optional: Create Tailwind config extension

---

## Previous Versions

### [1.0] - 2025-09-17
- Initial color palette implementation
- Core brand colors: Gold `#D4AF37`, Charcoal `#0F172A`
- Tailwind Slate neutral scale

---

**Reference Documents:**
- Color Palette v2.0: `Brand_Guidelines/2025-09-29_asc_color_palette.md`
- Brand Audit: `Brand_Assets/BRAND_CONSISTENCY_AUDIT.md`
- Update Guide: `Brand_Assets/WEBSITE_UPDATE_GUIDE.md`

