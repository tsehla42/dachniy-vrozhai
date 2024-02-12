export interface SectionsMapInterface<T> {
  [SectionsEnum.vegetables]: T;
  [SectionsEnum.flowers]: T;
  [SectionsEnum.pestsAndDiseases]: T;
  [SectionsEnum.fertilizers]: T;
  [SectionsEnum.inventory]: T;
}

export enum SectionsEnum {
  vegetables = 'vegetables',
  flowers = 'flowers',
  pestsAndDiseases = 'pestsAndDiseases',
  fertilizers = 'fertilizers',
  inventory = 'inventory',
}
