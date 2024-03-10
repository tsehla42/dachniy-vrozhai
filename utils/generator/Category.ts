import { transliterate } from '~/utils/Transliteration';
import { Subcategory } from '~/utils/generator/Subcategory';
import { CoreCategory } from '~/utils/generator/CoreCategory';

export class Category extends CoreCategory {
  subcategories?: Subcategory[];

  constructor(categoryNameUkr: string, subcategories?: string[]) {
    super(categoryNameUkr, subcategories);

    this.setSubcategories(subcategories);
  }

  setSubcategories(subcategories?: string[]) {
    if (!subcategories || !subcategories.length) {
      return;
    }

    this.subcategories = subcategories.map(
      (subcategoryNameUkr) => new Subcategory(subcategoryNameUkr, this.categoryName),
    );
  }

  get transliteratedCategoryName() {
    return transliterate(this.label);
  }
}
