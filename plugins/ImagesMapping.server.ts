import { useImagesStore } from '~/stores/imagesStore';
import { getAllImagesOnServer } from '~/utils/Images';

export default defineNuxtPlugin(async () => {
  const imagesInDirectory = getAllImagesOnServer();
  const { populateImages } = useImagesStore();
  populateImages(imagesInDirectory);
});
