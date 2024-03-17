export interface SectionsMap<T> extends Record<SectionsEnum, T> {}

export enum SectionsEnum {
  ovochi = 'Овочі',
  kvity = 'Квіти',
  shkidnykyIKhvoroby = 'Шкідники і хвороби',
  dobryva = 'Добрива',
  inventar = 'Інвентар',
}
