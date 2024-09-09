<script setup lang="ts">
const { pictureSrc } = defineProps({
  label: {
    type: String,
    required: true,
    default: '',
  },
  to: {
    type: String,
    required: true,
    default: '/',
  },
  pictureSrc: {
    type: String,
    required: true,
    default: '/',
  },
});

// console.log('card, delayed hydration', Date.now());
</script>

<template>
  <DelayHydration>
    <NuxtLink
      class="category group relative flex items-center justify-center cursor-pointer w-full active:scale-110"
      :to
    >
      <h3
        class="name absolute z-[2] p-1 bg-black bg-opacity-35 backdrop-blur-sm rounded-lg text-center text-lg text-orange-100 font-primary group-hover:text-orange-300 w-min max-w-48 overflow-hidden text-ellipsis transition-colors"
      >
        {{ label }}
      </h3>
      <div
        class="absolute w-full h-full max-w-40 sm:max-w-52 bg-gray-200 bg-opacity-[8%] z-[1] group-hover:opacity-0 transition-all"
      />
      <NuxtImg
        class="picture w-full max-w-40 sm:max-w-52 saturate-[70%] group-hover:saturate-100 transition-all"
        :src="pictureSrc"
        width="200"
        height="200"
        loading="lazy"
      />
    </NuxtLink>
  </DelayHydration>
</template>

<style scoped lang="scss">
.category {
  .picture {
    border-radius: 5px;
    border: 3px solid $black;
  }
}
</style>
