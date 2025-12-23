import { execSync } from 'child_process';
import path from 'path';
import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs';

const rootPath = process.cwd();
const generatorPath = path.resolve(rootPath, 'generator');
const generatorContentPath = path.resolve(generatorPath, 'content');
const mainContentPath = path.resolve(rootPath, 'content');
const mainConstantsPath = path.resolve(rootPath, 'constants', 'content');

console.log('🚀 Starting content generation...\n');

// Check if generator exists
if (!existsSync(generatorPath)) {
  console.error('❌ Generator submodule not found. Run: git submodule update --init --recursive');
  process.exit(1);
}

// Check if generator has dependencies installed
if (!existsSync(path.resolve(generatorPath, 'node_modules'))) {
  console.log('Installing generator dependencies...');
  execSync('npm install', { cwd: generatorPath, stdio: 'inherit' });
}

// Run the generator
console.log('Running generator...\n');
try {
  execSync('npm run generate-content', { cwd: generatorPath, stdio: 'inherit' });
} catch (error) {
  console.error('❌ Generator failed');
  process.exit(1);
}

console.log('\nCopying generated files to main repo...\n');

// Copy generated JSON files to constants/content
const copyJsonFiles = () => {
  if (!existsSync(generatorContentPath)) {
    console.warn('Generator content folder not found');
    return;
  }

  if (!existsSync(mainConstantsPath)) {
    mkdirSync(mainConstantsPath, { recursive: true });
  }

  const files = readdirSync(generatorContentPath).filter(file => file.endsWith('.json'));
  files.forEach(file => {
    const sourcePath = path.resolve(generatorContentPath, file);
    const destPath = path.resolve(mainConstantsPath, file);
    copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to constants/content/`);
  });
};

// Copy generated markdown files to content/articles
const copyArticlesFolder = () => {
  const articlesDestPath = path.resolve(mainContentPath, 'articles');

  // Remove old articles folder and recreate
  if (existsSync(articlesDestPath)) {
    execSync(`rm -rf "${articlesDestPath}"`, { stdio: 'inherit' });
  }
  mkdirSync(articlesDestPath, { recursive: true });

  // Copy all section folders that contain articles
  const sections = ['ovochi', 'kvity', 'shkidnyky-i-khvoroby', 'dobryva', 'inventar'];
  let copiedCount = 0;

  sections.forEach(section => {
    const sectionSourcePath = path.resolve(generatorContentPath, section);
    const sectionDestPath = path.resolve(articlesDestPath, section);

    if (existsSync(sectionSourcePath)) {
      execSync(`cp -r "${sectionSourcePath}" "${sectionDestPath}"`, { stdio: 'inherit' });
      copiedCount++;
    }
  });

  if (copiedCount > 0) {
    console.log(`Copied ${copiedCount} section folders to content/articles/`);
  } else {
    console.warn('No article sections found');
  }
};

// Copy generated category index files
const copyCategoryFiles = () => {
  const categoryDestPath = path.resolve(mainContentPath, 'category');

  if (!existsSync(categoryDestPath)) {
    mkdirSync(categoryDestPath, { recursive: true });
  }

  // Find and copy all index.md files from section folders
  const sections = ['ovochi', 'kvity', 'shkidnyky-i-khvoroby', 'dobryva', 'inventar'];
  let copiedCount = 0;

  sections.forEach(section => {
    const sectionIndexPath = path.resolve(generatorContentPath, section, 'index.md');
    if (existsSync(sectionIndexPath)) {
      const destPath = path.resolve(categoryDestPath, `${section}.md`);
      copyFileSync(sectionIndexPath, destPath);
      copiedCount++;
    }
  });

  if (copiedCount > 0) {
    console.log(`Copied ${copiedCount} section index files to content/category/`);
  } else {
    console.warn('No section index files found');
  }
};

// Execute copying
copyJsonFiles();
copyArticlesFolder();
copyCategoryFiles();

console.log('\nContent generation complete!\n');

