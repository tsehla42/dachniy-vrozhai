<script setup lang="ts">
const route = useRoute();
const { data: doc } = await useAsyncData('page-data', () => queryContent(route.path).findOne());
</script>

<template>
  <div class="category-page container mx-auto px-4 sm:px-8 md:px-16">
    <div v-if="doc">
      <ContentRenderer :value="doc" />
      <div class="my-8">
        <CategoryList :section-name="doc.section || ''" :category-name="doc.category" />
      </div>
      <RandomArticle />
    </div>
    <NotFoundContent v-else />
  </div>
</template>

<style lang="scss">
.category-page {
  h1,
  h2 {
    font-family: $font-family-primary;
  }
}
</style>
