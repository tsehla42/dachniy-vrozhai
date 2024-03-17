import fs from 'fs';
import { Category } from '~/utils/generator/classes/Category';
import type { SectionsMap } from '~/utils/types/SectionsTypes';
import type { Entries } from 'type-fest';
import { transliterate } from '~/utils/Transliteration';

export const generateConstants = (constantsFolder: string, sectionCategoriesMap: SectionsMap<Category[]>) => {
  const createContent = (sectionContent: Category[]) => {
    return JSON.stringify(sectionContent, null, 2);
  };

  (Object.entries(sectionCategoriesMap) as Entries<typeof sectionCategoriesMap>).forEach(
    ([sectionName, sectionContent]) => {
      const transliteratedSectionName = transliterate(sectionName, true);
      const filePath = `${constantsFolder}/${transliteratedSectionName}.json`;
      const fileContent = createContent(sectionContent);
      fs.writeFileSync(filePath, fileContent);

      console.log(`File "${filePath}" created successfully.`);
    },
  );
};
