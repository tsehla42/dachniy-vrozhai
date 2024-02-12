import { VEGETABLES } from '~/utils/constants/content/Vegetables';
import { FLOWERS } from '~/utils/constants/content/Flowers';
import { PESTS_AND_DISEASES } from '~/utils/constants/content/PestsAndDiseases';
import { FERTILIZERS } from '~/utils/constants/content/Fertilizers';
import { INVENTORY } from '~/utils/constants/content/Inventory';
import { SectionsEnum } from '~/utils/types/SectionsTypes';

export const SECTION_MAP = {
  [SectionsEnum.vegetables]: VEGETABLES,
  [SectionsEnum.flowers]: FLOWERS,
  [SectionsEnum.pestsAndDiseases]: PESTS_AND_DISEASES,
  [SectionsEnum.fertilizers]: FERTILIZERS,
  [SectionsEnum.inventory]: INVENTORY,
};
