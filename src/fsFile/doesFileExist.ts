import { fsCommon } from '@app-lgfsc/fsCommon';

export const doesFileExist = (filePath, stat = undefined) => {
  const statLocal = typeof stat !== 'undefined' ? stat : fsCommon.getStat(filePath);

  return statLocal.isFile();
};
