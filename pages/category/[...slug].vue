<script setup lang="ts">
const documentProperties = ref(null);
const getDoc = (doc: any) => {
  documentProperties.value = doc;
};
</script>

<template>
  <div class="category-page container mx-auto px-4 sm:px-8 md:px-16">
    <ContentDoc>
      <template v-slot="{ doc }">
        {{ getDoc(doc) }}
        <ContentRenderer :value="doc" />
        <div class="my-8">
          <CategoryList :section-name="doc.section || ''" :category-name="doc.category" />
        </div>
      </template>

      <template #not-found>
        <NotFoundContent />
      </template>
    </ContentDoc>

    <RandomArticle />
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
