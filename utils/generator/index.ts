import path from 'path';
import type { Entries } from 'type-fest';
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { SectionsMapUA } from '~/utils/types/SectionsTypes';
import type { CategoryTemplateCollection } from '~/utils/types/CategoryTypes';
import { Category } from '~/utils/generator/classes/Category';
import { generateCategoryPageContent } from '~/utils/generator/CategoryPageContentGenerator';
import { generateConstants } from '~/utils/generator/CategoriesConstantGenerator';
import { getAllImagesOnServer } from '~/utils/Images';
import { generateArticlesPageContent } from '~/utils/generator/ArticlesPageContentGenerator';
import { OVOCHI_TEMPLATE } from '~/templates/Ovochi';
import { KVITY_TEMPLATE } from '~/templates/Kvity';
import { SHKIDNYKY_I_KHVOROBY_TEMPLATE } from '~/templates/ShkidnykyIKhvoroby';
import { DOBRYVA_TEMPLATE } from '~/templates/Dobryva';
import { INVENTAR_TEMPLATE } from '~/templates/Inventar';

const rootPath = process.cwd();
const contentFolder = path.resolve(rootPath, 'content');
const categoryFolder = path.resolve(contentFolder, 'category');
const articlesFolder = path.resolve(contentFolder, 'articles');
const constantsFolder = path.resolve(rootPath, 'constants', 'content');
const allServerImages = getAllImagesOnServer();

const sectionTemplatesMap: SectionsMapUA<CategoryTemplateCollection> = {
  [SectionsEnum.ovochi]: OVOCHI_TEMPLATE,
  [SectionsEnum.kvity]: KVITY_TEMPLATE,
  [SectionsEnum.shkidnykyIKhvoroby]: SHKIDNYKY_I_KHVOROBY_TEMPLATE,
  [SectionsEnum.dobryva]: DOBRYVA_TEMPLATE,
  [SectionsEnum.inventar]: INVENTAR_TEMPLATE,
};

const sectionCategoriesMap = (Object.entries(sectionTemplatesMap) as Entries<typeof sectionTemplatesMap>).reduce(
  (acc, [sectionName, sectionTemplate]: [SectionsEnum, CategoryTemplateCollection]) => {
    const section = sectionTemplate.map(([categoryNameUkr, articles]) => {
      return new Category(categoryNameUkr, sectionName, allServerImages, articles);
    });
    return {
      ...acc,
      [sectionName]: section,
    };
  },
  {} as SectionsMapUA<Category[]>,
);

const allCategories: Category[] = Object.values(sectionCategoriesMap).reduce((accumulator, section: Category[]) => {
  return [...accumulator, ...section];
}, []);

console.log('sectCatMap', allCategories);
console.log({ rootPath, categoryFolder, constantsFolder });

// const contentSections = Object.values(SectionsEnum).map((value: SectionsEnum) => {
//   return {
//     sectionName: value,
//     sectionLabel: SECTION_TRANSLATIONS[value],
//     svgIcon: SVG_ICON_COMPONENTS_MAP[value],
//     categories: sectionTemplatesMap[value],
//   };
// });

generateCategoryPageContent(categoryFolder, allCategories);
generateArticlesPageContent(articlesFolder, allCategories);
generateConstants(constantsFolder, sectionCategoriesMap);
