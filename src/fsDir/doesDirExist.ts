import { fsCommon } from '@app-mgfsc/fsCommon';

export const doesDirExist = (filePath, stat = undefined) => {
  const statLocal = typeof stat !== 'undefined' ? stat : fsCommon.getStat(filePath);

  return statLocal.isDirectory();
};
