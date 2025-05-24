import type { Category } from '~/utils/generator/classes/Category';
import type { SectionsMapUA } from '~/utils/types/SectionsTypes';
import type { Entries } from 'type-fest';
import { transliterate } from '~/utils/Transliteration';
import path from 'path';
import { createFolder, createFile } from '~/utils/FileUtils';

export const generateConstants = (constantsFolder: string, sectionCategoriesMap: SectionsMapUA<Category[]>) => {
  const createContent = (sectionContent: Category[]) => {
    return JSON.stringify(sectionContent, null, 2);
  };

  (Object.entries(sectionCategoriesMap) as Entries<typeof sectionCategoriesMap>).forEach(
    ([sectionName, sectionContent]) => {
      const prefix = 'Constants';
      const transliteratedSectionName = transliterate(sectionName);
      const filePath = path.resolve(constantsFolder, `${transliteratedSectionName}.json`);

      createFolder(constantsFolder, prefix);
      createFile(filePath, createContent(sectionContent), prefix, true);
    },
  );

  console.log('\n\n');
};
