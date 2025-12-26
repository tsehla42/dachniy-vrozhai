import { CoreCategory } from '~/utils/generator/classes/CoreCategory';
import { getImageSrcForCategory } from '~/utils/Images';

export class Article extends CoreCategory {
  articleName: string = '';

  constructor(articleNameUkr: string, sectionName: string, mainCategoryNameUkr: string, allServerImages: string[]) {
    super(mainCategoryNameUkr, sectionName);
    this.setLabel(articleNameUkr);
    this.setArticleName(articleNameUkr);
    this.setPictureSrc(allServerImages);
    this.setToPath();
  }

  setToPath() {
    this.to = `/articles/${this.sectionName}/${this.categoryName}/${this.articleName}`;
  }

  setArticleName(articleNameUkr: string) {
    this.articleName = this.transliterateField(articleNameUkr);
  }

  setPictureSrc(allServerImages: string[]) {
    this.pictureSrc = getImageSrcForCategory(this.label, false, allServerImages);
  }

  setSectionName(sectionName: string) {
    this.sectionName = sectionName;
  }
}
