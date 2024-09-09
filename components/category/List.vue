<script setup lang="ts">
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { Category } from '~/utils/generator/classes/Category';
import type { Article } from '~/utils/generator/classes/Article';

const props = defineProps({
  sectionName: {
    type: String as PropType<keyof typeof SectionsEnum>,
    required: true,
  },
  categoryName: {
    type: String,
    default: '',
  },
});

const isArticleView = ref(!!props.categoryName);
const categoriesToDisplay = ref<Category[] | Article[]>([]);
const { sectionsMap } = useSectionsStore();

if (props.sectionName && sectionsMap) {
  const categoriesBySection = sectionsMap[props.sectionName] as Category[];
  const articleView = isArticleView.value;

  const articlesByCategory = articleView
    ? categoriesBySection.find((category) => category.categoryName === props.categoryName)?.articles ?? []
    : [];

  categoriesToDisplay.value = articleView ? articlesByCategory : categoriesBySection;
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
