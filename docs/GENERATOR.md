# Content Generator Integration

This project uses a separate generator repository as a git submodule to generate content files.

## Setup

After cloning this repository, initialize the generator submodule:

```bash
git submodule update --init --recursive
```

## Generating Content

To regenerate all content (JSON configs, markdown files):

```bash
npm run generate-content
```

This script will:
1. Run the generator in the `generator/` submodule
2. Copy generated JSON files to `constants/content/`
3. Copy generated markdown files to `content/articles/` and `content/category/`

## Architecture

### Templates
The content structure is defined in templates located in `generator/src/templates/`:
- `ovochi.ts` - Vegetables section
- `kvity.ts` - Flowers section
- `shkidnyky-i-khvoroby.ts` - Pests and diseases section
- `dobryva.ts` - Fertilizers section
- `inventar.ts` - Tools section

### Generated Files
The generator creates:
1. **JSON files** (`constants/content/*.json`) - Category and article metadata used by the app at runtime
2. **Markdown files** (`content/articles/**/*.md`) - Article content loaded by Nuxt Content
3. **Category index files** (`content/category/*.md`) - Category landing pages

### Runtime Flow
1. `plugins/Sections.server.ts` reads JSON files from `constants/content/`
2. Populates Pinia store with section/category structure
3. Components use store data to render navigation and dropdowns
4. Nuxt Content loads markdown files for article pages

## Updating Content

To add or modify content:
1. Update templates in `generator/src/templates/`
2. Commit changes in the generator submodule
3. Run `npm run generate-content` in the main repo
4. Commit generated files in the main repo

## Submodule Management

Update the generator to the latest version:
```bash
cd generator
git pull origin main
cd ..
git add generator
git commit -m "Update generator submodule"
```

