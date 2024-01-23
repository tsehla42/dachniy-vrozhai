<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
</script>

<template>
  <div class="carousel-container">
    <Carousel>
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <NuxtImg src="images/template-1200x600.png" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
