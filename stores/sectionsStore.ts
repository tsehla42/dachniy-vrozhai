import { defineStore } from 'pinia';
import type { ContentSection, SectionsMap } from '~/utils/types/SectionsTypes';
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { Category } from '~/utils/generator/classes/Category';
import type { Entries } from 'type-fest';

export const useSectionsStore = defineStore('sections', () => {
  const sectionsMap = ref<SectionsMap<Category[]> | null>(null);

  const setSectionsMap = (sectionCategoriesMap: SectionsMap<Category[]>) => {
    sectionsMap.value = sectionCategoriesMap;
  };

  const contentSections = ref<ContentSection[]>([]);

  const setContentSections = (sectionsMap: SectionsMap<Category[]>) => {
    contentSections.value = (Object.entries(SectionsEnum) as Entries<typeof SectionsEnum>).map(
      ([sectionName, sectionLabel]) => {
        return {
          sectionName,
          sectionLabel,
          categories: sectionsMap[sectionName] as Category[],
        };
      },
    );
  };

  return { sectionsMap, contentSections, setSectionsMap, setContentSections };
});
