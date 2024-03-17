<script setup lang="ts">
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { Category } from '~/utils/generator/classes/Category';

const { sectionName, categoryName } = defineProps({
  sectionName: {
    type: String as PropType<SectionsEnum>,
    required: true,
  },
  categoryName: {
    type: String,
    default: '',
  },
});

const categoriesToDisplay = ref<Category[]>();

if (sectionName) {
  const { sectionsMap } = useSectionsStore();
  const categoriesBySection = sectionsMap[sectionName] as Category[];
  const isSubcategoryView = !!categoryName;

  const subcategoriesByCategory = isSubcategoryView
    ? categoriesBySection.find((category) => category.categoryName === categoryName)?.subcategories
    : [];

  categoriesToDisplay.value = isSubcategoryView ? subcategoriesByCategory : categoriesBySection;
}
</script>

<template>
  <div
    v-if="sectionName"
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-3 sm:gap-5"
  >
    <CategoryCard
      v-for="c in categoriesToDisplay"
      :key="c.label"
      :label="c.label"
      :to="c.to"
      :picture-src="c.pictureSrc"
    />
  </div>
</template>

<style scoped lang="scss"></style>
