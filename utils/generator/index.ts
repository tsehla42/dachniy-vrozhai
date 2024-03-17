import path from 'path';
import { OVOCHI_TEMPLATE } from '~/templates/Ovochi';
import { Category } from '~/utils/generator/classes/Category';
import { KVITY_TEMPLATE } from '~/templates/Kvity';
import { SHKIDNYKY_I_KHVOROBY_TEMPLATE } from '~/templates/ShkidnykyIKhvoroby';
import { DOBRYVA_TEMPLATE } from '~/templates/Dobryva';
import { INVENTAR_TEMPLATE } from '~/templates/Inventar';
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { SectionsMap } from '~/utils/types/SectionsTypes';
import type { CategoryTemplateCollection } from '~/utils/types/CategoryTypes';
import { generateCategoryPageContent } from '~/utils/generator/CategoryPageContentGenerator';
// import { SECTION_TRANSLATIONS } from '~/constants/localizations/SectionTranslations';
// import { mapTemplateToSerializedCategory } from '~/utils/SerializeNonPOJOs';
import type { Entries } from 'type-fest';
import { generateConstants } from '~/utils/generator/CategoriesConstantGenerator';
import { getAllImagesOnServer } from '~/utils/Images';
// import { SVG_ICON_COMPONENTS_MAP } from '~/constants/SvgIconComponentsMap';

const rootPath = process.cwd();
const categoryFolder = path.resolve(rootPath, 'content', 'category');
const constantsFolder = path.resolve(rootPath, 'constants', 'content');
const allServerImages = getAllImagesOnServer();

const sectionTemplatesMap: SectionsMap<CategoryTemplateCollection> = {
  [SectionsEnum.ovochi]: OVOCHI_TEMPLATE,
  [SectionsEnum.kvity]: KVITY_TEMPLATE,
  [SectionsEnum.shkidnykyIKhvoroby]: SHKIDNYKY_I_KHVOROBY_TEMPLATE,
  [SectionsEnum.dobryva]: DOBRYVA_TEMPLATE,
  [SectionsEnum.inventar]: INVENTAR_TEMPLATE,
};

const sectionCategoriesMap = (Object.entries(sectionTemplatesMap) as Entries<typeof sectionTemplatesMap>).reduce(
  (acc, [sectionName, sectionTemplate]: [SectionsEnum, CategoryTemplateCollection]) => {
    const section = sectionTemplate.map(([categoryNameUkr, subcategories]) => {
      return new Category(categoryNameUkr, sectionName, allServerImages, subcategories);
    });
    return {
      ...acc,
      [sectionName]: section,
    };
  },
  {} as SectionsMap<Category[]>,
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
generateConstants(constantsFolder, sectionCategoriesMap);
