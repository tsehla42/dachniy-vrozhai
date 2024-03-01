import path from 'path';
import fs from 'fs';

export const fileChecker = (pictureName: string) => {
  const __filename = new URL('', import.meta.url).pathname;
  const __dirname = new URL('.', import.meta.url).pathname;
  const rootPath = process.cwd();
  const imagePath = path.resolve(rootPath, 'public', 'images', 'categories', pictureName);

  return new Promise((resolve) => {
    fs.access(imagePath, fs.constants.F_OK, (err) => {
      // console.log(`${imagePath} ${err ? 'does not exist' : 'exists'}`, { err });
      resolve(!err);
    });
  });
};
