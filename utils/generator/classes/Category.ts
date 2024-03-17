import { Subcategory } from '~/utils/generator/classes/Subcategory';
import { CoreCategory } from '~/utils/generator/classes/CoreCategory';

export class Category extends CoreCategory {
  subcategories: Subcategory[] = [];

  constructor(categoryNameUkr: string, sectionName: string, allServerImages: string[], subcategories?: string[]) {
    super(categoryNameUkr, sectionName, allServerImages, subcategories);

    this.setSubcategories(subcategories, allServerImages);
  }

  setSubcategories(subcategories?: string[], allServerImages?: string[]) {
    if (!subcategories || !subcategories.length || !allServerImages) {
      return;
    }

    this.subcategories = subcategories.map(
      (subcategoryNameUkr) => new Subcategory(subcategoryNameUkr, this.sectionName, this.categoryName, allServerImages),
    );
  }
}
