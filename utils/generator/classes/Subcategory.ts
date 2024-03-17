import { CoreCategory } from '~/utils/generator/classes/CoreCategory';

export class Subcategory extends CoreCategory {
  mainCategoryName: string = '';

  constructor(categoryNameUkr: string, sectionName: string, mainCategoryName: string, allServerImages: string[]) {
    super(categoryNameUkr, sectionName, allServerImages);
    this.mainCategoryName = mainCategoryName;
  }
}
