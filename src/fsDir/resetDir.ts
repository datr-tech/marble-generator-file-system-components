import { createDir } from './createDir';
import { doesDirExist } from './doesDirExist';
import { removeDir } from './removeDir';

export const resetDir = (dirPath) => {
  if (doesDirExist(dirPath)) {
    removeDir(dirPath);
  }

  createDir(dirPath);

  return dirPath;
};
