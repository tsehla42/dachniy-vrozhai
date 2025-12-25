import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { SectionsMapEN } from '~/utils/types/SectionsTypes';
import type { Category } from '~/utils/generator/classes/Category';
import { transliterate } from '~/utils/Transliteration';

import dobryvaData from '~/constants/content/dobryva.json';
import inventarData from '~/constants/content/inventar.json';
import kvityData from '~/constants/content/kvity.json';
import ovochiData from '~/constants/content/ovochi.json';
import shkidnykyData from '~/constants/content/shkidnyky-i-khvoroby.json';

const sectionsDataMap: Record<string, any[]> = {
  dobryva: dobryvaData,
  inventar: inventarData,
  kvity: kvityData,
  ovochi: ovochiData,
  'shkidnyky-i-khvoroby': shkidnykyData,
};

export default function useSections() {
  const store = useSectionsStore();

  if (!store.sectionsMap) {
    const sectionCategoriesMap = Object.values(SectionsEnum).reduce(
      (acc, sectionNameUkr) => {
        const sectionName = transliterate(sectionNameUkr);
        const categories = sectionsDataMap[sectionName] || [];

        return {
          ...acc,
          [sectionName]: categories,
        };
      },
      {} as SectionsMapEN<Category[]>,
    );

    store.setSectionsMap(sectionCategoriesMap);
    store.setContentSections(sectionCategoriesMap);
  }

  return {
    sectionsMap: store.sectionsMap,
    contentSections: store.contentSections,
  };
}

