import { fileChecker } from '~/utils/FileChecker';
import fs from 'fs';
import path from 'path';
import { useImagesStore } from '~/stores/imagesStore';

export default defineNuxtPlugin(async () => {
  function getAllImagesInDirectory(directoryPath: string, images: string[] = []) {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      const fileStats = fs.statSync(filePath);

      if (fileStats.isDirectory()) {
        // If it's a directory, recursively call the function
        getAllImagesInDirectory(filePath, images);
      } else {
        // If it's a file, check if it's an image file
        if (isImageFile(filePath)) {
          images.push(file);
        }
      }
    });

    return images;
  }

  function isImageFile(filePath: string) {
    const imageExtensions = ['.jpg', '.jpeg', '.png'];
    const extname = path.extname(filePath).toLowerCase();
    return imageExtensions.includes(extname);
  }

  const directoryPath = 'public/images';
  const imagesInDirectory = getAllImagesInDirectory(directoryPath);
  const { populateImages } = useImagesStore();
  populateImages(imagesInDirectory);
});
