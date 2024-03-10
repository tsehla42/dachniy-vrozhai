import { defineStore } from 'pinia';
import { mapTemplateToSerializedCategory } from '~/utils/SerializeNonPOJOs';
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import { SECTION_TRANSLATIONS } from '~/constants/localizations/SectionTranslations';
import { SVG_ICON_COMPONENTS_MAP } from '~/constants/SvgIconComponentsMap';
import { VEGETABLES_TEMPLATE } from '~/templates/Vegetables';
import { FLOWERS_TEMPLATE } from '~/templates/Flowers';
import { PESTS_AND_DISEASES_TEMPLATE } from '~/templates/PestsAndDiseases';
import { FERTILIZERS_TEMPLATE } from '~/templates/Fertilizers';
import { INVENTORY_TEMPLATE } from '~/templates/Inventory';

export const useSectionsStore = defineStore('sections', () => {
  const vegetables = mapTemplateToSerializedCategory(VEGETABLES_TEMPLATE);
  const flowers = mapTemplateToSerializedCategory(FLOWERS_TEMPLATE);
  const pestsAndDiseases = mapTemplateToSerializedCategory(PESTS_AND_DISEASES_TEMPLATE);
  const fertilizers = mapTemplateToSerializedCategory(FERTILIZERS_TEMPLATE);
  const inventory = mapTemplateToSerializedCategory(INVENTORY_TEMPLATE);

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
