import { defineStore } from 'pinia';

export const useImagesStore = defineStore('imagesStore', () => {
  const images = ref<string[]>([]);

  function populateImages(sourceImagesInfo: string[]) {
    sourceImagesInfo.forEach((image) => {
      images.value.push(image);
    });
  }

  return { images, populateImages };
});
