import { Category } from '~/utils/generator/classes/Category';
import fs from 'fs';

export const generateCategoryPageContent = (categoryFolder: string, categories: Category[]) => {
  const createContent = (category: Category) => {
    const { label, categoryName, sectionName } = category;
    const tokens = [
      '---',
      `title: '${label}'`,
      "description: 'meta опис сторінки'\n",
      `section: '${sectionName}'`,
      `category: '${categoryName}'`,
      '---',
      `\n# ${label}`,
    ];

    return tokens.join('\n');
  };

  const createMarkdownFile = (category: Category) => {
    const { categoryName, articles } = category;
    const filePath = `${categoryFolder}/${categoryName}.md`;

    if (!articles.length) {
      console.log(`[Category] File ${categoryName}.md doesn't belong to Categories folder. Skipping creation.`);

      return;
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, createContent(category));
      console.log(`\n[Category] File ${categoryName}.md created.\n`);
    } else {
      console.log(`[Category] File ${categoryName}.md already exists. Skipping creation.`);
    }
  };

  categories.forEach((category: Category) => {
    createMarkdownFile(category);
  });

  console.log('\n');
};
