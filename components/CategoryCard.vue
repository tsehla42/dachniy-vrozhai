<script setup lang="ts">
const props = defineProps({
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
  picturePath: {
    type: String,
    required: true,
    default: '/',
  },
});
</script>

<template>
  <NuxtLink
    class="category group relative flex items-center justify-center cursor-pointer w-full active:scale-110"
    :to="to"
  >
    <h3
      class="name absolute z-[2] text-center text-orange-100 p-1 bg-black bg-opacity-35 backdrop-blur-md rounded-lg group-hover:text-orange-300 max-w-52 overflow-hidden text-ellipsis"
    >
      {{ label }}
    </h3>
    <div
      class="absolute w-full h-full max-w-40 sm:max-w-52 bg-gray-200 bg-opacity-15 z-[1] group-hover:opacity-0 transition-all"
    />
    <NuxtImg
      class="picture w-full max-w-40 sm:max-w-52 saturate-[80%] group-hover:saturate-100 transition-all"
      :src="picturePath"
      :placeholder="[20, 20]"
    />
  </NuxtLink>
</template>

<style scoped lang="scss">
.category {
  //.name {
  //  -webkit-text-stroke: 4px $white;
  //}

  .picture {
    border-radius: 5px;
    border: 3px solid $black;
  }
}
</style>
