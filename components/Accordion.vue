<script setup lang="ts">
import type { PropType } from 'vue';
import { SectionsEnum } from '~/utils/types/SectionsTypes';
import { SVG_ICON_COMPONENTS_MAP } from '~/constants/SvgIconComponentsMap';

const { activeSections } = defineProps({
  activeSections: {
    type: Array as PropType<Array<keyof typeof SectionsEnum>>,
    default: () => [],
  },
});

const { contentSections } = useSectionsStore();
const sectionsToDisplay = contentSections.filter(
  (section) => activeSections.includes(section.sectionName) || !activeSections.length,
);

const items = sectionsToDisplay.map(({ sectionName, sectionLabel }, index) => {
  return {
    label: sectionLabel,
    sectionName: sectionName,
    svgIconComponent: SVG_ICON_COMPONENTS_MAP[sectionName],
    defaultOpen: index === 0,
  };
});

const accordionUi = {
  strategy: 'override',
  wrapper: 'flex flex-col w-full gap-y-2',
  item: {
    base: '',
    color: 'text-gray-500',
    padding: 'p-3',
    icon: 'ms-auto transform transition-transform duration-200',
  },
  default: {
    class: 'mb-1.5 w-full font-primary text-black bg-green-500 ',
  },
};

const activatorBtnUi = {
  strategy: 'override',
  padding: { sm: 'px-3 py-2' },
  rounded: 'rounded-2xl',
  color: {
    gray: {
      solid: 'text-black bg-green-400 hover:bg-green-500 group',
    },
  },
  variant: {
    solid: '',
  },
};
</script>

<template>
  <div>
    <DelayHydration>
      <UAccordion :items="items" :ui="accordionUi" size="xl" multiple>
        <template #default="{ item, open }">
          <UButton color="gray" variant="solid" block :ui="activatorBtnUi">
            <template #leading>
              <div
                class="w-11 h-11 p-1 rounded-full bg-primary-500 group-hover:bg-green-400 flex items-center justify-center -my-1 transform transition-transform duration-200"
              >
                <component :is="item.svgIconComponent" :class="[open && '-mb-1.5 animate-bounce']" />
              </div>
            </template>

            <span class="truncate font-primary text-2xl leading-none">{{ item.label }}</span>

            <template #trailing>
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="w-8 h-8 ms-auto scale-[1.2] transform transition-transform duration-200"
                :class="[open && 'rotate-180']"
              />
            </template>
          </UButton>
        </template>

        <template #item="{ item }">
          <CategoryList :section-name="item.sectionName" />
        </template>
      </UAccordion>
    </DelayHydration>
  </div>
</template>

<style scoped lang="scss"></style>
