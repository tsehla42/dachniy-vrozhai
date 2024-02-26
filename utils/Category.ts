import { transliterate } from '~/utils/Transliteration';
import { fileChecker } from '~/utils/FileChecker';

export class Category {
  private readonly _isCategory: boolean;
  categoryName: string = '';
  label: string = '';
  to: string = '';
  picture: string = '';
  picture2: string = '';
  subcategories?: Category[];

  constructor(categoryNameUkr: string, isCategory: boolean, subcategories?: string[]) {
    this._isCategory = isCategory;

    this.setLabel(categoryNameUkr);
    this.setCategoryName();
    this.setToPath(isCategory);
    this.setSubcategories(subcategories);
    this.setPictureName();
  }

  setCategoryName() {
    this.categoryName = this.transliteratedCategoryName;
  }

  setLabel(label: string) {
    this.label = label;
  }

  setToPath(isCategory: boolean) {
    const additionalPathData = isCategory ? 'category/' : '';
    this.to = `/${additionalPathData}${this.transliteratedCategoryName}`;
  }

  setPictureName() {
    const pictureName = this.label.toLowerCase().split(' ').join('-');
    this.picture = `${pictureName}.png`;

    if (process.server) {
      fileChecker(this.picture).then((exists) => {
        console.log({ exists }, this);
        if (!exists) {
          console.log('set picture to fallback');
          this.picture = 'fallback-200x200.png';
          this.picture2 = 'fallback-200x200.png';
          console.log({ exists }, this);
        }
      });
    }
    // console.log('this.picture', this.picture);
    // console.log('this.picture2', this.picture2);
  }

  setSubcategories(subcategories?: string[]) {
    if (!this._isCategory || !subcategories) {
      return;
    }

    this.subcategories = subcategories.map((subcategoryNameUkr) => new Category(subcategoryNameUkr, false, []));
  }

  get transliteratedCategoryName() {
    return transliterate(this.label);
  }
}
