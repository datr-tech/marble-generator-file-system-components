import { extensionTypescript } from '@app-lgfsc/config';
import { deriveFilePath } from './deriveFilePath';
import { writeFileFromPath } from './writeFileFromPath';

export const writeFile = (
  dirPath,
  fileName,
  fileContents,
  shouldStringify = false,
  fileExtension = extensionTypescript,
) => {
  const filePath = deriveFilePath(fileName, dirPath, fileExtension);

  return writeFileFromPath(filePath, fileContents, shouldStringify);
};
