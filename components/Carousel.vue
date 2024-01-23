<script setup lang="ts">
const getPicturePath = (pictureName: string) => {
  return `images/${pictureName}.png`;
};

const slides = [
  {
    to: '/test',
    heading: 'Вирощування полуниці',
    text: 'Поради та інструкції',
    picture: 'template-1200x600',
    meta: '1',
  },
  {
    to: '/test',
    heading: 'Вирощування 2',
    text: 'Поради 2',
    picture: 'template-1200x600',
    meta: '2',
  },
  {
    to: '/test',
    heading: 'Вирощування 3',
    text: 'Поради 3',
    picture: 'template-1200x600',
    meta: '3',
  },
  {
    to: '/test',
    heading: 'Вирощування 4',
    text: 'Поради 4',
    picture: 'template-1200x600',
    meta: '4',
  },
  {
    to: '/test',
    heading: 'Вирощування 5',
    text: 'Поради 5',
    picture: 'template-1200x600',
    meta: '5',
  },
  {
    to: '/test',
    heading: 'Вирощування 6',
    text: 'Поради 6',
    picture: 'template-1200x600',
    meta: '6',
  },
  {
    to: '/test',
    heading: 'Вирощування 7',
    text: 'Поради 7',
    picture: 'template-1200x600',
    meta: '7',
  },
  {
    to: '/test',
    heading: 'Вирощування 8',
    text: 'Поради 8',
    picture: 'template-1200x600',
    meta: '8',
  },
];
</script>

<template>
  <article class="carousel-container">
    <UCarousel :wrap-around="true">
      <USlide v-for="slide in slides" :key="slide.meta">
        <div class="carousel__item">
          <NuxtImg :src="getPicturePath(slide.picture)" :placeholder="[100, 50]" />
          <div class="bottom-text">
            <h3>{{ slide.heading }}</h3>
            <p>{{ slide.text }}</p>
          </div>
        </div>
      </USlide>

      <template #addons>
        <UNavigation />
        <UPagination />
      </template>
    </UCarousel>
  </article>
</template>

<style lang="scss">
.carousel__item {
  @include flex-center;
  position: relative;
  width: 100%;
  background-color: $orange-150;
  color: $white;
  font-size: 20px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
  }

  .bottom-text {
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;

    width: 100%;
    height: 120px;
    padding: 0 2em;

    background-color: rgba($black, 42%);

    h3 {
      font-size: 1.8em;
      -webkit-text-stroke: 2px $black;
    }

    p {
      font-family: $font-family-primary;
      font-size: 1.2em;
      -webkit-text-stroke: 1px $black;
      margin: 0;
    }
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}

.carousel__pagination {
  margin: 0;

  &-item {
    .carousel__pagination-button:after {
      background-color: rgba($green-900, 42%);
    }

    .carousel__pagination-button--active:after {
      background-color: $primary;
    }
  }
}
</style>
