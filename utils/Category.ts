import { transliterate } from '~/utils/Transliteration';
import { useImagesStore } from '~/stores/imagesStore';

export class Category {
  private readonly _isCategory: boolean;
  categoryName: string = '';
  label: string = '';
  to: string = '';
  picture: string = '';
  subcategories?: Category[];

  constructor(categoryNameUkr: string, subcategories?: string[]) {
    this._isCategory = !!subcategories?.length;

    this.setLabel(categoryNameUkr);
    this.setCategoryName();
    this.setToPath();
    this.setSubcategories(subcategories);
    this.setPictureName();
  }

  setCategoryName() {
    this.categoryName = this.transliteratedCategoryName;
  }

  setLabel(label: string) {
    this.label = label;
  }

  setToPath() {
    const additionalPathData = this._isCategory ? 'category/' : '';
    // this.to = `/${additionalPathData}${this.transliteratedCategoryName}`;
    this.to = `/${additionalPathData}kapustiani`;
  }

  setPictureName() {
    if (process.server) {
      const { images } = useImagesStore();

      const pictureName = this.label.toLowerCase().split(' ').join('-');
      const pictureNameWithExtension = `${pictureName}.png`;
      const doesImageExist = images.includes(pictureNameWithExtension);
      this.picture = doesImageExist ? pictureNameWithExtension : 'fallback-200x200.png';
    }
  }

  setSubcategories(subcategories?: string[]) {
    if (!this._isCategory || !subcategories) {
      return;
    }

    this.subcategories = subcategories.map((subcategoryNameUkr) => new Category(subcategoryNameUkr, []));
  }

  get transliteratedCategoryName() {
    return transliterate(this.label);
  }
}
