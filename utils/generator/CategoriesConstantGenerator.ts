import fs from 'fs';
import { Category } from '~/utils/generator/classes/Category';
import type { SectionsMapUA } from '~/utils/types/SectionsTypes';
import type { Entries } from 'type-fest';
import { transliterate } from '~/utils/Transliteration';
import path from 'path';

export const generateConstants = (constantsFolder: string, sectionCategoriesMap: SectionsMapUA<Category[]>) => {
  const createContent = (sectionContent: Category[]) => {
    return JSON.stringify(sectionContent, null, 2);
  };

  (Object.entries(sectionCategoriesMap) as Entries<typeof sectionCategoriesMap>).forEach(
    ([sectionName, sectionContent]) => {
      if (!fs.existsSync(constantsFolder)) {
        fs.mkdirSync(constantsFolder, { recursive: true });
        console.log(`[Constants] Folder "${constantsFolder}" created successfully.`);
      }

      const transliteratedSectionName = transliterate(sectionName, true);
      const filePath = path.resolve(constantsFolder, `${transliteratedSectionName}.json`);
      const fileContent = createContent(sectionContent);
      fs.writeFileSync(filePath, fileContent);

      console.log(`[Constants] File "${filePath}" created successfully.`);
    },
  );

  console.log('\n\n');
};
