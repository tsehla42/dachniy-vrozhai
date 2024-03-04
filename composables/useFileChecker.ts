import { fileChecker } from '~/utils/FileChecker';

export function useFileChecker() {
  const checkFile = async (pictureName: string) => {
    if (process.server) {
      await fileChecker(pictureName);
    }
  };

  return { checkFile };
}
