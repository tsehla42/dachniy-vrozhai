import { transliterate } from '~/utils/Transliteration';
import { getImageSrcForCategory } from '~/utils/Images';

export class CoreCategory {
  protected readonly _isCategory: boolean;
  categoryName: string = '';
  sectionName: string = '';
  label: string = '';
  to: string = '';
  pictureSrc: string = '';

  constructor(categoryNameUkr: string, sectionName: string, allServerImages: string[], subcategories?: string[]) {
    this._isCategory = !!subcategories?.length;

    this.setLabel(categoryNameUkr);
    this.setSectionName(sectionName);
    this.setCategoryName();
    this.setToPath();
    this.setPictureSrc(allServerImages);
  }

  setLabel(label: string) {
    this.label = label;
  }

  setSectionName(sectionName: string) {
    this.sectionName = this._isCategory ? transliterate(sectionName, true) : sectionName;
  }

  setCategoryName() {
    this.categoryName = this.transliteratedCategoryName;
  }

  setToPath() {
    const pathPrefix = this._isCategory ? '/category' : '/category';
    if (this._isCategory) {
      this.to = `${pathPrefix}/${this.transliteratedCategoryName}`;
    } else {
      this.to = `${pathPrefix}/kapustiani`;
    }
  }

  setPictureSrc(allServerImages: string[]) {
    this.pictureSrc = getImageSrcForCategory(this.label, this._isCategory, allServerImages);
  }

  get transliteratedCategoryName() {
    return transliterate(this.label);
  }
}
