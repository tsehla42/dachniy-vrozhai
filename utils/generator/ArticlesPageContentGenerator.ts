import path from 'path';
import type { Category } from '~/utils/generator/classes/Category';
import { createFolder, createFile } from '~/utils/FileUtils';

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
    const prefix = 'Article';

    category.articles.forEach(({ sectionName, categoryName, articleName, label }) => {
      const articleFolderPath = path.resolve(folderPath, sectionName, categoryName);
      const articleFilePath = path.resolve(articleFolderPath, `${articleName}.md`);
      const articleContent = createContent(sectionName, categoryName, articleName, label);

      createFolder(articleFolderPath, prefix);
      createFile(articleFilePath, articleContent, prefix);
    });

    if (!category.articles.length) {
      const { sectionName, categoryName, label } = category;
      const articleFolderPath = path.resolve(folderPath, sectionName);
      const articleFilePath = path.resolve(articleFolderPath, `${categoryName}.md`);
      const articleContent = createContent(sectionName, categoryName, categoryName, label);

      createFolder(articleFolderPath, prefix);
      createFile(articleFilePath, articleContent, prefix);
    }
  };

  categories.forEach((category: Category) => {
    createMarkdownFile(articlesFolder, category);
  });
};
