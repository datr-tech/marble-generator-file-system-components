import fs from 'node:fs';
import { doesFileExist } from './doesFileExist';
import { removeFile } from './removeFile';

export const writeFileFromPath = (filePath, fileContents, shouldStringify = false) => {
  const fileContentsLocal = shouldStringify ? JSON.stringify(fileContents) : fileContents;

  if (doesFileExist(filePath)) {
    removeFile(filePath);
  }

  fs.writeFileSync(filePath, fileContentsLocal, 'utf8');

  return filePath;
};
