import { useImagesStore } from '~/stores/imagesStore';
import { transliterate } from '~/utils/Transliteration';

export class CoreCategory {
  private readonly _isCategory: boolean;
  categoryName: string = '';
  label: string = '';
  to: string = '';
  pictureSrc: string = '';

  constructor(categoryNameUkr: string, subcategories?: string[]) {
    this._isCategory = !!subcategories?.length;

    this.setLabel(categoryNameUkr);
    this.setCategoryName();
    this.setToPath();
    this.setPictureSrc();
  }

  setLabel(label: string) {
    this.label = label;
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

  setPictureSrc() {
    if (process.server) {
      const { images } = useImagesStore();

      const pictureName = this.label.toLowerCase().split(' ').join('-');
      const pictureNameWithExtension = `${pictureName}.png`;
      const doesImageExist = images.includes(pictureNameWithExtension);
      const { pictureSrc, fallbackPictureSrc } = this.createPictureSrc(pictureNameWithExtension);

      this.pictureSrc = doesImageExist ? pictureSrc : fallbackPictureSrc;
    }
  }

  createPictureSrc(pictureNameWithExtension: string) {
    const basePath = '/images';
    const pathPrefix = this._isCategory ? 'categories' : 'articles/preview';
    const fallbackPictureSrc = '/images/fallback/fallback-200x200.png';
    const pictureSrc = `${basePath}/${pathPrefix}/${pictureNameWithExtension}`;

    return { pictureSrc, fallbackPictureSrc };
  }

  get transliteratedCategoryName() {
    return transliterate(this.label);
  }
}
