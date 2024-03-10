import { Category } from '~/utils/generator/Category';
import fs from 'fs';

export const generateCategoryPageContent = (categoryFolder: string, categories: Category[]) => {
  const createContent = (category: Category) => {
    const { label, categoryName } = category;
    const tokens = [
      '---',
      `title: '${label}'`,
      "description: 'meta опис сторінки'",
      "section: 'vegetables'",
      `category: '${categoryName}'`,
      '---',
      `# ${label}`,
    ];

    return tokens.join('\n');
  };

  const createMarkdownFile = (category: Category) => {
    const { categoryName } = category;
    const filePath = `${categoryFolder}/${categoryName}.md`;

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, createContent(category));
    } else {
      console.log(`File ${categoryName}.md already exists. Skipping creation.`);
    }
  };

  categories.forEach((category: Category) => {
    createMarkdownFile(category);
  });
};
