import { fsCommon } from '@app-mgfsc/fsCommon';

export const doesFileExist = (filePath, stat = undefined) => {
  const statLocal = typeof stat !== 'undefined' ? stat : fsCommon.getStat(filePath);

  return statLocal.isFile();
};
