<script setup lang="ts">
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import { SECTION_MAP } from '~/utils/constants/SectionsMap';

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

const categoriesBySection = SECTION_MAP[sectionName];
const isSubcategoryView = computed(() => !!categoryName);

const subcategoriesByCategory = computed(() => {
  return isSubcategoryView.value
    ? categoriesBySection.find((category) => category.categoryName === categoryName)?.subcategories
    : [];
});

const categoriesToDisplay = computed(() =>
  isSubcategoryView.value ? subcategoriesByCategory.value : categoriesBySection,
);
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-3 sm:gap-5">
    <CategoryCard
      v-for="c in categoriesToDisplay"
      :key="c.label"
      :label="c.label"
      :to="c.to"
      :picture-name="c.picture"
    />
  </div>
</template>

<style scoped lang="scss"></style>
