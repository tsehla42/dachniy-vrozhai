// import fs from 'fs';
// import path from 'path';

// const __dirname = new URL('.', import.meta.url).pathname.slice(3, -1);
// console.log(new URL('.', import.meta.url).pathname.slice(3, -1));
// const imagePathOnServer = path.join(__dirname, 'public', 'images', 'categories', `капустяні.png`);
// fs.access(imagePathOnServer, fs.constants.F_OK, (err) => {
//   console.log(imagePathOnServer, err);
// })

/*
*
const checkImageExists = async (pictureName: string) => {
  const imagePathOnServer = path.join(path.resolve('./'), 'public', 'images', 'categories', `${pictureName}.png`);
  console.log(imagePathOnServer);
  return new Promise((resolve) => {
    fs.access(imagePathOnServer, fs.constants.F_OK, (err) => {
      resolve(!err);
    });
  });
};
const getImageUrl = async (basePath: string, pictureName: string, fallbackPictureSrc: string) => {
  const imageExists = await checkImageExists(pictureName);
  const pictureSrc = imageExists ? `${basePath}/${pictureName}.png` : fallbackPictureSrc;
  console.log(pictureName, imageExists, pictureSrc);
  return pictureSrc;
};
const basePath = '/images/categories';
const fallbackPictureSrc = `${basePath}/fallback-200x200.png`;
const extension = 'png';

// const pictureSrc = ref('');
// if (process.server) {
//   pictureSrc.value = await getImageUrl(basePath, pictureName, fallbackPictureSrc);
// }
// console.log(pictureSrc);

const src = `${basePath}/${pictureName}.${extension}`;

const pictureSrc = computed(() => {
  try {
    return new URL(`./public${basePath}/${pictureName}.png`, import.meta.url);
  } catch (e) {
    return new URL(`./public${fallbackPictureSrc}`, import.meta.url);
  }
});

console.log(pictureSrc);*/
