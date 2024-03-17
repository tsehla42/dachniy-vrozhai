import { defineStore } from 'pinia';
import { mapTemplateToSerializedCategory } from '~/utils/SerializeNonPOJOs';
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import { SECTION_TRANSLATIONS } from '~/constants/localizations/SectionTranslations';
import { SVG_ICON_COMPONENTS_MAP } from '~/constants/SvgIconComponentsMap';
import { OVOCHI_TEMPLATE } from '~/templates/Ovochi';
import { KVITY_TEMPLATE } from '~/templates/Kvity';
import { SHKIDNYKY_I_KHVOROBY_TEMPLATE } from '~/templates/ShkidnykyIKhvoroby';
import { DOBRYVA_TEMPLATE } from '~/templates/Dobryva';
import { INVENTAR_TEMPLATE } from '~/templates/Inventar';

export const useSectionsStore = defineStore('sections', () => {
  const vegetables = mapTemplateToSerializedCategory(OVOCHI_TEMPLATE);
  const flowers = mapTemplateToSerializedCategory(KVITY_TEMPLATE);
  const pestsAndDiseases = mapTemplateToSerializedCategory(SHKIDNYKY_I_KHVOROBY_TEMPLATE);
  const fertilizers = mapTemplateToSerializedCategory(DOBRYVA_TEMPLATE);
  const inventory = mapTemplateToSerializedCategory(INVENTAR_TEMPLATE);

  const sectionsMap = reactive({
    [SectionsEnum.ovochi]: vegetables,
    [SectionsEnum.kvity]: flowers,
    [SectionsEnum.shkidnykyIKhvoroby]: pestsAndDiseases,
    [SectionsEnum.dobryva]: fertilizers,
    [SectionsEnum.inventar]: inventory,
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
