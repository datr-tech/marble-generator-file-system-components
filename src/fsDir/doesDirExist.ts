import { fsCommon } from '@app/fsCommon';

export const doesDirExist = (filePath, stat = undefined) => {
  const statLocal = typeof stat !== 'undefined' ? stat : fsCommon.getStat(filePath);

  return statLocal.isDirectory();
};
