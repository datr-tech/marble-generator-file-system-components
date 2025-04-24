import { extensionTypescript } from '@app-lgfsc/config';
import { deriveFilePath } from './deriveFilePath';

export const deriveFilePathTypescript = (fileName, dirPath) =>
  deriveFilePath(fileName, dirPath, extensionTypescript);
