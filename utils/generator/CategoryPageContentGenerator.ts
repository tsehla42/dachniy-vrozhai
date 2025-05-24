import type { Category } from '~/utils/generator/classes/Category';
import { createFolder, createFile } from '~/utils/FileUtils';
import path from 'path';

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
    const filePath = path.resolve(categoryFolder, `${categoryName}.md`);
    const prefix = 'Category';

    if (!articles.length) {
      console.log(`[${prefix}] File ${categoryName}.md doesn't belong to Categories folder. Skipping creation.`);
      return;
    }

    createFolder(categoryFolder, prefix);
    createFile(filePath, createContent(category), prefix);
  };

  categories.forEach((category: Category) => {
    createMarkdownFile(category);
  });

  console.log('\n');
};
