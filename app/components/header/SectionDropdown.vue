<script setup lang="ts">
const { section } = defineProps({
  section: {
    type: Object,
    required: true,
  },
});

const sectionCategories = computed(() => {
  if (!section.categories || !Array.isArray(section.categories)) {
    console.warn('No categories for section:', section.sectionName, section);
    return [[]];
  }
  
  if (section.categories.length === 0) {
    console.warn('Empty categories array for section:', section.sectionName);
    return [[]];
  }
  
  const isInventory = section.sectionName === 'inventar';
  const categoriesWithChildren = section.categories.map(category => {
    const item: any = {
      label: category.label,
      to: category.to,
    };
    
    // Add articles as children for nested dropdown (if not inventory and has articles)
    if (!isInventory && category.articles && category.articles.length > 0) {
      item.children = [category.articles.map((article: any) => ({
        label: article.label,
        to: article.to,
      }))];
    }
    
    return item;
  });
  
  console.log('Section categories for', section.sectionName, ':', categoriesWithChildren);
  return [categoriesWithChildren];
});

const dropdownUi = {
  content: 'category-dropdown-container',
  viewport: 'category-dropdown-viewport',
  group: 'category-dropdown-group',
  item: 'category-link-wrapper',
  ring: '',
};

const triggerUi = {
  strategy: 'override',
  base: 'activator-first-level',
  rounded: '',
  inline: '',
  color: {
    black: 'color',
  },
  variant: {
    solid: '',
    link: '',
  },
  padding: {
    sm: '',
  },
};
</script>

<template>
  <div class="header-section">
    <DvDropdown :items="sectionCategories" :ui="dropdownUi">
      <DvButton class="activator-first-level" :ui="triggerUi" :label="section.sectionLabel" :is-link="false" />

      <!-- Items with children will automatically render nested dropdown -->
    </DvDropdown>
  </div>
</template>

<style lang="scss">
.header-section {
  .activator-first-level {
    padding: 10px 18px 4px;
    background: $green-400;
    border: 3px solid $green-800;
    border-top: none;
    border-radius: 0 0 18px 18px;
    outline: none;
    transition: all 0.3s;

    &:hover {
      padding: 12px 18px 6px;
      background: $orange-300;
      border: 3px solid $orange-900;
      border-top: none;
    }

    span {
      font-family: $font-family-primary;
      font-size: clamp(1.25rem, 1rem + 0.4vw, 1.5rem);
    }

    &.active {
      padding: 12px 18px;
      background: $orange-400;
      border: 3px solid $orange-focus;
    }
  }

}

.category-dropdown-container {
  width: fit-content !important;
  padding-top: 2px !important;
  
  // Remove all shadows (ring and glow)
  --tw-ring-shadow: 0 0 #0000 !important;
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
  box-shadow: none !important;

  .category-dropdown-viewport {
    @include dropdown-style;
  }

  .category-link-wrapper {
    font-family: $font-family-primary !important;
    font-size: 20px;
    @include section-category-dropdown-link;
  }
}

// Nested article dropdown styles
[data-slot="content"][class*="article-dropdown"],
[data-slot="content"].category-dropdown-container [data-slot="content"] {
  width: max-content !important;
  margin-top: -5px !important;
  
  // Remove all shadows (ring and glow)
  --tw-ring-shadow: 0 0 #0000 !important;
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
  box-shadow: none !important;
  
  [data-slot="viewport"] {
    @include dropdown-style;
  }
  
  [data-slot="item"] {
    display: block !important;
    padding: 6px 18px !important;
    font-family: $font-family-primary !important;
    font-size: 16px !important;
    @include section-category-dropdown-link;
  }
}
</style>
