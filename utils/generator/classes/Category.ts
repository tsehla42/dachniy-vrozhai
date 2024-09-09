import { Article } from '~/utils/generator/classes/Article';
import { CoreCategory } from '~/utils/generator/classes/CoreCategory';
import { getImageSrcForCategory } from '~/utils/Images';

export class Category extends CoreCategory {
  articles: Article[] = [];

  constructor(categoryNameUkr: string, sectionName: string, allServerImages: string[], articles?: string[]) {
    super(categoryNameUkr, sectionName);

    this.setArticles(articles, allServerImages);
    this.setPictureSrc(allServerImages);
  }

  setToPath(path: string) {
    this.to = path;
  }

  setPictureSrc(allServerImages: string[]) {
    this.pictureSrc = getImageSrcForCategory(this.label, true, allServerImages);
  }

  setArticles(articles?: string[], allServerImages?: string[]) {
    if (!articles || !articles.length || !allServerImages) {
      this.setToPath(`/articles/${this.sectionName}/${this.categoryName}`);
      return;
    }

    this.setToPath(`/category/${this.categoryName}`);

    this.articles = articles.map(
      (articleNameUkr) => new Article(articleNameUkr, this.sectionName, this.label, allServerImages),
    );
  }
}
