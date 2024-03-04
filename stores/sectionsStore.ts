import { defineStore } from 'pinia';
import { mapTemplateToSerializedCategory } from '~/utils/SerializeNonPOJOs';
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import { SECTION_TRANSLATIONS } from '~/utils/constants/localizations/SectionTranslations';
import { SVG_ICON_COMPONENTS_MAP } from '~/utils/constants/SvgIconComponentsMap';
import { VEGETABLES } from '~/utils/constants/content/Vegetables';
import { FLOWERS } from '~/utils/constants/content/Flowers';
import { PESTS_AND_DISEASES } from '~/utils/constants/content/PestsAndDiseases';
import { FERTILIZERS } from '~/utils/constants/content/Fertilizers';
import { INVENTORY } from '~/utils/constants/content/Inventory';

export const useSectionsStore = defineStore('sections', () => {
  const vegetables = mapTemplateToSerializedCategory(VEGETABLES);
  const flowers = mapTemplateToSerializedCategory(FLOWERS);
  const pestsAndDiseases = mapTemplateToSerializedCategory(PESTS_AND_DISEASES);
  const fertilizers = mapTemplateToSerializedCategory(FERTILIZERS);
  const inventory = mapTemplateToSerializedCategory(INVENTORY);

  const sectionsMap = reactive({
    [SectionsEnum.vegetables]: vegetables,
    [SectionsEnum.flowers]: flowers,
    [SectionsEnum.pestsAndDiseases]: pestsAndDiseases,
    [SectionsEnum.fertilizers]: fertilizers,
    [SectionsEnum.inventory]: inventory,
  });

  const contentSections = Object.values(SectionsEnum).map((value: SectionsEnum) => {
    return {
      sectionName: value,
      sectionLabel: SECTION_TRANSLATIONS[value],
      svgIcon: SVG_ICON_COMPONENTS_MAP[value],
      categories: sectionsMap[value],
    };
  });

  return { sectionsMap, contentSections };
});
