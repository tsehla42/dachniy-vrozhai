import type { Category } from '~/utils/generator/classes/Category';

type SectionMapKey = SectionsEnum | keyof typeof SectionsEnum;
export interface SectionsMap<T> extends Record<SectionMapKey, T> {}

export enum SectionsEnum {
  ovochi = 'Овочі',
  kvity = 'Квіти',
  shkidnykyIKhvoroby = 'Шкідники і хвороби',
  dobryva = 'Добрива',
  inventar = 'Інвентар',
}

export interface ContentSection {
  sectionName: keyof typeof SectionsEnum;
  sectionLabel: SectionsEnum;
  categories: Category[];
}
