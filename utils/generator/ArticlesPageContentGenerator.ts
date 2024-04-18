import fs from 'fs';
import path from 'path';
import { Category } from '~/utils/generator/classes/Category';

export const generateArticlesPageContent = (articlesFolder: string, categories: Category[]) => {
  const createContent = (sectionName: string, categoryName: string, articleName: string, label: string) => {
    const tokens = [
      '---',
      `title: "${label}"`,
      "description: 'meta опис сторінки'\n",
      `section: '${sectionName}'`,
      `category: '${categoryName}'`,
      `article: '${articleName}'`,
      '---',
      `\n# ${label}`,
    ];

    return tokens.join('\n');
  };

  const createMarkdownFile = (folderPath: string, category: Category) => {
    category.articles.forEach(({ sectionName, categoryName, articleName, label }) => {
      const articleFolderPath = path.resolve(folderPath, sectionName, categoryName);
      const articleFilePath = path.resolve(articleFolderPath, `${articleName}.md`);

      if (!fs.existsSync(articleFolderPath)) {
        fs.mkdirSync(articleFolderPath, { recursive: true });
        console.log(`Folder "${articleFolderPath}" created successfully.`);
      }

      if (!fs.existsSync(articleFilePath)) {
        fs.writeFileSync(articleFilePath, createContent(sectionName, categoryName, articleName, label));
        console.log(`\n[Article] File ${sectionName}/${categoryName}.md created.`);
      } else {
        console.log(`[Article] File ${sectionName}/${categoryName}.md already exists. Skipping creation.`);
      }
    });

    if (!category.articles.length) {
      console.log('asssssssssssssssssssssssssssssssss');
      const { sectionName, categoryName, label } = category;

      const articleFolderPath = path.resolve(folderPath, sectionName);
      const articleFilePath = path.resolve(articleFolderPath, `${categoryName}.md`);

      if (!fs.existsSync(articleFolderPath)) {
        fs.mkdirSync(articleFolderPath, { recursive: true });
        console.log(`Folder "${articleFolderPath}" created successfully.`);
      }

      if (!fs.existsSync(articleFilePath)) {
        fs.writeFileSync(articleFilePath, createContent(sectionName, categoryName, categoryName, label));
        console.log(`\n[Article] File ${sectionName}/${categoryName}.md created.`);
      } else {
        console.log(`[Article] File ${sectionName}/${categoryName}.md already exists. Skipping creation.`);
      }
    }
  };

  categories.forEach((category: Category) => {
    createMarkdownFile(articlesFolder, category);
  });
};
