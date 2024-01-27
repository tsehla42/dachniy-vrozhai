import { VEGETABLES } from './content/Vegetables';
import { FLOWERS } from './content/Flowers';
import { PESTS_AND_DISEASES } from './content/PestsAndDiseases';
import { FERTILIZERS } from './content/Fertilizers';
import { INVENTORY } from './content/Inventory';

export const CONTENT_SECTIONS = [
  {
    sectionName: 'Овочі',
    svgIcon: '',
    categories: [...VEGETABLES],
  },
  {
    sectionName: 'Квіти',
    svgIcon: '',
    categories: [...FLOWERS],
  },
  {
    sectionName: 'Хвороби і шкідники',
    svgIcon: '',
    categories: [...PESTS_AND_DISEASES],
  },
  {
    sectionName: 'Добрива',
    svgIcon: '',
    categories: [...FERTILIZERS],
  },
  {
    sectionName: 'Дачниий інвентар',
    svgIcon: '',
    categories: [...INVENTORY],
  },
];
