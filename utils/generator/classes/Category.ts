import { Article } from '~/utils/generator/classes/Article';
import { CoreCategory } from '~/utils/generator/classes/CoreCategory';
import { getImageSrcForCategory } from '~/utils/Images';

export class Category extends CoreCategory {
  articles: Article[] = [];

  constructor(categoryNameUkr: string, sectionName: string, allServerImages: string[], articles?: string[]) {
    super(categoryNameUkr, sectionName);

    this.setArticles(articles, allServerImages);
    this.setToPath();
    this.setPictureSrc(allServerImages);
  }

  setToPath() {
    this.to = `/category/${this.categoryName}`;
  }

  setPictureSrc(allServerImages: string[]) {
    this.pictureSrc = getImageSrcForCategory(this.label, true, allServerImages);
  }

  setArticles(articles?: string[], allServerImages?: string[]) {
    if (!articles || !articles.length || !allServerImages) {
      return;
    }

    this.articles = articles.map(
      (articleNameUkr) => new Article(articleNameUkr, this.sectionName, this.label, allServerImages),
    );
  }
}
