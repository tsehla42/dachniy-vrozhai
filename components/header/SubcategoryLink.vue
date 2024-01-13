<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="subcategory-link">
    {{ item.label }}
  </div>
</template>

<style scoped lang="scss">
.subcategory-link {
  background-color: #3f4b07;
}
</style>
