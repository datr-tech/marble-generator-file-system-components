import { extensionTypescript } from '@app-marble-generator-file-system-components/config';
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
