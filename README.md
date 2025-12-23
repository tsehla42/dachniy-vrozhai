# Dachniy Vrozhai 🌱

A Ukrainian gardening website built with Nuxt 3, providing comprehensive information about vegetables, flowers, pests, diseases, fertilizers, and gardening tools.

## Quick Setup

### Automated Installation (Recommended)

Clone the repository and run the setup script:

```bash
git clone <repository-url> dachniy-vrozhai
cd dachniy-vrozhai
./setup.sh
```

The setup script will:
- Install all dependencies
- Initialize git submodules (content generator)
- Set up the generator
- Generate initial content
- Create necessary symlinks

### Manual Setup

If you prefer to set up manually:

```bash
# Clone the repository
git clone <repository-url> dachniy-vrozhai
cd dachniy-vrozhai

# Install main dependencies
npm install

# Initialize submodules
git submodule update --init --recursive

# Install generator dependencies
cd generator
npm install
cd ..

# Create symlink for generator public folder
cd generator
ln -sf ../public public
cd ..

# Generate content
npm run generate-content
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Content Generation

The content is generated from templates defined in the `generator` submodule:

```bash
# Regenerate all content (JSON + markdown)
npm run generate-content
```

This will:
1. Run the generator to create JSON metadata and markdown files
2. Copy generated files to the appropriate locations
3. Update category and article pages

See [GENERATOR.md](docs/GENERATOR.md) for detailed information about the content generation system.

## Production

Build and serve the static site:

```bash
# Generate static site
npm run generate

# Serve locally
npm run serve

# Or combine both
npm start
```

## Project Structure

```
├── assets/          # SCSS styles and SVG assets
├── components/      # Vue components
├── composables/     # Vue composables
├── constants/       # Generated JSON content files
├── content/         # Nuxt Content markdown files (generated)
├── generator/       # Git submodule for content generation
├── layouts/         # Nuxt layouts
├── pages/           # Nuxt pages
├── plugins/         # Nuxt plugins
├── public/          # Static assets (images, fonts)
├── scripts/         # Build and generation scripts
├── stores/          # Pinia stores
├── templates/       # Content templates (legacy, now in generator)
└── utils/           # Utility functions
```

## Development on Multiple Machines

When cloning to a new machine, simply run:

```bash
git clone <repository-url>
cd dachniy-vrozhai
./setup.sh
```

The setup script handles everything automatically.

## Updating Content

To modify content structure:

1. Edit templates in `generator/src/templates/`
2. Commit changes in the generator submodule:
   ```bash
   cd generator
   git add -A
   git commit -m "Update content templates"
   git push origin main
   ```
3. Update the submodule reference in main repo:
   ```bash
   cd ..
   git add generator
   git commit -m "Update generator submodule"
   ```
4. Regenerate content:
   ```bash
   npm run generate-content
   ```

## Technologies

- **Nuxt 3** - Vue.js framework
- **Nuxt Content** - Content management
- **Nuxt UI** - UI components
- **Pinia** - State management
- **TypeScript** - Type safety
- **SCSS** - Styling

## Documentation

- [GENERATOR.md](docs/GENERATOR.md) - Content generation system

## License

MIT

