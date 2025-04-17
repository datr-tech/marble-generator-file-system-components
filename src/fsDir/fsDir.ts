import { createDir } from './createDir';
import { doesDirExist } from './doesDirExist';
import { removeDir } from './removeDir';
import { resetDir } from './resetDir';

export const fsDir = {
  create: createDir,
  exists: doesDirExist,
  remove: removeDir,
  reset: resetDir,
};
