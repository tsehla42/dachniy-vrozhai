import fs from 'fs';
import path from 'path';
import { VEGETABLES } from '~/constants/content/Vegetables';
import { Category } from '~/utils/Category';
import { FLOWERS } from '~/constants/content/Flowers';
import { PESTS_AND_DISEASES } from '~/constants/content/PestsAndDiseases';
import { FERTILIZERS } from '~/constants/content/Fertilizers';
import { INVENTORY } from '~/constants/content/Inventory';
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { SectionsMapInterface } from '~/utils/types/SectionsTypes';
import type { CategoryTemplateCollection } from '~/utils/types/CategoryTypes';

const rootPath = process.cwd();
const categoryFolder = path.resolve(rootPath, '../', 'content', 'category');

const sectionsMap: SectionsMapInterface<CategoryTemplateCollection> = {
  [SectionsEnum.vegetables]: VEGETABLES,
  [SectionsEnum.flowers]: FLOWERS,
  [SectionsEnum.pestsAndDiseases]: PESTS_AND_DISEASES,
  [SectionsEnum.fertilizers]: FERTILIZERS,
  [SectionsEnum.inventory]: INVENTORY,
};

const categories = Object.values(sectionsMap).reduce((accumulator, section: CategoryTemplateCollection) => {
  const categoriesFromSection = section.map(([categoryNameUkr, subcategories]) => {
    return new Category(categoryNameUkr, subcategories);
  });

  return [...accumulator, ...categoriesFromSection];
}, []);

const vegetables = VEGETABLES.map(([categoryNameUkr, subcategories]) => {
  return new Category(categoryNameUkr, subcategories);
});

function createMarkdownFile(categoryName: string) {
  const filePath = `${categoryFolder}/${categoryName}.md`;

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `# ${categoryName}\n\nSubcategories:\n\n`);
  } else {
    console.log(`File ${categoryName}.md already exists. Skipping creation.`);
  }
}

categories.forEach((category) => {
  createMarkdownFile(category.categoryName);
});

// console.log({ categories });
