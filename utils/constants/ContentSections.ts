import { SECTION_TRANSLATIONS } from '~/utils/constants/localizations/SectionTranslations';
import { SectionsEnum, type SectionsMapInterface } from '~/utils/types/SectionsTypes';
import { SVG_ICON_COMPONENTS_MAP } from '~/utils/constants/SvgIconComponentsMap';
import { SECTION_MAP } from '~/utils/constants/SectionsMap';

/**
 * Секції що відображаються в хедері, та акордеоні
 * */
export const CONTENT_SECTIONS = Object.values(SectionsEnum).map((value: SectionsEnum) => {
  return {
    sectionName: value,
    sectionLabel: SECTION_TRANSLATIONS[value],
    svgIcon: SVG_ICON_COMPONENTS_MAP[value],
    categories: SECTION_MAP[value],
  };
});
