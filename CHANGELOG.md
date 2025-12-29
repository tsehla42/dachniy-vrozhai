# Changelog

## Recent Changes

- Migrated to Nuxt 4
- Migrated Nuxt UI from v3 to v4 (UDropdown → UDropdownMenu with new API)
- Updated DvDropdown wrapper component to use default slot instead of #trigger slot
- Updated HeaderSectionDropdown to v4 API: changed UI prop slots (wrapper/trigger/container → content/viewport/group/item)
- Added main.scss to nuxt.config.ts CSS imports for global styles
- Added modal="false" to DvDropdown to allow page scrolling when dropdown is open
- Added ring: '' to UI config to remove default black ring border from dropdowns
- Implemented nested dropdowns using children property for categories with articles (except inventory section)
- Removed HeaderCategoryLink component usage in favor of native nested dropdown structure

