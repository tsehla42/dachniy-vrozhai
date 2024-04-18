import { transliterate } from '~/utils/Transliteration';

export class CoreCategory {
  categoryName: string = '';
  sectionName: string = '';
  label: string = '';
  to: string = '';
  pictureSrc: string = '';

  constructor(categoryNameUkr: string, sectionName: string) {
    this.setLabel(categoryNameUkr);
    this.setSectionName(sectionName);
    this.setCategoryName();
  }

  setLabel(label: string) {
    this.label = label;
  }

  setSectionName(sectionName: string) {
    this.sectionName = this.transliterateField(sectionName, true);
  }

  setCategoryName() {
    this.categoryName = this.transliteratedName;
  }

  transliterateField(value: string, camelCase?: boolean) {
    return transliterate(value, camelCase);
  }

  get transliteratedName() {
    return this.transliterateField(this.label);
  }
}
