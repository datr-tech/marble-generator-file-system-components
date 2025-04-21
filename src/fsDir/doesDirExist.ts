import { fsCommon } from '@app-marble-generator-file-system-components/fsCommon';

export const doesDirExist = (filePath, stat = undefined) => {
  const statLocal = typeof stat !== 'undefined' ? stat : fsCommon.getStat(filePath);

  return statLocal.isDirectory();
};
