import { CoreCategory } from '~/utils/generator/CoreCategory';

export class Subcategory extends CoreCategory {
  mainCategoryName: string = '';

  constructor(categoryNameUkr: string, mainCategoryName: string) {
    super(categoryNameUkr);
    this.mainCategoryName = mainCategoryName;
  }
}
