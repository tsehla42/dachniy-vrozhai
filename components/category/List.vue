<script setup lang="ts">
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import { SECTION_MAP } from '~/utils/constants/SectionsMap';

const { sectionName, ...props } = defineProps({
  sectionName: {
    type: String as PropType<SectionsEnum>,
    required: true,
  },
});

const sectionMap = SECTION_MAP;

const categories = computed(() => sectionMap[sectionName]);
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-3 sm:gap-5">
    <CategoryCard
      v-for="c in categories"
      :key="c.category.label"
      :label="c.category.label"
      :to="c.category.to"
      :picture-name="c.category.picture"
    />
  </div>
</template>

<style scoped lang="scss"></style>
