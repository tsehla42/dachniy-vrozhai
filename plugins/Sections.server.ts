import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { SectionsMapEN } from '~/utils/types/SectionsTypes';
import { readFileSync } from 'fs';
import path from 'path';
import type { Category } from '~/utils/generator/classes/Category';
import { transliterate } from '~/utils/Transliteration';

export default defineNuxtPlugin(() => {
  const rootPath = process.cwd();
  const jsonContentFolder = path.resolve(rootPath, 'constants', 'content');

  const readCategoryJSONFile = (fileName: string) => {
    const fileNameWithExtension = `${fileName}.json`;
    const filePath = path.resolve(jsonContentFolder, fileNameWithExtension);
    return readFileSync(filePath);
  };

  const sectionCategoriesMap = Object.values(SectionsEnum).reduce(
    (acc, sectionNameUkr) => {
      const sectionName = transliterate(sectionNameUkr);
      const categories = JSON.parse(String(readCategoryJSONFile(sectionName))) as Category[];

      // console.log('categories', categories);
      // console.log('sectionName', sectionName);

      return {
        ...acc,
        [sectionName]: categories,
      };
    },
    {} as SectionsMapEN<Category[]>,
  );

  const { setSectionsMap, setContentSections } = useSectionsStore();
  setSectionsMap(sectionCategoriesMap);
  setContentSections(sectionCategoriesMap);
});
