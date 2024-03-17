import path from 'path';
import fs from 'fs';

export const fileChecker = (pictureName: string) => {
  const rootPath = process.cwd();
  const imagePath = path.resolve(rootPath, 'public', 'images', 'categories', pictureName);

  return new Promise((resolve) => {
    fs.access(imagePath, fs.constants.F_OK, (err) => {
      // console.log(`${imagePath} ${err ? 'does not exist' : 'exists'}`, { err });
      resolve(!err);
    });
  });
};
