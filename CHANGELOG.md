# Changelog

## Recent Changes

- Migrated to Nuxt 4
- Migrated Nuxt UI from v3 to v4 (UDropdown → UDropdownMenu with new API)
- Updated DvDropdown wrapper component to use default slot instead of #trigger slot
- Updated HeaderSectionDropdown to v4 API: changed UI prop slots (wrapper/trigger/container → content/viewport/group/item)
- Added main.scss to nuxt.config.ts CSS imports for global styles
- Added modal="false" to DvDropdown to allow page scrolling when dropdown is open
- Removed all shadows from dropdowns (ring, glow, box-shadow) using CSS variable overrides
- Implemented nested dropdowns using children property for categories with articles (except inventory section)
- Removed HeaderCategoryLink component usage in favor of native nested dropdown structure
- Added font-family: Anime Ace to all dropdown items (both category and article levels)
- Changed dropdown item spacing from 4px to 2px gap in dropdown-style mixin
- Restored use of section-category-dropdown-link mixin for nested article items instead of duplicating styles
- Added console.log debugging for empty dropdown issue investigation
- Fixed merge conflict issues: restored v4 API structure after git filter-repo operation
- Removed some files from git tracking
- Fixed TypeScript errors: added type annotations for item and article parameters
